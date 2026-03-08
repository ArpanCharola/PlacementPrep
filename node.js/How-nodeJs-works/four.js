// simple-emitter.js
class SimpleEmitter {
    constructor() {
        this.events = {};
    }
    // Subscribe to an event
    on(eventName, callback) {
        if (!this.events[eventName]) this.events[eventName] = [];
        this.events[eventName].push(callback);
    }
    // Trigger (emit) an event
    emit(eventName, data) {
        if (this.events[eventName]) {
            this.events[eventName].forEach(callback => callback(data));
        }
    }
}

// Usage
const myEmitter = new SimpleEmitter();
myEmitter.on('userLoggedIn', (user) => {
    console.log(`Event Triggered: Welcome back, ${user}!`);
});

console.log('Emitting event...');
myEmitter.emit('userLoggedIn', 'Alex');