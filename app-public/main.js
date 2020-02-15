$('#start').click(function() {
    $.post('/api', { state: 'start' }).done(function(data) {
        console.log('Data Loaded: ' + data);
    });
});

$('#stop').click(function() {
    $.post('/api', { state: 'stop' }).done(function(data) {
        console.log('Data Loaded: ' + data);
    });
});
