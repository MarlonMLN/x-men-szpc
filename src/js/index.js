/* 
O que precisamos fazer? - quando passar o mouse em cima do personagem na lista temos que adicionar a borda azul de seleção na imagem pequena do personagem e mostrar a imagem, o nome e o texto grande do personagem que está selecionado
*/

// OBJETIVO 1 - quando passar o mouse em cima do personagem na listagem, devemos selecioná-lo
// passo 1 - pegar os personagens no JS pra poder verificar quando o usuário passar o mouse em cima de um deles

// querySelectorAll faz uma busca por todos os seletrores que tenhão a classe personagem.
const personagens = document.querySelectorAll('.personagem');


// passo 2 - adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse

//forEach seria para cada, ou seja para cada item da lista personagens vou fazer alguma coisa. cada vez que o forEach passar pela lista ele vai printar um item dela e armazenar.
personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
        
        if(window.innerWidth < 450) {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }

        // passo 3 - verificar se já existe um personagem selecionado, se sim, devemos remover a seleção dele
        removerSelecaoDoPersonagem();

        personagem.classList.add('selecionado');

        // OBJETIVO 2 - quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande
        //passo 1 - pegar o elemento do personagem grande pra adicionar as informações nele
        const imagemPersonagemGrande = document.querySelector('.personagem-grande');

        //passo 2 - alterar a imagem do personagem grande
        const idPersonagem = personagem.attributes.id.value;
        imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;

        // passo 3 - alterar o nome do personagem grande
        const nomePersonagem = document.getElementById('nome-personagem');

        nomePersonagem.innerText = personagem.getAttribute('data-name');

        // passo 4 - alterar a descrição do personagem grande
        const descricaoPersonagem = document.getElementById('descricao-personagem');
        descricaoPersonagem.innerText = personagem.getAttribute('data-description');
        

    })
});

        
        

function removerSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}
        
