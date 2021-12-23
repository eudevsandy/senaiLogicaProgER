var pesoPeca = 10;

if (pesoPeca > 100) {
    console.log("Cadastro permitido.") }
else { 
    console.log("Peso insuficiente. Cadastro permitido apenas para peças maiores que 100g.")
}

var qtdPecas = 10;

if (qtdPecas <10) {
    console.log("Cadastro permitido.")}

else { 
    console.log("Capacidade insuficiente na caixa, cadastro não permitido.")
     
}

var nomePeca = "Pa";

console.log ("O nome da peça possui:", nomePeca.length, "caracteres")

if (nomePeca.length < 3) {
    console.log("Nome curto. Não é possível cadastrar.")
}

else { console.log ("Cadastro permitido.")}