class Item{
    constructor(name, amount, type, effect){
        this.name = name;
        this.amount = amount;
        this.type = type;
        this.effect = effect;
    }

    getName() {
        return this.name;
    }
    getAmount(){
        return this.amount;
    }
    getType(){
        return this.type;
    }
    getEffect(){
        return this.effect;
    }

    remove(amount){
        this.amount -= amount;
    }
}