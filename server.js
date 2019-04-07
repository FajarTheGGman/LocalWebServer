var http = require('http');
var fs = require('fs');
var warna = require('colors');
var url = require('url');

var mamang = http.createServer(function (req, response) {
    var connect = url.parse(req.url);
    if (connect.pathname == "/"){
    response.writeHead(200, {'Content-type' : 'text/html'});
    fs.createReadStream(__dirname + '/index.html').pipe(response);
    }else if (connect.pathname == "/project"){
    response.writeHead(200, {'Content-type' : 'text/html'});
    fs.createReadStream(__dirname + '/database/test.html').pipe(response);
    }else if (connect.pathname == "/f"){
    response.writeHead(200, {'Content-type' : 'text/html'});
    fs.createReadStream(__dirname + '/database/f.html').pipe(response);
    }else if (connect.pathname == "/admin"){
    response.writeHead(200, {'Content-type' : 'text/html'});
    fs.createReadStream(__dirname + '/database/admin.html').pipe(response);
    }else if (connect.pathname == "/admin-session"){
    response.writeHead(200, {'Content-type' : 'text/html'});
    fs.createReadStream(__dirname + '/database/session.html').pipe(response);
    }else if (connect.pathname == "/adminsearch"){
    response.writeHead(200, {'Content-type' : 'image/jpg'});
    fs.createReadStream(__dirname + '/img/ad.jpg').pipe(response);
    }else if (connect.pathname == "/profile"){
    response.writeHead(200, {'Content-type' : 'image/jpg'});
    fs.createReadStream(__dirname + '/img/profile.jpg').pipe(response);
    }else if (connect.pathname == "/aboutme"){
    response.writeHead(200, {'Content-type' : 'image/png'});
    fs.createReadStream(__dirname + '/img/aboutme.png').pipe(response);
    }else if (connect.pathname == "/adminbackground"){
    response.writeHead(200, {'Content-type' : 'image/jpg'});
    fs.createReadStream(__dirname + '/img/adminbackground.jpg').pipe(response);
    }else if (connect.pathname == "/myhub"){
    response.writeHead(200, {'Content-type' : 'image/png'});
    fs.createReadStream(__dirname + '/img/myhub.png').pipe(response);
    }
});
mamang.listen(8080);  

console.log("")
console.log(warna.rainbow("Web Server By Fajar Firdaus"))
console.log("")
console.log(warna.rainbow("[======================]"))
console.log(warna.red("Author : Fajar Firdaus"))
console.log(warna.red("Fb : Fajar Firdaus"))
console.log(warna.red("IG : fajar_firdaus_7"))
console.log(warna.rainbow("[======================]"))

console.log("")
console.log('[+]server berjalan....')
console.log("")
console.log("[+]Server berjalan pada port 8080 !!")
