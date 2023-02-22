'use strict';

function BinarioADecimal(num) {
  const numero = num.toString().split('').reverse();
  const arr = numero.map( (element, index) => Math.pow(2, index) * element )
  const reducer = (acumulador, value) => acumulador + value;
  return arr.reduce(reducer);
}

function DecimalABinario(num) {
  const numero = parseInt(num);
  let nume = numero;
  let resto;
  let arr = [];
  while (nume !== 0) {
    resto = nume % 2;
    arr.push(resto);
    nume = Math.floor(nume / 2);
  }
  return arr.reverse().join('');
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
