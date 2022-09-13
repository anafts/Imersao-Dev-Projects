// array de filmes
let listFilmes = ['https://m.media-amazon.com/images/M/MV5BMTA1NDQ3NTcyOTNeQTJeQWpwZ15BbWU3MDA0MzA4MzE@._V1_.jpg' , 'https://upload.wikimedia.org/wikipedia/pt/f/fd/Me_Before_You_%28film%29.jpg' , 'https://images-na.ssl-images-amazon.com/images/I/81zeqn6hofL.jpg'];


for (let i = 0; i < listFilmes.length; i++) {

    document.write('<img src= ' + listFilmes[i] + '>');

};

