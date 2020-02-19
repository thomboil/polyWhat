//If this code is not in a define call,
//DO NOT use require('foo'), but use the async
//callback version:
require([], function (foo) {
    //foo is now loaded.
});

function nameGenerate() {
    document.getElementById("generatedName").innerHTML = "Hello World";
}

// Requiring fs module in which 
// readFile function is defined. 
var fs = require('fs');
  
// Reading data in utf-8 format 
// which is a type of character set. 
// Instead of 'utf-8' it can be  
// other character set also like 'ascii' 
fs.readFile('wordList.txt', 'utf-8', (err, data) => { 
    if (err) throw err; 
  
    // Converting Raw Buffer to text 
    // data using tostring function. 
    console.log(data); 
})


