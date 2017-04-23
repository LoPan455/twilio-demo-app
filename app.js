var express = require('express');
var app = express();
var path = require('path');
var router = require('./server/routes/routes.js')
var bodyParser = require('body-parser')
var config = require('./config');
var client = require('twilio')(config.accountSid, config.authToken);

// Parse incoming form-encoded HTTP bodies
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/demo', function(req, res) {
  var smsObject = req.body;
  console.log('we got this object from the client:',smsObject);
  client.messages.create({
    body: smsObject.message,
    to: smsObject.number,
    from: config.sendingNumber
//  mediaUrl: imageUrl
  }, function(err, data) {
    if (err) {
      console.error('Could not notify administrator');
      console.error(err);
    } else {
      console.log('I think we sent a text!');
    }
  });
});





// Serve back static files
app.use(express.static(path.join(__dirname, './public')));

// Handle index file separately
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '.public/index.html'));
})


app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function() {
    console.log('Listening on port: ', app.get('port'));
});
