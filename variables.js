let line1 = document.getElementById("MainLn1");
let line2 = document.getElementById("MainLn2");
let line3 = document.getElementById("MainLn3");
let line4 = document.getElementById("MainLn4");
let tooltip = document.getElementById("Tooltip");
let scoreText = document.getElementById("Score");
let healthText = document.getElementById("Health");
let effectText = document.getElementById("Effect");
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
let statusTimer = 0;
let score = 0;
let state = "NewGame";
let roomTypes = ["Normal", "ChestRoom", "Rooom"];
let roomWeights = [5, 1, 2];
let weightedRoomTypes = [];
let hand = new Weapon("Hand", 1, 0);
let hasEncounteredBoss = false;
let bossHealth = 1000;
let bossDamage = 10;
let standardBossHealth = 20;
let returnState = "None";

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
let foundItem2;

function GenerateItems() {
	itemTypes = [
		new Item("HealthUp", 1, "Health", 5, 10),
		new Item("Mysterious Potion", 1, "Health", -2, 10),
		new Item("Lucky four-leaf clover", 1, "Luck", 2, 3),
		new Item("Point Doubler", 1, "Score Multiplier", 2, 4),
		new Item("Point Tripler", 1, "Score Multiplier", 3, 3),
		new Item("Evasion Gel", 1, "EvasionStatusEf", 5, 5),
		new Item("GoldCoin", 1, "Currency", 10, 2),
	];
	weightedItemTypes = [];
	for (let i = 0; i < itemTypes.length; i++) {
		for (let x = 0; x < itemTypes[i].weight; x++) {
			weightedItemTypes.push(itemTypes[i]);
		}
	}
}
GenerateItems();

let lootTable_Rare = [];
let lootTable_Epic = [];
let lootTable_Legendary = [];

let lootTable_Weapon_Rare = [];
let lootTable_Weapon_Epic = [];
let lootTable_Weapon_Legendary = [];

function GenerateLootTables() {
	lootTable_Rare = [
		new Item("HealthUp", 1, "Health", 5, 3),
		new Item("Mysterious Potion", 1, "Health", -2, 3),
		new Item("Lucky four-leaf clover", 1, "Luck", 2, 7),
		new Item("Point Doubler", 1, "Score Multiplier", 2, 7),
		new Item("Point Tripler", 1, "Score Multiplier", 3, 6),
		new Item("Evasion Gel", 1, "EvasionStatusEf", 5, 8),
		new Item("GoldCoin", 1, "Currency", 10, 5),
	];
	lootTable_Epic = [
		new Item("HealthUp", 1, "Health", 5, 1),
		new Item("Mysterious Potion", 1, "Health", -2, 1),
		new Item("Lucky four-leaf clover", 1, "Luck", 2, 15),
		new Item("Point Doubler", 1, "Score Multiplier", 2, 15),
		new Item("Point Tripler", 1, "Score Multiplier", 3, 14),
		new Item("Evasion Gel", 1, "EvasionStatusEf", 5, 15),
		new Item("GoldCoin", 1, "Currency", 10, 15),
	];
	lootTable_Legendary = [
		new Item("HealthUp", 1, "Health", 5, 0),
		new Item("Mysterious Potion", 1, "Health", -2, 0),
		new Item("Lucky four-leaf clover", 1, "Luck", 2, 10),
		new Item("Point Doubler", 1, "Score Multiplier", 2, 10),
		new Item("Point Tripler", 1, "Score Multiplier", 3, 20),
		new Item("Evasion Gel", 1, "EvasionStatusEf", 5, 15),
		new Item("GoldCoin", 1, "Currency", 10, 20),
	];
	lootTable_Weapon_Rare = [];
	lootTable_Weapon_Epic = [];
	lootTable_Weapon_Legendary = [];
}
