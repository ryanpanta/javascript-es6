const section = document.querySelector(".animais");
const menu = document.querySelector(".menu");

console.log(section.clientHeight);


const small = window.matchMedia('(max-width: 600px)');

if (small.matches){
    console.log("Mobile user! ");
}
else{
    console.log("Desktop user! ");
}

// Verifique a distância da primeira imagem
// em relação ao topo da página
const img = document.querySelector("img");
console.log(img.offsetTop);

// Retorne a soma da largura de todas as imagens

const imgs = document.querySelectorAll("img");
let total = 0;
imgs.forEach((item) => {
    total += item.offsetWidth;
});
console.log(`Soma total da largura de todas as imagens: ${total}`);




// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const ancora = document.querySelectorAll('a');
ancora.forEach((item) => {
    if(item.offsetHeight < 48 || item.offsetWidth < 48)
        console.log("Não possui o mínimo");
    else 
        console.log("Possui o mínimo");
});



// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const smallWidth = window.matchMedia('(max-width: 720px)').matches;

if(smallWidth){
    menu.classList.add("menu-mobile");
   
}
