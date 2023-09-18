// NavBar functionality
const primaryNav = document.querySelector(".primary-navigation")
const navToggle = document.querySelector(".mobile-nav-toggle")

navToggle.addEventListener("click", () => {
  const visibility = primaryNav.getAttribute("data-visible")

  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", true)
    navToggle.setAttribute("aria-expanded", true)
  } else if (visibility === "true") {
    primaryNav.setAttribute("data-visible", false)
    navToggle.setAttribute("aria-expanded", false)
  }
})
// ______________________________________________________________________

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