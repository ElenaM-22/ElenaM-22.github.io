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

function colorPick(){
    const color = document.getElementById("colorPicker");

    if(color.classList.contains("hidden")){
        color.classList.remove("hidden");
        document.getElementById("color-picker").remove("hidden");
        document.getElementById("color-text").textContent = "color" + color.value;

    }
    else{
        color.classList.add("Hidden");
        document.getElementById("color-picker").add("hidden");
    }

};

document.getElementById("color-picker").addEventListener("input",(event) => {
    const finalColor = event.target.value;
    document.getElementById("color-picker").textContent = "this is my color " + finalColor;
    document.getElementById("color-picker").style.color = finalColor
    
});

document.getElementById("weather-image").onclick = (event) => {
    if(document.getElementById("weather-image").source.includes("sun.jpg")){
        document.getElementById("weather-image").src = "https://static.vecteezy.com/system/resources/thumbnails/004/792/792/small/cloud-on-white-background-free-vector.jpg";

    }
    else{
        document.getElementById("weather-image").src = "sun.jpg";
    }
};
    