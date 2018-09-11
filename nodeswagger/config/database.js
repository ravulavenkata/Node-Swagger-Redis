var Redis = require("ioredis");

var redisClient = new Redis({
    port:6379,
    host:'localhost',
    family:4,
    db:0
});


redisClient.on('ready',function(){
console.log("Redis server is ready ", redisClient.status);
});


redisClient.on('error',function(){
    console.log("Redis server has error ");
});

module.exports.redisClient= redisClient;
  