var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var userModel = require('./Users');
// set the view engine to ejs
app.set('view engine', 'ejs');

require('dotenv').config();

//css path 
app.use('/assets', express.static('assets'));



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 6000;

// Home page
app.get('/', function(req, res) {
    res.render('Home');
  });

  // about page
  app.get('/about', function(req, res) {
    res.render('About');
  });

   // contact page page
app.get('/contact', function(req, res) {
    res.render('Contact');
  });

app.post('/contact', function(req, res, next) {
    var userDetails = new userModel({
      name: req.body.txtName,
      email: req.body.txtEmail,
      phone: req.body.txtPhone,
      message: req.body.txtMsg,
    });
    userDetails.save();
    res.render('Home');
    })
  
  app.listen(port);
  console.log(`Server is listening on port ${process.env.PORT}`);