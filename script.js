const randCat_URL = "https://meowfacts.herokuapp.com/";

let slider = document.querySelector(".slider");

fetch(randCat_URL)
  .then((res) => res.json())
  .then((hat) => {
    console.log(hat);
    slider.innerText = hat.data[0];
  }).catch;
