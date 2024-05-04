const button = document.getElementById("getpokemon")
const img = document.getElementById("pokeimg")
const namePokemon = document.getElementById("pokename")
const superType = document.getElementById("supertypes")
const subType = document.getElementById("subtypes")
const healthPercent = document.getElementById("pokehealth")
const pokeDmg = document.getElementById("pkdmg")
const powerAtk1 = document.getElementById("pokeatk1")
const powerDesc1 = document.getElementById("pokedesc1")
const powerAtk2 = document.getElementById("pokeatk2")
const powerDesc2 = document.getElementById("pokedesc2")
const powerMarbles = document.getElementById("pepas")


function getApiData() {
  fetch("https://api.pokemontcg.io/v2/cards/base3-33")
  .then (response => response.json())
  .then (data => {
      img.src = data.data.images.large
      namePokemon.textContent = data.data.name
      superType.textContent = data.data.supertype
      subType.textContent = data.data.subtypes
      healthPercent.textContent = data.data.hp
      pokeDmg.textContent = data.data.attacks[0].damage
      powerAtk1.textContent = data.data.attacks[0].name
      powerDesc1.textContent = data.data.attacks[0].text
      powerAtk2.textContent = data.data.attacks[1].name
      powerDesc2.textContent= data.data.attacks[1].text

      
      const pepas = data.data.attacks[1].cost
      console.log(data.data.attacks[1].cost)
      pepas.forEach(items => {
      const img = document.createElement('img');
      img.src = `public/img/${items}.webp`
      powerMarbles.appendChild(img); 
        
      });

      
      
  // console.log(data.data.attacks[1].cost);
  });

};

button.addEventListener("click", getApiData)