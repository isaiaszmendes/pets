let login = document.getElementById('user');
let pass = document.getElementById('pass');
let form = document.querySelector('form');


form.addEventListener('submit', validar);

function validar(){
	a = 'user123';
	b = 'user@email.com';
	mensagem = '';

	if ((login.value == a || login.value == b) && (pass.value == '123456')) 
	{
		this.action = "prontuario.html";
	}
	if(login.value == ''){
		mensagem += 'Preencha o campo Username\n';
	}
	if(pass.value == ''){
		mensagem += 'Preencha a senha\n';
	}
	if (mensagem.length != '') {
		alert(mensagem);
	}
}
