class Item {
	constructor(name, amount, type, effect, weight) {
		this.name = name;
		this.amount = amount;
		this.type = type;
		this.effect = effect;
		this.weight = weight;
	}

	remove(amount) {
		this.amount -= amount;
	}
}
