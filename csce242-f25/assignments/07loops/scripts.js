//P. Elena Maddox, CSCE 242

document.getElementById("btn-draw").onclick = () => {
    const cloudContainer = document.getElementById("cloud-container");
    cloudContainer.style.display = "block";
    const treeContainer = document.getElementById("tree-container");
    treeContainer.style.display = "block";

    for(i = 0; i < 6; i++){
        const cloudDiv = document.createElement("div");
        cloudDiv.classList.add("cloud");
        cloudContainer.append(cloudDiv);
    }

    for(i = 0; i < 6; i++){
        const treeDiv = document.createElement("div");
        treeDiv.classList.add("tree");
        treeContainer.append(treeDiv);
    }
        
};

//clock
function startTime() {
  const today = new Date();
  let h = today.getHours();
  console.log(h);
  let m = today.getMinutes();
  m = checkTime(m);
  setTimeout(startTime, 1000);

  if ((h >= 18) || (h <= 6)){
    document.body.style.backgroundColor = "black";

    const textElements = document.getElementsByClassName("text");
    for (let i = 0; i < textElements.length; i++) {
        textElements[i].style.color = "white";
    }
    document.getElementById("btn-draw").style.color = "black";
  }
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}
