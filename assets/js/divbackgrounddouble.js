$("#myDiv").click(function () {
  $(this).css("background-color", "pink").text("Clicked");
});

$("#myDiv").dblclick(function () {
  $(this).css("background-color", "yellow").text("Double Clicked");
});

$("#myDiv").hover(
  function () {
    $(this).css("background-color", "purple").text("Hovered");
  },
  function () {
    $(this).css("background-color", "lightgray").text("Interact with Lalitha");
  }
);

$(document).keydown(function () {
  $("#myDiv").css("background-color", "green").text("Key Pressed");
});