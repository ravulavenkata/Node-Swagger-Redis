const config = require('./config/database.js');
redis = require('ioredis');

var redisClient = config.redisClient;

function checkifKeyExist(req, res, next) {
  console.log("test");
  var key =req.body.key;
      redisClient.exists(key,function(err,response){
                if(err){
                  console.log("error", err);
                }
                else{
                      if(response===1){
                        console.log("found key");
                        res.status(200)
                        .json({
                          status:'success',
                          
                          message:'Found the key'
                        });
                      }
                      else{
                        console.log("not found key");
                        res.status(200)
                        .json({
                          status:'success',
                          
                          message:'Sorry ! Did not find the key'
                        });
                      }
                }
              });
}


module.exports = {
  checkifKeyExist:checkifKeyExist
};
