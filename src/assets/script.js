console.log('s');

//assign random variable values
let randomvf = document.querySelectorAll('.random');
randomvf.forEach( el=>{
	assignRandomVF(el);
});

function assignRandomVF(el){
	let wght = getRandomInt(200, 900);
	let wdth = getRandomInt(50, 200);
	let ital = getRandomInt(0,1);

	el.style.setProperty('--wght', wght);
	el.style.setProperty('--wdth', wdth);
	if( ital == 1){
		el.classList.add('italic');
	}else{
		if( el.classList.contains('italic') ){
			el.classList.remove('italic');
		}
	}
}
function getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
}

let textimgs = document.querySelectorAll('.textimg .random');
textimgs.forEach( t=>{
	t.addEventListener('click', ()=>{
		assignRandomVF(t);
	});
});

