const path = require('path');
//puts the base file name

console.log(path.basename(__filename));

//Directory_name
console.log(path.dirname(__filename));

// File extension
console.log(path.extname(__filename));
 
// create path object

console.log(path.parse(__filename).base);

console.log(path.join(__dirname,'test','hello.html'));