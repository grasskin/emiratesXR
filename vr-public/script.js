let state, prevState = undefined;

let pullData = () => { $.get('/api').done((data) => { state = data; }); }
let compareState = () => {
    if (prevState != state) changeState(state);
    prevState = state;
}

setInterval(pullData, 500);
setInterval(compareState, 1000);
