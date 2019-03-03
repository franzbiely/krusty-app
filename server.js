const express = require('express');
var cors = require('cors');
const mongoose = require("mongoose");
const app = express();

const Products = require("./Product");

const mongo = "mongodb://localhost:9922/krusty-inventory";
const port = 5000;

app.listen(port, function(){
    console.log("TEST");
});

app.get('/test', cors(),(req, res) => {
    console.log("Tests");
    res.send({
        message: "testing backend"
    })
});

app.post('/newItem', cors(), (req, res) => {
  console.log(req.body,"test");
  // const items = [  { name: "Sugar", quantity: 10 },
  // { name: "Salt", quantity: 4 },
  // { name: "Pepper", quantity: 5 },
  // { name: "Onion", quantity: 8 },
  // { name: "Garlic", quantity: 9 } ];

  // Products.insertMany(items);
  // // Create an instance of model SomeModel
  // var awesome_instance = new Products({ name: 'awesome' });

  // // Save the new model instance, passing a callback
  // awesome_instance.save(function (err) {
  //   if (err) return handleError(err);
  //   // saved!
  // });
});

mongoose.connect(
    mongo,
    {
      useNewUrlParser: true,
      autoIndex: false
    }
  );

mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));