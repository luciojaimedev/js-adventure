// 1. Variables básicas
// Crea una variable llamada nombreUsuario y otra llamada edadUsuario. Asignales tu nombre y edad. Mostralas por consola.

const userName = "Lucio";
let userAge = 28;

// 2. const vs let
// Intentá reasignar una variable creada con const. ¿Qué pasa?

// userName = 'Matias'
console.log(userName);

// 3. Tipos de datos
// Crea una variable de cada tipo de dato: string, number, boolean, null, undefined, bigint. Mostrá con typeof el tipo de cada una.

let let1 = "caja";
let let2 = 25;
let isLet3Pooping = true;
let let4 = null;
let let5;
let let6 = 71283172837182738n;

// 4. Operador de comparación estricto
// ¿Qué devuelve 5 === "5"? Probalo y explicalo.

console.log(5 === "5"); // FALSE

// 5. Comparaciones
// Escribí tres comparaciones que den como resultado true y tres que den false. Usá operadores >, <, ===, !==, etc.

console.log(5 > 3);
console.log(5 !== 3);
console.log(true || false);
console.log(!false === !true);
console.log(null ?? false);
console.log(!4 > 10 && 5 === 5);

// 6. Operadores lógicos simples
// Escribí tres expresiones que usen && y otras tres que usen ||. Mezclá valores booleanos y números.

console.log(5 > 10 && 10 < 5);
console.log(0 >= 1 && 98 <= 101);
console.log(0 === "0" && -3 !== 3);
console.log(10 < 11 || 15 > 20);
console.log(!0 === 1 || !4 === false);
console.log(!false >= 0 || 35 <= 15 + 30);

// 7. Negación
// ¿Qué devuelve !0, !"", !false y !null? Probalo y explicá por qué.

// Todas true, no pienso hacer los logs pa

// 8. Nullish coalescing
// Crea una variable sin valor (undefined) y usá ?? para darle un valor por defecto.

const user = undefined ?? "Lucio";

// 9. Nullish vs OR
// ¿Qué devuelve false ?? "a" y false || "b"? ¿Cuál es la diferencia? Mostralo por consola y escribí una breve explicación en un comentario.

console.log(false ?? "a"); // Devuelve false
console.log(false || "b"); // Devuelve 'b'

// 10. Función saludo
// Escribí una función que reciba un nombre y diga "Hola [nombre], ¿cómo estás hoy?".

function greeting(name) {
  return `Hola ${name}, ¿cómo estás hoy?`;
}

const lucio = greeting("Lucio");

// 11. Función resta
// Escribí una función que reciba dos números y devuelva la resta. Mostrá el resultado por consola.

function resta(num1 = 40, num2 = 20) {
  const restar = num1 - num2;
  return restar;
}

resta();

// 12. Función con let
// Crea una función que defina una variable contador con let, sume 1, y la muestre.

function contador() {
  let plus = 0;
  plus++;
  return plus;
}

console.log(contador());

// 13. Condición con AND
// Crea dos variables booleanas (esMayor, tieneDNI). Mostrá true solo si ambas son true.

let esMayor = true;
let tieneDNI = true;
console.log(esMayor && tieneDNI);

// 14. Condición con OR
// Crea dos variables: llueve y hayParaguas. Mostrá "Puedo salir" si al menos una es true.

let llueve = true;
let hayParaguas = false;
console.log(llueve || hayParaguas ? "Puedo Salir" : "No Puedo Salir");

// 15. Combinar funciones
// Escribí una función duplicar que multiplique por 2, y otra sumarUno que sume 1. Mostrá el resultado de duplicar(sumarUno(3)).

function duplicar(num, multiplier) {
  return num * multiplier;
}

function sumarUno(num) {
  return num + 1;
}

console.log(duplicar(sumarUno(3), 5));

// 16. Evaluar tipos
// Escribí una función que reciba cualquier valor y diga si es string, number, o otro.

function typeOfValue(value) {
  if (typeof value === "string") return "Is a string";
  if (typeof value === "number") return "Is a number";
  return "is a different value";
}

console.log(typeOfValue(undefined));

// 17. Valor por defecto
// Creá una función que reciba un nombre. Si no se pasa ningún valor, usá "Anónimo" como valor por defecto usando ??.

function nombre(name) {
  return name ?? "Anónimo";
}

console.log(nombre());

// 18. Comparar edades
// Escribí una función que reciba dos edades y diga cuál es mayor o si son iguales.

function getOlderAge(age1, age2) {
  if (age1 > age2) return `${age1} es mayor`;
  if (age1 < age2) return "Que estas haciendo pa?";
  if (age1 === age2) return "Misma edad";
}

console.log(getOlderAge(37, 20));

// 19. Resultado extraño
// ¿Qué devuelve esta función? Escribila y analizala:

function plus(numero, numero2) {
  const suma = numero + numero2;
  return suma;
}

const resultado = plus(45, 50);
const resultado2 = plus(88, 20);
console.log(`Tengo ${resultado2} manzanitas y ${resultado} naranjitas`);

const resultadoExtranio = plus(plus(10, 20), plus(100, 0));
console.log(resultadoExtranio);

// Devuelve 130, ya que es la suma de los valores de cada parametro

// js
// Copy
// Edit
// function misterio(a, b) {
//   return (a && b) || "nada";
// }
// Probá con: misterio(true, "hola"), misterio(false, "chau"), misterio(0, 9)

// 20. Mini desafío
// Hacé una función que reciba nombre, edad, y género (puede ser null). Mostrá un mensaje como:

// Hola Lucio, tenés 28 años. No informaste tu género.

// Si se pasa un género, que diga:

// Sos hombre/mujer/etc.

function userInformation(nombre, edad, genero = null) {
  if (genero === null)
    return `Hola ${nombre}, tenés ${edad} años. No informaste tu género`;

  if (genero !== "Hombre" && genero !== "Mujer" && genero !== "No Binarie")
    return `Hola ${nombre}, tenés ${edad} años. Tu género es erroneo, ok?`;

  return `Hola ${nombre}, tenés ${edad} años. Sos ${genero}`;
}

console.log(userInformation("Lucio", "28", "No Binarie"));

// 1 Número mayor a 100

// Crear un programa que permita ingresar tres número y muestre si alguno de ellos es mayor a 100

function moreThan100(num1, num2, num3) {
  if (num1 > 100) console.log(`${num1} es mayor que 100`);
  if (num2 > 100) console.log(`${num2} es mayor que 100`);
  if (num3 > 100) console.log(`${num3} es mayor que 100`);
}

// moreThan100(prompt(), prompt('Escribe mes'), prompt('Escribe año'))
console.log(window);
// 2 Número dentro de rango

// Crear un programa que pida al usuario ingresar un número que represente el límite inferior del rango, uno que represente el límite mayor, y luego otro cualquiera y mostrar en un mensaje si el último número se encuentra dentro del rango ingresado.

function minMax() {
  const MIN = prompt("Introduce un valor minimo");
  const MAX = prompt("Introduce un valor maximo");
  const NUM = prompt("Introduce el valor del producto a comprar");
  console.log(
    `El rango es entre ${MIN} y ${MAX} pesos, y el numero es ${NUM} pesos`
  );
  if (MIN >= MAX || MAX <= MIN) return console.warn(`QUE CARAJO HACES`);
  if (NUM < MIN) console.log(`Error, ${NUM} es menor que el valor minimo`);
  else if (NUM > MAX)
    console.log(`Error, ${NUM} tiene mas valor que el maximo permitido`);
  else {
    console.log(`Filtraremos un producto acorde al valor de ${NUM} pesos`);
  }
}

minMax();

// 3 Donación de sangre

// Crear un programa que realice al usuario 3 preguntas: si se ha hecho tatuajes recientemente, si ha tenido o tiene hepatitis, si tiene anemia. Si responde a alguna de ellas afirmativamente, debe mostrar un mensaje que indique si puede o no donar sangre

function bloodDonation() {
  const TATTOO = prompt("Se ha hecho tatuajes recientemente? Responda con Si o No");
  const HEPATITIS = prompt("Ha tenido o tiene hepatitis? Responda con Si o No");
  const ANEMIA = prompt("Usted sufre de Anemia? Responda con Si o No");
  if (TATTOO || HEPATITIS || ANEMIA === 'Si')
    return console.log(`Lamentablemente usted no puede ser donador de sangre`);
  if (TATTOO === 'No', HEPATITIS === 'No', ANEMIA === 'No')
    return console.log("Usted puede llevar a cabo donaciones de sangre"); // al pedo === 'No', ya que apunta a la respuesta del prompt, sino que al enunciado, el exacto igual seria TATTOO === "Se ha hecho tatuajes recientemente? Responda con Si o No", como hacer para tomar la respuesta del usuario? ni idea pa
}

bloodDonation();

// 4 Autenticación

// Crear un programa que pida ingresar el usuario y la contraseña y los compare con el usuario y contraseña guardados en variables, y muestre en un mensaje si tiene el acceso autorizado


// 5 Mantenimiento

// Hacer un programa que pregunte por separado si el auto tiene aceite, agua, y neumáticos con presión. Mostrar en un mensaje si tiene que hacer mantenimiento o no si alguna de las respuestas es negativa

// 6 Acceso restringido

// Un club tiene las siguientes reglas: sólo pueden entrar miembros que tengan la cuota al día, o no miembros que tengan autorización. Hacer un programa que pregunte estas si es miembro, si tiene la cuota al día y si tiene autorización y muestre luego un mensaje indicando si tiene el acceso permitido o no.

// 7 Cátedra promocionada

// Hacer un programa que pida ingresar los valores de los tres parciales de la cátedra mostrar un mensaje indicando si promociona o no la cátedra. La misma se promociona si al menos dos de ellos fueron aprobados con una nota de 8 o más.

// 8 Número más grande (2 números)

// Hacer un programa que pida ingresar 2 números, y muestre como resultado el más grande de ellos. Una vez hecho esto, agregar la funcionalidad de que si alguno de los números es igual a otro, debe mostrar un mensaje diciéndolo.

// 9 Número más grande (3 números)

// Hacer un programa que pida ingresar 3 números, y muestre como resultado el más grande de ellos. Una vez hecho esto, agregar la funcionalidad de que si alguno de los números es igual a otro, debe mostrar un mensaje diciéndolo.

// 10 Términos y condiciones de uso

// Crear un programa que pregunte si acepta los términos y condiciones de uso. Si el usuario responde que sí, debe mostrar un mensaje que diga "Continuando con el proceso...". Si responde que no, debe mostrar un mensaje que diga "No se puede continuar con el proceso si no se aceptan los términos y condiciones de uso".

// 11 Quizz

// Crear un programa que sea un cuestionario con 3 preguntas de sí o no. Al finalizar, mostrar un mensaje de felicitaciones si se respondió bien a todas, o uno de que ha perdido el juego si respondió mal al menos una.

// 12 Autenticación

// Crear un programa que pida ingresar el usuario y la contraseña y los compare con el usuario y contraseña guardados en variables. Si coinciden debe mostrar un mensaje que diga "Autenticación exitoso" y si no, debe mostrar "Usuario o contraseña equivocados".

// 13 Juez de gusto

// Crear un programa que pida al usuario evaluar del 1 al 10 cuánto le gusta X cosa (a elección). Dependiendo de la respuesta, debe mostrar un mensaje en consonancia. Hacer mínimo 4 casos posibles. Si se ingresa algo que no sea un número del 1 al 10, mostrar un mensaje de advertencia y volver a pedir dicho número.

// 14 Calificación

// Crear un programa que permita ingresar el resultado de una evaluación con un puntaje del 1 al 10, y muestre un mensaje que diga:

// ¡Excelente!, si la nota es 10

// ¡Muy bien!, si la nota es 8 o 9

// Aprobado, si la nota es 6 o 7

// Reprobado, si la nota es menor a 6
