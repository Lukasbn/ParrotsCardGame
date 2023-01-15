let NumeroDeCartas = prompt("Com quantas cartas quer jogar ?");
let ParVirado = [];
let jogadas = 0
let imagens = ["bobrossparrot.gif","explodyparrot.gif","fiestaparrot.gif","metalparrot.gif","revertitparrot.gif","tripletsparrot.gif","unicornparrot.gif"];
let distribudas = [];
imagens.sort(comparador);
let contador = 0;
const tabuleiro = document.querySelector("ul");
let ponto = 0;


while (NumeroDeCartas < 4 || NumeroDeCartas > 14 || (NumeroDeCartas%2) !== 0) {
    NumeroDeCartas = prompt("Com quantas cartas quer jogar ?")
}

if (NumeroDeCartas == 14) {
    let alinhar = document.querySelector("ul");
    alinhar.classList.add("JogoCom14")
}
if (NumeroDeCartas == 8 || NumeroDeCartas == 4) {
    let alinhar = document.querySelector("ul");
    alinhar.classList.add("JogoCom4x")
}
if (NumeroDeCartas == 10) {
    let alinhar = document.querySelector("ul");
    alinhar.classList.add("JogoCom10")
}

while (distribudas.length < NumeroDeCartas){
    distribudas.push(imagens[contador])
    distribudas.push(imagens[contador])
    contador ++
}

distribudas.sort(comparador);

for (let index = 0; index < NumeroDeCartas; index++) {
    tabuleiro.innerHTML += `
    <li>
        <div class="card" data-test="card" onclick="SelecionadorDeCarta(this)">
            <div class="front-face face">
                <img data-test="face-down-image" src="./imagens/Papagaio.png" alt="imagen não encontrada">
            </div>
            <div class="back-face face">
                <img data-test="face-up-image" src="./imagens/${distribudas[index]}" alt="imagen não encontrada">
            </div>
        </div>
    </li>
    `
}


function SelecionadorDeCarta(selecionada){
    if (!selecionada.classList.contains("clicado")){
        selecionada.classList.add("clicado");
        ParVirado.push(selecionada);
        Comparador();
    }
}

function Comparador(){
    if (ParVirado.length === 2) {
        if (ParVirado[0].children[1].children[0].getAttribute("src") !== ParVirado[1].children[1].children[0].getAttribute("src")) {
            setTimeout(remover,1000,ParVirado[0]);
            setTimeout(remover,1000,ParVirado[1]);
        }else{
            ponto ++;
        }
        ParVirado = [];
        jogadas = jogadas + 2;
        finalizar();
    }
}

function remover(parametro){
    parametro.classList.remove("clicado");
}

function comparador() { 
	return Math.random() - 0.5; 
}

function finalizar(){
    if (ponto === (NumeroDeCartas/2)) {
        setTimeout(alert,50,`Você ganhou em ${jogadas} jogadas!`)
        
    }
}
