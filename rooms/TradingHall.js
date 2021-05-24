function TradingHall() {
	NewState("TradingHall");
	Clear();

	line1.innerText =
		"You enter a grand hall, you see a handsome goblin at the other side of the room. He wants to trade!";
	line2.innerText = "Hmm, You might want to trade with me kind sir.";
	line3.innerText = "(You can 1 trade, 2 steal from him or 3 just leave)";
	tooltip.innerText =
		"Press 1, to trade with him. Press 2, to try to pickpocket him. Press 3, to proceed to the next room ";
}

function Trade() {
	Clear();
	NewState("Trade");

	GenerateItems();
	GenerateLootTables();
	foundItem = weightedLootTable_Rare[RandInt(0, weightedLootTable_Rare.length - 1)];
	line1.innerText = "The goblin offers you a(n) " + foundItem.name;

	for (
		foundItem2 = weightedItemTypes[RandInt(0, weightedItemTypes.length - 1)];
		temp == foundItem;
		temp = weightedItemTypes[RandInt(0, weightedItemTypes.length - 1)]
	) {}
	//foundItem2 = weightedItemTypes[RandInt(0, weightedItemTypes.length - 1)];
	line2.innerText =
		"Would you like to trade it for either a(n) " +
		foundItem2.name +
		" or a Gold Coin?";

	tooltip.innerText =
		"Press 1 to trade for a(n) " +
		foundItem2.name +
		", press 2 to trade for a Gold Coin, Press 3 to Proceed to the next room";
}
function completeTrade(num) {
	Clear();
	NewState("completeTrade");

	if (num == 1 && Inventory_CheckForName(foundItem2.name, false)) {
		line1.innerText =
			"You decided to trade a(n) " +
			foundItem2.name +
			" for a(n) " +
			foundItem.name;

		Inventory_CheckForName(foundItem2.name).remove(1);
		if (Inventory_CheckForName(foundItem2.name).amount <= 0) {
			Inventory_CheckForName(foundItem2.name, true) = new Item(
				"empty",
				0,
				"empty",
				0
			);
		}
		GiveItem(foundItem, "completeTrade");
		NewRoom();
	} else if (
		////hvit skjerm
		num == 2 &&
		Inventory_CheckForName("GoldCoin", false)
	) {
		line1.innerText =
			"You decided to trade a Gold Coin for a(n) " + foundItem.name;

		Inventory_CheckForName("GoldCoin", true).remove(1);
		if (Inventory_CheckForName("GoldCoin", true).amount <= 0) {
			Inventory_CheckForName("GoldCoin", true) = new Item(
				"empty",
				0,
				"empty",
				0
			);
		}
		GiveItem(foundItem, "completeTrade");
		NewRoom();
	} else if (num == 1 && !Inventory_CheckForName(foundItem2.name, false)) {
		line1.innerText =
			"The goblin got offended by you not having that item, he sends you to the next room.";
		NewRoom();
	} else if (num == 2 && !Inventory_CheckForName("GoldCoin", false)) {
		line1.innerText =
			"The goblin got offended by you not having a Gold Coin, he sends you to the next room.";
		NewRoom();
	} else {
		console.error("TradingHall: 0, continuing to new room");
		NewRoom();
	}
}

function PickPocket() {
	Clear();
	// legg til noe
	NewRoom();
}

function NextRoom_TradingHall() {
	Clear();
	line1.innerText = "You proceeded to the next room";

	NewRoom();
}
