/*
Descricao: Formulários JavaScript 
nome_arquivo: Formulários JavaScript 
nome_exercicio: Formulário de Pedido  
nome_aluno: Junio Henrique
email_aluno: junio.henrique@aluno.cps.sp.gov.br
turma: WEBI-ISW028-A
*/

const selectProduto = document.getElementById('produto');
const inputQtd = document.getElementById('quantidade');
const textoTotal = document.getElementById('total');

function calcularTotal() {
  const preco = parseFloat(selectProduto.value);
  const qtd = parseInt(inputQtd.value, 10) || 0;
  const total = preco * qtd;

  textoTotal.textContent = `Total: ${total.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })}`;
}

selectProduto.addEventListener('change', calcularTotal);
inputQtd.addEventListener('input', calcularTotal);