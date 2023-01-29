
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
var randomFoodImage = "food" + randomNumber1 + ".jfif"; //dice1.png - dice6.png
var randomImageSource = "images/" + randomFoodImage; //images/dice1.png - images/dice6.png
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

if (randomNumber1 == 1){
  document.getElementById("p1").innerHTML= "Dosa";
}
else if (randomNumber1 == 2){
  document.getElementById("p1").innerHTML= "Samosa";
}
else if (randomNumber1 == 3){
  document.getElementById("p1").innerHTML= "Idli";
}
else if (randomNumber1 == 4){
  document.getElementById("p1").innerHTML= "Dhokla";
}
else if (randomNumber1 == 5){
  document.getElementById("p1").innerHTML= "Puchka";
}
else if (randomNumber1 == 6){
  document.getElementById("p1").innerHTML= "Chole Bhature";
}
