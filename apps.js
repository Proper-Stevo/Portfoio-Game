document.addEventListener('DOMContentLoaded', () => {

    var cardArray = new Array ();
        
        imgArray[0] = new Image();
        imgArray[0].src = 'images/beach1.jpeg';
        
        imgArray[1] = new Image();
        imgArray[1].src = 'images/ocean1.jpeg';
        
    
        imgArray[2] = new Image();
        imgArray[2].src = 'images/snow1.jpeg'
        
    
        imgArray[3] = new Image();
        imgArray[3].src = 'images/space1.jpeg'
        
        
        imgArray[4] = new Image();
        imgArray[4].src = 'images/valley1.jpeg'
        
        
        imgArray[5] = new Image();
        imgArray[5].src = 'images/waterfall1.jpeg'
        
        imgArray[5] = new Image();
        imgArray[5].src = 'images/waterfall1.jpeg'
        
        
        imgArray[4] = new Image();
        imgArray[4].src = 'images/valley1.jpeg'
        
    
        imgArray[3] = new Image();
        imgArray[3].src = 'images/space1.jpeg'
        
        
        imgArray[2] = new Image();
        imgArray[2].src = 'images/snow1.jpeg'
        
    
        imgArray[1] = new Image();
        imgArray[1].src = 'images/ocean1.jpeg'
        
        
        imgArray[0] = new Image();
        imgArray[0] = 'images/beach1.jpeg'
        
    

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []

    // create game board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            const card = document.createElement('img')
            card.setAttribute('src', 'images/blank.jpg')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipcard)
            grid.appendChild(card)
        }
    }

    //check for matches
    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]

        if (optionOneId == optionTwoId) {
            cards[optionOneId].setAttribute('src', 'images/blank.jpg')
            cards[optionTwoId].setAttribute('src', 'images/blank.jpg')
            alert('You Clicked The Same Image!')
        } 
        else if (cardsChosen[0] === cardsChosen[1]) {
            alert('You Found A Match!')
            cards[optionOneId].setAttribute('src', 'images/white.jpg')
            cards[optionTwoId].setAttribute('src', 'images/white.jpg')
            cards[optionOneId].removeEventListener('click', flipcard)
            cards[optionTwoId].removeEventListener('click', flipcard)
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/blank.jpg')
            cards[optionTwoId].setAttribute('src', 'images/blank.jpg')
            alert('Sorry, Try Again!')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'Congratulations! You Found Them All!'
        }
    }

    //flipcard
    function flipcard() {
        var cardId = this.getAttribute('data-id')
        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard()
})