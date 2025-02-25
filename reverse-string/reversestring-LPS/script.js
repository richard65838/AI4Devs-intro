document.addEventListener("DOMContentLoaded", () => {
	const input = document.getElementById("textInput");
	const output = document.getElementById("reversedText");
	const copyButton = document.getElementById("copyButton");

	input.addEventListener("input", () => {
		const text = input.value;
		
		if (text.length >= 3) {
			output.textContent = text.split("").reverse().join("");
			output.style.display = "block"; // Mostrar el texto invertido
			copyButton.style.display = "flex"; // Mostrar el botón de copiar
		} else {
			output.style.display = "none"; // Ocultar el texto invertido
			copyButton.style.display = "none"; // Ocultar el botón de copiar
		}
	});

	copyButton.addEventListener("click", () => {
		navigator.clipboard.writeText(output.textContent)
			.then(() => alert("Texto copiado al portapapeles"))
			.catch(err => console.error("Error al copiar: ", err));
	});
});
