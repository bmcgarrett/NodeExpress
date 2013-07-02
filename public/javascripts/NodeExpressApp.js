/**
 * Created with JetBrains PhpStorm.
 * User: bmcgarr
 * Date: 7/2/13
 * Time: 8:37 AM
 * To change this template use File | Settings | File Templates.
 */
$(document).ready(function () {
    $('a[href="' + this.location.pathname + '"]').parent().addClass('active');
});
