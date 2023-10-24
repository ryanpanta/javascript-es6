/*function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
  
  Pessoa.prototype.andar = function () {
    return this.nome + ' andou';
  };
  
  const ryan = new Pessoa('Ryan', 21);
  
  console.log(Pessoa.prototype); // Retorna o objeto
  console.log(ryan.andar()); // "Ryan andou"
  
*/


// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Pessoa(nome, sobrenome, idade){
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

Pessoa.prototype.nomeCompleto = function() {
  return this.nome + " " + this.sobrenome;
}

const ryan = new Pessoa("Ryan", "Rodrigues", 21);

// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document

console.log(Document.prototype);
console.log(NodeList.prototype);
console.log(HTMLCollection.prototype);

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li; // HTMLLIElement
li.click; //function
li.innerText; //string
li.value; //Number
li.hidden;//
li.offsetLeft;//Number
li.click();//string

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; //string pois todo constructor.name tem uma string como saida
