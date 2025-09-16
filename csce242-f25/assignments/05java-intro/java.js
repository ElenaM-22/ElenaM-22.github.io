document.getElementById("sunny-column").onclick = (event) => {
  document.getElementById("sunny-text").classList.toggle("visible");
   event.currentTarget.classList.add("clicked");
}

document.getElementById("color-picker").addEventListener("input",() => {
    document.getElementById("color-text").style.color = colorPicker.value;
});

let isSunny = true;
document.getElementById("weather-image").onclick = (event) => {
    if(isSunny=true) {
        document.getElementById("weather-image").src="https://img.freepik.com/premium-vector/sun-pixel-illustrator_685023-2177.jpg";
        isSunny=true;
    }
    else{
        document.getElementById("weather-image").src="https://static.vecteezy.com/system/resources/thumbnails/004/792/792/small/cloud-on-white-background-free-vector.jpg";
        isSunny=false;
    }
}