var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var fs = require('fs');
var stringifyFile;
app.use(bodyParser.json());

app.get('/getNote', function (req, res) {
    fs.readFile('./test.json', 'utf8', function(err, data) {
        if (err) throw err;
        stringifyFile = data
        res.send(data);
    });
});

app.post('/updateNote/:note', function (req, res) {
    
    fs.writeFile('./test.json', stringifyFile, function(err) {
        if (err) throw err;
        stringifyFile = stringifyFile + req.params.note;
        res.send(stringifyFile);
        console.log('file updated');
    });
    
});


app.listen(3000);