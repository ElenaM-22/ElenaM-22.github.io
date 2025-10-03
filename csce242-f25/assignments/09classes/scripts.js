//P. Elena Maddox, CSCE 242

//Your Project will have a list of paintings, and corresponding information about them. All stored in an array of classes.
//For each image you will store: name, artist, image, and wether it's framed or not (Some framed and some not)

class Painting{
    constructor(name, artist, image, framed){
        this.name = name;
        this.artist = artist;
        this.image = image;
        this.framed = framed;
    }

    get item() {
        const section = document.createElement("section");
        section.classList.add("painting");

        //modal
        /*modal was created by taking the following html code from w3 schools and coding it in js:
        
        <img src="img_snowtops.jpg" onclick="document.getElementById('modal01').style.display='block'" class="w3-hover-opacity">

        <div id="modal01" class="w3-modal w3-animate-zoom" onclick="this.style.display='none'">
            <img class="w3-modal-content" src="img_snowtops.jpg">
        </div>

        <div id="modal01" class="w3-modal" onclick="this.style.display='none'">
            <span class="w3-button w3-hover-red w3-xlarge w3-display-topright">&times;</span>
            <div class="w3-modal-content w3-animate-zoom">
                <img id="img01" style="width:100%">
            </div>
            </div>
        */
        const modal = document.createElement("div");
        modal.classList.add("w3-container");

        const modalPicDiv = document.createElement("div");
        modal.append(modalPicDiv);

        //header
        const h3 = document.createElement("h3");
        h3.innerHTML = `${this.name}`;
        modalPicDiv.append(h3);
        
        const modalPic = this.picture(this.image);
        modalPicDiv.append(modalPic);

        const modal01 = document.createElement("div");
        modal01.classList.add("w3-modal");

        const span = document.createElement("span");
        span.classList.add("w3-button","w3-hover-red","w3-xlarge");
        span.innerHTML = "&times";
        modal01.append(span);  
            span.onclick = () => {
            modal01.style.display="none";
        }
        
        modalPicDiv.onclick = () => {
            modal01.style.display='block';
        }
        const modalContent = document.createElement("div");
        modalContent.classList.add("w3-modal-content", "w3-animate-zoom");
        modal01.append(modalContent);

        //modal text
        const modalHead = document.createElement("h3");
        modalHead.innerHTML = this.name;
        modalContent.append(modalHead);
        modal.append(modal01);

        const modalArtist = document.createElement("h5");
        modalArtist.innerHTML = `by ${this.artist}`;
        modalContent.append(modalArtist);

        //modal image
        const modalImage = this.picture(this.image);
        if (this.framed === "yes" && this.image){
            modalImage.classList.add("framed");
        }
        modalContent.append(modalImage);

        section.append(modal);  

        return section;
    }

    picture(filename) {
        const img = document.createElement("img");
        img.src = `images/${filename}`;
        img.classList.add("images");
        return(img);
    }

}

const paintings=[];
paintings.push(new Painting("Mona Lisa", "Leonardo da Vinci", "mona-lisa.jpg", "no"));
paintings.push(new Painting("The Scream", "Edward Munch", "scream.jpg", "yes"));
paintings.push(new Painting("American Gothic", "Grant Wood", "gothic.jpg", "no"));
paintings.push(new Painting("Portrait of Dora Maar", "Pablo Picasso", "dora.jpg", "yes"));
paintings.push(new Painting("Portrait of Dr. Gachet", "Vincent van Goph", "gachet.jpg", "no"));

//on page load
const paintingListDiv = document.getElementById("painting-list");

paintings.forEach((painting)=>{
    paintingListDiv.append(painting.item);
});


