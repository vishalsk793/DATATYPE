var connect = require('connect');
const app = new connect();


function getLandingPage(req, res, next) {
    res.write('Welcome to Connect');
    next();
}

function nextPage(req, res, next) {
    res.end("Welcome to Next Page");
}

app.use(getLandingPage);
app.use(nextPage);
app.listen('3000');