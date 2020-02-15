let state, prevState = undefined;

let pullData = () => {
    $.get('/api').done((data) => {
        state = data;
        if (prevState != state) changeState(state);
        prevState = state;
    });
}

let changeState = (state) => {
    switch (state) {
        case 'lobby':
            break;
    }
}

setInterval(pullData, 500);
setInterval(compareState, 1000);