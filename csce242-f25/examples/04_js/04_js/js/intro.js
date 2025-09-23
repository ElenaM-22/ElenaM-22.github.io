/* const sayHello = () => {
    console.log("Hello world.");
}

document.getElementById("btn-click-me").onclick = sayHello;
*/

document.getElementById("btn-click-me").onclick = (event) => {
    document.getElementById("p-welcome").innerHTML = "Hello world";
    event.currentTarget.classList.add("clicked");   /* cyrrent target is the button that was clicked*/
};

document.getElementById("happy-button").onclick = (event) => {
    document.getElementById("p-welcome").innerHTML = "yay!";
    event.currentTarget.classList.add("clicked");   /* cyrrent target is the button that was clicked*/
};

document.getElementById("sad-button").onclick = (event) => {
    document.getElementById("p-welcome").innerHTML = "nay!";
    event.currentTarget.classList.add("clicked");   /* cyrrent target is the button that was clicked*/
};

document.getElementById("clear-button").onclick = (event) => {
    document.getElementById("p-welcome").innerHTML = "";
    event.currentTarget.classList.add("clicked");   /* cyrrent target is the button that was clicked*/
};
/*
document.getElementById("txt-emotion").onkeyup = (event) => {
    document.getElementById("img-emotion").classList.remove("hidden");
};
*/
document.getElementById("btn-mood-ring").onclick = () =>{
    const color = document.getElementById("txt-color").value.trim().toLowerCase();    //trim gets rid of white space
    const p= document.getElementById("p-mood-result");
    p.innerHTML = "";   //reset paragraph
    const error = document.getElementById("error-color");
    error.innerHTML = "";   //reset error
    let mood = "";
   
    if(color == ""){
        error.innerHTML = "* blank";
        return;
    }

    if(color == "red") {
        mood = "angry";
    }
    else if(color == "yellow") {
        mood = "happy";
    }
    else if(color == "blue"){
        mood = "sad";
    }

    if(mood == ""){
        error.innerHTML = "* invalid color";
    }

    p.innerHTML = `you chose ${color}, you are feeling ${mood}`;
};

document.getElementById("btn-bounce").onclick = (event) => {
    const ball = document.getElementById("ball");
    if(ball.classList.add("bounce")) {
        event.currentTarget.innerHTML = "start";
    }else {
        event.currentTarget.innerHTML = "stop";
    }

        if(ball.classList.add("color")) {
        event.currentTarget.innerHTML = "start";
    }else {
        event.currentTarget.innerHTML = "stop";
    }
};

/*counter*/

let counter = 0;
let counterInterval;
const countP = document.getElementById("p-count");
const btnStartCount = document.getElementById("btn-count-start");
const btnPauseCount = document.getElementById("btn-count-pause");
btnPauseCount.disabled = true;
btnStartCount.disabled = false;

//start
btnStartCount.onclick = () => {
    btnStartCount.disabled = true;
    btnPauseCount.disabled = false;
    counterInterval = setInterval(()=>{
        counter++;
        countP.innerHTML = counter;
    }, 1000);
}

//pause
btnPauseCount.onclick = () => {
    clearInterval(counterInterval);
    btnPauseCount.disabled = true;
    btnStartCount.disabled = false;
}


//donations stuff
const goal= 10000;
let totalDonations = 0;
document.getElementById("goal-span").innerHTML = goal;

document.getElementById("btn-donations").onclick = () => {
    const donation = document.getElementById("txt-donations").value;
    const errorSpan = document.getElementById("donation-error");
    errorSpan.innerHTML = "";

    if(isNaN(donation) || donation <= 0){
        errorSpan.innerHTML = "* Invalid amount.";
        return;
    }
    
    totalDonations += parseInt(donation);

    const donationPercent = (totalDonations / goal) * 100;
    const donationMessage = document.getElementById("donation-message");
    donationMessage.innerHTML = "";

    console.log(donationPercent);
    if (donationPercent >= 100) {
        donationMessage.innerHTML = "Goal Reached!";
    }
    else if (donationPercent >= 75){
        donationMessage.innerHTML = "We're almost there!";
    }
    else if(donationPercent > 50){
        donationMessage.innerHTML = "Over halfway there!";
    }
    else if(donationPercent >= 25){
        donationMessage.innerHTML = "Keep going!";
    }
    else{
        donationMessage.innerHTML = "Let's get started!";
    }

    //query selector is for accessing css
    document.querySelector(":root").style.setProperty("--donation-percent", donationPercent + "%");
}

//look up javascript get the current time