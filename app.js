maconst express = require('express')
const app = express()
var bodyParser = require('body-parser')
var stream = require('getstream')

var stream = require('getstream');
//https://www.npmjs.com/package/getstream
// Add activity; message is a custom field - tip: you can add unlimited custom fields!
chris.addActivity({
  actor: 'chris',
  verb: 'add',
  object: 'picture:10',
  foreign_id: 'picture:10',
  message: 'Beautiful bird. Absolutely beautiful. Phenomenal bird.'
});

// jack's 'timeline' feed follows chris' 'user' feed:
var jack = client.feed('timeline', 'jack');
jack.follow('user', 'chris');

// Read 'timeline' for jack - the post by chris will show up:
jack.get({ limit: 10 }).then(function(results) {
  var activityData = results;

  // Read the next page, using id filtering for optimal performance:
  jack.get({ limit: 10, id_lte: activityData[activityData.length-1].id }).then(function(results) {
    var nextActivityData = results;
  });
});

// Remove activity by referencing foreign_id:
chris.removeActivity({ foreign_id: 'picture:10' });


client = stream.connect('g5858gfymtgj', 'waqspfbuy2eyn9gvhgbwvz8gj7nz2798xs95eqesmrfkxs9ehm8hy587avkn9kpd')
jack = client.feed('user', 'jack')
jack.addActivity({
  'actor': 'jack',
  'verb': 'post',
  'object': 'post:10',
  'foreign_id': 'post:10',
  'to': ['notification:chris', 'tag:amsterdam'],
  'message': 'Hi @chris, the coldplay concert was totally amazing #amsterdam'
})

{
   id:"ef696c12-69ab-11e4-8080-80003644b625",
   actor:"User:1",
   course:{
      distance:10,
      name:"Golden Gate Park"
   },
   object:"Exercise:42",
   participants:[
      "Thierry",
      "Tommaso"
   ],
   started_at:"2014-11-11T15:06:16+01:00",
   target:null,
   time:"2014-11-11T14:06:30.494",
   verb:"run"
}

user1.removeActivity("e561de8f-00f1-11e4-b400-0cc47a024be0");









app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (req, res) {

  res.send("0000")
})



app.listen(80,'0.0.0.0', function () {
  console.log('running on port 80!')
})
