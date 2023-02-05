const EventEmitter = require('events');

const myEvent = new EventEmitter();

//can be emitted multiple times
myEvent.on('Hello', () => {
    console.log('Hello World !!!');
});
myEvent.emit('Hello');

//can be emitted only once
myEvent.once('Once', () => {
    console.log('Hello Once...');
});
myEvent.emit('Once');

myEvent.emit('Hello');
myEvent.emit('Once');
