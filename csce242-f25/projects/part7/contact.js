//P. Elena Maddox, csce 242


const result = document.getElementById('contact-result');

//when someone has successfully filled out the three fields, this is executed
document.getElementById("contact-form").onsubmit = (event) => {
    event.preventDefault();
    
    const formData = new FormData(event.currentTarget);
    const object = Object.fromEntries(formData);

    const json = JSON.stringify(object);

    console.log(json);

    result.innerHTML = "Please wait...";

    //send to email
    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = "Form submitted successfully";
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })

        //clear fields
        .then(function() {
            document.getElementById("contact-form").reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 3000);
        });

        document.getElementById("message-sent").innerHTML = "Your message has been sent. Someone will be in contact shortly!"
    };

