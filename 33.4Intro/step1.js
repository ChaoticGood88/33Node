const fs = require('fs'); // File System module
const process = require('process'); // Process module for command-line arguments

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

// Get the file path from command-line arguments
const path = process.argv[2];

// Check if a path argument was provided
if (!path) {
    console.error('Please provide a file path as an argument.');
    process.exit(1);
}

// Call the `cat` function with the specified path
cat(path);