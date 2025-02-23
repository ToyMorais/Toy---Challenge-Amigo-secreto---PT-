//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
//Jogo Amigo Secreto

let listaAmigos = [];
let listaAmigosSorteados = [];
let resultado = "";
let resultadoIndex = 0;

function exibirTextoNaTela(tag, title) {
    let campo = document.querySelector(tag);
    campo.innerHTML = title;
    // ######### executa script para ler a tela ###########
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(title);
        utterance.lang = 'pt-BR';
        utterance.rate = 1;
        if (tag !== "ul") {
            window.speechSynthesis.speak(utterance);
        }
    } else {
        console.log("Web Speech API não suportado neste navegador.");
    }
    // ######### fim do script ###########
    
}
function exibirMensagemInicial() {
    exibirTextoNaTela("h1", "Amigo Secreto");
    exibirTextoNaTela("h2", `Digite o nome dos seus amigos e clique em sortear.`);    
}
exibirMensagemInicial();

function adicionarAmigo() {
    let nome = document.querySelector("input").value;
       if (listaAmigos.includes(nome)) { 
        exibirTextoNaTela("h2", `Você já incluiu este amigo na lista!`);
    } else { 
        listaAmigos.push(nome);    
        exibirTextoNaTela("h2", "Incluia o nome de outro amigo!");
        exibirTextoNaTela("ul", listaAmigos.join(", "));
        limparCampo();
    }
}
