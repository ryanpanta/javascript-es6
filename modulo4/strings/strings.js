/* const linguagem = "Javascript";
const frase = "A melhor linguagem é ";

const fraseFinal = frase.concat(linguagem, "!!!!!!!!! :D", " :P");
console.log(fraseFinal);

const fruta = 'Banana';
const listaFrutas = 'Melancia, Banana, Laranja';

console.log(listaFrutas.includes(fruta)); // true
console.log(fruta.includes(listaFrutas)); // false

console.log(fruta.endsWith("na"));

const transacao1 = 'Depósito de cliente';
const transacao2 = 'Depósito de fornecedor';
const transacao3 = 'Taxa de camisas';

transacao1.slice(0, 3); // De
transacao3.slice(0, 3); // Tax

transacao1.slice(12); // cliente
console.log(transacao1.slice(0, -4)); // ente

console.log(transacao1.lastIndexOf("e"))

const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 12000'];

listaPrecos.forEach((item) => console.log(item.padStart(10, ".")))

let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
listaItens = listaItens.replace(/[ ]+/g, ', ');

const arrayLista = listaItens.split(', ');

console.log(arrayLista);

const htmlText = '<div>O melhor item</div><div>A melhor lista</div>';
const htmlArray = htmlText.split('div');
const joinArray = htmlArray.join("section")
*/


// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
    {
      descricao: 'Taxa do Pão',
      valor: 'R$ 39',
    },
    {
      descricao: 'Taxa do Mercado',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 99',
    },
    {
      descricao: 'Taxa do Banco',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 49',
    },
  ];
  
let taxaTotal = 0;
let recebimentoTotal = 0;
transacoes.forEach((item) => {
    const newArray = parseInt(item.valor.slice(2));
    if(item.descricao.startsWith("Taxa")){
        taxaTotal += newArray;
    }
    else if(item.descricao.startsWith("Recebimento")){
        recebimentoTotal += newArray;
    }
})

console.log(taxaTotal);
console.log(recebimentoTotal);



  // Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
console.log(transportes.split(';'));
  
  // Substitua todos os span's por a's
const html = `<ul>
                  <li><span>Sobre</span></li>
                  <li><span>Produtos</span></li>
                  <li><span>Contato</span></li>
                </ul>`;

const htmlArray = html.split('span');
const newHTML = htmlArray.join('a');
  
  // Retorne o último caracter da frase
const frase = 'Melhor do ano!';
console.log(frase.charAt(frase.length-1));
  
  // Retorne o total de taxas
const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

let count = 0;
transacoes2.forEach((item) => {
  item = item.trim();
  if(item.toLowerCase().startsWith("taxa"))
    count++;
  console.log(item);
});
  
console.log(count);
  
  
