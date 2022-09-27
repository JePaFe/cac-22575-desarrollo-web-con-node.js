// function sumar() {
//     console.log(2 + 4);
// }

const sumar = function(num1, num2) {
    // console.log(num1, num2);
    // console.log(Number(num1));

    // Si num1 no es un numero o num2 no es un numero 
    if (!Number(num1) || !Number(num2)) {
        return NaN;
    }

    let resultado = num1 + num2;
    return resultado;

    // return 6 - 5;
    // console.log('Linea 10');
    // return 4 + 2;
}

let numero_1 = 3.75;

let dato = sumar(numero_1, 2.5);
// // alert(dato);
console.log(dato);

console.log(sumar(6));

console.log(sumar('Hola ', 'mundo'));