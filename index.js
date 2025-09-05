///const chalk = require('chalk');

let dash =
   "--------------------------------------------------------------------------------";

console.log(dash + "\n" + "🌊 Journey to the Sunken City 🌊" + "\n" + dash);

console.log("Welcome Traveler,\n");
const readlineSync = require("readline-sync");
let username = readlineSync.question("What is your name? ");
if (/[0-9]/.test(username)) {
   console.log("Invalid username. Your name should not contain numbers.");
   return;
}
//console.log(username);
//console.log("The tides have pulled you to a place of myth and ruin $username , \n\n Aforgotten city sleeping beneath the waves.\n\n The air is thick with salt and the whispers of a drowned past. \n\n But beware: not all that glitters is gold, and the safest path is not always the best.\n\n Every choice you make will echo in the deep. \n\n Your journey begins now… \n\n Will you find fortune or be swallowed by the abyss?");
console.log(`The tides have pulled you to a place of myth and ruin, ${username},
A forgotten city sleeping beneath the waves.

The air is thick with salt and the whispers of a drowned past.

But beware: not all that glitters is gold, and the safest path is not always the best.

Every choice you make will echo in the deep.

Your journey begins now…

Will you find fortune or be swallowed by the abyss?`);

console.log(`${dash}
Part 1: The Drowned Lighthouse
${dash}`);

//sleep(1000);

console.log(`You stagger up the shore and into the ruined lighthouse, its beacon long since extinguished. Barnacles 🐚 and coral 🪸 creep across the stone.

Inside the rubble, you spot two things:
    
1) A coral-crusted lantern 💡 (seems useful, “safe”).
2) A waterlogged journal 📜 (fragile, “risky”).

The choice is yours, ${username}.`);
let answer = readlineSync.question(
   "What do you take with you on this journey into the unknown? 👹👹👹"
);

if (answer === "1") {
   console.log(`You choose the **Lantern**, is it the right choice?
        
        You lift the coral-crusted lantern. Its light is faint but steady, promising guidance. 
        Under you see see two things:

    🔹 a: A staircase. That moves somewhere climbe the stairs.
    🔹 b: leave with the lantern.`);
   let key = readlineSync.question(
      "What do you take with you on this jour journey into the unknown? 👹👹👹"
   );
   try {
      switch (key) {
         case "a":
            console.log(`“Stone cracks, water roars, and the sea takes you. The lighthouse becomes your tomb.”
            ${dash}
         GAME OVER
         ${dash}`);
            break;
         case "b":
            console.log(`You carry it carefully, nursing its faint glow. The fragile light steadies you, guiding your path. You survive.

            You get to move to the 2nd stage The Sunken Marshes`);
            break;
         default:
            throw new Error("Invalid input, please try again.");
      }
   } catch (error) {
      console.log(error.message);
   }
} else if (answer === "2") {
   console.log(`You choose the **journal**, is it the right choice? 

         🔹 a: You see a map. tear it out.
         🔹 b: You keep it intact and study its strange writing.
         `);
   let key = readlineSync.question(
      "What do you take with you on this our journey into the unknown? 👹👹👹"
   );
   try {
      switch (key) {
         case "a":
            console.log(`You tear out the map and pocket it. The ink smudges, nearly ruined — but enough remains to guide you.

               You survive. You get to move to the 2nd stage The Sunken Marshes`);
            break;
         case "b":
            console.log(`You keep it intact and study its strange writing. At night, whispers crawl from the pages.
               Distracted, you stumble into the surf and vanish beneath the waves.

               GAME OVER.`);
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
