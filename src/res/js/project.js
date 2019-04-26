const pug = require('pug');

const mainPage = pug.compileFile('templates/main/main.pug');

let body = document.getElementsByTagName('body')[0];
body.innerHTML = mainPage({

});
