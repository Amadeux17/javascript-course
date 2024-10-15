let string1 = 'Hola mundo'
let string2 = "JavaScript"
//Las comillas invertidas sirven para concatenar cadenas
let string3 = `${string1} escrito en ${string2}`
let string4 = string1 + ' ' + string2

console.log(string1)
console.log(string2)
console.log(string3)
console.log(string4)

//contar caracteres de un string
let frase = 'JavaScript es Genial'
console.log(frase.length)

//funcion para convertir string en minusculas o mayusculas
console.log(frase.toLowerCase())
console.log(frase.toUpperCase())

//funcion para optener un rango de datos del string
console.log(frase.substring(0,10))