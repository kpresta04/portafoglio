window.onload = () => {
  const $ = function(selector) {
    return document.querySelector(selector);
  };

  //Beer Me mouseover
  // $("#beerMeImg").on("mouseover", function() {
  //   $(this).attr("src", "./assets/beerme2.gif");
  // });
  // $("#beerMeImg").on("mouseout", function() {
  //   $(this).attr("src", "./assets/beerme400.png");
  // });
  // //JS Code Quiz Mouseover
  // $("#jsImg").on("mouseover", function() {
  //   $(this).attr("src", "./assets/codeqiz2.gif");
  // });
  // $("#jsImg").on("mouseout", function() {
  //   $(this).attr("src", "./assets/codingquiz500.png");
  // });
  // //Dash mouseover
  // $("#dashImg").on("mouseover", function() {
  //   $(this).attr("src", "./assets/dash2.gif");
  // });
  // $("#dashImg").on("mouseout", function() {
  //   $(this).attr("src", "./assets/weatherdash400.png");
  // });

  let screenWidth = window.matchMedia("(min-width: 700px)");
  function changeWelcomeImage(screenWidth) {
    if (screenWidth.matches) {
      // If media query matches
      $("#bannerPhoto").src = "./assets/comp.jpg";
    } else {
      $("#bannerPhoto").src = "./assets/black-laptop.jpg";
    }
  }
  changeWelcomeImage(screenWidth);
  screenWidth.addListener(changeWelcomeImage);

  //send button
  $("#sendBtn").addEventListener("mouseover", function() {
    $("#planeImg").src = "./assets/planeHover.jpg";
  });
  $("#sendBtn").addEventListener("mouseout", function() {
    $("#planeImg").src = "./assets/plane.jpg";
  });
};
