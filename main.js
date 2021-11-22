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
const costPerGuestLow = 10;
const costPerGuestTop = 15;
// Inital range Values
let totalCostStart = 500;
let totalCostEnd = 750;


let initialEnd = 1000;



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

function updateCost() {
    costStart.innerText = totalCostStart;
    costEnd.innerText = totalCostEnd;
}

// Toggle Sides
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

// Toggle Entrees
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
// Toggle Dessert
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

// function isCheckedEntrees(event) {
//     console.log(event)
//     if (event.target.checked) {
//         initialStart += entreesCost;
//         initialEnd += entreesCost;
//     } else {
//         initialStart -= entreesCost;
//         initialEnd -= entreesCost;
//     }
// }

// function isCheckedDessert(event) {
//     console.log(event)
//     if (event.target.checked) {
//         initialStart += dessertCost;
//         initialEnd += dessertCost;
//     } else {
//         initialStart -= dessertCost;
//         initialEnd -= dessertCost;
//     }
// }