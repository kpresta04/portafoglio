$(document).ready(function() {
  $("#jsImg").on("mouseover", function() {
    $(this).attr("src", "./assets/astronaut.png");
  });
  $("#jsImg").on("mouseout", function() {
    $(this).attr("src", "./assets/codingquiz500.png");
  });
});
