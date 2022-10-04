const user = {
    edad: 33,
    admin: true,
    nombre: 'Juan',
    // 0: 10
    saludar() {
        // this.nombre = 'Juan Pablo';
        console.log(`Hola ${this.nombre}`);
    }
}

const user2 = {
    nombre: 'Maria',
    edad: 23,
    admin: true
}

// console.log(Object.keys(user));
// console.log(Object.values(user));

user.nombre = 'Pedro';

let key = 'edad';

user.apellido = 'Perez';

// console.log(user.nombre);
// console.log(user.apellido);
// console.log(user[key]);
// console.log(user[0]);

// console.log(user2.nombre);
// console.log(user2[key]);

// For ... in

for (const key in user) {
    // document.write(key + ': ' + user[key] + '<br>');
    // document.write(`${key}: ${user[key]} <br>`);
    // console.log(key + ': ' + user[key]);
}

user.saludar();
