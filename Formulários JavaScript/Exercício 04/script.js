/*
Descricao: Formulários JavaScript 
nome_arquivo: Formulários JavaScript 
nome_exercicio: Formulário cadastro de Produto 
nome_aluno: Junio Henrique
email_aluno: junio.henrique@aluno.cps.sp.gov.br
turma: WEBI-ISW028-A
*/

const formProduto = document.getElementById('form-produto');
const saidaJson = document.getElementById('saida-json');

formProduto.addEventListener('submit', (event) => {
  event.preventDefault();

  const produtoObj = {
    nome: document.getElementById('prod-nome').value,
    categoria: document.getElementById('prod-categoria').value,
    preco: parseFloat(document.getElementById('prod-preco').value)
  };

  const jsonString = JSON.stringify(produtoObj, null, 2);
  console.log(jsonString);
  saidaJson.textContent = jsonString;
});