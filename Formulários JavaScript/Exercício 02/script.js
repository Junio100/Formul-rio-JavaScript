/*
Descricao: Formulários JavaScript 
nome_arquivo: Formulários JavaScript 
nome_exercicio: Campo senha e confirme sua senha 
nome_aluno: Junio Henrique
email_aluno: junio.henrique@aluno.cps.sp.gov.br
turma: WEBI-ISW028-A
*/

const senha = document.getElementById('senha');
const confirmaSenha = document.getElementById('confirma-senha');
const msgSenha = document.getElementById('msg-senha');
const btnCadastrar = document.getElementById('btn-cadastrar');

function verificarSenhas() {
  if (confirmaSenha.value === '') {
    msgSenha.textContent = '';
    msgSenha.className = '';
    btnCadastrar.disabled = true;
    return;
  }

  if (senha.value === confirmaSenha.value) {
    msgSenha.textContent = 'As senhas coincidem';
    msgSenha.className = 'sucesso';
    btnCadastrar.disabled = false;
  } else {
    msgSenha.textContent = 'As senhas são diferentes';
    msgSenha.className = 'erro';
    btnCadastrar.disabled = true;
  }
}

confirmaSenha.addEventListener('input', verificarSenhas);
senha.addEventListener('input', verificarSenhas);