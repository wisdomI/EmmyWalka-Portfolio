// Buy Art button functionality
const buyArt = document.querySelector(".buy-art-btn")
const closeArt = document.querySelector(".pop-up-close-btn")
const popUp = document.querySelector(".pop-up-wrapper")

buyArt.addEventListener("click", () => {
  popUp.classList.add("show")
})

closeArt.addEventListener("click", () => {
  popUp.classList.remove("show")
})
//_________________________________________________________________________