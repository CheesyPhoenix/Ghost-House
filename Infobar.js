function UpdateInfobar() {
	scoreText.innerText = "Score: " + score;
	healthText.innerText = "Health: " + health;
	updateEffects();
	handText.innerText = "Hand: " + hand.name;
}
