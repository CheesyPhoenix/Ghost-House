function BossRoom() {
	Clear();

	state = "Delay";
	NewState("BossRoom");

	if (hasEncounteredBoss) {
	} else {
		bossHealth = standardBossHealth;
		line1.innerText =
			"The room you enter seems different from the others...";
		line2.innerText =
			"The room seems for a great distance but you cannot see how far because it's veiled in shadows";
		line3.innerText = "You see a silhouette of a large creature";
		line4.innerText = "What should you do?";
		tooltip.innerText = "1: Attack the creature  2: Run  3: Sneak past it";
	}
}
function AttackBoss() {
	NewState("AttackBoss");
	Clear();
	line1.innerText = "You decided to attack the boss";
	//TODO: this.
}
