const imgs = document.querySelectorAll('img');


imgs.forEach((item, index, array) => {
    console.log(item, index, array);
});

imgs.forEach((item, index, array) => console.log(item, index, array));


const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

titulosArray.forEach(function(item){
  console.log(item);
});

imgs.forEach(item => console.log(item));

//exercicio 

// Mostre no console cada parágrado do site
const paragrafo = document.querySelectorAll('p');
console.log(paragrafo);

// Mostre o texto dos parágrafos no console
console.log(paragrafo.innerHTML);

// Como corrigir os erros abaixo:
const images = document.querySelectorAll('img');

images.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
images.forEach( ()=> {
  console.log(i++);
});

images.forEach(() => i++);