// event-loop-phases.js
const fs = require('fs');

// 1. Timer Phase (setTimeout)
setTimeout(() => console.log('1. setTimeout (Timer Phase)'), 0);

// 2. I/O Phase - This callback runs after a file read operation
fs.readFile(__filename, () => {
    console.log('2. I/O Phase (fs.readFile)');

    // 4. setImmediate inside I/O - goes to Check Phase
    setImmediate(() => console.log('4. setImmediate inside I/O (Check Phase)'));

    // 5. Next Tick inside I/O - goes to Microtask Queue
    process.nextTick(() => console.log('5. process.nextTick inside I/O (Microtask)'));
});

// 3. Check Phase (setImmediate)
setImmediate(() => console.log('3. setImmediate (Check Phase)'));

// 6. Microtask Queue (process.nextTick)
process.nextTick(() => console.log('6. process.nextTick Top-level (Microtask)'));

// Expected output order is roughly: 1, 6, 3, 2, 5, 4