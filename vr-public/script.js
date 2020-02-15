previousState = undefined;
state = undefined;
doSomething = false;

function pullData() {
    $.get('/api').done(function(data) {
        //console.log('Data Loaded: ' + data);
        state = data;
    });
}

setInterval(pullData, 500);
setInterval(() => {
    if (previousState != state) doSomething = true;
    if (previousState == state) doSomething = false;
    if (doSomething) {
        console.log('do it: ' + state);
    }
    previousState = state;
    //console.log(state);
}, 1000);

