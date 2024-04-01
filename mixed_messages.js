const quotes = require('./data.js');

const randomNum = Math.floor(Math.random() * quotes.length);

console.log(quotes[randomNum].author + ': ' + quotes[randomNum].quote);