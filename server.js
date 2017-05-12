const express = require('express');
const bodyParser = require('body-parser');

let router = express.Router();

router.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

router.post('/api/getFruit', function (req, res) {
  console.log(req);
  // req.body.fruit.map((fruit) => {
  //   console.log('- ',fruit);
  // });
  // res.json(req.body);
});

let app = express();
app.use(bodyParser.json());
app.use('/assets',express.static('assets'));
app.use('/', router);

app.listen(3000, function () {
  console.log('Science!')
});