const valorConvertido = document.querySelector('#valorConvertido');

function Converter() {
    
    const valorReal = Number(document.querySelector("#valor").value);
    const valorPesoArgentino = valorReal * 27.09;

    valorConvertido.innerHTML = `O resultado em peso argentino é ${valorPesoArgentino}`
};
