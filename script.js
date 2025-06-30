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
    max: 5
  },
  morning: {
    min: 6,
    max: 11
  },
  evening: {
    min: 12,
    max: 18
  },
  night: {
    min: 19,
    max: 23
  }
}

const timeState = (hour) => {
  //Si agrego numero random
  if (hour > timeRanges.night.max||hour < timeRanges.sleep.min || typeof hour !== "number") return "???";
  //Durmiendo
  if (hour >= timeRanges.sleep.min && hour <= timeRanges.sleep.max) return "Let me sleep";
  //Dia
  if (hour >= timeRanges.morning.min && hour <= timeRanges.morning.max) return "Good Morning";
  //Tardes
  if (hour >= timeRanges.evening.min && hour <= timeRanges.evening.max) return "Good Evening";
  //Noches
  if (hour >= timeRanges.night.min && hour <= timeRanges.night.max) return "Good Night";
};