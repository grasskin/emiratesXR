let state, prevState = undefined;

let pullData = () => { $.get('/api').done((data) => { state = data; }); }

setInterval(pullData, 500);
setInterval(() => {
    if (prevState != state) changeState(state);
    prevState = state;
}, 1000);
