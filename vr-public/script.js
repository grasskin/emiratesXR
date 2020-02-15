let state, prevState = undefined;

let pullData = () => {
    $.get('/api').done((data) => {
        state = data;
        if (prevState != state) changeState(state);
        prevState = state;
    });
}

$.post('/api', { state: 'lobby' }).done((d) => { setInterval(pullData, 500); });

let blackout = $('#blackout')[0];

let fadeOut = (dur) => {
    blackout.setAttribute(
        'animation', {
            property: 'material.opacity',
            to: 1,
            dur: dur,
            easing: 'easeInQuad'
        },
        dur);
    setTimeout(() => { blackout.setAttribute('visible', true); }, dur);
}

let fadeIn = (dur) => {
    blackout.setAttribute(
        'animation', {
            property: 'material.opacity',
            to: 0,
            dur: dur,
            easing: 'easeInQuad'
        },
        dur);
    setTimeout(() => { blackout.setAttribute('visible', false); }, dur);
}

let transition = (dur) => {
    fadeOut(dur / 3);
    setTimeout(() => { fadeIn(dur / 3); }, dur * (2/3));
}

let changeState = (state) => {
    console.log(state);
    switch (state) {
        case 'lobby':
            $('.environmentGround')[0].setAttribute('visible', true);
            $('#logo')[0].setAttribute('visible', true)
            break;
        case 'start':
            transition(4000);
            setTimeout(() => {
                $('.environmentGround')[0].setAttribute('visible', false);
                $('#logo')[0].setAttribute('visible', false)
            }, 2000);
            break;
    }
}