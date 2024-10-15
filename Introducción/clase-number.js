//1. Tipo entero y decimal
const entero = 52
const decimal = 3.14
console.log(typeof entero, typeof decimal)

//2. Notacion cientifica
const cientifico = 5e3

//3. Infinitos y NaN
const infinito = Infinity
const noEsUnNumero = NaN

//Operaciones aritmeticas
//1. Suma, Resta, Multiplicacion y Division
const suma = 3+4
const resta = 3-4
const multiplicacion = 3*4
const division = 3/4

//2. Modulo y Potencia
//Modulo es cuando se quiere saber si un numero es multiplo de otro
const modulo = 15 % 8
const potencia = 2**3

//Precision, Javascript no tiene una precision en decimales
const resultado = 0.1+0.2
console.log(resultado)
/*funcion para escoger cuantos decimales despues del punto queremos obtener,
pero es de tipo string*/
console.log(resultado.toFixed(1))
console.log(resultado == 0.3)

//Operaciones Avanzadas
const raizCuadrada = Math.sqrt(14)
const valorAbsoluto = Math.abs(-7)
const aleatorio = Math.random()
console.log(raizCuadrada)
console.log(valorAbsoluto)
console.log(aleatorio)