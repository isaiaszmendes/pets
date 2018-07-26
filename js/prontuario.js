let check = document.querySelectorAll('.check-image');

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
console.log(contador)

