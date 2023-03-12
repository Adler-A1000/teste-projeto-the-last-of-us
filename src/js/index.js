/*
 Objetivo: quando clicar no botão temos que mostrar a imagem de fundo correspondente        

 1 - pegar o elemento html dos botões
 
        const botoesCarrossel = document.querySelectorAll('.botao');

 2 - identificar clique do botão

        botoesCarrossel.forEach((botao) => {
        botao.addEventListener('click', () => {
        })
    })

 3 - desmarcar o botão selecionado antes

        botaoSelecionado.classList.remove('selecionado');

 4 - marcar botão clicado como selecionado

        botao.classList.add('selecionado');

 5 - esconder a imagem de fundo anterior

        const imagemAtiva = document.querySelector('.ativa');
        imagemAtiva.classList.remove('ativa');

 6 - fazer aparecer a imagem de fundo correspondente ao botão selecionado

    imagens[indice].classList.add('ativa');
*/

const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        desativarBotaoSelecionado();

        selecionarBotaoCarrossel(botao);

        esconderImagemAtiva();

        mostrarImagemDeFundo(indice);
    })
})

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
