window.onload = () => {
  // console.log(document.body.scrollHeight);

  function scrollFunc(e) {
    // console.log(e.target.scrollTop);
    // if (window.innerHeight + window.scrollY > document.body.clientHeight) {
    //   $(".navFooter").hide();
    // }
    if (screen.width < 1200) {
      if (
        e.target.scrollTop >
        document.body.scrollHeight - document.body.clientHeight - 100
      ) {
        $(".navFooter").hide();
      } else {
        $(".navFooter").show();
      }
    }
  }

  document.body.addEventListener("scroll", scrollFunc);
  function getDocHeight() {
    const D = document;
    return Math.max(
      D.body.scrollHeight,
      D.body.offsetHeight,
      D.body.clientHeight
    );
  }
};
