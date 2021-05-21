function EnterCasino() {
	NewState("EnterCasino");
	Clear();
	line1.innerText =
		"You approach another room, but this time there's just one door...";
	line2.innerText = "You decide to open the door and step inside";
	line3.innerText =
		"Once you set foot inside you're blinded by bright flashing lights...";
	line4.innerText =
		"It's a casino! What do you do? Take your chance at greatness or continue your venture deeper into the house?";
	tooltip.innerText = "1: Try your luck  2: Continue forward";
}
function Continue_Casino() {
	Clear();
	NewState("Continue_Casino");
	line1.innerText =
		"You decided to continue your venture, not gaining nor losing anything at the casino";
	NewRoom();
}
function Gamble() {
	Clear();
	NewState("Gamble");
	line1.innerText = "You sit down at one of the tables";
	line2.innerText = "The dealer asks how much you want to bet";
	tooltip.innerText = `1: 1  2: 10  3: ${score / 2}`;
}
function PerformGamble(num) {
	Clear();
	line1.innerText = "You decided to bet " + num.toString();
}
