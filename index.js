const userText = document.querySelector("#user-text");
const checkBtn = document.querySelector("#check");

checkBtn.addEventListener("click", (e) => {
	e.preventDefault();
	let regex = /[aeiou]/g;
	if (regex.test(userText.value)) {
		let vowels = userText.value.match(regex);
		vowels.length > 1
			? alert(`Your text contains ${vowels.length} vowels 😎😎`)
			: alert(`Your text contains ${vowels.length} vowel 😎`);
	} else {
		alert("Your text does not contain vowels 😏😏");
	}
	userText.value = "";
	userText.focus();
});
