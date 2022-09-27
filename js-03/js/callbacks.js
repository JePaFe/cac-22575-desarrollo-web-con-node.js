const sumar = function (a, b, accion) {
    let suma = a + b;
    accion('resultado: ' + suma);
    return suma;
}

const servicio = function(mensaje) {
    console.log('Enviado al servicio: ' + mensaje);
}

let result = sumar(4, 5, console.log);
console.log(result);

result = sumar(4, 5, alert);
console.log(result);

result = sumar(4, 5, servicio);
console.log(result);