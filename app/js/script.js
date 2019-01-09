var footerHeight = document.getElementById("footer").clientHeight;
var header = document.getElementById("header");
var headerHeight = document.getElementById("header").clientHeight;
var headerHeightTop = document.getElementById("header-top").clientHeight;

window.addEventListener("scroll", function() {
  headerHide();
});

document.addEventListener("DOMContentLoaded", function() {
  headerHide();
  stickyBlock();
});

headerHide = () => {
  var bodyScrollTop = document.documentElement.scrollTop;
  var bodyScrollHeight = document.documentElement.scrollHeight;
  var bodyClientheight = document.documentElement.clientHeight;
  var foterOffsetTop = document.getElementById("footer").offsetTop;

  var outherHeight = bodyScrollHeight - bodyScrollTop;
  var innerHeight = bodyScrollHeight - footerHeight;

  if (window.pageYOffset && bodyScrollTop > headerHeightTop) {
    header.classList.add("isfixed");
  } else {
    header.classList.remove("isfixed");
  }

  if (outherHeight === bodyClientheight && innerHeight === foterOffsetTop) {
    header.classList.add("static");
  } else {
    header.classList.remove("static");
  }
}

stickyBlock = () => {
    var stickyBlock = document.getElementById("sticky-block");

    console.log(stickyBlock)
}