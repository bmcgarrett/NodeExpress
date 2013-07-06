/**
 * Created with JetBrains PhpStorm.
 * User: bmcgarr
 * Date: 7/2/13
 * Time: 8:37 AM
 * To change this template use File | Settings | File Templates.
 */
$(document).ready(function () {

    var userNameToChange;

    $('a[href="' + this.location.pathname + '"]').parent().addClass('active');

    $(document).on('click','#addUsrSave', function(e){
        // We don't want this to act as a link so cancel the link action
        e.preventDefault();

        // Find form and submit it
        $('#modal-form').submit();

        //Hide Modal
        $('#addUsrModal').hide();
    });

    $(document).on('click','.delUser', function() {
        var userNameForDelete = $(this).parent().parent().find('.userNameField').text();
        $.get("/mongo/del",{ userToDelete: userNameForDelete });
        location.href = location.href;
    });

    $(document).on('click','#editUsrButton', function() {
        var userNameForEdit = $(this).parent().parent().find('.userNameField').text();
        userNameToChange = userNameForEdit.substr(1);
        $('#editUserInput').val(userNameForEdit.substr(1));
    });

    $('#editUsrSave').on('click', function(e) {
        e.preventDefault();
        var newUserValue = $('#editUserInput').val();
        $.get("/mongo/update",{ userToUpdateNew: newUserValue ,userToUpdateOld: userNameToChange });
        location.href = location.href;

    });
});
