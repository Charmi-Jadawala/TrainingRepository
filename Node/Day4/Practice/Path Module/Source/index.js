//DAY-4 PRACTICE-2
const path = require('path');

//path.basename()
console.log(path.basename('/demo/test'));
console.log(path.basename('/demo/test.txt')); 
console.log(path.basename('/demo/test.txt', '.txt')); 

//path.dirname()
console.log(path.dirname('/demo/test.txt'));
console.log(path.dirname('/demo/test/info.txt'));

//path.extname()
console.log(path.extname('/demo/test.txt'));
console.log(path.extname('/demo/test/info.txt'));

//path.isAbsolute()
console.log(path.isAbsolute('./demo/test.txt'));
console.log(path.isAbsolute('/demo/test.txt'));

//path.join()
var name = 'Charmi';
console.log(path.join('/', 'demo', name, 'info.txt'));

//path.parse()
console.log(path.parse('/demo/test.txt'));