var app = require('http').createServer(handler)
var io = require('socket.io')(app);
var fs = require('fs');

app.listen(1337);

function handler (req, res) {
  console.log(req.url);
  var url;

  switch(req.url) {
    case "/":
        url="/index.html";
        break;
    case "/mobile" :
       url ="mobile.html"
        break;
    default:
        default code block
}

  fs.readFile(__dirname + url,
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }

    res.writeHead(200);
    res.end(data);
  });
}


io.on('connection', function (socket) {
  //socket.emit('news', { hello: 1 });
  socket.on('my other event', function (data) {
    //console.log(data);
    //socket.emit('news', { hello:data.hello });
  });
});