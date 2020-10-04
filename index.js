const infoperson = require('./information.js');
console.log(infoperson);

const cowsay = require('cowsay');
console.log(
  cowsay.say({
    text: `Je m'appelle ${infoperson.name}, je suis ${infoperson.campus}`,
  })
);
