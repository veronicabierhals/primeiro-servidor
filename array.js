const arrayNumeros = [1, 2, 4, 4, 6, 7, 1];

//para permitir exportação para outro arquivo
//module.exports = array;

const arrayLetras = ["a", "a", "s", "c"];

//se a propriedade tiver o mesmo nome da variável, não precisa passá-la pois cria-se automaticamente
module.exports = {
    arrayNumeros: arrayNumeros, //ou arrayNumeros
    arrayLetras: arrayLetras //ou arrayLetras
};