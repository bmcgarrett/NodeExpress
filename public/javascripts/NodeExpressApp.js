/**
 * Created with JetBrains PhpStorm.
 * User: bmcgarr
 * Date: 7/2/13
 * Time: 8:37 AM
 * To change this template use File | Settings | File Templates.
 */
$(document).ready(function () {
    $('a[href="' + this.location.pathname + '"]').parent().addClass('active');

    $('#addUsrSave').click(function () {
        var userNameToSave = $('#addUsrModalInput').val();
        var mongo = require('mongoskin');
        mongo.db('localhost:27017/myusert', {safe: true}).collection('myusers').save({"username":userNameToSave}).(function(err, success){
            if (err) throw err;
            $(location).attr('href',"/mongo");
        });
    });
});
