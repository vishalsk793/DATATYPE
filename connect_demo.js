var connect = require('connect');
const app = new connect();


function getLandingPage(req, res, next) {
    res.end('Welcome to Connect');
}


app.use(getLandingPage).listen(3000);