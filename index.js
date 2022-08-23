var express = require('express');
var path = require('path');
const http = require('http'); // or 'https' for https:// URLs
const fs = require('fs');

var app = express();

const port = 3000

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log(`✅ App listening at http://localhost:${port}`)
})

// const file = fs.createWriteStream("file.jpg");
// const request = http.get("http://i3.ytimg.com/vi/J---aiyznGQ/mqdefault.jpg", function(response) {
//     console.log(response);
//     // response.pipe(file);
// });

module.exports = app;