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
    $.post('/api', { state: 'lobby' }).done((data) => {
        setInterval(pullData, 500);
    });
});

let blackout = $('#blackout')[0];

let fadeOut = (dur) => {
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
};

let transition = (dur) => {
    fadeOut(dur / 3);
    setTimeout(() => {
        fadeIn(dur / 3);
    }, dur * (2 / 3));
};

let changeState = (state) => {
    console.log(state); // DEBUG
    switch (state) {
        case 'lobby':
            $('.environmentGround')[0].setAttribute('visible', true);
            $('#logo')[0].setAttribute('visible', true);
            break;
        case 'start':
            transition(4000);
            setTimeout(() => {
                $('.environmentGround')[0].setAttribute('visible', false);
                $('#logo')[0].setAttribute('visible', false);
            }, 2000);
            break;
    }
};

$('#main-scene').append(
    $('<a-sphere></a-sphere')
        .attr({
            id: 'tooltip1',
            color: 'red',
            radius: '0.05',
            opacity: '1',
            position: '0 1 -2',
            side: 'double'
        })
        .addClass('text')
);

let text = {
    skywards_miles:
        'Earning Miles quickly is naturally one of the things our frequent flyers really care about. Earn both Tier Miles and Skywards Miles on Emirates and flydubai flights, even on special offers. You can also earn Skywards Miles on flights with our growing alliance of partner airlines, and with exclusive offers from our global partners in hospitality, car hire, finance, lifestyle and retail. \n The best part about earning Miles is deciding how to spend them, and it won’t take you long to reach exciting rewards. You could earn enough Miles for an upgrade after just one long-distance trip. As well as reward flights and upgrades on Emirates, you can spend your Miles with flydubai and our worldwide partners. Choose from flights with our partner airlines, luxury hotel stays, fun-filled family days out, or even tickets to a wide range of sporting and cultural events across the globe. Your Miles are valid for three years, so you’ll have plenty of time if you want to save up for something really special.',
    skywards_membership:
        'There’s plenty to look forward to as an Emirates Skywards member when you fly with Emirates and flydubai. As soon as you join, you can take advantage of our member services to streamline planning and enjoy a seamless journey. As you move up tiers, you’ll find more and more to enjoy about every trip, from lounge access at the airport, to instant upgrades on board and priority luggage delivery at your destination.',
    skywards_family:
        'Whenever you fly with Emirates or flydubai you can choose to contribute some or all of the Skywards Miles you earn into your My Family account. Any remaining Miles will go into your individual Emirates Skywards account.',
    skywards_business:
        'Whenever you fly with Emirates or flydubai you can choose to contribute some or all of the Skywards Miles you earn into your My Family account. Any remaining Miles will go into your individual Emirates Skywards account.',
    item_wifi:
        'Stay connected with family and friends with two hours of free text messaging on WhatsApp, iMessage, Facebook Messenger, Viber Chat or WeChat. Or you can use 20MB of data for free within two hours of login. Simply log in to our OnAir onboard Wi-Fi and choose how you want to connect with your loved ones. You can also choose from our data plans if you would like to check your social media, send emails or browse your favourite sites. And if you’re an Emirates Skywards member, you can continue to enjoy free or discounted Wi-Fi throughout your flight depending on your membership tier.',
    item_dining:
        "This January 2020, we're bringing the most delicious plant-based meals to the skies, as we jump on board for Veganuary. Inspired by a blend of cuisines and flavours, our vegan dishes include tasty shitake ravioli, sumptuous bean chilli, and spicy tofu stir fries. Whether you’re a veteran vegan, or just trying something new, you’ll find an option on the menu on all Emirates flights from Dubai to USA, Europe, the UK, Australia, New Zealand, Russia, South Africa, and Addis Ababa. And if you want to carry on after January, we always have a vegan option available if you order in advance.",
    entertainment:
        "Fly better with over 4,500 channels on our award winning inflight entertainment system ice.Follow your flight's progress on our moving map, and see the world from 40,000ft with our external cameras. Get weather, news and sport reports and information about your flight to your screen. You can listen to your music, radio or podcasts uninterrupted while you explore.",
    chauffer:
        'Enjoy our complimentary Chauffeur-drive service in over 75 cities worldwide – simply book online through Manage your booking at least 12 hours before your flight. We’ll collect you from your door and drive you to the airport. When you land, we’ll be there to drive you to your final destination – whether that’s to your home, office or to your favourite restaurant.'
};
