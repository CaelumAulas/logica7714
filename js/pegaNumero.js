//criação da função
function pegaNumeroDoUsuario(frase) {
    var numero;
    numero = parseFloat(prompt(frase).replace(",","."));
    return numero;
}