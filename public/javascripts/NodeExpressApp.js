/**
 * Created with JetBrains PhpStorm.
 * User: bmcgarr
 * Date: 7/2/13
 * Time: 8:37 AM
 * To change this template use File | Settings | File Templates.
 */
$(document).ready(function () {
    $('a[href="' + this.location.pathname + '"]').parent().addClass('active');

    $('#addUsrSave').on('click', function(e){
        // We don't want this to act as a link so cancel the link action
        e.preventDefault();

        // Find form and submit it
        $('#modal-form').submit();

        //Hide Modal
        $('#addUsrModal').hide();
    });
});
