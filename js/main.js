//Tic Tac Toe v0.1 Draft of work planning
//
//End Goals - Overall - Minimum Work
//
// 1) A working game, built by you, hosted somewhere on the internet
// 2)A link to your hosted working game in the URL section of your Github repo
// 3) A git repository hosted on Github, with a link to your hosted game, and frequent commits dating back to the very beginning of the project
// 4) A readme.md file with explanations of the technologies used, the approach taken, installation instructions, unsolved problems, etc.
// 5) On Friday of project week everyone individually presents their project to the class, with an overview of the app and a brief code tour of the highlights.
//
// //End Goals - Functionality - The app must:
// 1) Render a game board in the browser
// 2) Switch turns between X and O (or whichever markers you select); your game should prevent users from playing a turn into a square that is already occupied
// 3) Visually display which side won if a player gets three in a row or show a draw/"cat’s game" if neither wins
// 4) Include separate HTML / CSS / JavaScript files
// 5) Stick with KISS (Keep It Simple Stupid) and DRY (Don't Repeat Yourself) principles
// 6) Use Javascript with jQuery for DOM manipulation
// 7) Deploy your game online, where the rest of the world can access it
// 8) Use semantic markup for HTML and CSS (adhere to best practices)

// //End Goals - Bonus - Extra Credit:
// Keep track of multiple game rounds with a win counter
// Allow players to customize their tokens (X, O, name, picture, etc)
// Get inventive with your styling, e.g. use hover effects or animations to spiff things up
// Use LocalStorage to persist data locally to allow games to continue after page refresh or loss of internet connectivity
// Support custom board sizes: default is 3x3 but you could allow users to choose a larger board
// Support networked multiplayer: https://www.firebase.com/ has a nice quickstart guide
// Create an AI opponent: teach Javascript to play an unbeatable game against you
// Start by implementing a few simple rules which can be easily checked and are always good moves, such as "always take the center square if it's available" - you can google these rules for yourself
// You can build in as many AI player rules as you like but you'll quickly end up with a longwinded list of if-else-if statements. To make a truly unbeatable AI opponent you'll need to look into implementing an algorithm like MiniMax - for advanced/bold students only!
// Start again by implementing a totally different game: Try Checkers, or Battleships.... or Chess (if you're feeling very brave)
// Make a Vue.js version of your game, instead of jQuery, and compare the two...


//Logic
//Alternating between X and O inputs, cant place an X or O within a preoccupied square

//Check for win. Either use the 8 different combinations and when met trigger win. or work out if its a draw/loss.
