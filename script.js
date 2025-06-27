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