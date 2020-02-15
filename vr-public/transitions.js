let blackout = document.querySelector('#blackout');

function fadeOutBlack(dur) {
    blackout.setAttribute('visible', true);
    blackout.setAttribute(
        'animation',
        {
            property: 'material.opacity',
            to: 1,
            dur: dur,
            easing: 'easeInQuad'
        },
        dur
    );
}

function fadeInBlack(dur) {
    blackout.setAttribute(
        'animation',
        {
            property: 'material.opacity',
            to: 0,
            dur: dur,
            easing: 'easeInQuad'
        },
        dur
    );
    setTimeout(() => {
        blackout.setAttribute('visible', false);
    }, dur);
}

function blackTransition() {
    fadeOutBlack(2000);
    setTimeout(() => {
        fadeInBlack(2000);
    }, 4000);
}
