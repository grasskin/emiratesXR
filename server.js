const express = require('express');
var bodyParser = require('body-parser');
const serverport = 3000;

var state = 'lobby';

const app = express();

// for parsing application/json
app.use(bodyParser.json());

// for parsing application/xwww-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/vr', express.static('vr-public'));

app.use('/app', express.static('app-public'));

app.get('/api/test', (req, res) => {
    res.send('Hi this is working.');
});

app.get('/', function(req, res) {
    res.redirect('/vr/index.html');
});

app.get('/m', function(req, res) {
    res.redirect('/app/index.html');
});

app.get('/api', function(req, res) {
    res.send(state);
});

app.post('/api', function(req, res) {
    console.log(req.body);
    state = req.body.state;
    res.send('received');
    console.log(state);
});

/*
app.get('/api/brainwaves', (req, res) => {
    var now = new Date();
    if (now - lastFocus < 5000) {
        data.focusLastFiveSeconds = 1;
    } else {
        data.focusLastFiveSeconds = 0;
    }
    res.json(data);
});
*/

app.listen(serverport, function() {
    console.log('server listening on port ' + serverport);
});
