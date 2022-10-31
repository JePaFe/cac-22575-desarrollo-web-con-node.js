console.log(1);

// setTimeout(() => {
//   console.log("Pasaron 2 segundos o menos");
// }, Math.floor(Math.random() * 2000));

const bucle = setInterval(() => {
  console.log("Hola Node.js");
}, 500);

setTimeout(() => {
  clearInterval(bucle);
}, 1600);

// for(let i = 0; i < 10; i++) {
//     console.log("Hola Node.js");
// }

console.log(2);
