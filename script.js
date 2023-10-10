const randCat_URL = "https://cat-fact.herokuapp.com/facts";
let slider = document.querySelector(".slider");
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let currentIndex = 0;
let hatData = null;

fetch(randCat_URL)
  .then((res) => res.json())
  .then((data) => {
    hatData = data;
    console.log(hatData);
    slider.innerText = hatData[0].text;
  })
  .catch((error) => {
    console.error("error", error);
  });

next.addEventListener("click", () => {
  if (hatData && currentIndex + 1 < hatData.length) {
    currentIndex++;
    slider.innerText = hatData[currentIndex].text;
    console.log(currentIndex);
  }
});

prev.addEventListener("click", () => {
  if (currentIndex - 1 >= 0) {
    currentIndex--;
    slider.innerText = hatData[currentIndex].text;
    console.log(currentIndex);
  }
});
