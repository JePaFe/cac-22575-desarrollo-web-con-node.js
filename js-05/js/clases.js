// function User (nombre, edad, admin) {
//     this.nombre = nombre;
//     this.edad = edad;
//     this.admin = admin;

//     this.saludar = function() {
//         console.log(`Hola ${this.nombre}`);
//     }
// }

// const user = new User('Juan', 33, true);

class User {
    constructor(nombre, edad, admin) {
        this.nombre = nombre;
        this.edad = edad;
        this.admin = admin;
    }

    saludar() {
        console.log(`Hola ${this.nombre}`);
    }
}

const usuarios = [];

const user = new User('Juan', 33, true);
usuarios.push(user);

const user2 = new User('Maria', 23, true);
usuarios.push(user2);

const user3 = new User('Pedro', 20, false);
usuarios.push(user3);

// console.log(usuarios[1].nombre);
// let maria = usuarios[1];
// console.log(maria.saludar());

user2.apellido = 'Perez';