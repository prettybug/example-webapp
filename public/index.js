const API_URL = "https://example-webapp.vercel.app/api";
const API_ROUTE = "";
const searchInput = document.getElementById("color");
const searchForm = document.getElementById("search-animals");
const resultList = document.getElementById("search-results");

let animals = [];

if(searchForm){
    searchForm.addEventListener("submit", async (event) => {
        event.preventDefault();
        buildSearchResults(animals);
    })
}

function buildSearchResults(animals){
    if(searchInput && resultList){
        resultList.innerHTML = "";

        const matchingAnimals = animals.filter(animal => animal.color.toUpperCase() === searchInput.value.toUpperCase())

        for (let animal of matchingAnimals){
            resultList.innerHTML += `<li>${animal.name}</li>`
        }

        if(matchingAnimals.length == 0){
            resultList.innerHTML = "<li>No matching animals</li>"
        }
    }
}

async function getAnimals (){
    fetch(API_URL + API_ROUTE, {method: "GET"})
    .then(res => res.json())
    .then (body => {animals = body.animals});
}

window.onload = async () => {
    await getAnimals();
}