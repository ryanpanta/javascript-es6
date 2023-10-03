// ambiente-interativo.js


/*
function Carro(marca, ano) {
    this.marca = marca;
    this.ano = ano;
}

const honda = new Carro("Honda", 2011);

function Carro2(marca, precoInicial){
    const taxa = 1.2;
    const precoFinal = precoInicial * taxa;
    this.marca = marca;
    this.preco = precoFinal;
}

const marea = new Carro2("Fiat", 3000);
// Crie um ambiente REPL interativo


function Dom(seletor) {
    this.element = () => document.querySelector(seletor);
    this.active = classe => this.element().classList.add(classe);
}

const ul = new Dom('ul');
const li = new Dom('li');
ul.active('ativo');

*/

/*          
    ---------------------- Exercícios ------------------------- 

 */

// Transforme o objeto abaixo em uma Constructor Function
function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.andar = () => console.log(this.nome + ' andou'); 
  }
  
  // Crie 3 pessoas, João - 20 anos,
  // Maria - 25 anos, Bruno - 15 anos

const joao = new Pessoa('João', 20);
const maria = new Pessoa('Maria', 25);
const bruno = new Pessoa('Bruno', 15);
joao.andar();

  // Crie uma Constructor Function (Dom) para manipulação
  // de listas de elementos do dom. Deve conter as seguintes
  // propriedades e métodos:
  //
  // elements, retorna NodeList com os elementos selecionados
  // addClass(classe), adiciona a classe a todos os elementos
  // removeClass(classe), remove a classe a todos os elementos


/* function Dom2(selector){
    this.capture = () => document.querySelectorAll(selector);
    this.showNodeList = () => this.capture().forEach((item) => console.log(item))
    this.addClass = (className) => this.capture().forEach((item) => item.classList.add(className))
    this.removeClass = (className) => this.capture().forEach((item) => item.classList.remove(className))
}
                                ----------------- OU --------------
*/ 

function Dom2(selector){
    const capture = document.querySelectorAll(selector);
    this.captureNodeList = capture;
    this.showNodeList = () => capture.forEach((item) => console.log(item))
    this.addClass = (className) => capture.forEach((item) => item.classList.add(className))
    this.removeClass = (className) => capture.forEach((item) => item.classList.remove(className))
}

const ul = new Dom2('ul');
ul.addClass('active');
const li = new Dom2('li');
li.addClass('inative'); 

  
  