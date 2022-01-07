const fp = require('fs');

var welcomeNote = "GOOD MORNING WELCOME TO MEAN";
fp.writeFile('test.txt', welcomeNote, (err) => {
    if (err) console.log(err);
    console.log(welcomeNote);
});

fp.readFile('test.txt', 'utf-8', (err, data) => {
    if (err) console.log(err);
    console.log(data);
});