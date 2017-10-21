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

function rotateImage(){
  var total = header.dataset.total;

  if(position == total){
    position = 1;
  }
  else{
    position++;
  }

  header.style.backgroundImage = 'url("./img/header/header0' + position + '.jpg")';
}

if(document.getElementById("header") !== null){
  var header = document.getElementById("header");
  var style = window.getComputedStyle(header);
  var image = style.getPropertyValue('background-image');
  var position = image.charAt(image.length-7);

  document.addEventListener('DOMContentLoaded', resize);
  window.addEventListener('resize', resize);
  setInterval(rotateImage, 4000);
}
