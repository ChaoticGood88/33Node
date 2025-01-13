//Part 1
//1.
const favoriteNumber = 7;

fetch(`http://numbersapi.com/${favoriteNumber}?json`)
  .then(response => response.json())
  .then(data => {
    const fact = document.createElement('p');
    fact.textContent = data.text;
    document.body.appendChild(fact);
  })
  .catch(error => console.error('Error fetching the fact:', error));

//2.
const numbers = [3, 7, 12, 25];

fetch(`http://numbersapi.com/${numbers.join(',')}?json`)
  .then(response => response.json())
  .then(data => {
    Object.values(data).forEach(fact => {
      const factElement = document.createElement('p');
      factElement.textContent = fact;
      document.body.appendChild(factElement);
    });
  })
  .catch(error => console.error('Error fetching multiple facts:', error));

//3.
const favoriteNumber = 7;
const promises = [];

for (let i = 0; i < 4; i++) {
  promises.push(fetch(`http://numbersapi.com/${favoriteNumber}?json`).then(response => response.json()));
}

Promise.all(promises)
  .then(facts => {
    facts.forEach(fact => {
      const factElement = document.createElement('p');
      factElement.textContent = fact.text;
      document.body.appendChild(factElement);
    });
  })
  .catch(error => console.error('Error fetching multiple facts:', error));

//Part 2
//1.
fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=1')
  .then(response => response.json())
  .then(data => {
    const card = data.cards[0];
    console.log(`${card.value} of ${card.suit}`);
  })
  .catch(error => console.error('Error fetching card:', error));

//2.
let deckId;

fetch('https://deckofcardsapi.com/api/deck/new/shuffle/')
  .then(response => response.json())
  .then(data => {
    deckId = data.deck_id;
    return fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
  })
  .then(response => response.json())
  .then(data => {
    const firstCard = data.cards[0];
    console.log(`First card: ${firstCard.value} of ${firstCard.suit}`);

    // Draw another card from the same deck
    return fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
  })
  .then(response => response.json())
  .then(data => {
    const secondCard = data.cards[0];
    console.log(`Second card: ${secondCard.value} of ${secondCard.suit}`);
  })
  .catch(error => console.error('Error fetching cards:', error));

//3.
let deckId;

// Create a new deck when the page loads
fetch('https://deckofcardsapi.com/api/deck/new/shuffle/')
  .then(response => response.json())
  .then(data => {
    deckId = data.deck_id;
    console.log('New deck created:', deckId);
  })
  .catch(error => console.error('Error creating a new deck:', error));

// Draw a card when the button is clicked
document.getElementById('draw-card').addEventListener('click', () => {
  if (!deckId) {
    alert('Deck not ready yet. Please wait.');
    return;
  }

  fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
    .then(response => response.json())
    .then(data => {
      if (data.remaining === 0) {
        alert('No cards left in the deck!');
        return;
      }

      const card = data.cards[0];
      const cardContainer = document.getElementById('card-container');

      // Display the card
      const cardImage = document.createElement('img');
      cardImage.src = card.image;
      cardImage.alt = `${card.value} of ${card.suit}`;
      cardImage.style.margin = '10px';
      cardContainer.appendChild(cardImage);

      console.log(`${card.value} of ${card.suit}`);
    })
    .catch(error => console.error('Error drawing a card:', error));
});