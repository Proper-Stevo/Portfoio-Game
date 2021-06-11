document.addEventListener('DOMContentLoaded', () => {

    const cardArray = [
        {
            name: 'beach1',
            img: 'images/images/beach1.jpg'
        },
        {
            name: 'blank',
            img: 'imgaes/images/blank.jpg'
        },
        {
            name: 'ocean1',
            img: 'images/images/ocean.jpg'
        },
        {
            name: 'snow1',
            img: 'images/images/snow.jpg'
        },
        {
            name: 'space1',
            img: 'images/images/space1.jpg'
        },
        {
            name: 'valley1',
            img: 'images/images/valley1.jpg'
        },
        {
            name: 'waterfall1'
            img: 'images/images/waterfall1.jpg'
        },
        {
            name: 'white',
            img: 'images/images/white.jpg'
        },
        {
            name: 'white',
            img: 'images/images/white.jpg'
        },
        {
            name: 'waterfall1'
            img: 'images/images/waterfall1.jpg'
        },
        {
            name: 'valley1',
            img: 'images/images/valley1.jpg'
        },
        {
            name: 'space1',
            img: 'images/images/space1.jpg'
        },
        {
            name: 'snow1',
            img: 'images/images/snow.jpg'
        },
        {
            name: 'ocean1',
            img: 'images/images/ocean.jpg'
        },
        {
            name: 'blank',
            img: 'imgaes/images/blank.jpg'
        },
        {
            name: 'beach1',
            img: 'images/images/beach1.jpg'
        },
    ]
    

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