function mostrarSaudacao() {
    //Variável com nome fixo
    let nome = "Maria";
    
    //Seleciona o parágrafo onde a mensagem será exibida
    const paragrafo = document.getElementById("mensagem");

    //Exibe a mensagem personalizada com a variável
    paragrafo.textContent = "Olá " + nome + "! Seja bem-vindo(a)";


}       