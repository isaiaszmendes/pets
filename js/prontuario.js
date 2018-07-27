let welcome = document.querySelector('.welcome');
let check = document.querySelectorAll('.check-image');
let plano = document.querySelectorAll('.plano input');
let bloco = document.querySelectorAll('.blocos');
let blocoA = document.querySelector('.blocoA');
let blocoB = document.querySelector('.blocoB');
let blocoC = document.querySelector('.blocoC');
let link = document.querySelectorAll('li img');


function removerWelcome(){
	welcome.classList.add('deslizarSumirE');
	setTimeout(function(){
		welcome.style.display =  'none';
	}, 1000);
};

function removerBlocoDono(){
	bloco[0].classList.add('deslizarSumirE');
	setTimeout(function(){
		bloco[0].style.display =  'none';
	}, 1000);
};

function removerBlocoPet(){
	bloco[1].classList.add('deslizarSumirD');
	setTimeout(function(){
		bloco[1].style.display =  'none';
	}, 1000);
};

function removerBlocoB(){
	blocoB.classList.add('deslizarSumirD');
	setTimeout(function(){
		blocoB.style.display =  'none';
	}, 1000);
};

function removerBlocoC(){
	blocoC.classList.add('deslizarSumirD');
	setTimeout(function(){
		blocoC.style.display =  'none';
	}, 1000);
};

link[0].addEventListener('click', show_Welcome);
link[1].addEventListener('click', show_Dono);
link[2].addEventListener('click', show_Pet);
link[3].addEventListener('click', show_Prontuario);

function show_Welcome(){
	removerBlocoDono();
	removerBlocoPet();
	removerBlocoB();
	removerBlocoC();

	welcome.classList.remove('deslizarSumirE');
	setTimeout(function(){
		welcome.style.display =  '';
		welcome.classList.add('animarE');
	}, 2000);
}

function show_Dono(){
	removerWelcome();
	removerBlocoPet();
	removerBlocoB();
	removerBlocoC();
		bloco[0].classList.remove('animarD')
		bloco[0].classList.remove('animarE')
		bloco[0].classList.remove('deslizarSumirE')
		setTimeout(function(){
			bloco[0].style.display = 'flex';
			bloco[0].classList.add('animarE');
		},2000);
}

function show_Pet(){
	removerWelcome();
	removerBlocoDono();
	removerBlocoB();
	removerBlocoC();
		bloco[1].classList.remove('animarD')
		bloco[1].classList.remove('animarE')
		bloco[1].classList.remove('deslizarSumirD')
		setTimeout(function(){
			bloco[1].style.display = 'flex';
			bloco[1].classList.add('animarD');
		},2000);
}

function show_Prontuario(){
	removerWelcome();
	removerBlocoDono();
	removerBlocoPet();
	blocoB.classList.remove('deslizarSumirD');
	blocoC.classList.remove('deslizarSumirD')
	setTimeout(function(){
			blocoB.style.display = 'flex';
			blocoB.classList.add('animarY');
			blocoC.style.display = 'flex';
			blocoC.classList.add('animarY');
		},2000);
}

function clicar(){
	let img = document.createElement('img');
	img.src =  "./img/pata.png";
	img.classList.add('pata'); 
	if (this.hasChildNodes()) {
	    this.removeChild(this.childNodes[0]);
	}else{
		this.appendChild(img);
	}
	if (check[0].hasChildNodes()) {
		plano[0].value = 'Banho e Tosa, marcado para o dia: ....';
	}else{
		plano[0].value = '';
	}
	if (check[1].hasChildNodes()) {
		plano[1].value = 'Vacina, marcado para o dia: ....';
	}else{
		plano[1].value = '';
	}
	if (check[2].hasChildNodes()) {
		plano[2].value = 'Consulta, marcada para o dia: XX/07/2018';
	}else{
		plano[2].value = '';
	}
	if (check[3].hasChildNodes()) {
		plano[3].value = 'Corte de Unhas, marcado para o dia: ....';
	}else{
		plano[3].value = '';
	}
}

for (let div of check){
	div.addEventListener('click', clicar);
}


