//get current year code (2026)
const currentyear = document.querySelector("#currentyear");
const today = new Date();
currentyear.innerHTML = today.getFullYear();

// last modified code
const lastModified = document.getElementById("lastModified").innerHTML = document.lastModified;

// adding the hamburger code
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector("nav");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
});
