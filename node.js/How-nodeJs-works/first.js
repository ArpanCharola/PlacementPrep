// non-blocking-demo.js
const fs = require('fs');

console.log('1. Start reading file...');

// Asynchronous, non-blocking operation
fs.readFile(__filename, 'utf-8', (err, data) => {
    if (err) throw err;
    console.log('3. File reading finished.');
});

console.log('2. End of script?');
// Output:
// 1. Start reading file...
// 2. End of script?
// 3. File reading finished.