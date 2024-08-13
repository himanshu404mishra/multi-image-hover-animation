let elem = document.querySelectorAll(".elem");

elem.forEach((elem) => {
  elem.addEventListener("mouseenter", function () {
   elem.childNodes[3].style.opacity =1 
  });
  elem.addEventListener("mouseleave", function () {
    elem.childNodes[3].style.opacity =0

  });
  elem.addEventListener("mousemove", function (dets) {
    elem.childNodes[3].style.left = dets.x + "px";
  });
});
