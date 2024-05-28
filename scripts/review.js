// Review Counter

const reviewCount = document.querySelector(".reviewCount");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

reviewCount.textContent = numVisits;

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);