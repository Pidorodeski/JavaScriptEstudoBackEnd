// Tipo Number

const meuNumero = 3;

const primeiroNumero = 1;
const segundoNumero = 2;

const opMatematica = primeiroNumero + segundoNumero

// console.log(opMatematica);


 // Ponto Flutuante

const numeroPontoFlutuante = 3.3;
const numeroPontoFlutuante2 = .5;

//console.log(numeroPontoFlutuante2);


// NaN ->  Not A Number (Não é um Numero)

const alura = "Alura";

//console.log(alura * meuNumero);



// Formatando numeros


    salario = 2500
    horasTrabalhadasNoMes = 4000

    const salarioHora = (salario / horasTrabalhadasNoMes); 
    const total = salarioHora.toFixed(2);
    const formatado = salarioHora.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    console.log(`Antes ${salarioHora}, depois ${total}, formatado ${formatado}`);


// Ordenando numeros
    function comparaNumeros(a,b) { if (a == b) return 0; if (a < b) return -1; if (a > b) return 1; }

    var lista = [10,1, 5, 9, 8, 12, 15];
    var listaOrdenada = lista.sort(); 
    var listaOrdenadaTentativa2 = lista.sort(comparaNumeros); 

    console.log(`Lista desordenada ${lista}, Lista ordenada ${listaOrdenada}, Tentativa Dois ${listaOrdenadaTentativa2}`);

