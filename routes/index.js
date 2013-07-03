
/*
 * GET home page.
 */


exports.index = function(req, res){
  res.render('index', { title: 'Node Express App Home' });
};

exports.mongoTest = function(req, res){
  var mongo = require('mongoskin');
  mongo.db('localhost:27017/myusert', {safe: true}).collection('myusers').find().toArray(function(err, result){
        if (err) throw err;
        res.render('mongo', { title: 'MongoDB',subHeading: 'Mongo',currentUsers: result });
    });


}

