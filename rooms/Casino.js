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
	tooltip.innerText = `1: 1 score  2: 10 score 3: ${score / 2} score`;
}
function PerformGamble(num) {
	Clear();
	NewState("PerformGamble");
	line1.innerText = "You decided to bet " + num + " score";

	const casinoRoll = Math.floor(Math.random() * weightedCasinoPrizes.length);
	if (weightedCasinoPrizes[casinoRoll] == "Nothing") {
		line2.innerText = "You won: Nothing";
		score -= num;
	} else if (weightedCasinoPrizes[casinoRoll] == 1) {
		line2.innerText = "You won your score back!";
	} else {
		line2.innerText = `Congratulations! You won ${weightedCasinoPrizes[casinoRoll]} score!`;
		score += num * weightedCasinoPrizes[casinoRoll];
	}
	line3.innerText = "Do you want to try again?";
	tooltip.innerText = "1: Try again  3: Leave";
}
function ReGamble() {
	Clear();
	NewState("Gamble");
	line1.innerText = "You decide to try your luck again";
	line2.innerText = "The dealer asks how much you want to bet";
	tooltip.innerText = `1: 1 score  2: 10 score 3: ${score / 2} score`;
}
function Leave_Casino() {
	Clear();
	line1.innerText = "You decided to leave the casino";
	NewRoom();
}
