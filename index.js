const userText = document.querySelector("#user-text");
const checkBtn = document.querySelector("#check");

checkBtn.addEventListener("click", (e) => {
	e.preventDefault();
	let regex = /[aeiou]/g;
	if (regex.test(userText.value)) {
		let vowels = userText.value.match(regex);
		console.log(vowels);

		alert(`Your text contains ${vowels.length} vowels`);
		userText.value = "";
		userText.focus();
	}
});
