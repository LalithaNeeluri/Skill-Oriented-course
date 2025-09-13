// Wait until DOM is ready
$(document).ready(function() {

  // Append content at the end
  $('#appendBtn').click(function() {
    $('#content').append('<p>My text is Appended</p>');
  });

  // Prepend content at the beginning
  $('#prependBtn').click(function() {
    $('#content').prepend('<p> My text is Prepended </p>');
  });

  // Remove the content element
  $('#removeBtn').click(function() {
    $('#content').remove();
  });

  // Apply CSS styles dynamically
  $('#cssBtn').click(function() {
    $('#content').css({
      'color': 'white',
      'background-color': 'blue',
      'padding': '20px'
    });
  });

  // Toggle highlight class
  $('#toggleClassBtn').click(function() {
    $('#content').toggleClass('highlight');
  });

});