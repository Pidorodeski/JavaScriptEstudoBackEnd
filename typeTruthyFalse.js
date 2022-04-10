// Boolean

const usuarioLogado = true;
const contaPaga = false;

// Truthy ou Falsy

// 0 => false
// 1 => true
console.log(0 == false, 1 == true);
console.log(usuarioLogado == 1, contaPaga == 0);
console.log("" == 0);

// null => Tpo de dado que não tem valor, é vaziou ou nada
// undefined 
let minhaVar;
let varNull = null;

console.log(minhaVar);
console.log(varNull);

let numero = 3;
let texto = "Alura";

// typeof mostra qual o tipo de dado que está armazendado na variavel
console.log(typeof numero);
console.log(typeof texto);
console.log(typeof minhaVar);
console.log(typeof varNull);