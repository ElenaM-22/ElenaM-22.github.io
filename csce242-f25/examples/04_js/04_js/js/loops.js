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

document.getElementById("btn-count").onclick = () => {
    //error
    const error = document.getElementById("error-number");
    error.innerHTML = "";

    //numbers
    const startNum = parseInt(document.getElementById("txt-start").value);
    const endNum = parseInt(document.getElementById("txt-end").value);
    
    const resultDiv = document.getElementById("d-count");
    resultDiv.innerHTML = "";

    if(startNum > endNum){
        error.innerHTML = "*the second number must be bigger than the first";
        return;
    }

    //loop for every num from start to end display the num in paragraphs

    for(let i = startNum; i <= endNum; i++){
        const p = document.createElement("p");
        p.innerHTML = i;
        resultDiv.append(p);
        p.onclick = () => {
            console.log(`you click number ${i}`);
        };
    }
};

document.getElementById("btn-show-toys").onclick = () => {
    const toyList = document.getElementById("toy-list");
    toyList.innerHTML = "";

    const toys = ["ball", "barbie", "skipping rope", "doll", "mini car", "elmo"];

    //first way to iterate

    /*not preferred way
    //iterate over toys add li's to the ul
    for (let i = 0; i <= toys.length; i++){
        const li = document.createElement("li");
        li.innerHTML = toys[i];
        toyList.append(li);
    }
    */

    /*second way preferred*/
    toys.forEach((toy, i)=>{
        const li = document.createElement("li");
        li.innerHTML = toy;
        toyList.append(li);
    });
};

document.getElementById("btn-show-toy-prices").onclick = () => {
    const toys = [];
    toys["ball"] = 2.99;
    toys["barbie"] = 19.99;
    toys["skipping-rope"] = 5.99;
    toys["match car box"] = 2.99;
    toys["elmo"] = 10.99;

    const toyDiv = document.getElementById("toy-prices");
    toyDiv.innerHTML = "";

    for(let toy in toys){
        //console.log(toys[toy]);
        const p = document.createElement("p");
        p.innerHTML = toy;
        toyDiv.append(p);

        //when i  click the paragraph... in a div velow show the price
        //like "ball cost $..."

        p.onclick = () => {
            document.getElementById("show-price").innerHTML = `${toy} costs ${toys[toy]}`;
        }
    }
};
