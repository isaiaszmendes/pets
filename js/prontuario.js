let welcome = document.querySelector('.welcome');
let check = document.querySelectorAll('.check-image');
let bloco = document.querySelectorAll('.blocos');
let blocoA = document.querySelector('.blocoA');
let blocoB = document.querySelector('.blocoB');
// let servicos = document.querySelector('.servicos');
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

link[0].addEventListener('click', show_Welcome);
link[1].addEventListener('click', show_Dono);
link[2].addEventListener('click', show_Pet);
link[3].addEventListener('click', show_Prontuario);

function show_Welcome(){
	removerBlocoDono();
	removerBlocoPet();
	removerBlocoB();

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
	blocoB.classList.remove('deslizarSumirD')
	setTimeout(function(){
			blocoB.style.display = 'flex';
			blocoB.classList.add('animarY');
		},2000);
}

function mostrarBlocoDog(){
	removerWelcome();
	if (countB %2 == 0) {
		bloco[1].style.display = 'block';
		blocoB.style.display = 'block';
		bloco[1].classList.add('animarD');
		blocoB.classList.add('animarY');
	}else{
		bloco[1].style.display = 'none';
		blocoB.style.display = 'none';
		bloco[1].classList.remove('animarD');
		blocoB.classList.remove('animarY');
	}
	countB++;	
}

function mostrarProntuario(){
	removerWelcome();
	if (countC %2 == 0) {
		blocoC.style.display = 'block';
		blocoC.classList.add('animarY');
	}else{
		blocoC.style.display = 'none';
		blocoC.classList.remove('animarY');
	}
	countC++;
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
}

for (let div of check){
	div.addEventListener('click', clicar);
}

