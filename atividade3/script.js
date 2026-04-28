let numero = parseInt(prompt("Digite um número: "));
let mensagem = "";

for (let contador = 1; contador <= 10; contador++) {
    mensagem += numero + " x " + contador + " = " + (numero * contador) + "\n";
}

alert(mensagem);