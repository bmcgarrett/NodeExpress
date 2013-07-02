
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'My Node Page' });
};

exports.mytest = function(req, res){
    res.render('mytest', { title: 'This is my test page' });
};

exports.pageTest = function(req, res){
    res.render('pageTest', { title: 'New Test Page',subheading: 'Sub Heading 1'});
}

