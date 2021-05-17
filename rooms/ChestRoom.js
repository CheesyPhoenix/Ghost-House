function ChestRoom() {
	state = "ChestRoom";
	Clear();

	line1.innerText =
		"You approach an open room, in the middle there's a chest.";
	line2.innerText =
		"You may either, 1: open the chest, or 3: proceed to the next room";
	tooltip.innerText =
		"Press 1 to open chest, Press 3 to proceed to the next room without opening the chest";
}
function OpenChest() {
	let itemAdded = false;

	Clear();
	state = "OpenChest";

	line1.innerText = "You decided to open the chest";
	line2.innerText = "The chest contained an item";

	GenerateItems();
	foundItem =
		weightedItemTypes[Math.floor(Math.random() * weightedItemTypes.length)];

	line3.innerText = `You found a "${foundItem.name}"`;

	for (let i = 0; i < inventory.length; i++) {
		if (inventory[i].name == foundItem.name) {
			inventory[i].amount += foundItem.amount;
			itemAdded = true;
		}
	}

	if (itemAdded) {
		line4.innerText = "The item  was added to your inventory";
		setTimeout(() => {
			NewRoom();
		}, 3000);
	} else {
		for (let i = 0; i < inventory.length; i++) {
			if (inventory[i].name == "empty" && !itemAdded) {
				inventory[i] = foundItem;
				itemAdded = true;
			}
		}
		if (itemAdded) {
			line4.innerText = "The item  was added to your inventory";
			setTimeout(() => {
				NewRoom();
			}, 3000);
		} else {
			state = "Swap";
			line4.innerText =
				"Your inventory is full. Want to swap with another item?";
			tooltip.innerText = "Press 1 to swap, Press 3 to cancel";
		}
	}
}

function SwapSelect_Chest() {
	state = "Swapping";
	Clear();
	line1.innerText = "Your inventory:";
	line2.innerHTML = `Slot 1: ${inventory[0].name} - ${inventory[0].amount}`;
	line3.innerText = `Slot 2: ${inventory[1].name} - ${inventory[1].amount}`;
	line4.innerText = `Slot 3: ${inventory[2].name} - ${inventory[2].amount}`;
	tooltip.innerText = "Select item to swap: 1, 2 or 3";
}

function Swap_Chest(num) {
	inventory[num] = foundItem;
	foundItem = new Item("empty", 0, "empty", 0);
	Clear();
	line1.innerText = `Swapped with slot ${num.toString()}`;
	setTimeout(() => {
		NewRoom();
	}, 3000);
}
