require('dotenv').config();

const express = require('express');
const app = express();
const path = require('path');
const ngrok = require('ngrok');
const user = process.env.USER;
const password = process.env.PASSWORD;

app.get('/', (req, res) => {
    res.send('This is the tunnel created by Ngrok with Http Auth');
});

const server = app.listen(process.env.PORT, () => {
    console.log('Express listening at ', server.address().port);
})

ngrok.connect({
    proto : 'http',
    addr : process.env.PORT,
    auth : `${user}:${password}`
}, (err, url) => {
    if (err) {
        console.err('Error while connecting Ngrok');
        return new Error('Ngrok Failed');
    } else {
        console.log('Tunnel Created -> ', url);
        console.log('Tunnel Inspector ->  http://127.0.0.1:4040');
    }
});