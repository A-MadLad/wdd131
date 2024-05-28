// Review Counter

const reviewCount = document.querySelector(".reviewCount");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
	reviewCount.textContent = numVisits;
} else {
	reviewCount.textContent = `This is your first visit. 🥳 Welcome!`;
}

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);