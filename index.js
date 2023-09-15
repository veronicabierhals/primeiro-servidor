//importar biblioteca
const lodash = require("lodash");

//importação de arquivo
const array = require("./array");
console.log(array);
console.log(array.arrayLetras);
console.log(array.arrayNumeros);

/*ou
//desestruturação de arquivos
const { arrayNumeros, arrayLetras } = require("./array");
console.log(array);
console.log(arrayLetras);
console.log(arrayNumeros);

*/

/*
//não exibir numeros repetidos
const arrayUnico = lodash.uniq(array);

console.log(arrayUnico);
*/

/*
ou desestruturar o método que quer usar
const { uniq } = requir("lodash");

const arrayUnico = uniq(array);

console.log(arrayUnico);
*/