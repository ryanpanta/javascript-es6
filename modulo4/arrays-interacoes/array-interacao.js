const carros = ['Ford', 'Fiat', 'Honda'];

const newCarros = carros.map((item, index, array) => {
    return array[index] = `Item: ${item}`
});

console.log(newCarros);


const numbers = [123, 31, 12, 21, 41];
const newNumbers = numbers.map(item => item * 4);
console.log(newNumbers);

const aulas = [
    {
      nome: 'HTML 1',
      min: 15
    },
    {
      nome: 'HTML 2',
      min: 10
    },
    {
      nome: 'CSS 1',
      min: 20
    },
    {
      nome: 'JS 1',
      min: 25
    },
]

const minutosAulas = aulas.map(item => item.min);
console.log(minutosAulas);

const minutosAulasTotal = aulas.reduce((acc, cur) => {
    return acc + cur.min;
}, 0);
console.log(minutosAulasTotal);

const aulas2 = [10, 25, 30];
const soma = aulas2.reduce((acc, cur) => acc + cur)
console.log(soma)

const valores = [1, 32, 2, 39, 41, 9];
const maiorValor = valores.reduce((acc, cur) => {
    return acc > cur ? acc : cur;
});
console.log(maiorValor);



const frutas = ['Banana', 'Pêra', 'Uva'];

const frutasRight = frutas.reduceRight((acc, fruta) => acc + ' ' + fruta);
const frutasLeft = frutas.reduce((acc, fruta) => acc + ' ' + fruta);

frutasRight; // Uva Pêra Banana
frutasLeft; // Banana Pêra Uva

const temBanana = frutas.some((item) => item === "Banana");

const frutas2 = ['Banana', 'Pêra', 'Uva', ''];
// False pois pelo menos uma fruta
// está vazia '', o que é um valor falsy
const arraysCheias = frutas2.every((fruta) => {
  return fruta; // false, pois contem uma string vazia
});

const numeros = [6, 43, 22, 88, 101, 29];
const maiorQue3 = numeros.every((item) => item > 3); // true

const frutas3 = ['Banana', 'Pêra', 'Uva', 'Maçã'];

const buscaBanana = frutas3.findIndex((fruta) => {
  return fruta === 'Banana'; 
}); // 0

const numeros2 = [6, 43, 22, 88, 101, 29];
const buscaMaior45 = numeros2.find(x => x > 45); // 88

const teste = numeros2.filter((item) => {
    if(item > 45)
        return item
})

const aulasMaiores = aulas.filter((aula) => { 
    return aula.min > 13

});


// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
const curso = document.querySelectorAll(".curso")
const newCurso = Array.from(curso);
const desc = newCurso.map((item) => {
    return {
        titulo: item.querySelector("h1").innerText,
        descricao: item.querySelector("p").innerText,
        aulas: item.querySelector(".aulas").innerText,
        horas: item.querySelector(".horas").innerText,
    }
})


// Retorne uma lista com os
// números maiores que 100
const numeros4 = [3, 44, 333, 23, 122, 322, 33];
const maior100 = numeros4.filter((item) => item > 4);


// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']
//const temouNao = instrumentos.includes("Guitarra");
const guitarra = instrumentos.some((item) => item === "Guitarra")


// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]                                   //acc = accumlator      cur = current

const total = compras.reduce((acc, cur) => {
    cur.preco = +cur.preco.replace("R$ ", '').replace(",",".");
    return acc + cur.preco;
},0)



