function apresentar() {
    let nome = "Débora";
    let hobby = "Ler";

    const paragrafo = document.getElementById("mensagem");
    paragrafo.textContent = "Olá, eu sou " + nome + " e gosto muito de " + hobby + " !";
}