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
  /* 1 - sold record price.
  2 - Happy sellers and purchasers
  3- Record price for street
  8 - More townhouses wanted for cashed-up buyers
  9 - The search is finally over! */

  if(position == total){
    position = 1;
    document.getElementById("button-heading").style.visibility = "visible";
    document.getElementById("button-heading").innerHTML = 'TELL ME MORE<br><i class="fa fa-arrow-down"></i>';
    document.getElementById("button-heading").href = "#services";
  }
  else if(position == 1){
    position++;
    document.getElementById("button-heading").style.visibility = "visible";
    document.getElementById("button-heading").innerHTML = 'Happy buyers and sellers';
    document.getElementById("button-heading").href = "#services";
  }
  else if(position == 2){
    position++;
    document.getElementById("button-heading").style.visibility = "visible";
    document.getElementById("button-heading").innerHTML = 'TELL ME MORE<br><i class="fa fa-arrow-down"></i>';
    document.getElementById("button-heading").href = "#services";
  }
  else if(position == 3){
    position++;
    document.getElementById("button-heading").style.visibility = "visible";
    document.getElementById("button-heading").innerHTML = 'Record price for street';
    document.getElementById("button-heading").href = "#services";
  }
  else if(position >= 4 && position <= 5){
    /* 11b Jean Street. */
    position++;
    document.getElementById("button-heading").style.visibility = "visible";
    document.getElementById("button-heading").innerHTML = "Cheltenham - Sold for $1,011,000";
    document.getElementById("button-heading").href = "./properties/11b-jean.html";
  }
  else if(position == 6){
    position++;
    document.getElementById("button-heading").style.visibility = "visible";
    document.getElementById("button-heading").innerHTML = "Another record price";
    document.getElementById("button-heading").href = "#services";
  }
  else if(position == 7){
    position++;
    document.getElementById("button-heading").style.visibility = "visible";
    document.getElementById("button-heading").innerHTML = "The search is finally over!";
    document.getElementById("button-heading").href = "#services";
  }
  else if(position == 9){
    position++;
    document.getElementById("button-heading").style.visibility = "hidden";
  }
  else if((position >= 8 && position <= 13) && position !== 9){
    /* 11b Jean Street. */
    position++;
    document.getElementById("button-heading").style.visibility = "visible";
    document.getElementById("button-heading").innerHTML = "Cheltenham - Sold for $1,011,000";
    document.getElementById("button-heading").href = "./properties/11b-jean.html";
  }
  else{
    position = 1;
    document.getElementById("button-heading").style.visibility = "visible";
    document.getElementById("button-heading").innerHTML = 'TELL ME MORE<br><i class="fa fa-arrow-down"></i>';
    document.getElementById("button-heading").href = "#services";
  }

  header.style.backgroundImage = 'url("./img/header/header0' + position + '.jpg")';

  /* Preload next image. */
  if(preload.length != total - 2 && position != total){
    preload[position - 2] = new Image();
    preload[position - 2].src = "./img/header/header0" + (position + 1) + ".jpg";
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

/* Initialise, and run home page functions. */
function initHome(){
  header = document.getElementById("header");
  style = window.getComputedStyle(header);
  image = style.getPropertyValue('background-image');
  position = 1;
  total = header.dataset.total;
  preload = [];

  resizeHeaderImage();
  window.addEventListener('resize', resizeHeaderImage);
  setInterval(rotateHeaderImage, 2000);
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
  window.addEventListener('load', initHome);
}
/* Property page events. */
else if(document.getElementById("property-image")){
  window.addEventListener('load', initProperty);
}
