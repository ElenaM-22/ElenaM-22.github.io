//P. elena maddox, csce 242
const getFoods = async() => {
    const url = "https://elenam-22.github.io/csce242-f25/json/menu.json";

    try{
        const response = await fetch(url);
        return response.json();
    }
    catch(error){
        console.log("sorry");
    }
};

const showFoods = async() => {
    const foods = await getFoods();

    const starterListDiv = document.getElementById("starters");
    const entreeListDiv = document.getElementById("entrees");
    const sideListDiv = document.getElementById("sides");
    
    starterListDiv.classList.add("menu-columns");
    entreeListDiv.classList.add("menu-columns");
    sideListDiv.classList.add("menu-columns");

    foods.forEach((food)=>{

        const foodDiv = document.createElement("div");
        foodDiv.classList.add("menu-list");

        const foodSection = document.createElement("section");
        foodSection.classList.add("menu-item");

        const textSection = document.createElement("section");
        textSection.classList.add("menu-text-section");

        //header
        const h6 = document.createElement("h6");
        textSection.append(h6);
        h6.innerHTML= food.name;

        const p1 = document.createElement("p");
        p1.innerHTML = food.description;
        textSection.append(p1);

        const p2 = document.createElement("p");
        p2.innerHTML = `$${food.price}`;
        textSection.append(p2);

        
        //image
        const imageSection = document.createElement("section");
        const img = document.createElement("img");
        imageSection.append(img);
        img.src = `https://elenam-22.github.io/csce242-f25/${food.img_name}`;
        img.classList.add("menu-images");
        console.log(food);

        if(food.section === "starter"){  
            starterListDiv.append(textSection);
            starterListDiv.append(imageSection);
            foodDiv.append(starterListDiv);
        }
        else if(food.section ==="entree"){
            entreeListDiv.append(textSection);
            entreeListDiv.append(imageSection);
            foodDiv.append(starterListDiv);
        }
        else{
            sideListDiv.append(textSection);
            sideListDiv.append(imageSection);
            foodDiv.append(starterListDiv);
        }
        


    });
};

showFoods();
