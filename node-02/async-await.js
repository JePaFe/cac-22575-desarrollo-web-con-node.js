const multiplicar = (num1, num2) => {
  return new Promise((resolve, reject) => {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
      reject("Los valores de los parámetros no son números");
    } else {
      setTimeout(() => {
        resolve({
          num1: num1,
          num2: num2,
          resultado: num1 * num2,
        });
      }, Math.floor(Math.random() * 2000));
    }
  });
};

const tabla = async () => {
  try {
    let resultado = await multiplicar(1, 2);
    console.log(
      `${resultado.num1} * ${resultado.num2} = ${resultado.resultado}`
    );

    resultado = await multiplicar(2, 2);
    console.log(
      `${resultado.num1} * ${resultado.num2} = ${resultado.resultado}`
    );

    resultado = await multiplicar(3, 2);
    console.log(
      `${resultado.num1} * ${resultado.num2} = ${resultado.resultado}`
    );
  } catch (error) {
    console.log(error);
  }
};

tabla();
