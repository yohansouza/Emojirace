let xJogador = [20, 20, 20, 20];
let yJogador = [50, 150, 250, 350];
let jogador = ["✨","🗿","🍷", "⚓"  ];
let contagem = jogador.length;
let teclas = ["a", "s", "d", "f"];

function setup() {
  createCanvas(650, 400);
}

function draw() {
  
  
  defineTela();
  mostraJogadores();
  desenhaChegada();
  defineVencedor();
} 
  
function defineTela(){
  if (focused == true){
  background ('rgb(63,162,34)')
  } else { 
   background('rgb(204,60,60)');
   
  }
}

function mostraJogadores(){
 textSize (30);
 for (let i = 0; i < contagem; i++){
   text(jogador[i], xJogador[i],
yJogador[i]);     
    }
   }
 function desenhaChegada(){
 fill ('rgb(243,243,247)');
   rect (600, 0, 10, 400);
 fill ('black');
   for (let yAtual = 0; yAtual < 400; yAtual += 20){
   rect (600, yAtual, 10, 10);
  }    
 }  
  
 //xJogador1 += random(5);
 //xJogador2 += random(5);
 //xJogador3 += random(5);
 //xJogador4 += random(5);

 function defineVencedor(){
   
 textAlign (CENTER, CENTER);
   for (let i = 0; i <contagem; i++) {
 if (xJogador[i] > 600) {
  text (jogador[i] + "Venceu!!", width / 2, height / 2); 
  noLoop();
   
  textSize() 
   }
  }
 }



function keyReleased(){
  for (let i = 0; i < contagem; i++){
 if (key == teclas[i]) {
 xJogador[i] += random(16);
   
   
   
         
  }
 }  
}  