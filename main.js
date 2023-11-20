/* 1.Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar. */

function esPar(numero) {
  if (numero % 2 === 0) {
    return "Par";
  } else {
    return "Impar";
  }
}

console.log(esPar(14));
console.log(esPar(15));
console.log("--------------------------------");

/* 2.Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.
 */

function compararNumeros(numero1, numero2) {
  if (numero1 > numero2) {
    console.log(`El número mayor es ${numero1}`);
  } else if (numero2 > numero1) {
    console.log(`El número mayor es ${numero2}`);
  } else {
    console.log("Los números son iguales");
  }
}

compararNumeros(30, 30);
compararNumeros(30, 40);
console.log("--------------------------------");

/* 3.Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5. */

function esMultiploDe5(numero) {
  for (let i = 1; i <= numero; i++) {
    if (i % 5 === 0) {
      console.log(`El numero ${i} es multiplo de 5`);
    }
  }
}
esMultiploDe5(30);
console.log("--------------------------------");

/* 4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número. */

function imprimirNumeros(numero) {
  for (let i = 0; i <= numero; i++) {
    console.log(i);
  }
}
imprimirNumeros(10);
console.log("--------------------------------");

/* 5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado. */

function imprimirPalabra(palabra, numero) {
  for (let i = 0; i < numero; i++) {
    console.log(palabra);
  }
}
imprimirPalabra("Hola", 5);
console.log("--------------------------------");

/* 6 - Crear una función que reciba un array por parámetro e imprime por consola todos los valores de ese array. */

function listaNumPares(numPares) {
  for (let i = 0; i < numPares.length; i++) {
    console.log(numPares[i]);
  }
}

const numPares = [2, 4, 6, 8, 10];
listaNumPares(numPares);
console.log("--------------------------------");

/* 7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0". */

function ListaSinQuinto(lista) {
  for (let i = 0; i < lista.length; i++) {
    if (i !== 4) {
      console.log(lista[i]);
    }
  }
}

const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
ListaSinQuinto(lista);
console.log("--------------------------------");

/* 8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro. */

function NumMultiplicado(array, numero) {
  for (let i = 0; i < array.length; i++) {
    const valorMultiplicado = array[i] * numero;
    console.log(valorMultiplicado)
  }
}

const array = [1, 2, 3, 4, 5]
NumMultiplicado(array, 8);
