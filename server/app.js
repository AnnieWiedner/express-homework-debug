var express = require('express'),
    app     = express(),
    server  = require('http').createServer(app);
    fs      = require('fs');
    path    = require('path');

app.use(express.static(path.join(__dirname, "views")))

// tells express where our views can be found
app.set('views', path.join(__dirname, "views"))

// tells express we are using handlebars
app.set('view engine', 'hbs')

app.get('/', function(request, response){
    // request object is from the client,
    // the response is what were sending back
  response.send('Hey I the server finally works')
})

app.get('/jsonone', function(request, response) {
  var jsonone = {one:"two", three:4};
  response.send(jsonone);
})

app.get('/jsontwo', function(request, response) {
  var jsontwo = {four:3, two:"one"};
  response.send(jsontwo);
})

app.get('/message', function(request, response) {
  response.send("This is a message");
})

app.get('/hbsone', function(request, response) {
  response.render("one");
})

app.get('/hbstwo', function(request, response) {
  response.render("two");
})

// first argument is the port number
server.listen(5000, function(){
  console.log('server is listening, but on what port, are you reading the code?')
})









// // tells express where our views can be found
// app.set('views', path.join(__dirname, 'views'))
//
// // tells express we are using handlebars as our view
// app.set('view engine', 'hbs')
