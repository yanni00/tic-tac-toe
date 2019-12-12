//function hidetext(//Tic Tac Toe v0.1 Draft of work planning
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
// 1) Render a game board in the browser √
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







$(document).ready( function(){
  // Variables pre set up for easy personal reference.
  var player = 'X'
  var turnCount = true
  var drawState = false
  var player1TurnCount = 0
  var player2TurnCount = 0
  var player1WinCount = 0
  var player2WinCount = 0
  var drawCount = 0

  let board = [
    '', '', '',
    '', '', '',
    '', '', '',
  ];   // Initial setup of board arrays for information to be stored.
  let player1 = [
    '', '', '',
    '', '', '',
    '', '', '',
  ];
  let player2 = [
    '', '', '',
    '', '', '',
    '', '', '',
  ];

  const winningCombos = [
    [0, 3, 6],
    [0, 4, 8],
    [0, 1, 2],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];   // A constant of the 8 winning combos for 3x3 game.

  $('.cell').on('click', function(){ // On click function for all of the game tiles.
    // When we click on any .cell run these functions...

    const clickedIndex = parseInt( $(this).attr('id') ); // Create a const from clicked tiles to see which have been filled.

    $(this).text( player ); // Input player X or O in This .cell clicked.

      if (turnCount === true) { //rotating turn counter. X === true  O === false.
        $(this).text('X');// If its player X's turn place x in text field of This .cell clicked.
        $('#score0.scoreboard div').text("It's P2s Turn"); // Change player turn on side of screen.
        board.push($(this).text('X')); // Push X value onto board array for later use.
        const boxIndex = $(this)[0].id; // Create a const from this .cell's 1st value.
        player1[boxIndex] = $(this)[0].id; // Change player1's array to have this cell marked.
        board[boxIndex] = 'X'; //Used to check for win condition. by checking for 3 X's or 3 O's.
        player1TurnCount ++;  //counter for player 1's moves.

      } else {

        $(this).text('O'); // If its player O's turn place o in text field of This .cell clicked.
        $('#score0.scoreboard div').text("It's P1s Turn"); // Change player turn on side of screen.
        board.push($(this).text('O')); // Push This .cell's text to board array for later use.
        const boxIndex = $(this)[0].id; //Create a const from this .cells 1st value.
        player2[boxIndex] = $(this)[0].id; //Change player2's array to have This .cell marked.
        board[boxIndex] = 'O'; // Used to check for win condition. byb checking for 3 X's or 3 O's.
        player2TurnCount ++; //Counter for player 2's moves.
        };

    turnCount = !turnCount //After either players turn, switch value so it is the other players turn.

    for (var i = 0; i < winningCombos.length; i++) {

      let playerTiles = "";

      for (var j = 0; j < winningCombos[i].length; j++) {
        playerTiles += board[winningCombos[i][j]];

        }

      if (playerTiles === 'XXX') {

        player1WinCount ++;
        const $xWins = $('#xWins')[0];
        $xWins.innerText = player1WinCount;
        on();
        $overlayPrompt = $('#overlayPrompt')[0]
        $overlayPrompt.innerText = 'X Wins'
        return

      } if (playerTiles === 'OOO'){

        player2WinCount ++;
        const $oWins = $('#oWins')[0];
        $oWins.innerText = player2WinCount;
        on();
        $overlayPrompt = $('#overlayPrompt')[0]
        $overlayPrompt.innerText = 'O Wins!';
        return

      } else if (!board.includes('')) {
        drawState = true
        $overlayPrompt.innerText = 'Draw Game!'
        on();
      }

      }; // end of check winner loop
      if (drawState){
      drawCount ++;
      const $draws = $('#draws')[0];
      $draws.innerText = drawCount;
      drawState = false
      };
  });

  $('#reset-button').on('click', function(){

    $('.cell').html('');

    board = [
      '', '', '',
      '', '', '',
      '', '', '',
    ];
    off()
  });

  function on(){
    // document.getElementById("overlay").style.display = "block";
    $('#overlay').fadeIn(1000);
  }

  function off() {
    // document.getElementById("overlay").style.display = "none";
    $('#overlay').fadeOut(1000);
  }


});
