const express = require('express')
const app = express()
var bodyParser = require('body-parser')
var stream = require('getstream');

client = stream.connect('g5858gfymtgj', 'waqspfbuy2eyn9gvhgbwvz8gj7nz2798xs95eqesmrfkxs9ehm8hy587avkn9kpd');

var user1 = client.feed('testaggregate', '1');
user1 = client.feed('testaggregate', '1', user1.token);

var activity = {"actor": "User:1", "verb": "pin", "object": "Place:42", "target": "Board:1"};

user1.addActivity(activity)
    .then(function(data) {
     console.log("data",data)
   })
    .catch(function(reason) {
      console.log("reason",reason)
     });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  user1.get({ limit: 10 }).then(function(results) {
    console.log('result', results)
    res.send("0000")
  });
})
app.listen(80,'0.0.0.0', function () {
  console.log('running on port 80!')
})
