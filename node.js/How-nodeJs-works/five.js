// crypto-demo.js
const crypto = require('crypto');

const start = Date.now();

// These use libuv's thread pool (default 4 threads)
for (let i = 0; i < 5; i++) {
    crypto.pbkdf2('password', 'salt', 100000, 512, 'sha512', () => {
        console.log(`Hash ${i+1} done in ${Date.now() - start}ms`);
    });
}