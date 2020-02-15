$('#circle').click(function() {
    $.post('/api', { name: 'John', time: '2pm' }).done(function(data) {
        console.log('Data Loaded: ' + data);
    });
});
