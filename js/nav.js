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

// Nav Link Active
const activePage = window.location.pathname
const navLinks = document.querySelectorAll("nav a")

navLinks.forEach(element => {
    const navLinkPathname = new URL(element.href).pathname


    if (activePage === navLinkPathname) {
        element.classList.add("active")
    }
});