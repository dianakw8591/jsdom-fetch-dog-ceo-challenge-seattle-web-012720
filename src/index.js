document.addEventListener("DOMContentLoaded", function() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    fetch(imgUrl)
    .then(response => response.json())
    .then(json => putImages(json));


    function putImages(json) {
        let imageContainer = document.getElementById("dog-image-container");
        json.message.forEach(element => {
           const img = document.createElement("img");
           img.src = element;
           imageContainer.appendChild(img); 
       });
    }

    let breedList = document.getElementById("dog-breeds");
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
    .then(response => response.json())
    .then(json => addBreeds(json));

    function addBreeds(json) {
        let breedObject = json.message
        for (const breed in breedObject) {
            if (breedObject[breed].length == 0) {
                createBreedLi(breed);
            }
            else {
                breedObject[breed].forEach(element => {
                    createBreedLi(element + " " + breed)
                })
            }
        }
    function createBreedLi(breedName){
        const li = document.createElement("li");
        li.textContent = breedName;
        li.addEventListener("click", function() {
            li.style = "color:purple"
        })
        breedList.appendChild(li);
        }
    };

    
    const select = document.getElementById('breed-dropdown')
    select.addEventListener("change", event => {
            let letter = (event.target.value)
        document.querySelectorAll('li').forEach (element => {
            if (element.innerText[0] != letter) {
                element.style = "visibility: hidden";
        } else {
            element.style = "visibility: visible";
        }
    })
    })




})