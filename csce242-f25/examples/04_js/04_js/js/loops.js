document.getElementById("btn-display").onclick = () => {
    const displaySection = document.getElementById("loop-result");
    const ul = document.createElement("ul");
    displaySection.append(ul);
    
    //loop and write the numbers 1 to 10
    for(i = 0; i < 10;i++){
        const li = document.createElement("li");
        li.innerHTML = `${i} orange(s)`;
        ul.append(li);
    }
}