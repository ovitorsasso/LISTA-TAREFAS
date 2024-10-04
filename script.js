$(document).ready(function() {
    $('#taskForm').submit(function(e) {
        e.preventDefault();

        let taskName = $('#taskInput').val();

        if (taskName !== "") {
            $('#taskList').append('<li>' + taskName + '</li>');
            $('#taskInput').val('');
        }
    });

    $('#taskList').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});
