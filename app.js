var express = require('express'),
    mongodb = require('mongodb'),
    bodyParser = require('body-parser'),
    app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
// ===========
// APP Routes
// ===========

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

// app.get('/getuser', function(req, res) {
//
// })

app.post('/reg', function(req, res) {
  console.log(req.body);
  if(req.body) {
    res.send(true);
  }
})
// ===========
// APP Config
// ===========

app.listen('3000', function() {
  console.log("Everything is working fine");
})
