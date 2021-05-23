function UpdateInfobar() {
	scoreText.innerText = "Score: " + score;
	healthText.innerText = "Health: " + health;
	updateEffects();
	handText.innerText = "Hand: " + hand.name;
	if ((hand.name = "Hand")) handText.innerText = "Hand: Empty";
}
