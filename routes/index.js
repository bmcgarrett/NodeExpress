
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'My Node Page' });
};

exports.mongoTest = function(req, res){
    res.render('mongo', { title: 'Mongo'});
}
