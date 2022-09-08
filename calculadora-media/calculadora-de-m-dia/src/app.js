const resultado = document.querySelector('#mediafinal');
const info = document.querySelector('#info');


function calcularMedia() {

    // guardando as notas 
    const primeiraNota = Number(document.querySelector('#primeiraNota').value);
    const segundaNota = Number(document.querySelector('#segundaNota').value);
    const terceiraNota = Number(document.querySelector('#terceiraNota').value);
    const quartaNota = Number(document.querySelector('#quartaNota').value);

    // calculando a média
    const media = (primeiraNota + segundaNota + terceiraNota + quartaNota) / 4;
    const mediaFinal = media.toFixed(2);

    // recebendo o resultado
    if (mediaFinal >= 6) {
        resultado.innerHTML = `Sua média é: ${mediaFinal}`
        info.innerHTML = "Parabéns! Você foi aprovado."
        info.style.color = 'green'
    } else {
        resultado.innerHTML = `Sua média é: ${mediaFinal}`
        info.innerHTML = "Ah, que pena! Você foi Reprovado!"
        info.style.color = 'red'
    }

    console.log(mediaFinal);
};