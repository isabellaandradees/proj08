let soma = 0;

for (let contador = 1; contador <= 5; contador++) {
    let nota = parseInt(prompt("Digite a " + contador + "ª nota:"));
    soma += nota;
}

let media = soma / 5;

alert("A média é: " + media);