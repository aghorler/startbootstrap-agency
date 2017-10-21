/* Function to automatically resize home page property images to match the browser sizing of the first image. */
function resizeHeaderImage(){
  var images = document.getElementsByClassName("img-fluid");
  height = images[0].height;
  width = images[0].width;

  var i;
  for(i = 1; i < images.length; i++){
    images[i].style.width = width + 'px';
    images[i].style.height = height + 'px';
  }
}

/* Function to rotate through header images. */
function rotateHeaderImage(){
  if(position == total){
    position = 1;
  }
  else{
    position++;
  }

  header.style.backgroundImage = 'url("./img/header/header0' + position + '.jpg")';
}

/* Function to rotate property images. */
function rotatePropertyImage(){
  if(position == total){
    position = 1;
  }
  else{
    position++;
  }

  image.src = '../img/properties/' + property + '/0' + position + '.jpg';
  image.style.width = width + 'px';
  image.style.height = height + 'px';
}

/* Function to resize all property images on window resize. */
function resizePropertyImage(){
  image.style.width = '80%';
  image.style.height = '100%';
  width = image.width;
  height = image.height;
}

/* Home page events. */
if(document.getElementById("header") !== null){
  var header = document.getElementById("header");
  var style = window.getComputedStyle(header);
  var image = style.getPropertyValue('background-image');
  var position = image.charAt(image.length-7);
  var total = header.dataset.total;

  document.addEventListener('DOMContentLoaded', resizeHeaderImage);
  window.addEventListener('resize', resizeHeaderImage);
  setInterval(rotateHeaderImage, 4000);
}
/* Property page events. */
else if(document.getElementById("property-image")){
  var image = document.getElementById("property-image");
  var position = image.src.charAt(image.src.length-5);
  var total = image.dataset.total;
  var property = image.dataset.name;
  var width = image.width;
  var height = image.height;

  window.addEventListener('resize', resizePropertyImage);
  setInterval(rotatePropertyImage, 4000);
}
