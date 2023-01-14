let NumeroDeCartas = prompt("Com quantas cartas quer jogar ?");

while (NumeroDeCartas < 4 || NumeroDeCartas > 14 || (NumeroDeCartas%2) !== 0) {
    NumeroDeCartas = prompt("Com quantas cartas quer jogar ?")
}
if (NumeroDeCartas == 14) {
    let alinhar = document.querySelector("ul");
    alinhar.classList.add("JogoCom14")
}

function SelecionadorDeCarta(selecionada){
    selecionada.classList.add("clicado");
}