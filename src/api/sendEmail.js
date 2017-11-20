var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  host: 'smtp.office365.com',
  port: '587',
  auth: { user: 'planning@affineweddings.com', pass: 'Aaronm29!' },
  secure: false,
  tls: { ciphers: 'SSLv3' }
});

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.set('port', 3010);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(function(req, res, next) {
   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader('Cache-Control', 'no-cache');
   next();
});

app.post('/api/sendEmail', function(req, res) {
  var mailBody = req.body.message+" \nmy contact info is:\n"+ req.body.name + "\n" + req.body.email + "\n" + req.body.phone;
  // setup e-mail data with unicode symbols
  console.log('called?');
  var mailOptions = {
    from: '"Inquiry" <planning@affineweddings.com>', // sender address
    to: 'naimak2018@gmail.com', // list of receivers
    subject: 'Wedding Inquiry', // Subject line
    text: mailBody // plaintext body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, function(error, info){
    if(error){
      return console.log(error);
    }
    console.log('Message sent: ' + info.response);
    res.send(200);
    });
});

app.listen(app.get('port'), function() {
 console.log('Server started on: ' + app.get('port'));
});
