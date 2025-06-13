// Formas de declarar variables (las variables son cajitas)

var isCharlitoChad = true; // se puede redeclarar y reasignar como quieras (no usar jamas!)
var isCharlitoChad = false;

let isSunny = true; // no se puede redeclarar pero si reasignar, deberiamos usarlo cuando necesitemos reasignar (ejemplo modo nocturno) y no es necesario inicializarla
isSunny = false;

const fingerPrint = "momo"; // no se puede redeclarar ni reasignar, deberiamos usarlo siempre que podamos (si o si tiene que ser inicializada)

// Tipos de datos que puede tener una variable

const catName = "Garu"; // string
let age = 28; // number
let isRaining = false; // boolean
let gender = null; // null
let forgotToAssign; // undefined
const pint = 31457742916835353535353n; // bigint

const eightyThree = 80 + 3;
const aLotOfNumbers = 4 ** 25;
const ultimateDivision = aLotOfNumbers / eightyThree;
console.log(ultimateDivision);

let futureNumber = null;
const fortySeven = 47;
futureNumber = 3;
const futureMultiplication = futureNumber * fortySeven;
console.log(typeof futureNumber);
console.clear();

// Operadores de Comparacion

console.log(4 === "4"); // Comprueba si el valor de a es igual al de b (de forma ESTRICTA)
console.log(4 == "4"); // Comprueba si el valor de a es igual al de b
console.log(4 > 4); // Comprueba si el valor de a es mayor al de b
console.log(4 < 4); // Comprueba si el valor de a es menor al de b
console.log(4 >= 4); // Comprueba si el valor de a es mayor o igual al de b
console.log(4 <= 4); // Comprueba si el valor de a es menor o igual al de b
console.log(4 !== "4"); // Comprueba si el valor de a es distinto al de b (de forma ESTRICTA)
console.log(4 != "4"); // Comprueba si el valor de a es distinto al de b
console.clear();

// Operadores Logicos

// Operador AND

console.log(4 === 4 && 5 === 3); // Devuelve false si uno o mas de los valores es false
console.log(4 === 4 && 5 > 0); // Devuelve true si ambos valores son true

// Operador OR

console.log(4 === 4 || false); // Devuelve true si al menos uno es true
console.log(4 === 3 || 4 > 10); // Devuelve false si ambos valores son false

// Operador NOT

console.log(!true); // Invierte el valor booleano de lo que se tenga
console.log(!false);
console.log(!4 === false); // Cuando lo niega se basa en el valor booleano

// Operador Nulish

console.log("jorgito" ?? "valor de emergencia"); // Devuelve la derecha si la izquierda es null o undefined
console.log(false ?? "valor de emergencia");
console.log(undefined ?? "valor de emergencia");

// Funciones
// Sirven para:
// 1) Encapsular codigo y aislarlo
// 2) Reutilizar codigo
// 3) Generar codigo flexible y reutilizable a traves de parametros y argumentos

function greetings(nombre, edad) {
  console.log(`Saludos ${nombre} tu edad es ${edad} añitos`);
}
greetings("Lucio", 20);
greetings("Charlito", 15);
greetings("Dibella", 43);

function plus(numero, numero2) {
  const suma = numero + numero2;
  return suma;
}

const resultado = plus(45, 50);
const resultado2 = plus(88, 20);
console.log(`Tengo ${resultado2} manzanitas y ${resultado} naranjitas`);

const resultadoExtranio = plus(plus(10, 20), plus(100, 0));
console.log(resultadoExtranio)
