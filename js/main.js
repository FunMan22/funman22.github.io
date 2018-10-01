window.onscroll = function() {
  checkScroll();
};


function checkScroll() {
  var column = document.getElementById("columnleft");
  var sticky = column.offsetTop - 46;
  var clientHeight = document.getElementById("banner").clientHeight;
  if (window.pageYOffset >= sticky) {
    document.getElementById("columnleft").classList.add("sticky");
    document.getElementById("columnright").classList.add("sticky");
  } 
  if (window.pageYOffset <= clientHeight) {/* Value needs to be changed so it fits in all screen sizes : DONE*/
    document.getElementById("columnleft").classList.remove("sticky");
    document.getElementById("columnright").classList.remove("sticky");
  }
}
