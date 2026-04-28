let mensagem = "";
let numero = prompt("Digite um número");

for (let i = 1; i <= numero; i++) {
    mensagem = `${mensagem} ${i}`
}
alert(mensagem);