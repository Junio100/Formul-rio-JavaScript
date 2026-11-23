/*
Descricao: Formulários JavaScript 
nome_arquivo: Formulários JavaScript 
nome_exercicio: Campo input date
nome_aluno: Junio Henrique
email_aluno: junio.henrique@aluno.cps.sp.gov.br
turma: WEBI-ISW028-A
*/

const inputData = document.getElementById('data-nasc');
const avisoIdade = document.getElementById('aviso-idade');
const btnFinalizar = document.getElementById('btn-finalizar');

inputData.addEventListener('change', () => {
  if (!inputData.value) return;

  const hoje = new Date();
  const nascimento = new Date(`${inputData.value}T00:00:00`);

  let idade = hoje.getFullYear() - nascimento.getFullYear();
  const mes = hoje.getMonth() - nascimento.getMonth();

  if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
    idade--;
  }

  if (idade >= 18) {
    avisoIdade.textContent = '';
    btnFinalizar.disabled = false;
  } else {
    avisoIdade.textContent = 'Apenas para maiores de idade';
    btnFinalizar.disabled = true;
  }
});