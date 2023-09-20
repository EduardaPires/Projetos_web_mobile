    let primeiraRodada = true;
    let venceu = false;
    let perdeu = false;
    let ponto;
    var imagem1 = document.getElementById("dado1");
    var imagem2 = document.getElementById("dado2");
    document.getElementById("botao").onclick = function(){resultados()};

    function resultados() {
        const dado1 = lancar();
        const dado2 = lancar();
        const total = dado1 + dado2;
        document.getElementById("soma").innerHTML = dado1 + dado2;
        definirdado(dado1, imagem1);
        definirdado(dado2, imagem2);
        jogadas(total);
    }

    function lancar() {
        return Math.floor(Math.random() * 6) + 1;
    }

    function definirdado(numdado, img) {
        if (numdado == 1) {
            img.src = "../midia/dice1.png";
        } 
        else if (numdado == 2) {
            img.src = "../midia/dice2.png";
        }
        else if (numdado == 3) {
            img.src = "../midia/dice3.png";
        }
        else if (numdado == 4) {
            img.src = "../midia/dice4.png";
        }
        else if (numdado == 5) {
            img.src = "../midia/dice5.png";
        }
        else {
            img.src = "../midia/dice6.png";
        }
    }

    function jogadas(total) {
        if (primeiraRodada) {
            if (total == 7 || total == 11) {
                venceu = true;
                document.getElementById("resultado").textContent = "Você ganhou!";
            } else if (total == 2 || total == 3 || total == 12) {
                perdeu = true;
                document.getElementById("resultado").textContent = "Você perdeu!";
            } else {
                ponto = total;
                document.getElementById("ponto").textContent = ponto;
            }
            primeiraRodada = false;
        } else {
            if (total == ponto) {
                venceu = true;
                document.getElementById("resultado").textContent = "Você ganhou!";
            } else if (total == 7) {
                perdeu = true; // Corrigido para "perdeu" em vez de "hasLost"
                document.getElementById("resultado").textContent = "Você perdeu!";
            }
        }
    }

    