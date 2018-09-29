// Setup
var express = require('express');
var app = express();
var path = require('path');

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'public')));

// Routes
// app.get('/', (req, res) => res.send('Hello World with Express'));
app.get('/', (req, res) => res.render('index.html'));

// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname + '/views/index.html'));
// });

// Listen
app.listen(3000, () => {
    console.log('Server listing on 3000');
})