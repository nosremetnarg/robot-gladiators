var playerName = window.prompt("What is your robot's name?");

// Game States
// "WIN" - Player robot has defeated all enemy robots
//   * Fight all enemy robots
//   * Defeat each enemy robot
// "LOSE" - Player robot's health is zero or less

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 10;
var enemyAttack = 12;

startGame();

function fight(enemyName) {
  while(enemyHealth > 0 && playerHealth > 0){
    // ask user if they'd like to fight or run
    var promptFight = window.prompt("Would you like to Fight or Skip this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    // if user picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm user wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");
  
      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);
        break;
      }
    }
    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
     console.log (playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
     );
    // check enemy's health
      if (enemyHealth <= 0) {
       window.alert(enemyName + " has died!");

       // award player money for winning
       playerMoney = playerMoney + 20;

       // leave while () loop since enemy is dead
       break;
      } else {
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
      // leave while () loop if player is dead
       break;
      } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
      }
    }
  };
   // function to start a new game
  function startGame() {
   // reset player stats
  playerHealth = 100;
  playerAttack = 55;
  playerMoney = 10;
  // debugger;
  for(var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
  
      // pick new enemy to fight based on the index of the enemyNames array
      var pickedEnemyName = enemyNames[i];

      // reset enemyHealth before starting new fight
      enemyHealth = 50;

      // use debugger to pause script from running and check what's going on at the moment in the code
      // debugger;

      // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
      fight(pickedEnemyName);
      // if we're not at the last enemy in the array
      if (playerHealth > 0 && i < enemyNames.length - 1) {
        // ask if user wants to use the store before next round
        var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

          var shop = function() {
          // ask player what they'd like to do
          var shopOptionPrompt = window.prompt(
            "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
          );
          // if yes, take them to the store() function
          if (storeConfirm) {
         // use switch to carry out action
        switch (shopOptionPrompt) {
        case "refill": // new case
        case "REFILL":
          if (playerMoney >= 7) {
            window.alert("Refilling player's health by 20 for 7 dollars.");

            // increase health and decrease money
            playerHealth = playerHealth + 20;
             playerMoney = playerMoney - 7;
          } 
          else {
            window.alert("You don't have enough money!");
          }

        break;
        case "upgrade": // new case
        case "UPGRADE":
          if (playerMoney >= 7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars.");

            // increase attack and decrease money
            playerAttack = playerAttack + 6;
            playerMoney = playerMoney - 7;
          } 
          else {
            window.alert("You don't have enough money!");
          }

       break;
       case "leave": // new case
       case "LEAVE":
       window.alert("Leaving the store.");

       // do nothing, so function will end
        break;
       default:
        window.alert("You did not pick a valid option. Try again.");
        shop();
        break;
    }
         }
         }
          // if we're not at the last enemy in the array
          if (i < enemyNames.length - 1) {
          shop();
         } 

        } else {
         window.alert("You have lost your robot battle! Game Over!");
           break;
        }
      }   
        // play again
        endGame();
        // after the loop ends, player is either
      };
          // function to end the entire game
       function endGame() {
       // if player is still alive, player wins!
       if (playerHealth > 0 ) {
     window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
       }
     else {
     window.alert("You've lost your robot in battle.");
     }

      // ask player if they'd like to play again
      var playAgainConfirm = window.confirm("Would you like to play again?");
      if (playAgainConfirm) {
       // restart the game
       startGame();
      } else {
       window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    } 
  };// start the game when the page loads
};

// // use switch to carry out action
//     switch (shopOptionPrompt) {
//       case "refill":
//         if (playerMoney >= 7) {
//           window.alert("Refilling player's health by 20 for 7 dollars.");
      
//           // increase health and decrease money
//           playerHealth = playerHealth + 20;
//           playerMoney = playerMoney - 7;
//         }
//         else {
//           window.alert("You don't have enough money!");
//         }
      
//         break;
//         case "upgrade":
//         if (playerMoney >= 7) {
//           window.alert("Upgrading player's attack by 6 for 7 dollars.");
      
//          // increase attack and decrease money
//           playerAttack = playerAttack + 6;
//           playerMoney = playerMoney - 7;
//         }
//         else {
//           window.alert("You don't have enough money!");
//         }
//         break;
//         };
//       // function shop ();