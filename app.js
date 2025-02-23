//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
//Jogo Amigo Secreto

let listaAmigos = [];
let listaAmigosSorteados = [];
let resultado = "";
let resultadoIndex = 0;

function exibirTextoNaTela(tag, title) {
    let campo = document.querySelector(tag);
    campo.innerHTML = title;
    // ######### executa script no HTML para ler a tela ###########
    responsiveVoice.speak(title, "Brazilian Portuguese Female", {rate: 1.2});
    // ######### fim do comando para ler a tela ###########   
}
function exibirMensagemInicial() {
    exibirTextoNaTela("h1", "Amigo Secreto");
    exibirTextoNaTela("h2", `Digite o nome dos seus amigos e clique em sortear.`);
    exibirTextoNaTela("ul", `Amigos incluídos: ${listaAmigos}`);
}
exibirMensagemInicial();

function adicionarAmigo() {
    let nome = document.querySelector("input").value;
    console.log(nome);
       if (listaAmigos.includes(nome)) { 
        exibirTextoNaTela("h2", `Você já incluiu este amigo na lista!`);
    } else { 
        listaAmigos.push(nome);    
        exibirTextoNaTela("h2", "Incluia o nome de outro amigo!");
        exibirTextoNaTela("ul", listaAmigos)
        console.log(listaAmigos);
        limparCampo();
    }
}
