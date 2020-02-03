$(document).ready(function() {
  //Beer Me mouseover
  $("#beerMeImg").on("mouseover", function() {
    $(this).attr("src", "./assets/beerme.gif");
  });
  $("#beerMeImg").on("mouseout", function() {
    $(this).attr("src", "./assets/beerme400.png");
  });
  //JS Code Quiz Mouseover
  $("#jsImg").on("mouseover", function() {
    $(this).attr("src", "./assets/codeqiz2.gif");
  });
  $("#jsImg").on("mouseout", function() {
    $(this).attr("src", "./assets/codingquiz500.png");
  });
  //Dash mouseover
  $("#dashImg").on("mouseover", function() {
    $(this).attr("src", "./assets/dash.gif");
  });
  $("#dashImg").on("mouseout", function() {
    $(this).attr("src", "./assets/weatherdash400.png");
  });

  const doc = document.querySelector;
});
