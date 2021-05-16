line1 = document.getElementById("MainLn1");
line2 = document.getElementById("MainLn2");
line3 = document.getElementById("MainLn3");
line4 = document.getElementById("MainLn4");
tooltip = document.getElementById("Tooltip");
_line2;
_line1;
_line4;
_line3;
_state;
inventory = [];
health = 3;
empty = new Item("empty", 0, "empty", 0);
statusEffect = "None";
score = 0;



Clear();

state = "NewGame";


function Intro(){
    if(state == "NewGame"){
        state = "Intro";
        setTimeout(() => {
            state = "Starting";
        }, 3000);
        score = 0;
        health = 3;
        healthText.innerText = "Health: " + health;
        scoreText.innerText = "Score: " + score;
        for(let i = 0; i < 3; i++){
            inventory[i] = new Item("empty", 0, "empty", 0);
        }
        Clear();
        line1.innerText = "Welcome to ghost house!";
        line2.innerText = "This is a dangerous place filled with monsters, ghosts and other scary creatures";
        line3.innerText = "If you were to encounter one of these creatures you may not return alive";
        line4.innerText = "Enter at your own risk by pressing button 1, 2 or 3";
    }
    else{
        console.warn("func. 'Intro' was called, but state != 'NewGame'");
        return;
    }
}
Intro();

function Button1(){
    if(state == "Starting"){
        PickADoor();
    }
    else if(state == "PickADoor"){
        EnterDoor(1);
    }
    else if(state == "NewGame"){
        Intro();
    }
    else if(state == "NewRoom"){
        SelectRoom();
    }
    else if(state == "ChestRoom"){
        OpenChest();
    }
    else if(state == "Swap"){
        SwapSelect_Chest();
    }
    else if(state == "Swapping"){
        Swap_Chest(0);
    }
    else if(state == "InInv"){
        UseItem(0);
    }
}
function Button2(){
    if(state == "Starting"){
        PickADoor();
    }
    else if(state == "PickADoor"){
        EnterDoor(2);
    }
    else if(state == "NewGame"){
        Intro();
    }
    else if(state == "NewRoom"){
        SelectRoom();
    }
    else if(state == "Swapping"){
        Swap_Chest(1);
    }
    else if(state == "InInv"){
        UseItem(1);
    }
}
function Button3(){
    if(state == "Starting"){
        PickADoor();
    }
    else if(state == "PickADoor"){
        EnterDoor(3);
    }
    else if(state == "NewGame"){
        Intro();
    }
    else if(state == "NewRoom"){
        SelectRoom();
    }
    else if(state == "ChestRoom"){
        NewRoom();
    }
    else if(state == "Swap"){
        NewRoom();
    }
    else if(state == "Swapping"){
        Swap_Chest(2);
    }
    else if(state == "InInv"){
        UseItem(2);
    }
}

function OpenInventory(){
    if(state == "InInv") {CloseInventory(); return;}
    if(state != "NewRoom") return;
    _line1 = line1.innerText;
    _line2 = line2.innerText;
    _line3 = line3.innerText;
    _line4 = line4.innerText;
    _state = state;
    _tooltip = tooltip.innerText;

    Clear();
    //////////////////
    state = "Delay";
    setTimeout(() => {
        state = "InInv";
    }, 1500);

    line1.innerText = "Your inventory:";
    line2.innerHTML = `Slot 1: ${inventory[0].getName()} - ${inventory[0].getAmount()}`;
    line3.innerText = `Slot 2: ${inventory[1].getName()} - ${inventory[1].getAmount()}`;
    line4.innerText = `Slot 3: ${inventory[2].getName()} - ${inventory[2].getAmount()}`;
    tooltip.innerText = "To use the items press the corresponding buttons, or press 'Inventory' to exit";
}
function UpdateInventory(){
    Clear();
    //////////////////
    state = "InInv";

    line1.innerText = "Your inventory:";
    line2.innerHTML = `Slot 1: ${inventory[0].getName()} - ${inventory[0].getAmount()}`;
    line3.innerText = `Slot 2: ${inventory[1].getName()} - ${inventory[1].getAmount()}`;
    line4.innerText = `Slot 3: ${inventory[2].getName()} - ${inventory[2].getAmount()}`;
    tooltip.innerText = "To use the items press the corresponding buttons, or press 'Inventory' to exit";

}

function CloseInventory(){
    line1.innerText = _line1;
    line2.innerText = _line2;
    line3.innerText = _line3;
    line4.innerText = _line4;
    state = _state;
    tooltip.innerText = _tooltip;
}

function Clear(){
    line1.innerText = "";
    line2.innerText = "";
    line3.innerText = "";
    line4.innerText = "";
    tooltip.innerText = "";
}

function PickADoor(){
    state = "Delay";
    setTimeout(() => {
        state = "PickADoor";
    }, 1500);
    Clear();

    line1.innerText = "You enter the ghost house and approach 3 doors";
    line2.innerText = "Pick one by pressing 1, 2 or 3, but be careful, there might be a ghost hiding in one of these doors..."
}

function EnterDoor(num){
    state = "EnterDoor";
    Clear();
    line1.innerText = `You enter door ${num.toString()}`
    let ghostDoor = Math.floor(Math.random() * 3) + 1
    if(ghostDoor != num){
        line2.innerText = "You got through the door safely";
        NewRoom();
    }
    else if(ghostDoor == num){
        line2.innerText = "The ghost was hiding behind that door";
        Damage(line3, 1);
        if (health <= 0){
            GameOver();
        }
        NewRoom();
    }
}

function Damage(line, num){
    health -= num;
    line.innerText = `You took ${num.toString()} damage, you now have ${health} health`;
    healthText.innerText = "Health: " + health;
}

function NewRoom(){
    state = "Delay";
    setTimeout(() => {
        state = "NewRoom";
    }, 1500);
    score++;
    scoreText.innerText = "Score: " + score;
    tooltip.innerText = "You may now use any item(s) from your inventory, or continue by pressing 1, 2 or 3";
}

function UseItem(itemSlot) {
    if(inventory[itemSlot].type == "empty") return;
    if(inventory[itemSlot].type == "Health"){
        health += inventory[itemSlot].effect;
        healthText.innerText = "Health: " + health;

        if (health <= 0){
            GameOver();
        }
    }

    inventory[itemSlot].remove(1);
    if(inventory[itemSlot].getAmount() <= 0){
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
        state = "Delay"
        setTimeout(() => {
            state = "NewGame";
        }, 1500);
    }, 2000);
}

function SelectRoom() {
    let room = weightedRoomTypes[Math.floor(Math.random() * weightedRoomTypes.length)];
    if(room == "Normal"){
        PickADoor();
    }
    else if(room == "ChestRoom"){
        ChestRoom();
    }
}