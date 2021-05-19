function BossRoom() {
	Clear();

	state = "Delay";
	NewState("BossRoom");

	if (hasEncounteredBoss) {
		line1.innerText = "You once again encounter the boss";
		line2.innerText = `It now has ${bossHealth} health remaining`;
		line3.innerText = "What do you want to do?";
		tooltip.innerText = "1: Attack the boss  2: Run  3: Sneak past it";
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
	bossHealth -= hand.damage;
	line2.innerText = `You hit the boss with your ${hand.name}, dealing ${hand.damage} damage`;
	if (bossHealth <= 0) {
		line3.innerText = "You managed to kill the boss";
		NewState("BossKilled");
		setTimeout(() => {
			BossReward();
		}, 1500);
	} else {
		line3.innerText = "The boss fought back";
		Damage(line4, bossDamage);
		tooltip.innerText =
			"You can now: 1: Attack the boss again  2: Run away  3: Try to sneak past the boss";
	}
}
function Run_Boss() {
	Clear();
	line1.innerText = "You ran from the boss";
	NewRoom();
}
function SneakPastBoss() {
	Clear();
	line1.innerText =
		"You sneaked past the boss, but the boss managed to get a swing at you";
	Damage(line2, bossDamage);
	score += 5;
	NewRoom();
}
function BossReward() {
	NewState("BossReward");
	Clear();
	line1.innerText =
		"You watch as the corpse of the large creature desintegrates into dust infornt of you";
	line2.innerText =
		"After the corpse has fully desintegrated a chest appears infornt of you";
	line3.innerText = "You open the chest";
}
