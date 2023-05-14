const mario = document.querySelector('.mario');
const tubo = document.querySelector('.tubo');


 
const pulo = () => {
    mario.classList.add('pulo');

    setTimeout(() => {
        mario.classList.remove('pulo')
    }, 550);

}
const loop = setInterval(() => {

    console.log('loop');

    const tuboposicao = tubo.offsetLeft;
    const marioposicao = +window.getComputedStyle(mario).bottom.replace('px','');



if (tuboposicao <= 120 && tuboposicao > 0 && marioposicao < 80) {
 
   tubo.style.animation = 'nome';
   tubo.style.left = `${tuboposicao}px`;

   mario.style.animation = 'nome';
   mario.style.bottom  = `${tuboposicao}px`;

   

   mario.src="./Imagens/game-over.png";
   mario.style.width = '80px'
   mario.style.marginLeft = '40px'
        
clearInterval(loop);
    
}


}, 10); 

document .addEventListener('keydown', pulo);

var pontos = 0;

function adicionarPonto() {
  pontos++; 
  document.getElementById("pontos").innerHTML = pontos; // Atualiza o valor do contador
}