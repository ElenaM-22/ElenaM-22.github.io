document.getElementById("sunny-column").onclick = (event) => {
  document.getElementById("sunny-text").innerHTML = 
    <pre>
        Here comes the sun
        sun
            sun
                sun
        Here it comes
        </pre>;
   event.currentTarget.classList.add("clicked");
};

document.getElementById("color-picker").addEventListener("input",(event) => {
    const finalColor = event.target.value;
    const text = document.getElementById("color-text");
    text.innerHTML = "this is my color";
    text.style.display = "block";
    text.style.color = finalColor;
});

document.getElementById("weather-image").onclick = (event) => {
    if(document.getElementById("weather-image").src = "sun.jpg"{
        document.getElementById("weather-image").src = "https://static.vecteezy.com/system/resources/thumbnails/004/792/792/small/cloud-on-white-background-free-vector.jpg";
    }
    else{
        document.getElementById("weather-image").src = "sun.jpg";
    }
};
    
