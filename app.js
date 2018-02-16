const express = require('express');
const app = express();
const path = require('path');
const ngrok = require('ngrok');


app.get('/',(req,res)=>{
    res.send('This is the express tunnel');
});

const server = app.listen(5000,()=>{
    console.log('Express listening at ',server.address().port);
})

ngrok.connect(server.address().port,(err,url)=>{
    if(err) {
        console.err('Error while connecting Ngrok');
        return new Error('Ngrok Failed');
    }else{
        console.log('Tunnel Created -> ',url);
        console.log('Tunnel Inspector ->  http://127.0.0.1:4040');
    }
});