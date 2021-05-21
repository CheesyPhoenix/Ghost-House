Clear();

state = "NewGame";

function Intro() {
	updateEffects();
	if (state == "NewGame") {
		statusEffect = "None";
		state = "Intro";
		setTimeout(() => {
			state = "Starting";
		}, 1000);
		score = 0;
		health = 3;
		healthText.innerText = "Health: " + health;
		scoreText.innerText = "Score: " + score;
		for (let i = 0; i < 3; i++) {
			inventory[i] = new Item("empty", 0, "empty", 0);
		}
		Clear();
		line1.innerText = "Welcome to ghost house!";
		line2.innerText =
			"This is a dangerous place filled with monsters, ghosts and other scary creatures";
		line3.innerText =
			"If you were to encounter one of these creatures you may not return alive";
		line4.innerText = "Enter at your own risk by pressing button 1, 2 or 3";
	} else {
		console.warn("func. 'Intro' was called, but state != 'NewGame'");
		return;
	}
}
Intro();

function Button1() {
	if (state == "Starting") {
		PickADoor();
	} else if (state == "PickADoor") {
		EnterDoor(1);
	} else if (state == "NewGame") {
		Intro();
	} else if (state == "NewRoom") {
		SelectRoom();
	} else if (state == "ChestRoom") {
		OpenChest();
	} else if (state == "Swap") {
		SwapSelect();
	} else if (state == "Swapping") {
		Swap(0);
	} else if (state == "InInv") {
		UseItem(0);
	} else if (state == "TradingHall") {
		Trade();
	} else if (state == "BossRoom") {
		AttackBoss();
	} else if (state == "AttackBoss") {
		AttackBoss();
	} else if (state == "Trade") {
		completeTrade(1);
	}
}
function Button2() {
	if (state == "Starting") {
		PickADoor();
	} else if (state == "PickADoor") {
		EnterDoor(2);
	} else if (state == "NewGame") {
		Intro();
	} else if (state == "NewRoom") {
		SelectRoom();
	} else if (state == "Swapping") {
		Swap(1);
	} else if (state == "InInv") {
		UseItem(1);
	} else if (state == "TradingHall") {
		PickPocket();
	} else if (state == "Trade") {
		completeTrade(2);
	} else if (state == "BossRoom") {
		Run_Boss();
	}
}
function Button3() {
	if (state == "Starting") {
		PickADoor();
	} else if (state == "PickADoor") {
		EnterDoor(3);
	} else if (state == "NewGame") {
		Intro();
	} else if (state == "NewRoom") {
		SelectRoom();
	} else if (state == "ChestRoom") {
		NewRoom();
	} else if (state == "Swap") {
		NewRoom();
	} else if (state == "Swapping") {
		Swap(2);
	} else if (state == "InInv") {
		UseItem(2);
	} else if (state == "TradingHall") {
		NextRoom_TradingHall();
	} else if (state == "Trade") {
		NewRoom();
	} else if (state == "BossRoom") {
		SneakPastBoss();
	}
}

function OpenInventory() {
	if (state == "InInv") {
		CloseInventory();
		return;
	}
	if (state != "NewRoom" && state != "Trade") return;
	_line1 = line1.innerText;
	_line2 = line2.innerText;
	_line3 = line3.innerText;
	_line4 = line4.innerText;
	_state = state;
	_tooltip = tooltip.innerText;

	Clear();
	NewState("InInv");
	//////////////////

	line1.innerText = "Your inventory:";
	line2.innerHTML = `Slot 1: ${inventory[0].name} - ${inventory[0].amount}`;
	line3.innerText = `Slot 2: ${inventory[1].name} - ${inventory[1].amount}`;
	line4.innerText = `Slot 3: ${inventory[2].name} - ${inventory[2].amount}`;
	tooltip.innerText =
		"To use the items press the corresponding buttons, or press 'Inventory' to exit";
}
function UpdateInventory() {
	Clear();
	//////////////////
	state = "InInv";

	line1.innerText = "Your inventory:";
	line2.innerHTML = `Slot 1: ${inventory[0].name} - ${inventory[0].amount}`;
	line3.innerText = `Slot 2: ${inventory[1].name} - ${inventory[1].amount}`;
	line4.innerText = `Slot 3: ${inventory[2].name} - ${inventory[2].amount}`;
	tooltip.innerText =
		"To use the items press the corresponding buttons, or press 'Inventory' to exit";
}

function CloseInventory() {
	line1.innerText = _line1;
	line2.innerText = _line2;
	line3.innerText = _line3;
	line4.innerText = _line4;
	NewState(_state);
	tooltip.innerText = _tooltip;
}

function Clear() {
	line1.innerText = "";
	line2.innerText = "";
	line3.innerText = "";
	line4.innerText = "";
	tooltip.innerText = "";
}

function PickADoor() {
	state = "Delay";
	setTimeout(() => {
		state = "PickADoor";
	}, 1000);
	Clear();

	line1.innerText = "You enter the ghost house and approach 3 doors";
	line2.innerText =
		"Pick one by pressing 1, 2 or 3, but be careful, there might be a ghost hiding in one of these doors...";
}

function EnterDoor(num) {
	state = "EnterDoor";
	Clear();
	line1.innerText = `You enter door ${num.toString()}`;
	let ghostDoor = Math.floor(Math.random() * 3) + 1;
	if (ghostDoor != num) {
		line2.innerText = "You got through the door safely";
		NewRoom();
	} else if (ghostDoor == num) {
		line2.innerText = "The ghost was hiding behind that door";
		Damage(line3, 1);
		if (health <= 0) {
			GameOver();
		}
		NewRoom();
	}
}

function Damage(line, num) {
	if (statusEffect == "Evasion" && Math.floor(Math.random()) == 1) {
		line.innerText = `However, you, evaded the attack and took no damage, you now have ${health} health`;
		healthText.innerText = "Health: " + health;
		return;
	}
	health -= num;
	line.innerText = `You took ${num.toString()} damage, you now have ${health} health`;
	healthText.innerText = "Health: " + health;
}

function NewRoom() {
	state = "Delay";
	setTimeout(() => {
		state = "NewRoom";
	}, 1000);
	score++;
	statusTimer--;
	if (statusTimer <= 0) {
		statusEffect = "None";
	}
	updateEffects();
	scoreText.innerText = "Score: " + score;
	tooltip.innerText =
		"You may now use any item(s) from your inventory, or continue by pressing 1, 2 or 3";
}

function UseItem(itemSlot) {
	if (inventory[itemSlot].type == "empty") return;
	if (inventory[itemSlot].type == "Health") {
		health += inventory[itemSlot].effect;
		healthText.innerText = "Health: " + health;

		if (health <= 0) {
			GameOver();
		}
	} else if (inventory[itemSlot].type == "Luck") {
		roomWeights[1] += inventory[itemSlot].effect;
		CalculateRoomWeights();
	} else if (inventory[itemSlot].type == "Score Multiplier") {
		score *= inventory[itemSlot].effect;
		scoreText.innerText = "Score: " + score;
	} else if (inventory[itemSlot].type == "EvasionStatusEf") {
		console.log("evasion");
		statusEffect = "Evasion";
		statusTimer = inventory[itemSlot].effect;
		updateEffects();
	} else if (inventory[itemSlot].type == "Weapon") {
	}
	inventory[itemSlot].remove(1);
	if (inventory[itemSlot].amount <= 0) {
		inventory[itemSlot] = new Item("empty", 0, "empty", 0);
	}
	UpdateInventory();
}

function GameOver() {
	state = "GameOver";
	setTimeout(() => {
		Clear();
		line1.innerText = "You have suffered to much damage and died";
		line2.innerText = "Your score was: " + score.toString();
		tooltip.innerText = "To start a new game, press button 1, 2 or 3";
		state = "Delay";
		setTimeout(() => {
			state = "NewGame";
		}, 1000);
	}, 1000);
}

function SelectRoom() {
	CalculateRoomWeights();
	let room =
		weightedRoomTypes[Math.floor(Math.random() * weightedRoomTypes.length)];
	if (room == "Normal") {
		PickADoor();
	} else if (room == "ChestRoom") {
		ChestRoom();
	} else if (room == "TradingHall") {
		TradingHall();
	} else if (room == "BossRoom") {
		BossRoom();
	}
}

function updateEffects() {
	if (statusEffect == "None") {
		effectText.innerText = "Effect: None";
		return;
	}
	effectText.innerText =
		"Effect: " + statusEffect + ": " + statusTimer + " turns remaining";
}

function GiveItem(item, line, rtrnState) {
	let itemAdded = false;
	_line1 = line1.innerText;
	_line2 = line2.innerText;
	_line3 = line3.innerText;
	_line4 = line4.innerText;
	_tooltip = tooltip.innerText;
	returnState = rtrnState;

	for (let i = 0; i < inventory.length; i++) {
		if (inventory[i].name == item.name) {
			inventory[i].amount += item.amount;
			itemAdded = true;
		}
	}

	if (itemAdded) {
		line.innerText = "The item  was added to your inventory";
		setTimeout(() => {
			line1.innerText = _line1;
			line2.innerText = _line2;
			line3.innerText = _line3;
			line4.innerText = _line4;
			tooltip.innerText = _tooltip;
			state = returnState;
		}, 1000);
	} else {
		for (let i = 0; i < inventory.length; i++) {
			if (inventory[i].name == "empty" && !itemAdded) {
				inventory[i] = foundItem;
				itemAdded = true;
			}
		}
		if (itemAdded) {
			line.innerText = "The item  was added to your inventory";
			setTimeout(() => {
				line1.innerText = _line1;
				line2.innerText = _line2;
				line3.innerText = _line3;
				line4.innerText = _line4;
				tooltip.innerText = _tooltip;
				state = returnState;
			}, 1000);
		} else {
			state = "Swap";
			line.innerText =
				"Your inventory is full. Want to swap with another item?";
			tooltip.innerText = "Press 1 to swap, Press 3 to cancel";
		}
	}
}

function SwapSelect() {
	state = "Swapping";

	Clear();
	line1.innerText = "Your inventory:";
	line2.innerHTML = `Slot 1: ${inventory[0].name} - ${inventory[0].amount}`;
	line3.innerText = `Slot 2: ${inventory[1].name} - ${inventory[1].amount}`;
	line4.innerText = `Slot 3: ${inventory[2].name} - ${inventory[2].amount}`;
	tooltip.innerText = "Select item to swap: 1, 2 or 3";
}

function Swap(num) {
	inventory[num] = foundItem;
	foundItem = new Item("empty", 0, "empty", 0);
	Clear();
	line1.innerText = `Swapped with slot ${num.toString()}`;
	setTimeout(() => {
		line1.innerText = _line1;
		line2.innerText = _line2;
		line3.innerText = _line3;
		line4.innerText = _line4;
		tooltip.innerText = _tooltip;
		state = returnState;
	}, 1000);
}

function NewState(newState) {
	state = "Delay";
	setTimeout(() => {
		state = newState;
	}, 1000);
}
