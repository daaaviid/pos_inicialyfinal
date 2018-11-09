var posInicial=[0,0]
var posFinal=[0,0]
var filaInicial=[0]
var filaFinal=[0]
var columnaInicial=[0]
var columnaFinal=[0]

function casillaAleatoria() {

  columnaInicial=Math.floor(Math.random()* 6 + 1);
  posInicial[0]=columnaInicial;
  filaInicial=Math.floor(Math.random()* 6 + 1);
  posInicial[1]=filaInicial;
  columnaFinal=Math.floor(Math.random()* 6 + 1);
  posFinal[0]=columnaFinal;
  filaFinal=Math.floor(Math.random()* 6 + 1);
  posFinal[1]=filaFinal


}
casillaAleatoria();
console.log(`La posicion inicial de la columna es ${posInicial[0]} y la posicion inicial de la fila es ${posInicial[1]}`)
console.log(`La posicion final de la columna es ${posFinal[0]} y la posicion final de la fila es ${posFinal[1]}`);;
