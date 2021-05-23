function Button1() {
	switch (state) {
		case "Starting":
			PickADoor();
			break;
		case "PickADoor":
			EnterDoor(1);
			break;
		case "NewGame":
			Intro();
			break;
		case "NewRoom":
			SelectRoom();
			break;
		case "ChestRoom":
			OpenChest();
			break;
		case "Swap":
			SwapSelect();
			break;
		case "Swapping":
			Swap(0);
			break;
		case "InInv":
			UseItem(0);
			break;
		case "TradingHall":
			Trade();
			break;
		case "BossRoom":
			AttackBoss();
			break;
		case "AttackBoss":
			AttackBoss();
			break;
		case "Trade":
			completeTrade(1);
			break;
		case "EnterCasino":
			Gamble();
			break;
		case "Gamble":
			PerformGamble(1);
			break;
		case "PerformGamble":
			ReGamble();
	}
}
function Button2() {
	switch (state) {
		case "Starting":
			PickADoor();
			break;
		case "PickADoor":
			EnterDoor(2);
			break;
		case "NewGame":
			Intro();
			break;
		case "NewRoom":
			SelectRoom();
			break;
		case "Swapping":
			Swap(1);
			break;
		case "InInv":
			UseItem(1);
			break;
		case "TradingHall":
			PickPocket();
			break;
		case "BossRoom" || "AttackBoss":
			Run_Boss();
			break;
		case "Trade":
			completeTrade(2);
			break;
		case "Gamble":
			PerformGamble(10);
			break;
	}
}
function Button3() {
	switch (state) {
		case "Starting":
			PickADoor();
			break;
		case "PickADoor":
			EnterDoor(3);
			break;
		case "NewGame":
			Intro();
			break;
		case "NewRoom":
			SelectRoom();
			break;
		case "ChestRoom":
			NewRoom();
			break;
		case "Swap":
			NewRoom();
			break;
		case "Swapping":
			Swap(2);
			break;
		case "InInv":
			UseItem(2);
			break;
		case "TradingHall":
			NextRoom_TradingHall();
			break;
		case "BossRoom" || "AttackBoss":
			SneakPastBoss();
			break;
		case "Trade":
			NewRoom();
			break;
		case "EnterCasino":
			Continue_Casino();
			break;
		case "Gamble":
			PerformGamble(Math.max(Math.round(score / 2), 1));
			break;
		case "PerformGamble":
			Leave_Casino();
	}
}
