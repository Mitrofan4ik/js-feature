var footerHeight = document.getElementById("footer").clientHeight;
var header = document.getElementById("header");
var headerHeight = document.getElementById("header").clientHeight;
var headerHeightTop = document.getElementById("header-top").clientHeight;
var headerHeightContent = document.getElementById("header-content")
  .clientHeight;

var stickyBlock = document.getElementById("sticky-block");

window.addEventListener("scroll", function() {
  headerHide();
});

document.addEventListener("DOMContentLoaded", function() {
  headerHide();
});

headerHide = () => {
  var bodyScrollTop = document.documentElement.scrollTop;
  var bodyScrollHeight = document.documentElement.scrollHeight;
  var bodyClientheight = document.documentElement.clientHeight;
  var foterOffsetTop = document.getElementById("footer").offsetTop;

  var outherHeight = bodyScrollHeight - bodyScrollTop;
  var innerHeight = bodyScrollHeight - footerHeight;

  var a = foterOffsetTop - bodyScrollTop;
  var b = bodyClientheight - a;

  if (window.pageYOffset && bodyScrollTop > headerHeightTop) {
    header.classList.add("isfixed");
    stickyBlock.style.top = headerHeight - headerHeightTop + "px";
    stickyBlock.style.height = bodyClientheight - headerHeightContent + "px";
  } else {
    header.classList.remove("isfixed");
    stickyBlock.style.top =
      headerHeightTop - bodyScrollTop + headerHeightContent + "px";
    stickyBlock.style.height =
      bodyClientheight - headerHeight + bodyScrollTop + "px";
  }

  if (outherHeight === bodyClientheight && innerHeight === foterOffsetTop) {
    header.classList.add("static");
    stickyBlock.style.top = "0px";
  } else {
    header.classList.remove("static");
    if (bodyClientheight > a) {
      stickyBlock.style.height =
        bodyClientheight - headerHeight - b + headerHeightTop + "px";
    } 
  }
};
