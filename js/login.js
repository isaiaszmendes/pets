let login = document.getElementById('user');
let pass = document.getElementById('pass');
let button = document.querySelector('button');


button.addEventListener('click', validar);

function validar(){
	a = 'user123';
	b = 'user@email.com';
	mensagem = '';

	if(login.value == ''){
		mensagem += 'Preencha o campo Username\n';
	}
	if(pass.value == ''){
		mensagem += 'Preencha a senha\n';
	}
	if (mensagem.length != '') {
		alert(mensagem);
	}
	if ((login.value == a || login.value == b) && (pass.value == '123456')) 
	{
		location.href = "prontuario.html";
	}else{
		location.href = "index.html";
	}
	
}
