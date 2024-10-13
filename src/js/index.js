/*
   OBJETIVO - quando clicar no pokedev da listagem temos que esconder o cartão do pokedev aberto 
   e mostrar o cartão correspondente ao que foi selecionado na listagem
       PASSO 1 - precisamos criar uma variável no JS pra trabalhar com a listagem de pokedevs
       PASSO 2 - Identificar o evento de clique no elemento da listagem
       PASSO 3 - remover a classe aberto só do cartão que tá aberto
       PASSO 4 - ao clicar em um pokedev da lista pegamos o id desse pokedev pra saber qual cartão abrir
       PASSO 5 - remover a classe ativo que marca o pokedev selecionado na listagem
       PASSO 6 - adicinar a classe ativo no pokedev selecionado na listagem
*/

//PASSO 1 - precisamos criar uma variável no JS pra trabalhar com a listagem de pokedevs
const listaPokedevSelection = document.querySelectorAll('.pokedev');

//PASSO 2 - Identificar o evento de clique no elemento da listagem
listaPokedevSelection.forEach(pokedev =>{
    pokedev.addEventListener('click', () => {
        //PASSO 3 - remover a classe aberto só do cartão que tá aberto
        esconderCardPokedev();

        //PASSO 4 - ao clicar em um pokedev da lista pegamos o id desse pokedev pra saber qual cartão abrir
        const idPokedevSelecionado = pokedev.attributes.id.value;
        const idCardPokedevParaAbrir = "card-"+idPokedevSelecionado;
        const cardPokedevParaAbrir = document.getElementById(idCardPokedevParaAbrir);
        cardPokedevParaAbrir.classList.add('aberto');

        //PASSO 5 - remover a classe ativo que marca o pokedev selecionado na listagem
        const pokedevAtivoList = document.querySelector('.ativo');
        pokedevAtivoList.classList.remove('ativo');

        //PASSO 6 - adicinar a classe ativo no pokedev selecionado na listagem
        const pokedevSelecionadoList = document.getElementById(idPokedevSelecionado);
        pokedevSelecionadoList.classList.add('ativo');
    })
})
/* Código usado para esconder card dentro do evento pode ser refatorado para uma função no escopo global. Fazendo com que o código fique mais limpo, legível e organizado.*/ 
function esconderCardPokedev() {
    const cardPokedevAberto = document.querySelector('.aberto');
    cardPokedevAberto.classList.remove('aberto');
}

