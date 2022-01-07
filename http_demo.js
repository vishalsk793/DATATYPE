var http = require('http');

http.createServer(
    function(request, response) 
    {
        response.end('Welcome to MEAN');
    }
).listen(3000);