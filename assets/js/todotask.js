$(document).ready(function() {
  $('#todo-list').on('dblclick', 'li', function() {
    var $li = $(this);
    var currentText = $li.text();

    var $input = $('<input type="text" class="edit-input">');
    $input.val(currentText);
    $li.html($input);
    $input.focus();

    $input.on('keydown', function(e) {
      if (e.key === 'Enter') {
        var newText = $(this).val();
        $li.text(newText);
      }
    });

    $input.on('blur', function() {
      var newText = $(this).val();
      $li.text(newText);
    });
  });
});