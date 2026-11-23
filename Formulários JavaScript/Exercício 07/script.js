/*
Descricao: Formulários JavaScript 
nome_arquivo: Formulários JavaScript 
nome_exercicio: Campo de texto 
nome_aluno: Junio Henrique
email_aluno: junio.henrique@aluno.cps.sp.gov.br
turma: WEBI-ISW028-A
*/

const inputHab = document.getElementById('input-habilidade');
const btnAddHab = document.getElementById('btn-add-hab');
const listaHab = document.getElementById('lista-habilidades');

function adicionarHabilidade() {
  const texto = inputHab.value.trim();
  if (!texto) return;

  const badge = document.createElement('div');
  badge.className = 'badge';
  badge.textContent = texto;

  const btnRemover = document.createElement('span');
  btnRemover.textContent = 'X';
  btnRemover.addEventListener('click', () => badge.remove());

  badge.appendChild(btnRemover);
  listaHab.appendChild(badge);

  inputHab.value = '';
  inputHab.focus();
}

btnAddHab.addEventListener('click', adicionarHabilidade);
inputHab.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    adicionarHabilidade();
  }
});