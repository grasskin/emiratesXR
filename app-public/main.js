$('.btn').click(function() {
    let id = $(this).attr('id');
    $.post('/api', { state: id }).done(function(data) {
        console.log('Data Loaded: ' + data);
    });
});
