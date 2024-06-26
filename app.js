const button = document.getElementById("getpokemon");
const img = document.getElementById("pokeimg");
const namePokemon = document.getElementById("pokename");
const superType = document.getElementById("supertypes");
const subType = document.getElementById("subtypes");
const healthPercent = document.getElementById("pokehealth");
const pokeDmg = document.getElementById("pkdmg");
const powerType = document.getElementById("powrtype");
const powerAtk1 = document.getElementById("pokeatk1");
const powerDesc1 = document.getElementById("pokedesc1");
const powerAtk2 = document.getElementById("pokeatk2");
const powerDesc2 = document.getElementById("pokedesc2");
const powerMarbles = document.getElementById("pepas");


const toggleStage = () =>{
  const currentIcon = localStorage.getItem('icon');
  if (currentIcon === 'sun' || currentIcon === null) {
    const navbar = document.querySelector(".navbar");
    navbar.classList.add("dark");
    document.body.classList.add('dark');
  } else if (currentIcon === 'moon') {
    const navbar = document.querySelector(".navbar");
    navbar.classList.remove("dark");
    document.body.classList.remove('dark');
  }

  }
  toggleStage()

function getApiData() {
  fetch("https://api.pokemontcg.io/v2/cards/base3-33")
    .then((response) => response.json())
    .then((data) => {
      img.src = data.data.images.large;
      namePokemon.textContent = data.data.name;
      superType.textContent = data.data.supertype;
      subType.textContent = data.data.subtypes;
      healthPercent.textContent = data.data.hp;
      pokeDmg.textContent = data.data.attacks[0].damage;
      powerAtk1.textContent = data.data.attacks[0].name;
      powerDesc1.textContent = data.data.attacks[0].text;
      powerAtk2.textContent = data.data.attacks[1].name;
      powerDesc2.textContent = data.data.attacks[1].text;

      powerType.src = `public/img/${data.data.types[0]}.webp`;

      const pepas = data.data.attacks[0].cost;
      // console.log(data.data.attacks[0].cost)

      pepas.forEach((items, index) => {
        if (index == 0) {
          powerMarbles.textContent = "";
        }
        const img2 = document.createElement("img");
        img2.src = `public/img/${items}.webp`;
        powerMarbles.appendChild(img2);
      });
    });
}

button.addEventListener("click", getApiData);

const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropDownMenu = document.querySelector(".dropdown_menu");

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");
  toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};

const JeffToggle = () => {
  let currentIcon = localStorage.getItem("icon");
  const label_toggle = document.getElementById("label_toggle");

  // console.log(currentIcon)

  if (currentIcon === null) {
    label_toggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    localStorage.setItem("icon", "sun");
    const navbar = document.querySelector(".navbar");
    navbar.classList.add("dark");
    document.body.classList.add("dark");
  } else if (currentIcon === "sun") {
    label_toggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    localStorage.setItem("icon", "moon");
    const navbar = document.querySelector(".navbar");
    navbar.classList.remove("dark");
    document.body.classList.remove("dark");
  } else if (currentIcon === "moon") {
    label_toggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    localStorage.setItem("icon", "sun");
    const navbar = document.querySelector(".navbar");
    navbar.classList.add("dark");
    document.body.classList.add("dark");

  }
};

const toggle = document.getElementById('toggle')
const toggle2 = document.getElementById('toggle2')
const dropBgr = document.getElementsByClassName('.dropdown_menu')
toggle.addEventListener('click',()=> {
  
  
  JeffToggle()
  
})
toggle2.addEventListener('click',()=> {
  
  
  JeffToggle()
  
})

dropBgr.addEventListener('click',()=> {
  
  
  JeffToggle()
  
})




