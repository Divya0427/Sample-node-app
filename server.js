//import * as _ from 'underscore';

const express = require('express');
const app = express();

app.use(express.static(__dirname + '/'));

app.get('*', function(req, res){
  res.sendfile(__dirname + '/index.html');
});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});



  
  