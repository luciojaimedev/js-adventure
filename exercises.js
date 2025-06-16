// 1. Variables básicas
// Crea una variable llamada nombreUsuario y otra llamada edadUsuario. Asignales tu nombre y edad. Mostralas por consola.

const userName = 'Lucio'
let userAge = 28

// 2. const vs let
// Intentá reasignar una variable creada con const. ¿Qué pasa?

// userName = 'Matias'
console.log(userName)

// 3. Tipos de datos
// Crea una variable de cada tipo de dato: string, number, boolean, null, undefined, bigint. Mostrá con typeof el tipo de cada una.

let let1 = 'caja'
let let2 = 25
let isLet3Pooping = true
let let4 = null
let let5
let let6 = 71283172837182738n


// 4. Operador de comparación estricto
// ¿Qué devuelve 5 === "5"? Probalo y explicalo.

console.log(5 === '5') // FALSE

// 5. Comparaciones
// Escribí tres comparaciones que den como resultado true y tres que den false. Usá operadores >, <, ===, !==, etc.

console.log(5 > 3)
console.log(5 !== 3)
console.log(true || false)
console.log(!false === !true)
console.log(null ?? false)
console.log(!4 > 10 && 5 === 5)


// 6. Operadores lógicos simples
// Escribí tres expresiones que usen && y otras tres que usen ||. Mezclá valores booleanos y números.

console.log(5 > 10 && 10 < 5)
console.log(0 >= 1 && 98 <= 101)
console.log(0 === '0' && -3 !== 3)
console.log(10 < 11 || 15 > 20)
console.log(!0 === 1 || !4 === false)
console.log(!false >= 0 || 35 <= 15 + 30)


// 7. Negación
// ¿Qué devuelve !0, !"", !false y !null? Probalo y explicá por qué.

// Todas true, no pienso hacer los logs pa

// 8. Nullish coalescing
// Crea una variable sin valor (undefined) y usá ?? para darle un valor por defecto.

const user = undefined ?? 'Lucio'

// 9. Nullish vs OR
// ¿Qué devuelve false ?? "a" y false || "b"? ¿Cuál es la diferencia? Mostralo por consola y escribí una breve explicación en un comentario.

console.log(false ?? 'a') // Devuelve false
console.log(false || 'b') // Devuelve 'b'

// 10. Función saludo
// Escribí una función que reciba un nombre y diga "Hola [nombre], ¿cómo estás hoy?".

function greeting(name){
  return `Hola ${name}, ¿cómo estás hoy?`
}

const lucio = greeting('Lucio')

// 11. Función resta
// Escribí una función que reciba dos números y devuelva la resta. Mostrá el resultado por consola.

// 12. Función con let
// Crea una función que defina una variable contador con let, sume 1, y la muestre.

// 13. Condición con AND
// Crea dos variables booleanas (esMayor, tieneDNI). Mostrá true solo si ambas son true.

// 14. Condición con OR
// Crea dos variables: llueve y hayParaguas. Mostrá "Puedo salir" si al menos una es true.

// 15. Combinar funciones
// Escribí una función duplicar que multiplique por 2, y otra sumarUno que sume 1. Mostrá el resultado de duplicar(sumarUno(3)).

// 16. Evaluar tipos
// Escribí una función que reciba cualquier valor y diga si es string, number, o otro.

function typeOfValue(value){
    if(typeof value === 'string') return 'Is a string'
    if(typeof value === 'number') return 'Is a number'
    return 'is a different value'
}

console.log(typeOfValue(undefined))

// 17. Valor por defecto
// Creá una función que reciba un nombre. Si no se pasa ningún valor, usá "Anónimo" como valor por defecto usando ??.

// 18. Comparar edades
// Escribí una función que reciba dos edades y diga cuál es mayor o si son iguales.

// 19. Resultado raro
// ¿Qué devuelve esta función? Escribila y analizala:

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