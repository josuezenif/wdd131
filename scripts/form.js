//get current year code (2026)
const currentyear = document.querySelector("#currentyear");
const today = new Date();
currentyear.innerHTML = today.getFullYear();

// last modified code
const lastModified = document.getElementById("lastModified").innerHTML = document.lastModified;


// ------ ARRAY PRODUCTS -------
const products = [
    {
        id: "fc-1888",
        name: "Flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "Power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "Time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "Low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "Warp equalizer",
        averagerating: 5.0
    }
];


// -------- DISPLAYING PRODUCT NAME ---------
const product = document.getElementById("product");

products.forEach(item => {
    const div = document.createElement("div");
    div.innerHTML = `
    <option value="${item.id}">${item.name}</option>`;

    product.appendChild(div);
});


// --------COUNTING THE NUMBER OF FORMS COMPLETED---------
let reviewCounter = localStorage.getItem("reviewPageVisits");

if (reviewCounter === null) {
    reviewCounter = 1;
}

else {
    reviewCounter = parseInt(reviewCounter) + 1;
}

localStorage.setItem("reviewPageVisits", reviewCounter);

// --- BONUS: DISPLAYING THE NUMBER OF SUBMISSION IN FORM----
// document.getElementById("counter").textContent = "You have submitted " + reviewCounter + " times this form!";





