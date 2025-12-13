PROMPT — Processo de Desenvolvimento do Kanban Pessoal (Front-end)

Desenvolva um Kanban pessoal utilizando apenas HTML, CSS e JavaScript puro, com foco didático, sem backend e sem banco de dados externo.

🔹 Objetivo do Projeto
Criar uma aplicação simples para demonstrar:
organização de código front-end
manipulação de DOM
persistência local de dados
fluxo real de desenvolvimento
publicação de projeto estático

🔹 Requisitos Funcionais
Criar três colunas:
A Fazer
Em Andamento
Concluído

Permitir:
adicionar tarefas
mover tarefas entre colunas
remover tarefas
Interface simples e funcional (sem framework)

🔹 Persistência de Dados
Utilizar exclusivamente localStorage
Estrutura dos dados em formato JSON
Salvar automaticamente a cada alteração
Exemplo de estrutura:

{
  "todo": [],
  "doing": [],
  "done": []
}

🔹 Backup Local
Implementar:
botão Exportar Backup
botão Importar Backup
Exportar os dados em arquivo .json
Restaurar os dados a partir do arquivo

🔹 Restrições Técnicas
Não utilizar:
backend
banco de dados
frameworks JS
bibliotecas externas, não pode ser externa pois a ideia é fazer rodar mesmo off-line
Não utilizar Git como banco de dados
Não implementar login ou autenticação

🔹 Estrutura de Pastas
/kanban
 ├── index.html
 ├── css/
 │   └── style.css
 ├── js/
 │   └── app.js
 ├── assets/
 │   └── imagens do projeto
 └── README.md

🔹 Boas Práticas
Código comentado
Funções bem definidas
Separação de responsabilidades
Nomes claros e objetivos
Simplicidade acima de tudo

🔹 Observações Importantes
Os dados pertencem ao navegador do usuário
Ao limpar o navegador ou formatar o computador, os dados são perdidos
Backup local é responsabilidade do usuário

🔹 Encerramento do Projeto
Documentar o projeto no README.md
Explicar claramente:
o que o projeto faz
o que ele não faz

Preparar o terreno para evolução futura com banco de dados