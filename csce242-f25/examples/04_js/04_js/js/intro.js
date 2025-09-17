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
}

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
}