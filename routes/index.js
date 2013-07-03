
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Node Express App Home' });
};

exports.mongoTest = function(req, res){
  res.render('mongo', { title: 'MongoDB',subHeading: 'Mongo'});
}
