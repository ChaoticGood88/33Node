const fs = require("fs");
const axios = require("axios");
const { MarkovMachine } = require("./markov");

/** Generate Markov text from file */
function makeTextFromFile(filePath) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error(`Error reading file '${filePath}': ${err.message}`);
      process.exit(1);
    }
    generateText(data);
  });
}

/** Generate Markov text from URL */
async function makeTextFromURL(url) {
  try {
    let response = await axios.get(url);
    generateText(response.data);
  } catch (err) {
    console.error(`Error fetching URL '${url}': ${err.message}`);
    process.exit(1);
  }
}

/** Generate and print random Markov text */
function generateText(text) {
  let mm = new MarkovMachine(text);
  console.log(mm.makeText());
}

/** Main function to process command-line arguments */
function main() {
  let [method, path] = process.argv.slice(2);

  if (!method || !path) {
    console.error("Usage: node makeText.js <file|url> <path>");
    process.exit(1);
  }

  if (method === "file") {
    makeTextFromFile(path);
  } else if (method === "url") {
    makeTextFromURL(path);
  } else {
    console.error("Unknown method. Use 'file' or 'url'.");
    process.exit(1);
  }
}

main();