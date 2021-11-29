const express = require('express');
const cors = require('cors');
let server = express(); // better instead

server.use(express.static(__dirname + '/public'));

const corsOptions = {
    origin: [
        '*',
        'localhost:4000',
        'http://localhost:4000',
        'https://da9104.github.io/winter-adventures/',
    ],
    credentials: true,
}

server.use(cors(corsOptions));
server.use(express.static(__dirname + '/keys'));
server.get('/', (req, res) => {
    res.sendFile(path.resolve('index.html'));
});

server.listen(4000, () => {
    console.log('App listening on port 4000')
})



