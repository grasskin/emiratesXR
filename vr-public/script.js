let state,
    prevState = undefined;

let pullData = () => {
    $.get('/api').done((data) => {
        state = data;
        if (prevState != state) changeState(state);
        prevState = state;
    });
};

// Once the scene loads, initialize our current state as the lobby
$('a-scene').on('loaded', () => {
    // Start music
    // $('#music')[0].components.sound.playSound();
    $.post('/api', { state: 'lobby' }).done((data) => {
        setInterval(pullData, 500);
    });
});

let blackout = $('#blackout')[0];

let fadeOut = (dur) => {
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
};

let fadeIn = (dur) => {
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
};

let transition = (dur) => {
    fadeOut(dur / 3);
    setTimeout(() => {
        fadeIn(dur / 3);
    }, dur * (2 / 3));
};

let toggleTooltip = (currTool) => {
    for (let tool in tooltips) {
        if (tool == currTool) tooltips[tool].enabled = true;
        else tooltips[tool].enabled = 'false';
        $('#' + tool)[0].setAttribute('visible', tooltips[tool].enabled);
        $('#' + tool)[0].setAttribute('text', { opacity: 1 });
    }
};

let changeState = (state) => {
    console.log(state); // DEBUG
    switch (state) {
        case 'lobby':
            // SHOW
            $('.environmentGround')[0].setAttribute('visible', true);
            $('#logo')[0].setAttribute('visible', true);
            // $('#plane')[0].setAttribute('visible', true);
            // HIDE
            $('#seat')[0].setAttribute('visible', false);
            // $('#video')[0].setAttribute('visible', false);
            break;
        case 'start':
            transition(4000);
            $('#plane').remove();
            setTimeout(() => {
                // HIDE
                $('.environmentGround')[0].setAttribute('visible', false);
                $('#logo')[0].setAttribute('visible', false);
                // $('#plane')[0].setAttribute('visible', false);
                // SHOW
                $('#seat')[0].setAttribute('visible', true);
                // $('#video')[0].setAttribute('visible', true);
            }, 2000);
            break;
        case 'skywards_miles':
            toggleTooltip('skywards_miles');
            break;
        case 'skywards_membership':
            toggleTooltip('skywards_membership');
            break;
        case 'skywards_family':
            toggleTooltip('skywards_family');
            break;
        case 'skywards_business':
            toggleTooltip('skywards_business');
            break;
        case 'item_wifi':
            toggleTooltip('item_wifi');
            break;
        case 'item_dining':
            toggleTooltip('item_dining');
            break;
        case 'entertainment':
            toggleTooltip('entertainment');
            break;
        case 'chauffer':
            toggleTooltip('chauffer');
            break;
    }
};

let tooltips = {
    skywards_miles: {
        text:
            'Earning Miles quickly is naturally one of the things our frequent flyers really care about. Earn both Tier Miles and Skywards Miles on Emirates and flydubai flights, even on special offers. You can also earn Skywards Miles on flights with our growing alliance of partner airlines, and with exclusive offers from our global partners in hospitality, car hire, finance, lifestyle and retail. The best part about earning Miles is deciding how to spend them, and it won’t take you long to reach exciting rewards.',
        position: '0 1.5 -1',
        enabled: false,
        color: 'FF2400'
    },
    skywards_membership: {
        text:
            'There’s plenty to look forward to as an Emirates Skywards member when you fly with Emirates and flydubai. As soon as you join, you can take advantage of our member services to streamline planning and enjoy a seamless journey. As you move up tiers, you’ll find more and more to enjoy about every trip, from lounge access at the airport, to instant upgrades on board and priority luggage delivery at your destination.',
        position: '0 1.5 -1',
        enabled: false,
        color: 'B22222'
    },
    skywards_family: {
        text:
            'Whenever you fly with Emirates or flydubai you can choose to contribute some or all of the Skywards Miles you earn into your My Family account. Any remaining Miles will go into your individual Emirates Skywards account.',
        position: '0 1.5 -1',
        enabled: false,
        color: '960018'
    },
    skywards_business: {
        text:
            'With Emirates Business Rewards, your organisation earns Points on all your business travel, which you can spend on future flights or upgrades on Emirates. Our rewards are flexible so you can choose any fare type, on any flight, in any class. Subject to availability. The number of Points you’ll need for a reward will depend on seat availability and the fare on that day. Manage all your travel in one place and get the most out of your corporate travel budget with easy reporting on Points earned, rewards booked, top routes and more.',
        position: '0 1.5 -1',
        enabled: false,
        color: 'D21f3C'
    },
    item_wifi: {
        text: `Stay connected with family and friends with two hours of free text messaging on WhatsApp, iMessage, Facebook Messenger, Viber Chat or WeChat. Or you can use 20MB of data for free within two hours of login. Simply log in to our OnAir onboard Wi-Fi and choose how you want to connect with your loved ones. You can also choose from our data plans if you would like to check your social media, send emails or browse your favourite sites. And if you're an Emirates Skywards member, you can continue to enjoy free or discounted Wi-Fi throughout your flight depending on your membership tier.`,
        position: '0 1.5 -1',
        enabled: false,
        color: 'BF0A30'
    },
    item_dining: {
        text:
            "This January 2020, we're bringing the most delicious plant-based meals to the skies, as we jump on board for Veganuary. Inspired by a blend of cuisines and flavours, our vegan dishes include tasty shitake ravioli, sumptuous bean chilli, and spicy tofu stir fries. Whether you’re a veteran vegan, or just trying something new, you’ll find an option on the menu on all Emirates flights from Dubai to USA, Europe, the UK, Australia, New Zealand, Russia, South Africa, and Addis Ababa. And if you want to carry on after January, we always have a vegan option available if you order in advance.",
        position: '0 1.5 -1',
        enabled: false,
        color: 'C21807'
    },
    entertainment: {
        text:
            "Fly better with over 4,500 channels on our award winning inflight entertainment system ice.Follow your flight's progress on our moving map, and see the world from 40,000ft with our external cameras. Get weather, news and sport reports and information about your flight to your screen. You can listen to your music, radio or podcasts uninterrupted while you explore.",
        position: '0 1.5 -1',
        enabled: false,
        color: '8D021F'
    },
    chauffer: {
        text:
            'Enjoy our complimentary Chauffeur-drive service in over 75 cities worldwide – simply book online through Manage your booking at least 12 hours before your flight. We’ll collect you from your door and drive you to the airport. When you land, we’ll be there to drive you to your final destination – whether that’s to your home, office or to your favourite restaurant.\n',
        position: '0 1.5 -1',
        enabled: false,
        color: 'CA3433'
    }
};

for (let tool in tooltips) {
    $('#main-scene').append(
        $('<a-sphere class="tooltip"></a-sphere').attr({
            id: tool,
            color: '#' + tooltips[tool].position.color,
            radius: '0.001',
            opacity: '1',
            position: '0.1 1.5 -0.8',
            side: 'double',
            visible: false,
            text: `align: center; font: exo2bold; color: black; baseline: bottom; width: 0.6; opacity: 0; value: ${tooltips[tool].text}`
        })
    );
    $('#' + tool)[0].addEventListener('click', (evt) => {
        evt.target.setAttribute('text', {
            opacity: evt.target.getAttribute('text').opacity == 0 ? 0.7 : 0
        });
    });
}
