// ==========================================
// Kanban Pessoal - app.js
// ==========================================
// Este arquivo gerencia a lógica da aplicação:
// - Estrutura de dados
// - Manipulação do DOM
// - Persistência no localStorage
// - Funcionalidades de backup
// Separação de responsabilidades: funções específicas para cada operação.

// ==========================================
// Estrutura de Dados
// ==========================================
let tasks = {
    todo: [],    // Array de objetos {id: number, text: string}
    doing: [],   // Tarefas em andamento
    done: []     // Tarefas concluídas
};

// ==========================================
// Funções de Persistência
// ==========================================

/**
 * Carrega os dados do localStorage e renderiza a interface.
 * Executada ao inicializar a aplicação.
 */
function loadTasks() {
    const saved = localStorage.getItem('kanbanTasks');
    if (saved) {
        tasks = JSON.parse(saved);
    }
    render();
}

/**
 * Salva os dados no localStorage.
 * Chamada automaticamente após qualquer alteração.
 */
function saveTasks() {
    localStorage.setItem('kanbanTasks', JSON.stringify(tasks));
}

// ==========================================
// Funções de Renderização (Manipulação DOM)
// ==========================================

/**
 * Renderiza as tarefas nas colunas.
 * Limpa as listas e recria os elementos <li> para cada tarefa.
 */
function render() {
    // Array das colunas para loop simples
    const columns = ['todo', 'doing', 'done'];
    columns.forEach(col => {
        const ul = document.getElementById(col);
        ul.innerHTML = ''; // Limpa a lista

        tasks[col].forEach(task => {
            const li = createTaskElement(task);
            ul.appendChild(li);
        });
    });
}

/**
 * Cria um elemento <li> para uma tarefa, incluindo botões de ação.
 * @param {Object} task - {id: number, text: string}
 * @returns {HTMLElement} Elemento <li> pronto para append.
 */
function createTaskElement(task) {
    const li = document.createElement('li');
    li.className = 'task';
    li.id = `task-${task.id}`;

    // Botão mover esquerda (←) - só visível se aplicável
    const btnLeft = document.createElement('button');
    btnLeft.textContent = '←';
    btnLeft.className = 'move-left';
    btnLeft.onclick = () => moveTask(task.id, 'left');
    // Ocultar se na primeira coluna
    if (task.column === 'todo') { // Assumimos coluna atual via lógica de move
        btnLeft.style.display = 'none';
    }
    li.appendChild(btnLeft);

    // Texto da tarefa
    const textSpan = document.createElement('span');
    textSpan.textContent = task.text;
    li.appendChild(textSpan);

    // Botão mover direita (→) - só visível se aplicável
    const btnRight = document.createElement('button');
    btnRight.textContent = '→';
    btnRight.className = 'move-right';
    btnRight.onclick = () => moveTask(task.id, 'right');
    // Ocultar se na última coluna
    if (task.column === 'done') {
        btnRight.style.display = 'none';
    }
    li.appendChild(btnRight);

    // Botão remover (X)
    const btnRemove = document.createElement('button');
    btnRemove.textContent = 'X';
    btnRemove.onclick = () => removeTask(task.id);
    li.appendChild(btnRemove);

    return li;
}

// ==========================================
// Funções de Manipulação de Tarefas
// ==========================================

/**
 * Adiciona uma nova tarefa à coluna "A Fazer".
 * Gera ID único com timestamp.
 */
function addTask() {
    const input = document.getElementById('newTask');
    const text = input.value.trim();
    if (!text) return; // Ignora se vazio

    const id = Date.now(); // ID simples baseado em timestamp
    tasks.todo.push({ id, text });
    input.value = ''; // Limpa input
    saveTasks();
    render();
}

/**
 * Move uma tarefa para a esquerda ou direita.
 * @param {number} id - ID da tarefa
 * @param {string} direction - 'left' ou 'right'
 */
function moveTask(id, direction) {
    let currentCol, task, newCol;

    // Encontra a tarefa e remove da coluna atual
    for (let col in tasks) {
        const idx = tasks[col].findIndex(t => t.id === id);
        if (idx !== -1) {
            currentCol = col;
            task = tasks[col].splice(idx, 1)[0];
            break;
        }
    }

    if (!task) return; // Tarefa não encontrada

    // Determina nova coluna baseada na direção
    if (direction === 'left') {
        if (currentCol === 'doing') newCol = 'todo';
        else if (currentCol === 'done') newCol = 'doing';
        // Ignora se já em 'todo'
    } else { // right
        if (currentCol === 'todo') newCol = 'doing';
        else if (currentCol === 'doing') newCol = 'done';
        // Ignora se já em 'done'
    }

    if (newCol) {
        task.column = newCol; // Armazena coluna atual para render (opcional, mas útil)
        tasks[newCol].push(task);
        saveTasks();
        render();
    }
}

/**
 * Remove uma tarefa de qualquer coluna.
 * @param {number} id - ID da tarefa
 */
function removeTask(id) {
    for (let col in tasks) {
        const idx = tasks[col].findIndex(t => t.id === id);
        if (idx !== -1) {
            tasks[col].splice(idx, 1);
            saveTasks();
            render();
            return;
        }
    }
}

// ==========================================
// Funções de Backup
// ==========================================

/**
 * Exporta os dados como arquivo JSON para download.
 */
function exportBackup() {
    const dataStr = JSON.stringify(tasks, null, 2); // Formato legível
    const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
    const link = document.createElement('a');
    link.href = dataUri;
    link.download = `kanban-backup-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

/**
 * Importa dados de um arquivo JSON.
 * @param {Event} event - Evento de change do input file
 */
function importBackup(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const imported = JSON.parse(e.target.result);
            // Valida estrutura básica
            if (imported.todo && imported.doing && imported.done) {
                tasks = imported;
                saveTasks();
                render();
                alert('Backup importado com sucesso!');
            } else {
                throw new Error('Estrutura inválida');
            }
        } catch (err) {
            alert('Erro ao importar: ' + err.message);
        }
    };
    reader.readAsText(file);
    event.target.value = ''; // Limpa input para reutilização
}

// ==========================================
// Inicialização
// ==========================================
// Carrega dados e renderiza ao carregar a página
document.addEventListener('DOMContentLoaded', loadTasks);