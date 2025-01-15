/** Textual markov chain generator */

class MarkovMachine {
  /** Build markov machine; read in text. */
  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter((c) => c !== "");
    this.makeChains();
  }

  /** Set markov chains */
  makeChains() {
    this.chains = {};

    for (let i = 0; i < this.words.length; i++) {
      let word = this.words[i];
      let nextWord = this.words[i + 1] || null;

      if (!this.chains[word]) {
        this.chains[word] = [];
      }

      this.chains[word].push(nextWord);
    }
  }

  /** Return random text from chains */
  makeText(numWords = 100) {
    if (this.words.length === 0) return ""; // Handle empty input

    let key = this.words[Math.floor(Math.random() * this.words.length)];
    let output = [];

    while (output.length < numWords && key !== null) {
      output.push(key);
      let nextWords = this.chains[key];

      // Handle single-word input or dead-end chains
      key = nextWords[Math.floor(Math.random() * nextWords.length)] || this.words[0];
    }

    return output.join(" ");
  }
}

module.exports = { MarkovMachine };