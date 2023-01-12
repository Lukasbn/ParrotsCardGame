let NumeroDeCartas = prompt("Com quantas cartas quer jogar ?");

while (NumeroDeCartas < 4 || NumeroDeCartas > 14 || (NumeroDeCartas%2) !== 0) {
    NumeroDeCartas = prompt("Com quantas cartas quer jogar ?")
}

