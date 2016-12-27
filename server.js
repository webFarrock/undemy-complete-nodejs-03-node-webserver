const express = require('express');

let app = express();

app.get('/', (req, res) => {
    // res.send('<h1>Hello express</h1>');

    res.send({
        name: 'Pavel',
        likes: ['one', 'two', 'three'],
    });

});

app.get('/about', (req, res) => {
    res.send('about this app');
});

app.get('/bad', (req, res) => {
    res.send({
        error: 'page not found'
    });
});

app.listen(3000);

