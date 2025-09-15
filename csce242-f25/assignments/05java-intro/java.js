document.getElementById("sunny").onclick = (event) => {
    document.getElementById('hiddentext').style.display = document.getElementById('hiddentext').style.display === 'none' ? 'block' : 'none';
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