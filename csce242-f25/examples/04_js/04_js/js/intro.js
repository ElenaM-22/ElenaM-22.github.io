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