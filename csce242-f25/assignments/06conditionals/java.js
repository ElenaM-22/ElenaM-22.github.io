//P. Elena Maddox, CSCE 242


//slider
var slider = document.getElementById("waterRange");
var message = document.getElementById("p-phase-output");
var image = document.getElementById("plant-phase");

slider.oninput = function() {
  document.getElementById("p-phase-input").innerHTML = `It's been ${this.value} days since watering your plant.`;
  if (this.value >= 10) {
    image.src = "images/phase4.png";
    message.innerHTML = "Your plant is dead.";
    }
  else if ((this.value <= 9) && (this.value >= 6)){
    image.src = "images/phase3.png";
    message.innerHTML = "Leaves are dropping, the color is changing, water soon.";
    }
  else if((this.value <= 5) && (this.value >= 3)){
    image.src = "images/phase2.png"; 
    message.innerHTML = "Your plant needs watering.";
    }
  else{
    message.innerHTML = "Your plant is happy and healthy.";
    image.src = "images/phase1.png";
    }
}


//clock
function startTime() {
  const today = new Date();
  var AorP = "AM";
  let h = today.getHours();
  console.log(h);
  if (h > 12){
    h=h-12;
    AorP = "PM";
  }
  else if (h==0){
    h=h+12;
  }
  let m = today.getMinutes();
  m = checkTime(m);
  document.getElementById('clock-txt').innerHTML =  h+ ":" + m + " " + AorP;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}


//exercise hiding toggle
var ex1 = document.getElementById("exercise1");
var ex2 = document.getElementById("exercise2");
ex1.style.display = "none";
ex2.style.display = "none";

function toggleContent1(){
  if(ex1.style.display === "none"){
    ex1.style.display = "block";
    ex2.style.display = "none";
    }
    else{
      ex1.style.display = "none";
    }

}

function toggleContent2(){
  if(ex2.style.display === "none"){
    ex2.style.display = "block";
    ex1.style.display = "none";
    }
    else{
      ex2.style.display = "none";
    }

}


