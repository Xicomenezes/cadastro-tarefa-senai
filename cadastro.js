var anoNasc, anoAtual, idade;

anoAtual = 2022;

var entrada = require('readline-sync');
anoNasc = parseInt(entrada.question("Ano de Nascimento:"));
idade = anoAtual-anoAtual;
console.log("idade");
if(idade>=18){
    console.log("Acesso Permitido!;");
}else{
    console.log("Acesso Negado");
}
