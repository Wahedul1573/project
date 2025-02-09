document.querySelector(".switch").addEventListener("click", (e) => {
	if (e.target.classList.contains("active")) {
		e.target.classList.remove("active");
		document.querySelector(".sun").style.opacity = "1";
		document.querySelector(".moon").style.opacity = "0";
		document.querySelector(".backgrd").style.background = "transparent";
		document.querySelector(".container").style.backgroundColor = "black";
		document.querySelector(".screen1").style.opacity = "1";
		document.querySelector(".screen2").style.opacity = "0";
	} else {
		e.target.classList.add("active");
		document.querySelector(".sun").style.opacity = "0";
		document.querySelector(".moon").style.opacity = "1";
		document.querySelector(".screen2").style.opacity = "1";
		document.querySelector(".container").style.backgroundColor =
			"rgb(128,128,128)";
		document.querySelector(".screen1").style.opacity = "0";
	}
});
