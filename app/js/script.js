var footerHeight = document.getElementById("footer").clientHeight;
var header = document.getElementById("header");
var headerHeight = document.getElementById("header").clientHeight;
var headerHeightTop = document.getElementById("header-top").clientHeight;
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
  var foterScrollTop = document.getElementById("footer").scrollTop;

  var outherHeight = bodyScrollHeight - bodyScrollTop;
  var innerHeight = bodyScrollHeight - footerHeight;



  var a = foterOffsetTop - bodyScrollTop;
  var b = bodyClientheight - a;

  // console.log(bodyScrollTop);
  // console.log(foterScrollTop);


  // if (bodyClientheight > a) {
  //   stickyBlock.style.height = bodyClientheight - headerHeight - b + headerHeightTop + "px";
  //   console.log(bodyClientheight - headerHeight - b, "filter height");
  //   console.log("footer appeared");
  //   console.log(bodyScrollTop, "bodyScrollTop");
  //   console.log(bodyClientheight, "bodyClientheight");
  //   console.log(b, "b");
  //   console.log(a, 'a');
  //   console.log(foterOffsetTop, "foterOffsetTop")

  // }
  
  // console.log(bodyScrollTop ,"body scrollTop");
  // console.log(bodyClientheight, "body clientHeight");
  // console.log(foterOffsetTop, "footer offsettop");

  

  if (window.pageYOffset && bodyScrollTop > headerHeightTop) {
    header.classList.add("isfixed");
    stickyBlock.style.top = headerHeight - headerHeightTop + "px";
  } else {
    header.classList.remove("isfixed");
    stickyBlock.style.top = headerHeight + "px";
  }

  if (outherHeight === bodyClientheight && innerHeight === foterOffsetTop) {
    header.classList.add("static");
    stickyBlock.style.top = "0px";
    stickyBlock.style.height = bodyClientheight - footerHeight + "px";
  } else {
    header.classList.remove("static");
    stickyBlock.style.height = bodyClientheight - headerHeight + headerHeightTop  + "px";
    // stickyBlock.style.height = bodyClientheight - headerHeight * 2 + "px";
    if (bodyClientheight > a) {
      stickyBlock.style.height = bodyClientheight - headerHeight - b + headerHeightTop + "px";
    } else {
      stickyBlock.style.height = bodyClientheight - headerHeight + headerHeightTop  + "px";
    }
  }
};
