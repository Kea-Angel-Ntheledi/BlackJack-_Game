// Define a player object with name and chips properties
let player = {
    name: "Bet", // Player's name
    chips: 200, // Player's chips (in-game currency)
    }

// Array to store player's cards
let cards = []  

let sum = 0 // Variable to keep track of the sum of the player's cards
let hasBlackJack = false  
let isAlive = false   
let message = ""    
let messageEl = document.getElementById("message-el")      
let sumEl = document.getElementById("sum-el") 
let cardsEl = document.getElementById("cards-el")   
let playerEl = document.getElementById("player-el") 
playerEl.textContent = player.name + ": R" + player.chips 

// Function to get a random card value
function getRandomCard() {      
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

// Function to start the game
function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

// Function to render the game state
function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    // Determine game message based on the sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message // Display the message
}

// Function to draw a new card
function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    }
}
