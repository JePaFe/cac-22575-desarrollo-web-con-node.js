// const user = {
//     edad: 33,
//     admin: true,
//     nombre: 'Juan',
//     saludar() {
//         console.log(`Hola ${this.nombre}`);
//     }
// }

function User (nombre, edad, admin) {
    this.nombre = nombre;
    this.edad = edad;
    this.admin = admin;

    // this.saludar = function() {
    //     console.log(`Hola ${this.nombre}`);
    // }
}

User.prototype.saludar = function() {
    console.log(`Hola ${this.nombre}`);
}

const user = new User('Juan', 33, true);
const user2 = new User('Maria', 23, true);
const user3 = new User('Pedro', 20, false);

// user3.saludar();