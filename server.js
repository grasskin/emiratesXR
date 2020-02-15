const express = require('express');
const serverport = 3000;
const appport = 6000;

const app = express();

app.use('vr', express.static('vr-public'));

app.use('app', express.static('app-public'));

app.get('/api/test', (req, res) => {
    res.send('Hi this is working.');
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
