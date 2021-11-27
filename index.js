 const mongoose = require('mongoose');
 const express  = require('express');
const redis  = require('redis');
const  redisUrl = 'redis://localhost/6374';
const client = redis.createClient(redisUrl);

const app  = express();
const {PORT,NODE_ENV} = process.env;
 client.set('name','jessica').then(val=>console.log).catch(error=>console.error);
    
app.listen(9000,()=>{
    console.log('listening on port ',9000)
});
