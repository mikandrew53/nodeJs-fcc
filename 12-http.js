const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write('welcome to our home page');
    }else if(req.url === '/about'){
        res.write('Here is out short history');
    }else {
        res.write(`
            <h1>Oops!</h1>
            <p>We can't seem to find the page you are looking for</p>
            <a href="/">back home</a>
        `);
    }
    res.end();
});

server.listen(5000);