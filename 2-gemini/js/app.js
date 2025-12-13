/**
 * ESTADO GLOBAL DA APLICAÇÃO
 * ---------------------------
 * Aqui armazenamos os dados em memória.
 * A estrutura segue o modelo JSON solicitado.
 */
let kanbanData = {
    todo: [],
    doing: [],
    done: []
};

// Chave utilizada no localStorage
const STORAGE_KEY = 'meu_kanban_pessoal_v1';

/**
 * INICIALIZAÇÃO
 * Carrega os dados ao abrir a página
 */
document.addEventListener('DOMContentLoaded', () => {
    loadData();
    renderBoard();
    setupBackupEvents();
});

/**
 * 1. GERENCIAMENTO DE DADOS (PERSISTÊNCIA)
 * ----------------------------------------
 */

function saveData() {
    // Converte o objeto JS para String JSON
    localStorage.setItem(STORAGE_KEY, JSON.stringify(kanbanData));
}

function loadData() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
        // Converte String JSON de volta para Objeto JS
        kanbanData = JSON.parse(stored);
    } 
    // Se não houver dados, mantém o objeto vazio inicial
}

/**
 * 2. LÓGICA DE RENDERIZAÇÃO (DOM)
 * -------------------------------
 * Limpa as colunas e recria os cartões baseados no estado (kanbanData).
 */
function renderBoard() {
    // Array com os IDs das colunas
    const columns = ['todo', 'doing', 'done'];

    columns.forEach(col => {
        const listElement = document.getElementById(`list-${col}`);
        const countElement = document.getElementById(`count-${col}`);
        
        // Limpa o HTML atual da coluna
        listElement.innerHTML = '';
        
        // Atualiza o contador
        countElement.innerText = kanbanData[col].length;

        // Cria os elementos para cada tarefa
        kanbanData[col].forEach((task, index) => {
            const card = document.createElement('div');
            card.className = 'card';
            card.draggable = true; // Habilita o arrastar
            
            // Atributos para identificar o card no Drag & Drop
            card.setAttribute('data-id', index);
            card.setAttribute('data-column', col);
            
            // Eventos de arrastar
            card.addEventListener('dragstart', dragStart);
            card.addEventListener('dragend', dragEnd);

            card.innerHTML = `
                <div class="card-content">${task}</div>
                <button class="btn-delete" onclick="removeTask('${col}', ${index})" title="Remover">🗑️</button>
            `;
            
            listElement.appendChild(card);
        });
    });
}

/**
 * 3. AÇÕES DO USUÁRIO
 * -------------------
 */

function addTask(column) {
    const input = document.getElementById(`input-${column}`);
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Por favor, digite uma tarefa!");
        return;
    }

    // Adiciona ao array de dados (Estado)
    kanbanData[column].push(taskText);
    
    // Limpa o input
    input.value = '';

    // Salva e Redesenha
    saveData();
    renderBoard();
}

function removeTask(column, index) {
    if(confirm("Deseja realmente excluir esta tarefa?")) {
        // Remove do array (splice: a partir do index, remove 1 item)
        kanbanData[column].splice(index, 1);
        saveData();
        renderBoard();
    }
}

/**
 * 4. DRAG AND DROP (ARRASTAR E SOLTAR)
 * ------------------------------------
 */

let draggedItem = null; // Armazena temporariamente o item sendo arrastado

function dragStart(event) {
    draggedItem = this; // 'this' é o elemento card
    this.classList.add('dragging');
    // Define os dados a serem transferidos (necessário para Firefox)
    event.dataTransfer.effectAllowed = 'move';
}

function dragEnd(event) {
    this.classList.remove('dragging');
    draggedItem = null;
}

// Permite que uma área receba o item (por padrão, elementos não aceitam drop)
function allowDrop(event) {
    event.preventDefault(); 
}

// Quando o item é solto na coluna
function drop(event) {
    event.preventDefault();
    
    // Identifica a coluna alvo onde o item foi solto (busca o section mais próximo)
    const targetColumnElement = event.target.closest('.column');
    if (!targetColumnElement) return;

    // Pega o ID da coluna de destino (ex: "col-doing")
    // O ID no HTML é "col-todo", mas nossa chave no JSON é "todo". Cortamos o "col-"
    const targetColumnId = targetColumnElement.id.replace('col-', '');

    // Recupera dados do item arrastado
    const sourceColumnId = draggedItem.getAttribute('data-column');
    const sourceIndex = parseInt(draggedItem.getAttribute('data-id'));

    // Se soltou na mesma coluna, não faz nada (para simplificar)
    if (sourceColumnId === targetColumnId) return;

    // MOVIMENTAÇÃO NOS DADOS (Lógica Real)
    // 1. Pega o texto da tarefa
    const taskContent = kanbanData[sourceColumnId][sourceIndex];
    
    // 2. Remove da coluna de origem
    kanbanData[sourceColumnId].splice(sourceIndex, 1);
    
    // 3. Adiciona na coluna de destino
    kanbanData[targetColumnId].push(taskContent);

    // Salva e Redesenha tudo
    saveData();
    renderBoard();
}

/**
 * 5. BACKUP E RESTAURAÇÃO
 * -----------------------
 */

function setupBackupEvents() {
    // Exportar
    document.getElementById('btnExport').addEventListener('click', () => {
        const dataStr = JSON.stringify(kanbanData, null, 2); // Identação bonita
        const blob = new Blob([dataStr], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = `kanban_backup_${new Date().toISOString().slice(0,10)}.json`;
        a.click();
        
        // Libera memória
        URL.revokeObjectURL(url);
    });

    // Gatilho do Importar (clica no botão visível -> clica no input invisível)
    document.getElementById('btnImport').addEventListener('click', () => {
        document.getElementById('fileInput').click();
    });

    // Ler o arquivo selecionado
    document.getElementById('fileInput').addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        
        reader.onload = function(e) {
            try {
                const json = JSON.parse(e.target.result);
                
                // Validação básica da estrutura
                if (!json.todo || !json.doing || !json.done) {
                    throw new Error("Formato de arquivo inválido!");
                }

                if(confirm("Isso substituirá suas tarefas atuais. Continuar?")) {
                    kanbanData = json;
                    saveData();
                    renderBoard();
                    alert("Backup restaurado com sucesso!");
                }
            } catch (err) {
                alert("Erro ao ler arquivo: " + err.message);
            }
        };

        reader.readAsText(file);
        // Reseta o input para permitir importar o mesmo arquivo novamente se necessário
        event.target.value = ''; 
    });
}