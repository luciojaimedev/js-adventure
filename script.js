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
    "Esto es una funcion expresada pa, no se ve afectada por el hoisting, a menos que sea un var"
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

console.clear();

//Usar desestructuración para obtener nombre y edad.
// Desestructurar el array tripulacion para obtener los dos primeros miembros en variables llamadas primerCompanero y segundoCompanero.

const luffy = {
  nombre: "Monkey D. Luffy",
  edad: 19,
  tripulacion: ["Zoro", "Nami", "Usopp", "Sanji"],
};

const { nombre, edad, tripulacion } = luffy;
console.log(nombre, edad);
const [primerCompanero, segundoCompanero] = luffy.tripulacion;
console.log(primerCompanero, segundoCompanero);

// Mostrar en consola: "Zoro usa el estilo Santoryu y su recompensa es de 320000000 berries."
console.clear();
const personaje = {
  nombre: "Zoro",
  edad: 21,
  estilo: "Santoryu",
  recompensa: 320000000,
};

console.log(
  `${personaje.nombre} usa el estilo ${personaje.estilo} y su recompensa es de ${personaje.recompensa} berries`
);

// Cambiá el nombre del barco por "Going Merry"
// Agregá una propiedad nueva que se llame velocidadMaxima con valor 50

const barco = {
  nombre: "Thousand Sunny",
  tripulacion: 9,
};

barco.nombre = "Going Merry";
barco.velocidadMaxima = 50;

console.log(barco);

// Mostrá en consola: "Tengo 5 manzanas", etc.
console.clear();

const frutas = {
  manzana: 5,
  banana: 3,
  naranja: 2,
  pera: 6,
};

for (const key in frutas) {
  const element = frutas[key];
  console.log(element);
  console.log(`Tengo ${element} ${key}s`);
}

//   ✅  EJERCICIO 1: Sumar números
// Crea una función llamada sumar que reciba cualquier cantidad de números como argumentos y devuelva la suma total.

const funcionSumar = function (...arrayNum) {
  let acumulador = 0;
  for (let i = 0; i < arrayNum.length; i++) {
    acumulador += arrayNum[i];
  }
  return acumulador;
};

console.log(funcionSumar(20, 30, 30, 40, 50));

// ✅ EJERCICIO 2: Contar argumentos
// Crea una función llamada contarArgumentos que reciba cualquier cantidad de argumentos y muestre en consola:
// 👉 "Recibí X argumentos.", donde X es el número de argumentos pasados.

const contarArgumentos = function (...argumentoArray) {
  console.log(`Recibi ${argumentoArray.length} argumentos`);
};

contarArgumentos("asd", "asd");

// ✅ EJERCICIO 3: Clonar un array -> Crea un nuevo array que: Sea una copia exacta del original usando el operador spread y tenga agregada la fruta "pera" al final.
// (Asegurate de que el array original no se modifique.)

const frutas1 = ["manzana", "banana", "naranja"];
const frutas2 = [...frutas1, "pera"];

console.log(frutas2);

// ✅ EJERCICIO 4: Combinar objetos -> Crea un nuevo objeto llamado combinado que contenga todas las propiedades de base y extra usando el operador spread.

const base = { nombre: "Zoro", edad: 21 };
const extra = { arma: "katanas", estilo: "Santoryu" };
const combinado = { ...base, ...extra };

console.log(combinado);

const numeros1 = [1, 2, 3, 4, 5];

for (let i = 0; i < numeros1.length; i++) {}

numeros1.forEach(() => {});

function cc() {}

const cc2 = (a, b) => ({ result: a + b, hola: "salu2" });

console.log(cc2(1, 4));

const objetoContenedor = {
  name: "soy el contenedor",
  objetoInterior: {},
  inicializar() {
    this.objetoInterior.fn = () => {
      console.log(this.name); // 'this' se refiere al objetoContenedor
    };
  },
};

objetoContenedor.inicializar(); // Se define la función flecha en el contexto correcto
objetoContenedor.objetoInterior.fn(); // Imprime: "soy el contenedor"

// Mostrar nombre con función normal
// Consigna: Creá un objeto usuario con una propiedad nombre y un método mostrar Nombre que use this para mostrar el nombre por consola.

const usuario = {
  nombre: "jorgito",
  mostrarNombre() {
    console.log(this.nombre);
  },
};

usuario.mostrarNombre();

// Método que devuelva una frase
// Consigna: Un objeto animal con propiedad especie y un método hablar que diga: "Soy un <especie>" usando this.

const animal = {
  especie: "iguanita",
  queSoy() {
    console.log(`Soy una ${this.especie}`);
  },
};

animal.queSoy();

// Revertir un texto sin métodos
// Consigna: Una función que reciba un string y devuelva otro string con los caracteres en orden inverso (usando for, no .reverse()).

const str = "string cualquiera";
console.log(str.length);
console.log(str[16]);
console.log(str[str.length - 1]);

const inverseString = (string) => {
  let element = "";
  for (let i = string.length - 1; i >= 0; i--) {
    element += string[i];
  }
  return element;
};

console.log(inverseString("string"));

console.clear();

const PersonajeNaruto = function (nombre, apellido, aldea) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.aldea = aldea;
};

PersonajeNaruto.prototype.saludo = function () {
  console.log(
    `Hola, soy ${this.nombre} ${this.apellido} de la aldea de la ${this.aldea} y te voy a sacar la chucha me oiste conchetumare`
  );
};

const naruto = new PersonajeNaruto("Naruto", "Uzumaki", "Hoja");
const shikamaru = new PersonajeNaruto("Shikamaru", "Nara", "Hoja");

console.log(naruto);
console.log(shikamaru);

naruto.saludo();
shikamaru.saludo();

// 🔹 Ejercicio 1: Animales y Perros
// Objetivo: Usar funciones constructoras y herencia prototípica para crear un Animal genérico y luego un Perro que hereda de él.

// 1. Crear una función constructora Animal que tenga nombre y sonido
// 2. Crear un método hacerSonido que muestre el sonido
// 3. Crear una función constructora Perro que herede de Animal
// 4. Perro debe tener también una raza
// 5. Instanciar un perro y mostrar su sonido y raza
// Resultado esperado con el perro "Firulais":
// "Firulais hace: guau guau"
// "Firulais es un perro de raza Labrador"

const Animal = function (nombre, sonido) {
  this.nombre = nombre;
  this.sonido = sonido;
};

Animal.prototype.hacerSonido = function () {
  console.log("anachi");
};

function Perro(nombre, sonido, raza) {
  this.super = Animal;
  this.super(nombre, sonido);
  this.raza = raza;
}

Perro.prototype = new Animal();
Perro.prototype.constructor = Perro;

const firulais = new Perro("Firulais", "guau guau", "Labrador");

console.log(firulais);
firulais.hacerSonido();

// 🔹 Ejercicio 2: Vehículo y Auto
// Objetivo: Practicar la herencia entre un constructor genérico y uno más específico, agregando métodos distintos.

// 1. Crear una función constructora Vehiculo con marca y velocidad
// 2. Agregar un método acelerar que aumente la velocidad
// 3. Crear una función constructora Auto que herede de Vehiculo
// 4. Auto también debe tener un modelo
// 5. Crear un método mostrarInfo que muestre marca, modelo y velocidad
// Resultado esperado con el auto "Toyota Corolla":
// "Toyota Corolla va a 60km/h"
// (después de acelerar dos veces)
// "Toyota Corolla va a 100km/h"

const Vehiculo = function (marca, velocidad) {
  this.marca = marca;
  this.velocidad = velocidad;
};

Vehiculo.prototype.acelerar = function () {
  return (this.velocidad += 20);
};

const Auto = function (marca, velocidad, modelo) {
  this.super = Vehiculo;
  this.super(marca, velocidad);
  this.modelo = modelo;
};

Auto.prototype = new Vehiculo();
Auto.prototype.constructor = Auto;

Auto.prototype.mostrarInfo = function () {
  console.log(
    `Este auto es un ${this.marca} ${this.modelo} y va a ${this.velocidad}kms por hora`
  );
};

const toyota = new Auto("Toyota", 60, "Corolla");
console.log(toyota);
toyota.acelerar();
toyota.acelerar();
toyota.mostrarInfo();

class Reptil {
  constructor(nombre, color) {
    this.nombre = nombre;
    this.color = color;
  }

  sonido() {
    console.log("PSSSSSSSSPSSSSSS xD");
  }
}

class Lagalto extends Reptil {
  constructor(nombre, color, tamanio) {
    super(nombre, color);
    this.tamanio = tamanio;
  }

  frase() {
    console.log("IGUANA LAGALTIJA LAGALTOOO");
  }
}

const giovaniVazquez = new Lagalto("Giovanni Vazquez", "negro", "2 metros");
console.log(giovaniVazquez);
giovaniVazquez.frase();

// 🧩 Ejercicio 1: Clase Producto y subclase Libro
// Objetivo: Práctica básica de herencia y uso de super.
// 1. Crea una clase Producto con propiedades: nombre, precio.
// 2. Agregá un método mostrarInfo que devuelva un string con esos datos.
// 3. Luego creá una clase Libro que extienda Producto y tenga también autor.
// 4. Sobrescribí el método mostrarInfo para que también muestre el autor.
// 5. Instanciá un libro y probá el método.

class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
  mostrarInfo() {
    console.log(`Este producto es ${nombre} y cuesta ${precio} pesitos`);
  }
}
class Libro extends Producto {
  constructor(nombre, precio, autor) {
    super(nombre, precio);
    this.autor = null;
  }

  get onePieceAutor() {
    return this.autor;
  }

  set setOnePieceAutor(autor) {
    this.autor = autor;
  }

  mostrarInfo() {
    if (this.autor === null) return console.error("El autor es obligatorio");
    console.log(
      `Este libro se titula ${this.nombre}, cuesta ${this.precio} pesitos y fue escrito por ${this.autor}`
    );
  }
}

const onePiece = new Libro("One Piece", "3200", "Eiichiro Oda");
console.log(onePiece);
onePiece.setOnePieceAutor = "Eiichiro Oda";
onePiece.mostrarInfo();
console.log(onePiece.onePieceAutor);

// 🧩 Ejercicio 2: Clase Vehiculo y subclases Auto y Moto
// Objetivo: Aplicar herencia y métodos propios en subclases.
// 1. Clase Vehiculo con propiedades: marca, modelo, velocidad.
// 2. Método acelerar que aumente la velocidad en 10.
// 3. Clase Auto que extienda Vehiculo y tenga propiedad puertas.
// 4. Clase Moto que extienda Vehiculo y tenga propiedad tipo (ej: “scooter”).
// 5. Sobrescribí acelerar en Moto para que sume solo 5.
// 6. Instanciá uno de cada uno y probá acelerar.

class Vehiculo1 {
  constructor(marca, modelo, velocidad) {
    this.marca = marca;
    this.modelo = modelo;
    this.velocidad = velocidad;
  }
  acelerar() {
    this.velocidad += 10;
  }
}

class Auto1 extends Vehiculo1 {
  constructor(marca, modelo, velocidad, puertas) {
    super(marca, modelo, velocidad);
    this.puertas = puertas;
  }
}

class Moto1 extends Vehiculo1 {
  constructor(marca, modelo, velocidad, tipo) {
    super(marca, modelo, velocidad);
    this.tipo = tipo;
  }
  acelerar() {
    this.velocidad += 5;
  }

  static sonido() {
    console.log("ruuum ruuum");
  }
}

Moto1.sonido();

const fitito = new Auto1("Lamborghini", "Diablo", 300, 2);
const miMotito = new Moto1("Jianshe", "JS-125", 125, "Enduro");
fitito.acelerar();
miMotito.acelerar();
console.log(fitito);
console.log(miMotito);

// 🧩 Ejercicio 3: Clase CuentaBancaria y CuentaAhorro
// Objetivo: Métodos con validaciones y super.
// 1. Clase CuentaBancaria con titular, saldo.
//    Métodos: depositar(cantidad), retirar(cantidad), verSaldo().
//    Retirar debe verificar que haya suficiente saldo.
// 2. Clase CuentaAhorro extiende CuentaBancaria.
//    Tiene propiedad interés (porcentaje).
//    Método aplicarInteres() que incremente el saldo.
// 3. Instanciá una CuentaAhorro, depositá, aplicá interés y retirá.

class CuentaBancaria {
  constructor(titular, saldo) {
    this.titular = titular;
    this.saldo = saldo;
  }
  depositar(cantidad) {
    this.saldo += cantidad;
  }
  retirar(cantidad) {
    if (this.saldo < cantidad) return console.error(`Fondos insuficientes`);
    this.saldo -= cantidad;
  }
  verSaldo() {
    console.log(`Tenes ${this.saldo} en tu cuenta, pobre de mierda xD`);
  }
}

class CuentaAhorro extends CuentaBancaria {
  constructor(titular, saldo, interes) {
    super(titular, saldo);
    this.interes = interes;
  }
  aplicarInteres(interes) {
    const interesesCalculados = (this.saldo * interes) / 100;
    return (this.saldo = this.saldo + interesesCalculados);
  }
}

const miCuenta = new CuentaAhorro("Lucio Jaime", 0, 0);
console.log(miCuenta);
miCuenta.depositar(500);
miCuenta.aplicarInteres(20);
miCuenta.retirar(1150);
console.log(miCuenta);
miCuenta.verSaldo();
console.log(miCuenta);

const fecha = new Date();
console.log(fecha.toLocaleTimeString());
const fechaNacimiento = new Date(1997, 4, 3);
console.log(fechaNacimiento.toLocaleString());
console.log(fecha.toDateString());

//Ejercicio 1: Número aleatorio entre 1 y 10 ->  Generá un número entero aleatorio entre 1 y 10 e imprimilo en consola.

console.log(Math.round(Math.random() * 10));

// Ejercicio 2: Redondear número

console.log(Math.round(8.3));

//Ejercicio 3: Raíz cuadrada -> Enunciado: Pedí un número y devolvé su raíz cuadrada

console.log(Math.sqrt(81));

//Ejercicio 4: Adivina el número -> El programa genera un número aleatorio entre 1 y 5. El usuario tiene que adivinarlo. Si acierta, gana. Si no, se muestra el número correcto.
console.clear();

const laQuiniela = () => {
  const numeroRandom = Math.ceil(Math.random() * 5);
  const numeroIntroducido = parseInt(prompt("Introduzca un numero del 1 al 5"));

  if (isNaN(numeroIntroducido)) {
    console.error("Caracter invalido, por favor introduzca un numero");
    return;
  }

  if (numeroIntroducido <= 0 || numeroIntroducido > 5) {
    console.error("Numero invalido, introduzca un valor entre el 1 y el 5");
    return;
  }

  if (numeroRandom !== numeroIntroducido) {
    console.log(
      `Fallaste bolas tristes, el numero ganador era el ${numeroRandom}`
    );
    return;
  }

  console.log("CONGRATULACIONES PA GANASTE UNA PS5");
};

// setInterval(()=>{
// const numeroRandom = Math.ceil(Math.random() * 5);
// console.log(numeroRandom)
// }, 100)

//Ejercicio 1: Mostrar mensaje si el usuario está logueado ->  Si la variable logueado es verdadera, mostrar por consola el mensaje "Bienvenido de nuevo".

const logueado = true;

console.log(logueado && "Bienvenido de nuevo");

//Ejercicio 2: Asignar nombre por defecto -> Si la variable nombre está vacía ("", null o undefined), asignarle "Invitado".
// Mostrar el nombre final por consola.

const greetingsUser = (nombre) => {
  const nombreUsuario = nombre || "Invitado";
  return nombreUsuario;
};

console.log(greetingsUser(""));

//Ejercicio 3: Evitar ejecutar una función si no hace falta -> Si los datos no están cargados (variable yaCargado es false), entonces ejecutar la función cargarDatos() que imprime "Cargando...".

let yaCargado = false;

const cargarDatos = () => {
  return yaCargado || console.log("Cargando...");
};

let cargaCompleta = yaCargado || cargarDatos();

const asignarNombreUsuario = (nombre) => nombre || "Usuario Anonimo";

const usuarioJorgito = {
  edad: 34,
  email: "jorgitolindo123@gmail.com",
  nombreDeUsuario: asignarNombreUsuario("jorgito"),
};

console.log(usuarioJorgito);

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const emailcito = "lucioCamioneta_580@hotmail.com";

console.log(EMAIL_REGEX.test(emailcito));

// if (emailRegEx.test(emailcito)) {
//   alert("Email Aceptado!!");
// } else {
//   alert("Email Invalido");
// }

// Hacer una funcion que muestre un prompt pidiendo el mail del usuario, si el resultado es que el mail no es valido, seguir mostrando el prompt infinitamente hasta que sea un resultado valido y en ese caso le decimos 'Email Aceptado'

console.clear();

// const pedirEmail = () => {
//   let userEmail = prompt("Introduzca su email");

//   if (userEmail === null)
//     return alert("Inicio de sesion cancelado, vuelva a reiniciar la ventana");

//   while (!EMAIL_REGEX.test(userEmail)) {
//     userEmail = prompt("Email erroneo, intente nuevamente con un email valido");
//   }

//   return alert("Email Aceptado");
// };

// pedirEmail();

import { PI } from "./exercises.js";

console.log(PI);

// 2) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

const charCounter = (chainText) => {
  console.log(chainText.length);
};

charCounter("Hola Mundo");

// 3) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

const charCutter = (
  string,
  position = 0,
  amountToDelete = 1,
  startFromEnd = false
) => {
  if (startFromEnd) return string.slice(position, -amountToDelete);

  return string.slice(position, amountToDelete);
};

console.log(charCutter("Hola Mundo", 0, 2));

// 4) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

const returnArray = (string) => {
  if (typeof string !== "string") return console.warn("ERROR ERROR ERROR");

  return string.split(" ");
};

console.log(returnArray("Hola este es mi texto"));

// 5) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

const repeatText = (string, timesToRepeat, spacer = " ") => {
  if (typeof string !== "string")
    return console.warn("otra vez hincha pelotas?");

  if (typeof timesToRepeat !== "number")
    return console.warn("otra vez hincha pelotas?");

  return (string + spacer).repeat(timesToRepeat);
};

console.log(repeatText("hola que tal", 45));

// 6) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

// Hacemos una funcion que recorra un string
// Tiene que empezar de atras para adelante (string.length)

const invertedChars = (string) => {
  let box = "";
  for (let i = string.length - 1; i >= 0; i--) {
    box += string[i];
  }
  console.log(box);
};

invertedChars("Hola Mundo");

const invertedCharsMethods = (string) => {
  let stringConverted = string.split("");
  stringConverted.reverse();
  console.log(stringConverted.join(""));
};

invertedCharsMethods("Hola Mundo");

// 7) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

const repeatedWordCounter = (string, finder) => {
  let stringArray = string.split(" ");
  let numerito = 0;
  if (typeof finder !== "string" || typeof string !== "string")
    return console.error("Valor incorrecto, introduzca un texto valido");
  for (let i = 0; i < stringArray.length; i++) {
    const element = stringArray[i];
    if (element === finder) {
      numerito++;
    }
  }
  if (numerito === 0)
    return console.log(`Esta palabra no se repite ninguna vez`);
  if (numerito === 1)
    return console.log(`Esta palabra se repite ${numerito} vez`);
  console.log(`Esta palabra esta repetida ${numerito} veces`);
  return numerito;
};

repeatedWordCounter("aa", "caca");

// 8) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

const palindromo = (string) => {
  if (typeof string !== "string") return console.error("Caracter invalido");
  const reversedString = string.split("").reverse().join("");
  if (string === reversedString) {
    return console.log(true);
  }
  console.log(false);
};

palindromo("salas");

// 9) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

const patternDeleter = (string, pattern) => {
  if (!string || !pattern) return console.warn("Se necesitan dos parametros");

  if (typeof string !== "string" || typeof pattern !== "string")
    return console.warn("Los parametros deben ser strings");

  if (!string.includes(pattern))
    return console.warn("pattern no esta borrando nada...");

  return string.replaceAll(pattern, "");
};

console.log(patternDeleter("xyz1, xyz2, xyz3, xyz4, xyz5", "xyz"));

// 10) Programa una función que obtenga un numero aleatorio entre 501 y 600.

const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

console.log(randomNumber(501, 600));

// 11) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

const capicua = (number) => {
  if (typeof number !== "number")
    return console.warn("Este caracter es invalido, introduzca un numero");

  if (number <= 9 && number >= 0)
    return console.warn("Este numero es muy pequeño para ser capicua");

  if (number < 0)
    return console.warn("Los numeros negativos no pueden ser capicua...");

  const reverseNumber = Number(number.toString().split("").reverse().join(""));

  if (number !== reverseNumber)
    return console.log(`El numero ${number} no es capicua`);

  return console.log(`El numero ${number} es capicua, loquisimo...!!!`);
};

capicua(22);

// 12) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

const factorial = (number) => {
  let acumulator = 1;
  for (let i = 1; i <= number; i++) {
    acumulator *= i;
    console.log(acumulator);
  }
  return acumulator;
};

factorial(5);

// 13) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

const primeNumber = (number) => {
  if (typeof number !== "number")
    return console.warn("Este caracter es invalido, introduzca un numero");
  let divisores = 0;
  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      divisores += (number % i) + 1;
    }
  }

  if (divisores <= 2) return console.log(`${number} es un numero primo`);

  return console.log(`${number} NO es un numero primo`);
};

primeNumber(97);

// 14) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.

const evenOrOdd = (number) => {
  if (typeof number !== "number")
    return console.warn("Este caracter es invalido, introduzca un numero");

  if (number % 2 === 0) return console.log(`${number} es un numero par`);

  return console.log(`${number} es un numero impar`);
};

evenOrOdd(29);

// 15) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

const temperatureTypeCalculator = (temperature, type) => {
  if (typeof temperature !== "number")
    return console.warn("Unicamente se permite introducir valores numericos");

  if (type !== "C" && type !== "F")
    return console.warn(
      `Error en el valor introducido, rellene con 'C' para Celsius o 'F' para Fahrenheit`
    );

  if (type === "C") {
    const celsiusToFarenheit = (temperature * 9) / 5 + 32 + "°F";
    return console.log(
      `${temperature}°${type} es igual a ${celsiusToFarenheit}`
    );
  }

  if (type === "F") {
    const fahrenheitToCelsius = ((temperature - 32) * 5) / 9 + "°C";
    return console.log(
      `${temperature}°${type} es igual a ${fahrenheitToCelsius}`
    );
  }
};

temperatureTypeCalculator(1, "C");

// 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.

const discountFunction = (price, discount) => {
  if (typeof price !== "number" || typeof discount !== "number")
    return console.warn("Unicamente se permite introducir valores numericos");

  if (discount > 100 || discount <= 0)
    return console.warn("El descuento debe estar entre 1% y el 100%");

  const percentage = discount / 100;
  const finalDiscount = price * percentage;

  const finalPrice = price - finalDiscount;

  return console.log(
    `El valor del producto era de ${price} pesos, pero con tu descuento del ${discount}% el precio final queda en ${finalPrice}, tu descuento fue de ${finalDiscount} pesitos :)`
  );
};

discountFunction(1000, 50);

// 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

const dateRecaller = (year, month, day) => {
  if (
    typeof year !== "number" ||
    typeof month !== "number" ||
    typeof day !== "number"
  )
    return console.warn("Introduzca valores numericos para las fechas");

  const currentDate = new Date();
  let finalDate = currentDate.getFullYear() - year;

  if (currentDate.getMonth() + 1 < month) finalDate--;

  if (currentDate.getMonth() + 1 === month && currentDate.getDate() < day)
    finalDate--;

  if (finalDate < year)
    return console.log(`Faltan ${Math.abs(finalDate)} años`);

  return console.log(`Pasaron ${finalDate} años`);
};

dateRecaller(2500, 6, 14);
