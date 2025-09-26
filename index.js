///const chalk = require('chalk');
//
//const readlineSync = require("readline-sync");
/*function print_letter_by_letter(text) {
   let i = 0;
   function printNextletter () {
      if (i < text.length) {
         process.stdout.write(text[i]);
         i++;
         setTimeout(printNextletter, 50);
      }
   }
   printNextletter()
}*/
/*function print_letter_by_letter(text){
   for (i=0; i<= text.length; i++) {
      process.stdout.write(text[i]);
   }
   console.log();
}
*/
// const readlineSync = require("readline-sync");

function Intro_Message() {
   let dash =
      "--------------------------------------------------------------------------------";
   let intro = `${dash}
   🌊 Journey to the Sunken City 🌊
   ${dash}
   Welcome Traveler,\n`;
   console.log(intro);
   //print_letter_by_letter(intro);
   const readlineSync = require("readline-sync");
   let username = readlineSync.question("What is your name? ");
   if (/[0-9]/.test(username)) {
      console.log("Invalid username. Your name should not contain numbers.");
      return;
   }

   //INTRODUCTION
   let intro_message = `The tides have pulled you to a place of myth and ruin, ${username},
A forgotten city sleeping beneath the waves.

The air is thick with salt and the whispers of a drowned past.

But beware: not all that glitters is gold, and the safest path is not always the best.

Every choice you make will echo in the deep.

Your journey begins now…

Will you find fortune or be swallowed by the abyss?`;
   //print_letter_by_letter(intro_message);
   console.log(intro_message);
   PART1(dash, username, readlineSync);
}
Intro_Message();
//PART 1

function PART1(dash, username, readlineSync) {
   let intro_message_1 = `${dash}
💡 Part 1: The Drowned Lighthouse 💡
${dash}

You stagger up the shore and into the ruined lighthouse, its beacon long since extinguished. Barnacles 🐚 and coral 🪸 creep across the stone.

Inside the rubble, you spot two things:
    
A) A coral-crusted lantern 💡 (seems useful, “safe”).
B) A waterlogged journal 📜 (fragile, “risky”).

The choice is yours, ${username}.`;
   //print_letter_by_letter(intro_message_1);
   console.log(intro_message_1);
   let answer = readlineSync.question(
      "What do you take with you on this journey into the unknown? 👹👹👹 "
   );

   if (answer === "A") {
      let intro_A = `You choose the **Lantern**, is it the right choice?
        
        You lift the coral-crusted lantern. Its light is faint but steady, promising guidance. 
        Under you see see two things:

    🔹 a: A staircase. That moves somewhere climbe the stairs.
    🔹 b: leave with the lantern.`;
      //print_letter_by_letter(intro_A);
      console.log(intro_A);
      let key = readlineSync.question(
         "What is your next choice, traveler? (a/b).👹👹👹 "
      );
      try {
         switch (key) {
            case "a":
               let case_a_message = `“Stone cracks, water roars, and the sea takes you. The lighthouse becomes your tomb.”
            ${dash}
         GAME OVER 💀 💀 💀 💀
         ${dash}`;
               //print_letter_by_letter(case_a_message);
               console.log(case_a_message);
               break;
            case "b":
               let case_b_message = `You carry it carefully, nursing its faint glow. The fragile light steadies you, guiding your path. You survive.

            You get to move to the 2nd stage The Sunken Marshes`;
               //print_letter_by_letter(case_b_message);
               console.log(case_b_message);
               // WELCOME TO STAGE 2
               //call stage 2 function
               PART2(dash, username, readlineSync);

               break;
            default:
               throw new Error("Invalid input, please try again.");
         }
      } catch (error) {
         console.log(error.message);
      }
   } else if (answer === "B") {
      let intro_B = `You choose the **journal**, is it the right choice? 

         🔹 a: You see a map. tear it out.
         🔹 b: You keep it intact and study its strange writing.
         `;
      console.log(intro_B);
      let key = readlineSync.question(
         "What is your next choice, traveler? (a/b).👹👹👹 "
      );
      try {
         switch (key) {
            case "a":
               let case_a_message = `You tear out the map and pocket it. The ink smudges, nearly ruined — but enough remains to guide you.

               You survive. You get to move to the 2nd stage The Sunken Marshes`;
               //print_letter_by_letter(case_a_message);
               console.log(case_a_message);
               // WELCOME TO STAGE 2
               // call stage 2 function
               PART2(dash, username, readlineSync);
               break;
            case "b":
               let case_b_message = `You keep it intact and study its strange writing. At night, whispers crawl from the pages.
               Distracted, you stumble into the surf and vanish beneath the waves.
               ${dash}

               GAME OVER 💀 💀 💀 💀.

               ${dash}`;
               //print_letter_by_letter(case_b_message);
               console.log(case_b_message);
               break;
            default:
               throw new Error("Invalid input, please try again.");
         }
      } catch (error) {
         console.log(error.message);
      }
   } else {
      console.log("START AGAIN");
   }
}

function PART2(dash, username, readlineSync) {
   // WELCOME TO STAGE 2
   let intro_message_1 = `Welcome to stage 2
            ${dash}
            🌿 Part 2: The Sunken Marshes 🌿
            ${dash}

            You've overcome the first trial, but the sea demands more. A new peril stretches before you: a vast, drowned marsh. The mist hangs thick and heavy, and the air is filled with the scent of rot and decay. The way forward splits in two. To your left, a rotting boardwalk vanishes into the fog—a dangerous-looking path that promises both risk and reward. To your right, a winding coral trail skirts the edge of the marsh—a seemingly safer route, but what sharp secrets does it hide?

A) A rotting boardwalk sinking into mist (looks dangerous, “risky”).
B) A coral trail skirting the marsh’s edge (looks safer, “safe”).

The choice is yours once again, ${username}.
               `;
   console.log(intro_message_1);
   let answer = readlineSync.question(
      "What do you take with you on this journey into the unknown? 👹👹👹"
   );

   //OPTION A

   if (answer === "A") {
      let intro_A = `You choose the **Boardwalk**, is it the right choice?
         
         🔹 a: You move cautiously,.
         🔹 b: You hurry ahead.
         `;
      console.log(intro_A);
      let key = readlineSync.question(
         "What is your next choice, traveler? (a/b).👹👹👹 "
      );
      try {
         switch (key) {
            case "a":
               let case_a_message = `You move cautiously, ignoring the glimmer in the water. Your patience pays off — you find a hidden shortcut and even recover a gold coin  💎.

            You survive and are rewarded.
            
            You get to move to the 🏛️ stage 3: The Gate of the Sunken City 🏛️`;
               console.log(case_a_message);
               break;
            case "b":
               let case_b_message = ` The wood splits, and the swamp swallows you whole. Silence follows your last gasp.
               ${dash}

               GAME OVER 💀 💀 💀 💀.

               ${dash}`;
               console.log(case_b_message);
               break;
            default:
               throw new Error("Invalid input, please try again.");
         }
      } catch (error) {
         console.log(error.message);
      }
   } else if (answer === "B") {
      let intro_B = `You choose the ** A coral trail**, is it the right choice?

         🔹 a: scrape leg by throne.
         🔹 b: Endure slow route.
         `;
      console.log(intro_B);
      let key = readlineSync.question(
         "What is your next choice, traveler? (a/b).👹👹👹 "
      );
      try {
         switch (key) {
            case "a":
               let case_a_message = `The path cuts and scrapes your skin, but you stagger through, bloodied but alive. You survive. ✅

            You get to move to the 🏛️ stage 3: The Gate of the Sunken City 🏛️`;
               console.log(case_a_message);
               break;
            case "b":
               let case_b_message = `The coral spikes your legs, releasing poison into your veins. You collapse, writhing, and fade into silence 
               ${dash}

               GAME OVER 💀 💀 💀 💀.

               ${dash}`;
               console.log(case_b_message);
               break;
            default:
               throw new Error("Invalid input, please try again.");
         }
      } catch (error) {
         console.log(error.message);
      }
   }
   ///END OF STAGE 2
}
