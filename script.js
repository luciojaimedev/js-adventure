let numerito = 395;
let numeritoFixeado = numerito.toFixed(30);
console.log(typeof numeritoFixeado);
let numerito2 = numeritoFixeado + 10;
console.log(numerito2);

const a = 10;
const b = 5.5;
const c = "30";

console.log(parseInt(a));
console.log(a + parseFloat(a));
a.toLocaleString;

console.log(estoEsUnaFuncion(25, 25));

function estoEsUnaFuncion(num1, num2) {
  return parseInt(num1) + parseInt(num2);
}

console.log(estoEsUnaFuncion("30", 90));

const funcionExpresada = function () {
  console.log(
    "Esto es una funcion expresada pa, no se ve afectada por el hoisting, a menos que sea un var(cacona)"
  );
};

funcionExpresada();

const mamushkasLvl1 = [[], [], ["final"]];
const llegueAlFinal = mamushkasLvl1[2][0];
console.log(llegueAlFinal);

const mamushkasLvl2 = [[], [], [], [[], ["x", "x", "final"]]];
const llegueAlFinal2 = mamushkasLvl2[3][1][2];
console.log(llegueAlFinal2);

const mamushkasLvl3 = [
  [],
  [],
  [
    [],
    [[]],
    [],
    [
      [],
      [],
      [],
      ["x"],
      [],
      [[], [], [], [], [], []],
      [
        [[], [], [], [], [[], ["x"], ["x", ["x", [], [[], [["final"]]]]]]],
        ["x"],
        [],
        [],
      ],
    ],
    [],
  ],
  [],
];
const llegueAlFinal3 = mamushkasLvl3[2][3][6][0][4][2][1][2][1][0][0];
console.log(llegueAlFinal3);

const hxhMultiPath = [
  [],
  [
    ["Tonpa", [], ["Majitani", [], ["Hisoka"]]],
    [
      [],
      ["Illumi", [["Falso Hisoka"], [], ["Uvogin"]], []],
      [
        [],
        ["Feitan", [["Chrollo"], [], ["Genthru"]], []],
        [[], ["Biscuit"], ["Razor"]],
      ],
    ],
    [
      [
        [],
        ["Kite", [], ["Cheetu", [[], ["Leol", [], ["Zazan"]]]]],
        [
          [],
          ["Youpi"],
          [
            "Pouf",
            [],
            [
              "Neferpitou",
              [],
              [
                ["Meruem"],
                ["Meruem?"], // Falso final
                ["Pitoutro"],
              ],
            ],
          ],
        ],
      ],
      [],
      [
        [],
        ["Netero"],
        [[], ["Shaiapouf", [], ["Menthuthuyoupi"]], ["Menthuthuyoupi"]],
      ],
    ],
  ],
  [],
];
const HxHFinal = hxhMultiPath[1][2][2][2][2][0];
console.log(HxHFinal);

// Cada propiedad(ej. nombre) dentro de un objeto esta compuesta por una KEY y un VALUE
const garu = {
  nombre: "garu",
  tipoDeAnimal: "gatito",
  color: "negro",
  edad: 10,
  rutinaDiaria: [
    "romper los huevos",
    "dormir",
    "maullar para que le abran la puerta",
    "acostarse arriba de la pc con calorcito",
    "acompañarme al baño",
  ],
  tienePiojitos: false,
  animalesAmigos: {
    charly: true,
    vex: false,
    pampa: null,
  },
  presentacion: function () {
    console.log(
      `Mi gatito se llama ${this.nombre}, tiene ${this.edad} años y le gusta ${this.rutinaDiaria[1]}, es un pedacho de nachi`
    );
  },
};
garu.presentacion();

function parOImpar(num) {
  if (num % 2 !== 0) {
    return `${num} es impar`;
  }
  return `${num} es par`;
}

console.log(parOImpar(14));

// dejame dormir 00 a 05
// buenos dias 6 a 11
// buenas tardes 12 a 18
//buenas noches 19 a 23

const saludos = function (horas) {
  if (typeof horas !== "number")
    return "No es valido, el valor no es un numero";
  if (horas >= 0 && horas <= 5) return "Dejame dormir";
  if (horas >= 6 && horas <= 11) return "Buenos dias";
  if (horas >= 12 && horas <= 18) return "Buenas tardes";
  if (horas >= 19 && horas <= 23) return "Buenas noches";
  return "Que haces flaco";
};
console.log(saludos());

const timeRanges = {
  sleep: {
    min: 0,
    max: 5,
  },
  morning: {
    min: 6,
    max: 11,
  },
  evening: {
    min: 12,
    max: 18,
  },
  night: {
    min: 19,
    max: 23,
  },
};

const timeState = (hour) => {
  //Si agrego numero random
  if (
    hour > timeRanges.night.max ||
    hour < timeRanges.sleep.min ||
    typeof hour !== "number"
  )
    return "???";
  //Durmiendo
  if (hour >= timeRanges.sleep.min && hour <= timeRanges.sleep.max)
    return "Let me sleep";
  //Dia
  if (hour >= timeRanges.morning.min && hour <= timeRanges.morning.max)
    return "Good Morning";
  //Tardes
  if (hour >= timeRanges.evening.min && hour <= timeRanges.evening.max)
    return "Good Evening";
  //Noches
  if (hour >= timeRanges.night.min && hour <= timeRanges.night.max)
    return "Good Night";
};

//Operador Ternario (condicion) ? verdadero: falsa / condición ? valorSiVerdadero : valorSiFalso;

console.log("Operador Ternario");
let edad1 = 18;
let eresMayor = edad1 >= 18 ? "Eres mayor de edad" : "Eres menor de edad";
const personaMayor = edad1 >= 18 ? "SOS MAYOR PA" : "SOS MENOR";
console.log(personaMayor);

let edades = 6;

switch (edades) {
  case 5:
    console.log("Sos un mocoso");
    break;
  case 15:
    console.log("Sos un adolescente");
    break;
  case 25:
    console.log("Sos un adulto");
    break;
  default:
    console.log("No se que sos, me da paja poner tantos numeritos");
    break;
}

// Para hacer un lindo contadorcito de arrays, debemos establecer una variable externa
let contador = 0;
// Luego, definimos el array y el while, con la condicion de que el valor de la variable sea menor al lenght del array
const arrayDeFrutas = ["Manzana", "Banana", "Limon", "Naranja", "Sandia"];
while (contador < arrayDeFrutas.length) {
  // Finalmente, nuestro console.log constaria del array +[variable con valor] y reasignar la variable con una suma ++ para que el contador sume de a 1
  console.log(arrayDeFrutas[contador]);
  contador++;
}

contador = 0;
do {
  console.log(contador++);
  console.log("hola");
} while (contador >= 10);

console.clear();
// 1. Contar del 1 al 10

let contador2 = 0;
while (contador2 <= 10) {
  console.log(contador2++);
}

// 2. Contar del 10 al 1

let contador3 = 10;

while (contador3 >= 0) console.log(contador3--);

// 3. Sumar numeros hasta llegar al 100

let contador4 = 0;

while (contador4 <= 100) console.log(contador4++);

// 4. Contar cuantos numeros pares hay entre 1 y 50 (mostrar los pares en consola)

let contador5 = 1;
let numerosPares = 0;

while (contador5 <= 50) {
  if (contador5 % 2 === 0) {
    console.log(contador5);
    numerosPares++;
  }
  contador5++;
}
console.log(`Hay ${numerosPares} pares`);

// 5. Pedir al usuario con un prompt un numero y mostrar su tabla de multiplicar del 1 al 10 usando while

// const numeroUsuario = prompt("Introduzca un numero");
// console.log(numeroUsuario);
// let multiplicador = 1;

// while (multiplicador <= 10) {
//   console.log(Number(numeroUsuario) * multiplicador);
//   multiplicador++;
// }

// 6. Simula que pedis una contraseña y la contraseña va a ser parmechiaaano, mientras la contraseña no sea parmechiaaano seguimos mostrando un prompt, cuando sea parmechiaaaano dejamos de mostrar el prompt y mostramos un alert que diga 'Se de algunas cosas'

const iterateArray = function (arrayDefault) {
  for (let i = 0; i < arrayDefault.length; i++) {
    const element = arrayDefault[i];
    console.log(element);
  }
};

iterateArray(arrayDeFrutas);

const bonzoAdulto = {
  nombre: "Bonzo",
  peso: "50 kgs",
  altura: "3 metros",
  raza: "labrador",
};

const garuAdulto = {
  nombre: "Garu",
  peso: "48 kgs",
  altura: "3 metros",
};

const vexAdulto = {
  nombre: "Cacona",
  olor: "caca",
  altura: "3 metros",
};

const animales = [garuAdulto, vexAdulto, bonzoAdulto];

const iterationArrayAndThenObject = function (array) {
  for (let i = 0; i < array.length; i++) {
    const obj = array[i];
    console.log(obj);
    for (const key in obj) {
      console.log(`tiene un ${key} cuyo valor es ${obj[key]}`);
    }
  }
};

iterationArrayAndThenObject(animales);

try {
  console.log("En el Try se agrega el codigo a evaluar");
  noExiste;
  console.log("Segundo mensaje del try");
} catch (error) {
  console.log(
    "catch(error) al capturar un error muestra un mensaje en consola"
  );
  console.log(error);
} finally {
  console.log("Esto se ejecuta siempre despues del try-catch");
}

// Crear una función que reciba un array y un índice. Debe devolver el valor en ese índice.
// Si el índice no existe, debe lanzar un error y manejarlo con try...catch.

const frutitas = ["manzana", "banana", "naranja"];

function arrayFrutitas(array, index) {
  if (index < 0 || index > array.length) {
    throw new Error(`Error, este ${index} no existe`);
  }
  try {
    return array[index];
  } catch (error) {
    console.error(error);
  }
}

console.log(arrayFrutitas(frutitas, 2));

//1 - Saltar los números pares -> Mostrar solo los números impares del 1 al 10.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
    continue;
  }
  console.log(numeros[i]);
}

//2 - Detenerse en el primer múltiplo de 7 -> Recorrer los números del 1 al 20 e imprimirlos uno por uno hasta encontrar el primer múltiplo de 7.

console.clear();

const numeros2 = [2, 5, 9, 14, 18, 21, 30];
for (let i = 0; i < numeros2.length; i++) {
  console.log(numeros2[i]);
  if (numeros2[i] % 7 === 0) {
    console.log(`El Multiplo de 7 es ${numeros2[i]}`);
    break;
  }
}

//1 - Tenés un array llamado coordenadas. Cada elemento dentro de ese array es otro array con dos números. Esos números representan un punto en el espacio: la coordenada x y la coordenada y.

// Recorre el array coordenadas usando un bucle y en cada vuelta del bucle, usá destructuración para separar los dos valores y mostrá un mensaje por consola

const coordenadas = [
  [10, 20],
  [30, 40],
  [50, 60],
];

for (let i = 0; i < coordenadas.length; i++) {
  const [x, y] = coordenadas[i];
  console.log(`Coordenada x ${x}, coordenada y ${y}`);
}




console.clear()

//Usar desestructuración para obtener nombre y edad.
// Desestructurar el array tripulacion para obtener los dos primeros miembros en variables llamadas primerCompanero y segundoCompanero.

const luffy = {
  nombre: "Monkey D. Luffy",
  edad: 19,
  tripulacion: ["Zoro", "Nami", "Usopp", "Sanji"]
};

const {nombre, edad, tripulacion} = luffy
console.log(nombre, edad)
const [primerCompanero, segundoCompanero] = luffy.tripulacion
console.log(primerCompanero, segundoCompanero)