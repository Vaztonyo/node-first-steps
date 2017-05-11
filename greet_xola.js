const chalk = require('chalk');

const greet = require('./greet');

console.log(greet('Xola'))


//import the greet module that is in the current folder
// const greet = require('./greet');

const styledMessage = chalk.bgBlue.black(greet('Xola'));
console.log(styledMessage)

var figlet = require('figlet');

figlet('Hello Xola!!', {
  font: 'Ghost',
  horizontalLayout: 'default',
  verticalLayout: 'default'
}, function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});
