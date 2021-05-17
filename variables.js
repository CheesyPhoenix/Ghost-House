let line1 = document.getElementById("MainLn1");
let line2 = document.getElementById("MainLn2");
let line3 = document.getElementById("MainLn3");
let line4 = document.getElementById("MainLn4");
let tooltip = document.getElementById("Tooltip");
let scoreText = document.getElementById("Score");
let healthText = document.getElementById("Health");
let _line2;
let _line1;
let _line4;
let _line3;
let _state;
let _tooltip;
let inventory = [];
let health = 3;
let empty = new Item("empty", 0, "empty", 0);
let statusEffect = "None";
let score = 0;
let state = "NewGame";
let roomTypes = ["Normal", "ChestRoom"];
let roomWeights = [5, 1];
let weightedRoomTypes = [];

function CalculateRoomWeights() {
	weightedRoomTypes = [];
	for (let i = 0; i < roomTypes.length; i++) {
		for (let x = 0; x < roomWeights[i]; x++) {
			weightedRoomTypes.push(roomTypes[i]);
		}
	}
}

let itemTypes = [];
let weightedItemTypes = [];
let foundItem;

function GenerateItems() {
	itemTypes = [
		new Item("HealthUp", 1, "Health", 5, 5),
		new Item("Mysterious Potion", 1, "Health", -2, 5),
		new Item("Lucky four-leaf clover", 1, "Luck", 2, 4),
		new Item("Point Doubler", 1, "Score Multiplier", 2, 2),
		new Item("Point Tripler", 1, "Score Multiplier", 3, 1),
	];
	weightedItemTypes = [];
	for (let i = 0; i < itemTypes.length; i++) {
		for (let x = 0; x < itemTypes[i].weight; x++) {
			weightedItemTypes.push(itemTypes[i]);
		}
	}
}
GenerateItems();
