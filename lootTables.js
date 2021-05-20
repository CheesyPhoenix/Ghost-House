let lootTable_Rare = [];
let lootTable_Epic = [];
let lootTable_Legendary = [];
let weightedLootTable_Rare = [];
let weightedLootTable_Epic = [];
let weightedLootTable_Legendary = [];

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
		new Item("Evasion Gel", 1, "EvasionStatusEf", 10, 8),
		new Item("GoldCoin", 1, "Currency", 10, 5),
		new Item("Iron Broadsword", 1, "Weapon", 5, 7),
		new Item("Basilisk Tooth", 1, "Weapon", 5, 5),
		new Item("Sword of the Phoenix", 1, "Weapon", 20, 3),
	];
	weightedLootTable_Rare = [];
	for (let i = 0; i < lootTable_Rare.length; i++) {
		for (let x = 0; x < lootTable_Rare[i].weight; x++) {
			weightedLootTable_Rare.push(lootTable_Rare[i]);
		}
	}
	lootTable_Epic = [
		new Item("Lucky four-leaf clover", 1, "Luck", 2, 15),
		new Item("Point Tripler", 1, "Score Multiplier", 3, 14),
		new Item("Evasion Gel", 1, "EvasionStatusEf", 10, 15),
		new Item("GoldCoin", 1, "Currency", 10, 15),
		new Item("Basilisk Tooth", 1, "Weapon", 5, 10),
		new Item("Sword of the Phoenix", 1, "Weapon", 20, 7),
	];
	weightedLootTable_Epic = [];
	for (let i = 0; i < lootTable_Epic.length; i++) {
		for (let x = 0; x < lootTable_Epic[i].weight; x++) {
			weightedLootTable_Epic.push(lootTable_Epic[i]);
		}
	}
	lootTable_Legendary = [
		new Item("Lucky four-leaf clover", 1, "Luck", 2, 10),
		new Item("Point Tripler", 1, "Score Multiplier", 3, 12),
		new Item("Evasion Gel", 1, "EvasionStatusEf", 10, 10),
		new Item("GoldCoin", 1, "Currency", 10, 15),
		new Item("Basilisk Tooth", 1, "Weapon", 5, 15),
		new Item("Sword of the Phoenix", 1, "Weapon", 20, 110),
	];
	weightedLootTable_Legendary = [];
	for (let i = 0; i < lootTable_Legendary.length; i++) {
		for (let x = 0; x < lootTable_Legendary[i].weight; x++) {
			weightedLootTable_Legendary.push(lootTable_Legendary[i]);
		}
	}

	lootTable_Weapon_Rare = [];
	lootTable_Weapon_Epic = [];
	lootTable_Weapon_Legendary = [];
}
