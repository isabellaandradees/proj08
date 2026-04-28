let soma = 0;

for (let contador = 1; contador <= 10; contador++) {
    let number = parseInt(prompt("DIgite o " + contador + "º número:"));
    soma += number;
}

alert("A soma dos números é: " + soma);