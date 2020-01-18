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

/* Initialise, and run home property functions. */
function initProperty(){
  image = document.getElementById("property-image");
  position = image.src.charAt(image.src.length-5);
  total = image.dataset.total;
  property = image.dataset.name;
  width = image.width;
  height = image.height;

  window.addEventListener('resize', resizePropertyImage);

  if(total > 1){
    setInterval(rotatePropertyImage, 4000);
  }
}

/* Home page events. */
if(document.getElementById("header") !== null){
  $(".owl-carousel").owlCarousel({
    items: 1,
    margin: 0,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    autoplay: true,
    autoplayTimeout: 4200,
    dots: true,
    smartSpeed: 950
  });
}
/* Property page events. */
else if(document.getElementById("property-image")){
  window.addEventListener('load', initProperty);
}
