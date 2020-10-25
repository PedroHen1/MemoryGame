document.addEventListener('DOMContentLoaded', () => {
    const cardArray = [
        {
            name: 'image1',
            img: 'img/image1.jpg'
        },
        {
            name: 'image1',
            img: 'img/image1.jpg'
        },
        {
            name: 'image2',
            img: 'img/image2.jpg'
        },
        {
            name: 'image2',
            img: 'img/image2.jpg'
        },
        {
            name: 'image3',
            img: 'img/image3.jpg'
        },
        {
            name: 'image3',
            img: 'img/image3.jpg'
        },
        {
            name: 'image4',
            img: 'img/image4.jpg'
        },
        {
            name: 'image4',
            img: 'img/image4.jpg'
        },
        {
            name: 'image5',
            img: 'img/image5.jpg'
        },
        {
            name: 'image5',
            img: 'img/image5.jpg'
        },
        {
            name: 'image6',
            img: 'img/image6.jpg'
        },
        {
            name: 'image6',
            img: 'img/image6.jpg'
        }
    ]
    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    const cardsWon = []

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'img/padrao.jpg')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }
    //check for matches
    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        
        if(optionOneId == optionTwoId) {
          cards[optionOneId].setAttribute('src', 'img/padrao.jpg')
          cards[optionTwoId].setAttribute('src', 'img/padrao.jpg')
          alert('You have clicked the same image!')
        }
        else if (cardsChosen[0] === cardsChosen[1]) {
          cards[optionOneId].setAttribute('src', 'img/branco.jpg')
          cards[optionTwoId].setAttribute('src', 'img/branco.jpg')
          cards[optionOneId].removeEventListener('click', flipCard)
          cards[optionTwoId].removeEventListener('click', flipCard)
          cardsWon.push(cardsChosen)
        } else {
          cards[optionOneId].setAttribute('src', 'img/padrao.jpg')
          cards[optionTwoId].setAttribute('src', 'img/padrao.jpg')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if  (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'Congratulations! You found them all!'
        }
      }
    //flip card
    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length ===2) {
          setTimeout(checkForMatch, 300)
        }
      }
    
      createBoard()
})