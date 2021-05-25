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
	Clear();
	state = "OpenChest";

	line1.innerText = "You decided to open the chest";
	line2.innerText = "The chest contained an item";

	GenerateItems();
	foundItem = weightedItemTypes[RandInt(0, weightedItemTypes.length - 1)];

	line3.innerText = `You found a "${foundItem.name}"`;

	GiveItem(foundItem, line4, "OpenChest").then(NewRoom(), NewRoom());
}
