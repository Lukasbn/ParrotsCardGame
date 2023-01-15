let NumeroDeCartas = prompt("Com quantas cartas quer jogar ?");
let ParVirado = [];
let jogadas = 0

while (NumeroDeCartas < 4 || NumeroDeCartas > 14 || (NumeroDeCartas%2) !== 0) {
    NumeroDeCartas = prompt("Com quantas cartas quer jogar ?")
}

if (NumeroDeCartas == 14) {
    let alinhar = document.querySelector("ul");
    alinhar.classList.add("JogoCom14")
}

function SelecionadorDeCarta(selecionada){
    if (!selecionada.classList.contains("clicado")){
        selecionada.classList.add("clicado");
        ParVirado.push(selecionada);
        console.log(ParVirado[0].children[1].children[0].getAttribute("src"));
        Comparador();
    }
}

function Comparador(){
    if (ParVirado.length === 2) {
        if (ParVirado[0].children[1].children[0].getAttribute("src") !== ParVirado[1].children[1].children[0].getAttribute("src")) {
            setTimeout(remover,1000,ParVirado[0]);
            setTimeout(remover,1000,ParVirado[1]);
        }
        ParVirado = [];
        jogadas = jogadas + 2;
        console.log(jogadas);
    }
}

function remover(parametro){
    console.log(parametro);
    parametro.classList.remove("clicado");
}
