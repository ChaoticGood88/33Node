const fs = require('fs'); // File System module
const process = require('process'); // Process module for command-line arguments
const axios = require('axios'); // HTTP client for fetching web pages

// Function to read and print the contents of a file
function cat(path) {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            console.error(`Error reading ${path}:\n  ${err}`);
            process.exit(1); // Halt the script with an error code
        }
        console.log(data); // Print the file contents
    });
}

// Function to fetch and print the contents of a URL
async function webCat(url) {
    try {
        const response = await axios.get(url); // Fetch the URL
        console.log(response.data); // Print the response data
    } catch (err) {
        console.error(`Error fetching ${url}:\n  ${err}`);
        process.exit(1); // Halt the script with an error code
    }
}

// Get the argument from the command line
const input = process.argv[2];

// Check if an argument was provided
if (!input) {
    console.error('Please provide a file path or URL as an argument.');
    process.exit(1);
}

// Determine if the input is a URL or a file path
if (input.startsWith('http://') || input.startsWith('https://')) {
    webCat(input); // Call webCat for URLs
} else {
    cat(input); // Call cat for file paths
}