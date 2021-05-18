function TradingHall() {
	NewState("TradingHall");
	Clear();

	line1.innerText =
		"You enter a grand hall, over at the counter you see a suspicious goblin, he wants to trade! ";
	line2.innerText =
		"Hmm, You might want to trade with me kind sir. (You can 1 trade, 2 steal from him, or 3 just leave ";
	tooltip.innerText =
		"Press 1, to trade with him, press 2, to try to pickpocket him or press 3, to go to the next room ";
}

function Trade() {
	Clear();
	NewState("TradeMenu");

	GenerateItems();
	foundItem =
		weightedItemTypes[Math.floor(Math.random() * weightedItemTypes.length)];
	line1.innerText = "The goblin offers you " + foundItem;

	foundItem2 =
		weightedItemTypes[Math.floor(Math.random() * weightedItemTypes.length)];
	line2.innerText =
		"Would you like to trade it for either a " +
		foundItem2 +
		" or a Gold Coin?";

	tooltip.innerText =
		"Press 1 to trade for " +
		foundItem2 +
		", press 2 to trade for a Gold Coin, Press 3 to Proceed to the next room";

	// legg til dette i buttons
}

function PickPocket() {
	Clear();
}

function NextRoom_TradingHall() {
	Clear();
	line1.innerText = "You proceeded to the next room";

	NewRoom();
}
