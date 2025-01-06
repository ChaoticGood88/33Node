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
