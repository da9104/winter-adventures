const express = require('express');
const cors = require('cors');
const server = express();

server.use(express.static(__dirname + '/public'));
server.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS");    
    next();
});        

server.use(
    cors({
         credentials: true,
         origin:[
             '*',
             'http://localhost:4000',
             'localhost:4000',
         ]
        }));

const corsOptions = {
    origin: [
        '*',
        'localhost:4000',
        'http://localhost:4000',
    ],
    credentials: true,
}

server.use(cors(corsOptions));
server.use(express.static(__dirname + '/'));
server.get('/', (req, res) => {
    res.sendFile(path.resolve('index.html'));
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => console.log(`listening on ${PORT}`));
