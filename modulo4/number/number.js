// let valor = 23213.32
// valor = valor.toLocaleString("pt-BR", {style: 'currency', currency: "BRL"});
// valor = Math.ceil(valor);

// //um valor aleatorio entre 50 e 100
// for(let i = 0; i < 100; i++) {
//     const aleatorio = Math.floor(Math.random() * (100 - 50 + 1) + 50);
//     console.log(aleatorio);
// }

// Retorne um número aleatório
// entre 1050 e 2000
const randomNumber = Math.floor(Math.random() * (2000 - 1050 + 1) + 1050)
console.log(randomNumber)

// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9';
const newNumeros = numeros.split(", ");
let maior = newNumeros[0];
newNumeros.forEach((item) => {
    item = parseInt(item);
    if(item > maior)
        maior = item
})
console.log(maior);

//descobrindo que existe um operador que faz o serviço acima 'spread' '...'
//ficaria então: 
// const maior = Math.max(...newNumeros);
//console.log(maior);


// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222',
                     'R$ 230  ', 'r$  200'];

let soma = 0;
function limpaPrecos(listaPrecos){
    listaPrecos.forEach((item) => {
        item = item.trim();
        item = item.slice(2).replace(",",".");  //item = item.toUpperCase().replace("R$", "");
        item = parseFloat(item);
        soma += item;
    })
}

limpaPrecos(listaPrecos)
console.log(`A soma é: ${soma.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})} `);