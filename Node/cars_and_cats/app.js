const http = require('http');
const fs = require('fs');
const server = http.createServer((request, response) => {
    if(request.url === '/cars') {
        fs.readFile('views/index.html', 'utf8', (errors, contents) => {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents); 
            response.end();
        });
    }


    else if (request.url === "/stylesheets/styles.css") {
         fs.readFile('stylesheets/styles.css', 'utf8', (errors, contents) => {
             response.writeHead(200, {'Content-type': 'text/css'});
             response.write(contents); 
             response.end();
         });
    }


    else if (request.url === "/cats") {
         fs.readFile('views/cats.html', 'utf8', (errors, contents) => {
             response.writeHead(200, {'Content-type': 'text/html'});
             response.write(contents); 
             response.end();
         });
    }


    else if (request.url === "/cars/new") {
         fs.readFile('views/newcar.html', 'utf8', (errors, contents) => {
             response.writeHead(200, {'Content-type': 'text/html'});
             response.write(contents); 
             response.end();
         });
    }


    else if (request.url === "/images/car1.jpg") {
         fs.readFile('images/car1.jpg', (errors, contents) => {
             response.writeHead(200, {'Content-type': 'image/jpg'});
             response.write(contents); 
             response.end();
         });
    }


    else if (request.url === "/images/cats.jpg") {
         fs.readFile('images/cats.jpg', (errors, contents) => {
             response.writeHead(200, {'Content-type': 'image/jpg'});
             response.write(contents); 
             response.end();
         });
    }






    else {
        response.end('File not found!!!');
    }
});
server.listen(7077);
console.log("listening on port 7077");