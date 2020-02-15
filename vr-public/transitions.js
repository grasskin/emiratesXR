let blackout = document.querySelector('#blackout');

function fadeOutWhite(dur) {
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

function fadeInWhite(dur) {
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

function whiteTransition() {
    fadeOutWhite(2000);
    setTimeout(() => {
        fadeInWhite(2000);
    }, 4000);
}
