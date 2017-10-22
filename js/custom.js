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
    document.getElementById("intro-text").style.visibility = "visible";
  }
  else{
    position++;
    document.getElementById("intro-text").style.visibility = "hidden";
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

/* Initialise, and run home page functions. */
function initHome(){
  header = document.getElementById("header");
  style = window.getComputedStyle(header);
  image = style.getPropertyValue('background-image');
  position = image.charAt(image.length-7);
  total = header.dataset.total;

  resizeHeaderImage();
  window.addEventListener('resize', resizeHeaderImage);
  setInterval(rotateHeaderImage, 4000);
}

/* Initialise, and run home property functions. */
function initProperty(){
  image = document.getElementById("property-image");
  position = image.src.charAt(image.src.length-5);
  total = image.dataset.total;
  property = image.dataset.name;
  width = image.width;
  height = image.height;

  window.addEventListener('resize', resizePropertyImage);
  setInterval(rotatePropertyImage, 4000);
}

/* Home page events. */
if(document.getElementById("header") !== null){
  window.addEventListener('load', initHome);
}
/* Property page events. */
else if(document.getElementById("property-image")){
  window.addEventListener('load', initProperty);
}
