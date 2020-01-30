 
let toggle = document.getElementById("toggle");
let monthlyPrices = document.getElementsByClassName("month");
let annualPrices = document.getElementsByClassName("annual");



function iterate(domSelector) {
    for (let i = 0; i < domSelector.length; i++) {
        domSelector[i].classList.toggle("hidden");
    }
}

toggle.addEventListener("click", function () {
    iterate(monthlyPrices);
    iterate(annualPrices);
});
