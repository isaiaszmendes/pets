let login = document.getElementById('user');
let pass = document.getElementById('pass');
let botao = document.querySelector('button');


botao.addEventListener('click', validar);

function validar(){
	a = 'user123';
	b = 'user@email.com';
	if ((login.value == a || login.value == b) && (pass.value == '123456')) 
	{
		window.location.href = "prontuario.html";
	}else{
		alert('login incorreto')
	}
	
}