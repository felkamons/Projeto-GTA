/*

objetivo 1 - quando o usuário clicar no botão de seleção de plataformas deve abrir uma caixa com os botões de plataforma

    passo 1 - pegar o botão de seleção de plataforma no JS pra poder verificar quando o usuário clicar em cima dele
    passo 2 - pegar o elemento do conteudo que precisa ser mostrado
    passo 3 - pegar o clique do usuário no js
    passo 4 - quando o usuário clicar, adicionar a classe "ativo" na listagem de plataformas para que o conteúdo apareça 


objetivo 2 - caso a lista de botões de plataforma já esteja aparecendo e o usuário clicar em cima do botão, o conteúdo deve ser escondido
    passo 1 - verificar se o botão esta aberto, se sim, devemos remover a classe ativo para que esconda o conteúdo


*/


const botao = document.querySelector(".btn-plataforma");

const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");

botao.addEventListener("click", () => {
    elementoPlataformas.classList.toggle("ativo");
})

