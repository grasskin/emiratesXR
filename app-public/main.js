const startButton = () => {
    $('button').each((i, item) => {
        item.id == 'start' ? $(item).hide() : $(item).show();
    });
};

const restartButton = () => {
    $('button').each((i, item) => {
        item.id == 'start' ? $(item).show() : $(item).hide();
    });
};

$('button').each((i, item) => {
    $(item).click(() => {
        if (item.id == 'start') startButton();
        else if (item.id == 'lobby') restartButton();
        $.post('/api', { state: item.id }).done((data) => {
            console.log('Data Loaded: ' + data);
        });
    });
});
