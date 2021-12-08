var express = require('express');
var path = require('path');

var app = express();

const port = 3000

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`✅ App listening at http://localhost:${port}`)
})

module.exports = app;
