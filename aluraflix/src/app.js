

function adicionarFilme() {
    const filme = document.querySelector("#filme").value;

    if(filme.endsWith(".jpg")) {
        listarFilmes(filme)
    } else {
        alert("Endereço de filme inválido");
    }
};


function listarFilmes(filme) {
    const filmeFavorito  = " <img src = " + filme + " > ";
    const listaFilmes = document.querySelector("#listaFilmes");

    listaFilmes.innerHTML = listaFilmes.innerHTML + filmeFavorito;
}

