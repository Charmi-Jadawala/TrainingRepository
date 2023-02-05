const util = require('util');

const name = 'Charmi';

const message = util.format('Hello, %s! See you after %d days.', name, 6);
console.log(message);
