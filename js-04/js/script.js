const numeros = [2, 7, 7, 44, 89, 6];

// console.log(numeros.length);

// numeros.push(33);
// numeros.push(34);
// numeros.unshift(-1);

// let numero = numeros.pop();

// let numero = numeros.shift();

// const otrosNumeros = [5, 9, 4];
// const union = numeros.concat(otrosNumeros);

// let texto = numeros.join(' ');
// const nums = texto.split(' ');

// const parte = numeros.slice(1, 4);

// document.write(numeros[3]);

// numeros.sort((a, b) => a - b);

// const mostrar = function(numero) {
//     console.log(numero);
// }

// numeros.forEach( numero => console.log(numero) );

// let result = numeros.every( function(item) {
//     if (item > 0) {
//         return true;
//     } else {
//         return false;
//     }
// });

// let result = numeros.some( item => item > 80 );
// console.log(result);

// [2, 7, 7, 44, 89, 6]

// const nums = numeros.map( item => item % 2 == 0 ? 'par' : 'impar' );
// const nums = numeros.map( item => item + 1);

// const filtrados = numeros.filter( item => item >= 7 );
const item = numeros.find( item => item > 3);