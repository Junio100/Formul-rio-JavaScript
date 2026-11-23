/*
Descricao: Formulários JavaScript 
nome_arquivo: Formulários JavaScript 
nome_exercicio: Contador de caracteres  
nome_aluno: Junio Henrique
email_aluno: junio.henrique@aluno.cps.sp.gov.br
turma: WEBI-ISW028-A
*/

const comentario = document.getElementById('comentario');
const contador = document.getElementById('contador');
const btnEnviar = document.getElementById('btn-enviar');
const limite = 140;

comentario.addEventListener('input', () => {
  const restantes = limite - comentario.value.length;
  contador.textContent = restantes;

  if (restantes <= 0) {
    contador.classList.add('texto-vermelho');
    btnEnviar.disabled = true;
  } else {
    contador.classList.remove('texto-vermelho');
    btnEnviar.disabled = false;
  }
});