let previousState = undefined;
let state = undefined;
let doSomething = false;

let pullData = () => {
    $.get('/api').done((data) => {
        state = data;
    });
}

setInterval(pullData, 500);
setInterval(() => {
    if (previousState != state) doSomething = true;
    if (previousState == state) doSomething = false;
    previousState = state;
}, 1000);

