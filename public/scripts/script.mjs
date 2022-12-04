Array.from(document.querySelectorAll(".ipa")).forEach((ipa) => {
	ipa.addEventListener("click", () => {
		const audio = new Audio("/media/abhay.mp3");
		audio.play();
	});
});