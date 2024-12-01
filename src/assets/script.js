console.log('s');

//assign random variable values
let txtimgs = document.querySelectorAll('.textimg');
txtimgs.forEach( el=>{
	let wght = getRandomInt(200, 900);
	let wdth = getRandomInt(50, 200);

	el.style.setProperty('--wght', wght);
	el.style.setProperty('--wdth', wdth);
});

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}