var imgBox = document.querySelector(".img-box");
var imgWrap = document.querySelector(".img-wrap");
var originalImg = document.getElementById("originalImg");
var line = document.getElementById("line");


originalImg.style.width = imgBox.offsetWidth + "px";

var leftSpace = imgBox.offsetLeft;

imgBox.onmousemove = function(e){
    // e.pageX;  // X position of the only image box (wrt the body)
    var boxWidth = (e.pageX - leftSpace) + "px";
    imgWrap.style.width = boxWidth;
    line.style.left = boxWidth;
}
