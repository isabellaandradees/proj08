let numero1 = parseInt(prompt("Digite o primeiro número:"));
let numero2 = parseInt(prompt("Digite o segundo número:"));

let mensagem = "";

for (let contador = numero1; contador <= numero2; contador++) {
    if (contador % 2 == 0) {
        mensagem += contador + "\n";
    }
}

alert(mensagem);