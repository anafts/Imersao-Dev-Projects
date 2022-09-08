const valorConvertido = document.querySelector('#valorConvertido');

function Converter() {
    
    const valorDola = Number(document.querySelector("#valor").value);
    const valorReal = valorDola * 5;

    valorConvertido.innerHTML = `O resultado em real é R$ ${valorReal}`
};
