//Tic Tac Toe v0.1 Draft of work planning

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
        // document.getElementById('this').style.color = #999;
        $(this).css("background-image", "linear-gradient(#00F260, #0575E6");
      } else {

        $(this).text('O'); // If its player O's turn place o in text field of This .cell clicked.
        $('#score0.scoreboard div').text("It's P1s Turn"); // Change player turn on side of screen.
        board.push($(this).text('O')); // Push This .cell's text to board array for later use.
        const boxIndex = $(this)[0].id; //Create a const from this .cells 1st value.
        player2[boxIndex] = $(this)[0].id; //Change player2's array to have This .cell marked.
        board[boxIndex] = 'O'; // Used to check for win condition. byb checking for 3 X's or 3 O's.
        player2TurnCount ++; //Counter for player 2's moves.
        $(this).css("background-image", "linear-gradient(90deg, #f12711, #f5af19");
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
    $('.cell').css('background-image', '');

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
