const button = document.getElementById("getpokemon")
const img = document.getElementById("pokeimg")
const namePokemon = document.getElementById("pokename")
const superType = document.getElementById("supertypes")
const subType = document.getElementById("subtypes")

function getApiData() {
  fetch("https://api.pokemontcg.io/v2/cards/base1-1")
  .then (response => response.json())
  .then (data => {
      img.src = data.data.images.large
      namePokemon.textContent = data.data.name
      superType.textContent = data.data.supertype
      subType.textContent = data.data.subtypes

  });

};

button.addEventListener("click", getApiData)