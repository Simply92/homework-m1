'use strict';

function BinarioADecimal(num) {
 var suma = 0
 var Revnum = num.split('').reverse().join('')
 for (let i = 0; i< Revnum.length; i++){
   suma = suma + (Revnum[i] * 2 ** i);
}
return suma;
}

function DecimalABinario(num) {
  //return (num).toString(2);
  let binario = []
  let resto = []
  while (num !== 0){
    resto = num % 2
    num = Math.trunc(num/2)
    binario.push(resto)
  }
  return binario.reverse().join('');
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
