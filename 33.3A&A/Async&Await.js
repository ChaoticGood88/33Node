//Part1
//1.
const favoriteNumber = 8;
const getNumberFact = async (number) => {
    const response = await fetch(`http://numbersapi.com/${number}?json`);
    const data = await response.json();
    console.log(data.text);
};

getNumberFact(favoriteNumber);

//2.
const numbers = [3, 5, 7];
const getMultipleNumberFacts = async (numbers) => {
    const response = await fetch(`http://numbersapi.com/${numbers.join(',')}?json`);
    const data = await response.json();

    for (const [number, fact] of Object.entries(data)) {
        console.log(`Fact about ${number}: ${fact}`);
    }
};

getMultipleNumberFacts(numbers);

//3.
const getMultipleFactsAboutNumber = async (number) => {
    const promises = Array.from({ length: 4 }, () =>
        fetch(`http://numbersapi.com/${number}?json`).then((res) => res.json())
    );

    const facts = await Promise.all(promises);

    facts.forEach((fact, index) => {
        console.log(`Fact ${index + 1}: ${fact.text}`);
    });
};

getMultipleFactsAboutNumber(favoriteNumber);

//Part 2
//1.
const drawSingleCard = async () => {
    const response = await fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=1');
    const data = await response.json();
    const card = data.cards[0];
    console.log(`${card.value} of ${card.suit}`);
};

drawSingleCard();

//2.
const drawTwoCards = async () => {
    const firstResponse = await fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=1');
    const firstData = await firstResponse.json();
    const firstCard = firstData.cards[0];

    const deckId = firstData.deck_id;
    const secondResponse = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
    const secondData = await secondResponse.json();
    const secondCard = secondData.cards[0];

    console.log(`${firstCard.value} of ${firstCard.suit}`);
    console.log(`${secondCard.value} of ${secondCard.suit}`);
};

drawTwoCards();

//3.
let deckId = null;

const initializeDeck = async () => {
    const response = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/');
    const data = await response.json();
    deckId = data.deck_id;
    console.log(`Deck initialized with ID: ${deckId}`);
};

const drawCardFromDeck = async () => {
    if (!deckId) {
        console.error('Deck not initialized yet!');
        return;
    }

    const response = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
    const data = await response.json();

    if (data.remaining === 0) {
        console.log('No cards left in the deck!');
        document.querySelector('#draw-card').disabled = true;
        return;
    }

    const card = data.cards[0];
    console.log(`${card.value} of ${card.suit}`);

    const cardContainer = document.querySelector('#card-container');
    const cardImage = document.createElement('img');
    cardImage.src = card.image;
    cardImage.alt = `${card.value} of ${card.suit}`;
    cardContainer.appendChild(cardImage);
};

document.addEventListener('DOMContentLoaded', () => {
    initializeDeck();

    const drawCardButton = document.querySelector('#draw-card');
    drawCardButton.addEventListener('click', drawCardFromDeck);
});
