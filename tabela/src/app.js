const brasil = {
    nome:'Brasil' ,
    vitorias: 0,
    empates: 0,
    derrotas: 0, 
    pontos: 0
}

const servia = {
    nome:'Servia' ,
    vitorias: 0,
    empates: 0,
    derrotas: 0, 
    pontos: 0
}

const suica = {
    nome:'Suiça' ,
    vitorias: 0,
    empates: 0,
    derrotas: 0, 
    pontos: 0
}

const camaroes = {
    nome:'Camarões' ,
    vitorias: 0,
    empates: 0,
    derrotas: 0, 
    pontos: 0
}


function calPontos(times) {
    let pontos = (times.vitorias * 3) + times.empates;
    return pontos;
}

brasil.pontos = calPontos(brasil);
servia.pontos = calPontos(servia);
suica.pontos = calPontos(suica);
camaroes.pontos = calPontos(camaroes);

let jogadores = [brasil, servia, suica, camaroes]

function exibir(jogadores) {
    let elemento = '';

    for(let i = 0; i < jogadores.length; i++) {
        elemento += " <tr> <td> " + jogadores[i].nome +" </td>"
        elemento += " <td>" + jogadores[i].vitorias +" </td>"
        elemento += " <td> " + jogadores[i].empates +" </td>"
        elemento += " <td> " + jogadores[i].derrotas +" </td>"
        elemento += " <td> " + jogadores[i].pontos +" </td>"
        elemento += " <td><button onClick='adicionarVitoria("+ i +")'>Vitória</button></td>"
        elemento += " <td><button onClick='adicionarEmpate("+ i +")'>Empate</button></td>"
        elemento += " <td><button onClick='adicionarDerrota("+ i +")'>Derrota</button></td>"
        elemento += " </tr>"
    }
    const tabelasJogadores = document.querySelector('#tabelaJogadores');
    tabelasJogadores.innerHTML = elemento
}

exibir(jogadores);


function adicionarVitoria(i) {
    let jogador = jogadores[i];
    jogador.vitorias++;

    jogador.pontos = calPontos(jogador);
    exibir(jogadores);
}

function adicionarEmpate(i) {
    let jogador = jogadores[i];
    jogador.empates++;

    jogador.pontos = calPontos(jogador);
    exibir(jogadores);
}

function adicionarDerrota(i) {
    let jogador = jogadores[i];
    jogador.derrotas++;

    jogador.pontos = calPontos(jogador);
    exibir(jogadores);
}