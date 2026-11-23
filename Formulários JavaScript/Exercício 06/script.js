/*
Descricao: Formulários JavaScript 
nome_arquivo: Formulários JavaScript 
nome_exercicio: Campos Selects 
nome_aluno: Junio Henrique
email_aluno: junio.henrique@aluno.cps.sp.gov.br
turma: WEBI-ISW028-A
*/

const selectDepto = document.getElementById('departamento');
const selectFunc = document.getElementById('funcionario');

const equipe = {
  TI: ['Allan', 'Beatriz', 'Carlos'],
  RH: ['Daniela', 'Eduardo']
};

selectDepto.addEventListener('change', () => {
  const deptoEscolhido = selectDepto.value;
  selectFunc.innerHTML = '';

  if (equipe[deptoEscolhido]) {
    equipe[deptoEscolhido].forEach((nome) => {
      const option = document.createElement('option');
      option.value = nome;
      option.textContent = nome;
      selectFunc.appendChild(option);
    });
  } else {
    selectFunc.innerHTML = '<option value="">Aguardando departamento...</option>';
  }
});