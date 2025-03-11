//Jogo Amigo Secreto
// Projeto by Antonio Morais - Challenge do aluno
//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaAmigos = [];
let listaAmigosSorteados = [];
let resultado = "";
let resultadoIndex = 0;
let botaoSortear = "sortear";

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

function limparCampo() {
    amigo = document.querySelector("input");
    amigo.value = "";
    amigo.focus();
}

function exibirMensagemInicial() {
    exibirTextoNaTela("h1", "Amigo Secreto");
    exibirTextoNaTela("h2", `Digite o nome dos seus amigos.`);
}
exibirMensagemInicial();

function exibirListaDeAmigos() {
    let lista = document.querySelector("ul");
    lista.innerHTML = ""; // Limpar a lista existente
    for (let amigo of listaAmigos) {
        let item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    }
}

function adicionarAmigo() {
    let amigo = document.querySelector("input").value;
    if (amigo == "") {
        exibirTextoNaTela("h2", `Por favor, insira um amigo!`);
        return;
    } else {
        if (listaAmigos.includes(amigo)) {
            exibirTextoNaTela("h2", `Você já incluiu este amigo na lista!`);
        } else {
            listaAmigos.push(amigo);
            exibirTextoNaTela("h2", "Inclua outro amigo!");
            exibirListaDeAmigos(); // Atualizar a lista exibida na tela
            console.log(`Lista Amigos: ${listaAmigos}`);
        }
    }
    limparCampo();
}

function sortearAmigo() {
    resultadoIndex++;
    if (botaoSortear === "reiniciar") {
        setTimeout(() => window.location.reload(), 1000);
        return;
    } else {
        let quantidadeDeAmigos = listaAmigos.length;
        if (quantidadeDeAmigos < 2) {
            exibirTextoNaTela("h2", `Você precisa incluir pelo menos 2 amigos!`);
        } else {
            let amigoSorteado = listaAmigos[Math.floor(Math.random() * quantidadeDeAmigos)];
            if (listaAmigosSorteados.includes(amigoSorteado)) {
                sortearAmigo();
            } else {
                listaAmigosSorteados.push(amigoSorteado);
                console.log(`Lista Sorteado: ${listaAmigosSorteados}`);
                resultado = `O seu amigo secreto é ${amigoSorteado}. `;
                exibirTextoNaTela("h2", resultado);
                if (resultadoIndex >= listaAmigos.length) {
                    exibirTextoNaTela("h2", "Todos os amigos foram sorteados!");
                    console.log("Alterando rótulo do botão para 'Reiniciar'");
                    let botao = document.getElementById("sortear");
                    botao.innerHTML = "Reiniciar";
                    botao.style.display = "flex";
                    botao.style.justifyContent = "center";
                    botao.style.alignItems = "center";
                    botaoSortear = "reiniciar";
                } else {
                    console.log(`Indice: ${resultadoIndex}` + ` Quantidade de Amigos: ${quantidadeDeAmigos}`);
                }
            }
        }
    }
}