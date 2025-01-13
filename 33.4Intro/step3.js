const fs = require('fs'); // File System module
const process = require('process'); // Process module for command-line arguments
const axios = require('axios'); // HTTP client for fetching web pages

// Helper function to handle output (console or file)
function handleOutput(data, outPath) {
    if (outPath) {
        fs.writeFile(outPath, data, 'utf8', (err) => {
            if (err) {
                console.error(`Couldn't write ${outPath}:\n  ${err}`);
                process.exit(1); // Halt the script with an error code
            }
        });
    } else {
        console.log(data); // Print to console
    }
}

// Function to read a file and process its content
function cat(path, outPath) {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            console.error(`Error reading ${path}:\n  ${err}`);
            process.exit(1); // Halt the script with an error code
        }
        handleOutput(data, outPath); // Handle output
    });
}

// Function to fetch a URL and process its content
async function webCat(url, outPath) {
    try {
        const response = await axios.get(url); // Fetch the URL
        handleOutput(response.data, outPath); // Handle output
    } catch (err) {
        console.error(`Error fetching ${url}:\n  ${err}`);
        process.exit(1); // Halt the script with an error code
    }
}

// Get arguments from the command line
const args = process.argv.slice(2); // Skip the first two elements (node and script name)

// Check if the '--out' option is provided
let outPath;
let target;

if (args[0] === '--out') {
    if (args.length < 3) {
        console.error('Usage: node step3.js [--out output-file] file-or-url');
        process.exit(1);
    }
    outPath = args[1]; // Output file path
    target = args[2]; // File path or URL
} else {
    target = args[0]; // File path or URL
}

// Determine if the target is a URL or a file path
if (target.startsWith('http://') || target.startsWith('https://')) {
    webCat(target, outPath); // Call webCat for URLs
} else {
    cat(target, outPath); // Call cat for file paths
}