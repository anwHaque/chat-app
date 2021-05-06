const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io') (http);
require('dotenv').config()

app.get('/', (req, res)=>{
    res.sendfile('index.html');
});

//Whenever somone connected this get executed

io.on('connection', function (socket){
    console.log('A user connected');

    socket.on('disconnection', function (){
        console.log('A user disconnected');
    })
})

let port = process.env.PORT || 4000;
http.listen(port,()=>{
    console.log(`server running on http://localhost:${port}`);
});