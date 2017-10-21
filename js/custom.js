function resize(){
  var images = document.getElementsByClassName("img-fluid");
  height = images[0].height;
  width = images[0].width;

  var i;
  for(i = 1; i < images.length; i++){
    images[i].style.width = width + "px";
    images[i].style.height = height + "px";

  }
}

document.addEventListener('DOMContentLoaded', resize);
window.addEventListener('resize', resize);
