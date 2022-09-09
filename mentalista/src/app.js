const secretNumber = Math.floor(Math.random() * 10 + 1);
const resultado = document.querySelector('#resultado');
const tentativas = document.getElementById("tentativas");
let contador = 3;


function random() { 
    const valor = Number(document.querySelector('#valor').value);

    if (secretNumber === valor) {
        resultado.innerHTML = 'Parabéns! Você acertou'
    } else if (secretNumber > valor) {
        resultado.innerHTML = 'O número secreto é maior'
        contador = contador - 1;
    } else if (valor > 10 || valor < 0) {
        resultado.innerHTML = 'Digite um número entre 0 e 10'
    } else {
        resultado.innerHTML = 'O número secreto é menor'
        contador = contador - 1;
    } 

    if (contador === 0) {
        tentativas.innerHTML = 'Suas tentativas acabaram'
    } else {
        tentativas.innerHTML = 'tente novamente'
    }
};
