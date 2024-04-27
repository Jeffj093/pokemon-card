const button = document.getElementById("getpokemon")
const img = document.getElementById("pokeimg")
const namePokemon = document.getElementById("pokename")
const superType = document.getElementById("supertypes")
const subType = document.getElementById("subtypes")
const healthPercent = document.getElementById("pokehealth")
const powerType = document.getElementById("powrtype")
// const pokeDmg = document.getElementById("pokedmg")
const powerAtk1 = document.getElementById("pokeatk1")
const powerDesc1 = document.getElementById("pokedesc1")
const powerAtk2 = document.getElementById("pokeatk2")
const powerDesc2 = document.getElementById("pokedesc2")


function getApiData() {
  fetch("https://api.pokemontcg.io/v2/cards/base5-38")
  .then (response => response.json())
  .then (data => {
      img.src = data.data.images.large
      namePokemon.textContent = data.data.name
      superType.textContent = data.data.supertype
      subType.textContent = data.data.subtypes
      healthPercent.textContent = data.data.hp
      powerType.src = `public/img/${data.data.types[0]}.webp`
      // pokeDmg.textContent = data.data.attacks[1].damage
      powerAtk1.textContent = data.data.attacks[0].name
      powerDesc1.textContent = data.data.attacks[0].text
      powerAtk2.textContent = data.data.attacks[1].name
      powerDesc2.textContent= data.data.attacks[1].text
      

      
      
  // console.log(data.data.attacks[1].cost.damage);
  });

};

button.addEventListener("click", getApiData)