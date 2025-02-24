function reverseText() {
	let input = document.getElementById("textInput").value;
	let reversed = input.split('').reverse().join('');
	document.getElementById("result").innerText = reversed;
	if (!document.getElementById("realTimeCheckbox").checked) {
		document.getElementById("clean").style.display = "inline-block";
	}
}

function cleanText() {
	document.getElementById("textInput").value = "";
	document.getElementById("result").innerText = "";
	document.getElementById("clean").style.display = "none";
	document.getElementById("reverse").style.display = "none";
}

function toggleReverseButton() {
	let input = document.getElementById("textInput").value;
	let reverseButton = document.getElementById("reverse");
	if (input.length >= 3) {
		reverseButton.style.display = "inline-block";
	} else {
		reverseButton.style.display = "none";
	}
}

function toggleRealTimeMode() {
	let realTime = document.getElementById("realTimeCheckbox").checked;
	let reverseButton = document.getElementById("reverse");
	let cleanButton = document.getElementById("clean");
	if (realTime) {
		reverseButton.style.display = "none";
		cleanButton.style.display = "none";
	} else {
		toggleReverseButton();
	}
}

function handleTextInput() {
	let realTime = document.getElementById("realTimeCheckbox").checked;
	if (realTime) {
		reverseText();
	} else {
		toggleReverseButton();
	}
}