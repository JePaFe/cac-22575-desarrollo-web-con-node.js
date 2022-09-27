// const sumar = function(num1, num2) {
//     return num1 + num2;
// }

// const sumar = (num1, num2) => num1 + num2;

// let result = sumar(5, 6);
// console.log(result);

// const saludar = function (nombre) {
//     return 'Hola ' + nombre;
// }

// const saludar = nombre => 'Hola ' + nombre;

const saludar = nombre => {
    let texto = 'Hola ' + nombre
    return texto;
}

let mensaje = saludar('Juan');
console.log(mensaje);