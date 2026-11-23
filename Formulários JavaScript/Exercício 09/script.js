/*
Descricao: Formulários JavaScript 
nome_arquivo: Formulários JavaScript 
nome_exercicio: Lista de itens  
nome_aluno: Junio Henrique
email_aluno: junio.henrique@aluno.cps.sp.gov.br
turma: WEBI-ISW028-A
*/

const checkTodos = document.getElementById('selecionar-todos');
const itens = document.querySelectorAll('.item-check');

checkTodos.addEventListener('change', () => {
  itens.forEach((item) => {
    item.checked = checkTodos.checked;
  });
});

itens.forEach((item) => {
  item.addEventListener('change', () => {
    const todosMarcados = Array.from(itens).every((i) => i.checked);
    checkTodos.checked = todosMarcados;
  });
});