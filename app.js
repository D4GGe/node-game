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
       url ="/mobile.html"
        break;
    default:
        url ="adfsfds"
}

  fs.readFile(__dirname + url,
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading'+url);
    }

    res.writeHead(200);
    res.end(data);
  });
}

var stearing = "dsfaafsdfads";
var con_game = 0;



io.on('connection', function (socket) {
  var thiscon_game = con_game;
  con_game++;

  //socket.emit('news', { hello: 1 });
  /*socket.on('comp', function (data) {
    console.log(data);
    asyncReal();
  });

   function asyncReal() {
      console.log(stearing);
    socket.emit('comp', stearing);
    setTimeout(asyncReal,500);
  }*/
  socket.on('tap', function (data) {
    stearing = data;
    
    io.emit('changecolor',{"con": thiscon_game ,"data":"changecolor"});
    //console.log(data);
    //socket.emit('news', { hello:data.hello });
  });
  console.log(thiscon_game+"c");
  socket.on(thiscon_game+"c",function (data) {
      
  });
  socket.on('mobile', function (data) {
    stearing = data;
  //  console.log(data);
    io.emit('comp',{"con": thiscon_game ,"data":data});
    //console.log(data);
    //socket.emit('news', { hello:data.hello });
  });

});