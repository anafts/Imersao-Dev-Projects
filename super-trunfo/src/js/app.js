    // getting cards from other js file
    import cards from "./cards.js";

    // adding event listener
    document.querySelector('#btnrandom').addEventListener('click', randomCards);
    document.querySelector('#btnplay').addEventListener('click', play);

    // cards variables
    let computerCards;
    let gameCards;

    // to random cards
    function randomCards() {
        // computer card random
        let computerCardsNumber = Math.floor(Math.random() * cards.length);
        computerCards = cards[computerCardsNumber];

        // player card random
        let gameCardsNumber = Math.floor(Math.random() * cards.length);
        gameCards = cards[gameCardsNumber];

        // to get different cards to both
        if (gameCards === computerCards) {
            randomCards();
        } else {
            // to click in the buttons
            document.querySelector('#btnrandom').disabled = true;
            document.querySelector('#btnplay').disabled = false;
            showAttributes();
            showGameCardsScreen();
            console.log(gameCards);
        }
    };


    // to get from js object and show attributes on screen
    function showAttributes() {
      let options = document.querySelector('#optionss');
      let optionsText = "";

      for ( let attribute in gameCards.attributes ) {
        optionsText += "<input type='radio' name='attribute' value='" + attribute + "'>" + attribute;
      }

      options.innerHTML = optionsText;
    };


    // to get which radio was selected
    function getAttributes() {
        let radioAttribute = document.getElementsByName('attribute');

        for (let i = 0; i < radioAttribute.length; i++) {
            if (radioAttribute[i].checked === true) {
                return radioAttribute[i].value;
            } 
        }
    };


    // get on screen the result of the game
    function play() {

        let attributeSelected =  getAttributes();
        let result = document.querySelector('#result');
        let gameCardsValue = gameCards.attributes[attributeSelected];
        let computerCardsValue = computerCards.attributes[attributeSelected];

        if (gameCardsValue > computerCardsValue) { 
            result.innerHTML = " <p class='resultado-final'>You win</p>";
        } else if (gameCardsValue < computerCardsValue) {
            result.innerHTML = " <p class='resultado-final'>You lost!</p>";
        } else {
            result.innerHTML = " <p class='resultado-final'>You draw!</p>";
        }

        showComputerCards()
        document.querySelector('#btnplay').disabled = true;

        console.log(computerCards);
    };

    
    function showGameCardsScreen() {
        let showGameCards = document.querySelector('#carta-jogador');
        showGameCards.style.backgroundImage = `url(${gameCards.img})`

        let frame = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
        let choice = " <div id='opcoes' class='carta-status'>";

        let optionsText = "";

        for ( let attribute in gameCards.attributes ) {
          optionsText += "<p class='option-text' type='radio' name='attribute' value='" + attribute + "'>" + attribute + ": " + gameCards.attributes[attribute] + "</p>";
        }

        let name = `<h3 class='carta-subtitle'> ${gameCards.name} </h3> <br>`;
        let house = `<p class='carta-subtitle-house'> ${gameCards.house} </p> <br>`;

        showGameCards.innerHTML = frame + name + choice + house + optionsText+ "</div>";
    }


    function showComputerCards() {
        let showComputerCards = document.querySelector('#carta-maquina');
        showComputerCards.style.backgroundImage = `url(${computerCards.img})`

        let frame = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
        let choice = " <div id='opcoes' class='carta-status'>";

        let optionsText = "";

        for ( let attribute in computerCards.attributes ) {
          optionsText += "<p class='option-text'  type='text' name='attribute' value='" + attribute + "'>" + attribute + ": " + computerCards.attributes[attribute] + "</p>";
        }

        let name = `<h3 class='carta-subtitle'> ${computerCards.name} </h3> <br>`;
        let house = `<p class='carta-subtitle-house'> ${computerCards.house} </p> <br>`;

        showComputerCards.innerHTML = frame + name + choice + house + optionsText+ "</div>";
        
    };





