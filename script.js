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
console.log(resultadoExtranio);

// Tipos de funciones

// Funciones por declaracion
// La funcion mas basica, utilizando primero la palabra clave function, seguido del nombre de la funcion y luego el bloque de la funcion

function saludar() {
  return "Hola";
}

saludar();
typeof saludar;

// Funciones por expresion
// Se utiliza para crar una funcion en el interior de una variable, lo que permite posteriormente ejecutar la variable como si fuera una funcion. Tener en cuenta que el nombre de la funcion pasa a ser inutil, ya que para el sistema no existe

const saludo = function saludar() {
  return "Hola";
};

saludo();

// Funciones como objetos
// Realmente no es tan util, pero se puede utilizar para declarar funciones como si fuesen objetos

const saludar1 = new Function("return 'Hola';");

saludar1();

// Funciones anonimas
// Es un tipo de funcion que se declara sin nombre y se aloja en el interior de una variable, haciendo referencia a ella cada vez que queramos utilizarla

const saludo1 = function () {
  return "Hola";
};

saludo1;
saludo1();

// Funciones 'Callbacks'
// Utilizada para pasar una funcion B por parametro a una funcion A, asi la funcion A puede ejecutar esa funcion B de forma generica desde su codigo, y asi podemos definirlas desde fuera de la funcion

const fB = function () {
  console.log("Funcion B ejecutada.");
};

const fA = function (callback) {
  callback();
};

fA(fB);

// Funciones anidadas
// Son funciones que pueden declarar otras funciones en el mismo bloque

function funcionExterna() {
  let variableExterna = "Hola, soy una variable de la funcion externa";

  function funcionInterna() {
    let variableInterna = " y yo soy una variable de la funcion interna";
    console.log(variableExterna + variableInterna);
  }
  funcionInterna();
}

funcionExterna();

// Clousure
// Puede ser utilizado para crear una estructura de datos privados y controlar el acceso a ciertas variables, manteniendo la interfaz limpia y bien definida. Un Clousure se crea cada vez que una funcion es creada

function crearContador() {
  let contador = 0;

  return {
    incrementar: function () {
      contador++;
      console.log(contador);
    },
    decrementar: function () {
      contador--;
      console.log(contador);
    },
    obtenerValor: function () {
      return contador;
    },
  };
}

// Creación de Strings

// Comillas simples

let miCadena = "Esta es mi cadena";

// Comillas dobles

let otraCadena = "Esta es mi otra cadena";

// Backtips

let cadenaBack = `Esta es mi cadena`;

// Concatenación con +

let firstName = "Lucio";
let lastName = "Jaime";
let fullName = firstName + " " + lastName;

// Concatenación con template literals

fullName = `Mi nombre completo es: ${firstName} ${lastName}`;

// Concatenación de array con join()

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let frutas = fruits.join("");

// Concatenación con concat

firstName = "Bienve";
fullName = firstName.concat(" ", "Jaime");
console.log(fullName);

// Cómo escapar caracteres, por ejemplo ' o ". Alternando comillas o con caracter de escape o template literals

let c = `Esto es una " do I'm from Motril`;
c = "Esto es una \" do I'm from Motril";

// Strings largos con saltos de línea

let poema = `Lorem ipsum dolor sit,
amet consectetur adipisicing
elit.Sapiente voluptates
delectus voluptatem.`;

// if / else / else if

let edad = 18;
if (edad == 18) {
  console.log("Es mayor de edad");
} else if (edad > 13 && edad < 18) {
  console.log("Es adolescente");
} else {
  console.log("Es menor de 13 años");
}

// Condicional ternario

edad = 21;
let mensaje = edad >= 18 ? "Es mayor de edad" : "Es menor de edad";
console.log(mensaje);

// Condicional Switch

// Ejemplo 1
switch (new Date().getDay()) {
  case 6:
    text = "Today is Saturday";
    break;
  case 0:
    text = "Today is Sunday";
    break;
  default:
    text = "Looking forward to the weekend";
}

// Ejemplo 2
firstName = "Lucio";

switch (firstName.length) {
  case 6:
    console.log("Su nombre tiene 6 caracteres");
    break;
  case 2:
    console.log("Su nombre tiene 2 caracteres");
    break;
  default:
    console.log(
      `Su nombre no tiene ni 2 ni 6 caracteres, tiene ${firstName.length} caracteres`
    );
}

// While

let contador = 0;
while (contador < 10) {
  console.log(contador);
  contador++;
}

// Do While

contador = 0;
do {
  console.log(contador);
  contador++;
} while (contador < 10);

// For

for (let i = 0; i < 10; i++){
  console.log(i)
}

