let login = document.getElementById('user');
let pass = document.getElementById('pass');
let form = document.querySelector('form');


form.addEventListener('submit', validar);

function validar(){
	a = 'user123';
	b = 'user@email.com';
	message = '';

	if ((login.value == a || login.value == b) && (pass.value == '123456')) 
	{
		this.action = "prontuario.html";
	}
	if(login.value == ''){
		message += 'Preencha o campo Username';
	}
	if(pass.value == ''){
		message += 'Preencha a senha';
	}
	
}
