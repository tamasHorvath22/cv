const express = require('express');
const port = process.env.PORT || 8080;
const app = express();

console.log(__dirname)
app.use(express.static(__dirname + '/dist/'));
app.get(/.*/, function (req, res) {
    res.sendFile(__dirname + '/dist/index.html');
})
app.listen(port);

console.log('server started...')