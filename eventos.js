window.addEventListener("keypress", e => {
    if (e.key === "b") 
        document.body.classList.add("blue");
    else if(e.key === "p")
        document.body.classList.toggle("pink");
});

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const href = document.querySelectorAll("a[href^='#']");

href.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        href.forEach((e) => {
            e.classList.remove("ativo");
        })
        event.currentTarget.classList.toggle("ativo")
    })
})

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

const todosElementos = document.querySelectorAll("body *");


todosElementos.forEach((item) =>{
    item.addEventListener("click", (e) => {
        console.log(e.currentTarget);
    })
})


// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

// todosElementos.forEach((item) =>{
//     item.addEventListener("click", (e) => {
//         e.currentTarget.remove()
//     })
// })

// Se o usuário clicar na tecla (t), aumente todo o texto do site. 

window.addEventListener("keypress", (e) => {
    if(e.key === "t")
        document.documentElement.classList.toggle("aumenta");
})
