// Tipo de dado
// Booleanos

// Conversão Implicita
const numero = 456;
const numeroString = "456";

console.log(numero == numeroString);

// Conversão explícita
const numeroStringDois = Number("456");
console.log(numero + Number(numeroString));

console.log(numero + numeroStringDois)

// Mais sobre String()

let telefone = 12341234;
// teremos a conversão do número 12341234 para uma string “12341234” e assim poderemos fazer a concatenação entre as strings
console.log("O telefone é " + String(telefone)); 

let telefone2 = 12341234;
// o .toString() é uma outra forma para  fazer essa conversão, que é mais parecida com outras linguagens de programação.
console.log("O telefone é " + telefone2.toString()); 

let usuarioConectado = false;
console.log(String(usuarioConectado)); // teremos a conversão da booleana para string, nesse caso teremos uma string “false”.
usuarioConectado = true;
console.log(String(usuarioConectado)); // agora teremos uma string “true”.

// Mais sobre Number

// Vamos calcular a área de um retângulo
let largura = "10";
let altura = "5";
// teremos a conversão de String para números, possibilitando a realização da da multiplicação
console.log(Number(largura) * Number(altura)); 

let largura2 = "10";
let altura2 = "5";
// teremos a conversão de String para números realizado usando o + antes das variáveis
console.log( + largura2 * + largura2); 

let meuNome = "leonardo";
console.log(Number(meuNome)); // como a variável meuNome não contém apenas números ele retorna o erro NaN (Not a Number, não é número);
console.log( + meuNome); // a conversão também retornará NaN

let usuarioConectado2 = false;
console.log(Number(usuarioConectado2)); // teremos a conversão da booleana para número, sendo que false (falso) retorna o número 0.
usuarioConectado2 = true;
console.log(Number(usuarioConectado2)); // agora teremos a conversão de true (verdadeiro) para o número 1.

let cpfUsuario = "12312312312"

let minhaLet;
console.log(minhaLet); //undefined

// atribuindo um valor com TIPO DE DADO STRING
minhaLet = "eu sou um texto";
console.log(minhaLet); // "eu sou um texto"

// reatribuindo, desta vez com dado do TIPO NUMBER
minhaLet = 100;
console.log(minhaLet); //100