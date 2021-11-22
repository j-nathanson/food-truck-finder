// SELECTORS AND GLOBAL VARIABLES

const numGuests = document.querySelector("#numGuests");
const range = document.querySelector("#estimator");
const sides = document.querySelector("#sides");
const entrees = document.querySelector("#entrees");
const dessert = document.querySelector("#dessert");
const costStart = document.querySelector("#costStart");
const costEnd = document.querySelector("#costEnd");

// Cost of Meals
const sidesCost = 150;
const entreesCost = 200;
const dessertCost = 100;
// Cost Per Person
const costPerGuestLow = 14;
const costPerGuestTop = 18;
// Initial range Values
let totalCostStart = 700;
let totalCostEnd = 900;





// EVENT LISTENERS
window.addEventListener('load', updateCost);

range.addEventListener('input', () => {
    let guestNum = range.value;
    numGuests.innerText = guestNum;

    // Bottom Range
    totalCostStart = guestNum * costPerGuestLow;
    costStart.innerText = totalCostStart;

    // Top Range
    totalCostEnd = guestNum * costPerGuestTop;
    costEnd.innerText = totalCostEnd;
})

sides.addEventListener('click', isCheckedSides);
entrees.addEventListener('click', isCheckedEntrees);
dessert.addEventListener('click', isCheckedDessert);

// FUNCTIONS

// Update approximate cost html
function updateCost() {
    costStart.innerText = totalCostStart;
    costEnd.innerText = totalCostEnd;
}

// Toggle Sides cost
function isCheckedSides(event) {
    if (event.target.checked) {
        totalCostStart += sidesCost;
        totalCostEnd += sidesCost;
    } else {
        totalCostStart -= sidesCost;
        totalCostEnd -= sidesCost;
    }
    updateCost();
}

// Toggle Entrees cost
function isCheckedEntrees(event) {
    if (event.target.checked) {
        totalCostStart += entreesCost;
        totalCostEnd += entreesCost;
    } else {
        totalCostStart -= entreesCost;
        totalCostEnd -= entreesCost;
    }
    updateCost();
}
// Toggle Dessert cost
function isCheckedDessert(event) {
    if (event.target.checked) {
        totalCostStart += dessertCost;
        totalCostEnd += dessertCost;
    } else {
        totalCostStart -= dessertCost;
        totalCostEnd -= dessertCost;
    }
    updateCost();
}

// jQuery 

// Catering Form Modal 
$(function () {
    $("#orderButton").click(function () {
        $("#orderModal").modal('show');
    })
});