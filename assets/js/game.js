var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 1000;
var playerMoney = 10;

// Game States
// "WIN" - Player robot has defeated all enemy robots
// * Fight all enemy robots
// * Defeat each enemy robot
// "LOSE" - Player robot's health is zero or less

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var promptFight = window.prompt("Would you like to Fight or Skip this battle? Enter 'FIGHT' or 'SKIP' to choose.");
console.log(promptFight);

var fight = function(enemyName) {
 //fight function statements
 //repeat and execute as long as the enemy robot is alive
 while(enemyHealth > 0 && playerHealth > 0){
// Alert users that they are starting the round





//Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
enemyHealth = enemyHealth - playerAttack;

// Log a resulting message to the console so we know that it worked.
console.log(
playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
);
    
// Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
// playerHealth = playerHealth - enemyAttack;

// Log a resulting message to the console so we know that it worked.
console.log (
    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
);
// if player choses to fight, then fight
if (promptFight === "fight" || promptFight === "FIGHT") {
    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );
    
// check enemy's health
if (enemyHealth <= 0) {
  window.alert(enemyName + " has died!");
  break;
} 
else {
  window.alert(enemyName + " still has " + enemyHealth + " health left.");
}

// remove player's health by subtracting the amount set in the enemyAttack variable
playerHealth = playerHealth - enemyAttack;
console.log(
  enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
);

// check player's health
if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
    break;
  } 
  else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
  }
    // if player choses to skip
} else if (promptFight === "skip" || promptFight === "SKIP") {
  // confirm user wants to skip
  var confirmSkip = window.confirm("Are you sure you'd like to quit?");

  // if yes (true), leave fight
  if (confirmSkip) {
    window.alert(playerName + " has decided to skip this fight. Goodbye!");
    // subtract money from playerMoney for skipping
    playerMoney = playerMoney - 2;
  }
  // if no (false), ask question again by running fight() again
  else {
    fight();
  }
} else {
    window.alert("You need to pick a valid option. Try again!");
}
}
};
for(var i = 0; i < enemyNames.length; i++) {
  var pickedEnemyName = enemyNames[i];
  enemyHealth = 50;
  // call fight function with enemy robot
  fight(pickedEnemyName);
  //debugger;
}
