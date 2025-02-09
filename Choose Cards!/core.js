document.querySelectorAll(".card").forEach((card) => {
	card.addEventListener("click", () => {
		// Remove active class from all cards
		document
			.querySelectorAll(".card")
			.forEach((c) => c.classList.remove("active"));
		// Add active class to clicked card
		card.classList.add("active");
		// Update status text
		document.getElementById("selection-status").textContent = `Selected: Option ${
			card.dataset.option === "1" ? "A" : "B"
		}`;
	});
});
