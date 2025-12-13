# 📋 Kanban Pessoal

> Sistema de gerenciamento de tarefas pessoal sem backend, utilizando apenas tecnologias front-end.

![Versão](https://img.shields.io/badge/versão-1.0.0-blue)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

---

## 📖 Sobre o Projeto

Este é um **Kanban Pessoal** desenvolvido com foco didático para demonstrar:

- ✅ Organização de código front-end
- ✅ Manipulação de DOM
- ✅ Persistência local de dados
- ✅ Fluxo real de desenvolvimento
- ✅ Publicação de projeto estático

**O projeto funciona 100% offline**, sem necessidade de servidor ou internet após o carregamento inicial.

---

## 🎯 O Que Este Projeto FAZ

### ✔️ Funcionalidades Implementadas

- **Adicionar Tarefas:** Crie novas tarefas rapidamente
- **Organizar em 3 Colunas:**
  - 🔴 **A Fazer** - Tarefas pendentes
  - 🟡 **Em Andamento** - Tarefas em execução
  - 🟢 **Concluído** - Tarefas finalizadas
- **Mover Tarefas:** Avance ou retroceda tarefas entre colunas
- **Remover Tarefas:** Exclua tarefas com confirmação de segurança
- **Contadores em Tempo Real:** Veja quantas tarefas há em cada coluna
- **Persistência Automática:** Salva automaticamente no navegador
- **Exportar Backup:** Baixe seus dados em formato JSON
- **Importar Backup:** Restaure dados de backups anteriores
- **Interface Responsiva:** Funciona em desktop, tablet e mobile

### 💾 Sistema de Armazenamento

```json
{
  "todo": [
    {
      "id": 1234567890,
      "text": "Minha tarefa",
      "createdAt": "2025-12-13T10:30:00.000Z"
    }
  ],
  "doing": [],
  "done": []
}
```

Os dados são salvos no **localStorage** do navegador com a chave `kanban_tasks`.

---

## ❌ O Que Este Projeto NÃO FAZ

### 🚫 Limitações Técnicas

- **Não possui backend** - Sem servidor ou API
- **Não possui banco de dados externo** - Dados apenas no navegador
- **Não sincroniza entre dispositivos** - Cada navegador tem seus próprios dados
- **Não possui autenticação** - Sem login ou usuários
- **Não possui colaboração** - Sistema monousuário
- **Não possui notificações** - Sem alertas ou lembretes
- **Não possui histórico de alterações** - Sem versionamento de tarefas
- **Não possui pesquisa avançada** - Sem filtros ou busca
- **Não possui categorias/tags** - Sem organização adicional
- **Não possui priorização** - Sem níveis de urgência

### ⚠️ Avisos Importantes

> **🔴 ATENÇÃO:** Os dados pertencem ao navegador do usuário!

- **Limpar cache do navegador = PERDER TODOS OS DADOS**
- **Formatar o computador = PERDER TODOS OS DADOS**
- **Trocar de navegador = NÃO VER OS DADOS DO OUTRO NAVEGADOR**
- **Modo anônimo/privado = DADOS TEMPORÁRIOS**

**📦 FAÇA BACKUPS REGULARES!** Use a função "Exportar Backup" para salvar seus dados.

---

## 🚀 Como Usar

### 1️⃣ Instalação

Não há instalação! Basta abrir o arquivo `index.html` no navegador.

```bash
# Clone ou baixe o projeto
# Navegue até a pasta
# Abra index.html no navegador
```

### 2️⃣ Adicionar Tarefa

1. Digite a tarefa no campo de texto
2. Clique em "➕ Adicionar" ou pressione **Enter**
3. A tarefa aparecerá na coluna "🔴 A Fazer"

### 3️⃣ Mover Tarefa

- **A Fazer → Em Andamento:** Clique em "Iniciar ▶️"
- **Em Andamento → Concluído:** Clique em "Concluir ✅"
- **Voltar uma coluna:** Clique em "⬅️ Voltar"

### 4️⃣ Excluir Tarefa

1. Clique no botão "🗑️" na tarefa
2. Confirme a exclusão no alerta

### 5️⃣ Fazer Backup

**Exportar:**
1. Clique em "💾 Exportar Backup"
2. Arquivo `kanban-backup-YYYY-MM-DD.json` será baixado

**Importar:**
1. Clique em "📥 Importar Backup"
2. Selecione o arquivo `.json` do backup
3. Confirme a substituição dos dados atuais

---

## 📁 Estrutura do Projeto

```
/kanban-pessoal
 │
 ├── index.html          # Arquivo principal (HTML + CSS + JS)
 ├── README.md           # Documentação (este arquivo)
 │
 ├── css/
 │   └── style.css       # Estilos (inline no HTML por simplicidade)
 │
 ├── js/
 │   └── app.js          # Lógica (inline no HTML por simplicidade)
 │
 └── assets/
     └── (imagens se necessário)
```

**Nota:** Por ser um projeto didático simples, CSS e JavaScript estão inline no HTML para facilitar a distribuição como arquivo único.

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Uso |
|------------|-----|
| **HTML5** | Estrutura semântica |
| **CSS3** | Estilização e responsividade |
| **JavaScript (ES6+)** | Lógica e interatividade |
| **localStorage API** | Persistência de dados |
| **FileReader API** | Importação de backups |
| **Blob API** | Exportação de backups |

### 🚫 O Que NÃO Foi Utilizado

- ❌ Frameworks (React, Vue, Angular)
- ❌ Bibliotecas externas (jQuery, Lodash, etc.)
- ❌ Preprocessadores (SASS, LESS)
- ❌ Bundlers (Webpack, Vite)
- ❌ Backend (Node.js, PHP, Python)
- ❌ Banco de dados (MySQL, MongoDB)
- ❌ CDN externo (funciona 100% offline)

---

## 🧪 Testes Realizados com IAs

Este projeto foi testado em **3 plataformas de IA** diferentes para avaliar a qualidade do código gerado:

### 🏆 Ranking de Desempenho

#### 🥇 **1º Lugar: Claude (Anthropic)**
- ✅ **Melhor Layout:** Design moderno, responsivo e profissional
- ✅ **Melhor Lógica:** Código limpo, bem comentado e organizado
- ✅ **Todas as funcionalidades:** 100% funcionais
- ✅ **Boas práticas:** Separação de responsabilidades, validações, tratamento de erros
- ✅ **Documentação:** Comentários detalhados em todas as funções

**Pontos Fortes:**
- Código didático e fácil de entender
- Interface intuitiva com feedback visual
- Sistema de backup robusto
- Responsividade excelente

---

#### 🥈 **2º Lugar: Gemini (Google)**
- ✅ **Bom Layout:** Interface funcional e agradável
- ⚠️ **Lógica Adequada:** Funciona, mas menos organizada
- ✅ **Funcionalidades básicas:** Implementadas corretamente

**Pontos Fortes:**
- Visual limpo
- Código funcional

**Pontos a Melhorar:**
- Menos comentários no código
- Organização poderia ser melhor

---

#### 🥉 **3º Lugar: Grok (X/Twitter)**
- ❌ **Observação: REPROVADO**
- ❌ **Funcionalidades não funcionaram:** Bugs críticos
- ❌ **Layout comprometido:** Problemas de renderização
- ❌ **Código problemático:** Erros de implementação

**Problemas Encontrados:**
- Funcionalidades principais com falhas
- Interface não responsiva
- Bugs na persistência de dados

---

### 📊 Resumo Comparativo

| Critério | Claude 🥇 | Gemini 🥈 | Grok 🥉 |
|----------|-----------|-----------|---------|
| **Layout** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐ |
| **Lógica** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐ |
| **Funcionalidades** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ❌ |
| **Documentação** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐ |
| **Código Limpo** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ |

**🏆 Vencedor Geral: Claude (Anthropic)**

---

## 💡 Conceitos Aprendidos

Este projeto demonstra conceitos fundamentais de desenvolvimento web:

### JavaScript
- Manipulação de DOM
- Event Listeners
- LocalStorage API
- JSON parse/stringify
- FileReader API
- Blob e ObjectURL
- Arrow Functions
- Template Literals
- Array Methods (map, filter, find)

### CSS
- Flexbox e Grid
- CSS Variables
- Media Queries
- Animações e Transições
- Box Shadow
- Border Radius

### HTML
- Estrutura Semântica
- Forms e Inputs
- Data Attributes

---

## 🔮 Evolução Futura (com Backend)

Este projeto serve como **base para evolução** com as seguintes melhorias:

### 🚀 Próximos Passos

- [ ] **Backend com Node.js + Express**
- [ ] **Banco de Dados (MongoDB/PostgreSQL)**
- [ ] **Autenticação de Usuários (JWT)**
- [ ] **API RESTful**
- [ ] **Sincronização entre dispositivos**
- [ ] **Colaboração em tempo real (WebSocket)**
- [ ] **Notificações Push**
- [ ] **Categorias e Tags**
- [ ] **Sistema de Prioridades**
- [ ] **Filtros e Busca Avançada**
- [ ] **Histórico de Alterações**
- [ ] **Anexos de Arquivos**
- [ ] **Integração com Calendário**
- [ ] **Relatórios e Estatísticas**

---

## 🤝 Contribuindo

Este é um projeto didático, mas contribuições são bem-vindas!

### Como Contribuir

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

---

## 📄 Licença

Este projeto é de **código aberto** para fins educacionais.

---

## 👨‍💻 Autor

Projeto criado com fins didáticos para demonstrar desenvolvimento front-end puro.

**Desenvolvido com 💙 por Claude (Anthropic)**

---

## 📞 Suporte

Encontrou algum problema? Tem sugestões?

- 🐛 Reporte bugs abrindo uma issue
- 💡 Sugestões são sempre bem-vindas
- ⭐ Dê uma estrela se este projeto te ajudou!

---

## 🎓 Recursos de Aprendizado

Quer aprender mais sobre as tecnologias usadas?

- [MDN Web Docs - JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [MDN Web Docs - localStorage](https://developer.mozilla.org/pt-BR/docs/Web/API/Window/localStorage)
- [CSS-Tricks - Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [JavaScript.info](https://javascript.info/)

---

## ⚡ Performance

- **Tamanho:** ~15KB (HTML + CSS + JS inline)
- **Dependências:** 0
- **Tempo de carregamento:** < 100ms
- **Funciona offline:** ✅ Sim

---

## 🔐 Segurança

- **XSS Protection:** Escape de HTML nas tarefas
- **Dados Locais:** Não há transmissão de dados
- **Sem Cookies:** Não utiliza cookies
- **Privacidade Total:** Tudo fica no seu navegador

---

## 📱 Compatibilidade

| Navegador | Versão Mínima | Status |
|-----------|---------------|--------|
| Chrome | 60+ | ✅ Testado |
| Firefox | 55+ | ✅ Testado |
| Safari | 11+ | ✅ Compatível |
| Edge | 79+ | ✅ Compatível |
| Opera | 47+ | ✅ Compatível |

**Mobile:** Totalmente responsivo em Android e iOS.

---

## 📚 Referências

- [Kanban Methodology](https://pt.wikipedia.org/wiki/Kanban)
- [LocalStorage API](https://developer.mozilla.org/pt-BR/docs/Web/API/Window/localStorage)
- [File API](https://developer.mozilla.org/pt-BR/docs/Web/API/File)

---

<div align="center">

**📋 Organize suas tarefas com simplicidade!**

[⬆ Voltar ao Topo](#-kanban-pessoal)

</div>