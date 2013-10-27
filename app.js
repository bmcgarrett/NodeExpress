
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
    ,fs = require('fs');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
var logFile = fs.createWriteStream('./myLogFile.log', {flags: 'a'});
app.use(express.logger('dev'));
app.use(express.logger({stream: logFile}));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);
app.get('/mongo',routes.mongoTest);

app.post('/mongo', function(req,res) {
    var mongo = require('mongoskin');
    if (req.body.username)
    {
        var userNameToAdd = req.body.username;
        mongo.db('localhost:27017/myusert', {safe: true}).collection('myusers').insert({username:userNameToAdd},function(err, result){
            if (err) throw err;
            res.redirect('/mongo');
        });
    }
});

app.get('/mongo/del', function(req,res) {
    var mongo = require('mongoskin');
    if (req.query.userToDelete)
    {
        var userNameToDelete = req.query.userToDelete;
        var userNameSubString = userNameToDelete.substr(1);
        mongo.db('localhost:27017/myusert', {safe: false}).collection('myusers').remove({username:userNameSubString},function(err,result){
            if (err) throw err;
            res.redirect('/mongo');
        });
    }
});

app.get('/mongo/update', function(req,res) {
    var mongo = require('mongoskin');
    if (req.query.userToUpdateOld && req.query.userToUpdateNew)
    {
        var userNameToUpdate = req.query.userToUpdateOld;
        var userNameToUpdateNew = req.query.userToUpdateNew;
        mongo.db('localhost:27017/myusert', {safe: false}).collection('myusers').update({username:userNameToUpdate},{ $set:{username:userNameToUpdateNew} }, false, true,function(err,result){
            if (err) throw err;
            res.redirect('/mongo');
        });
    }
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
