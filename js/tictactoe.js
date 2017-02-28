$(document).ready(function(){

// create grid value
// game start - board display blank
// when user click - write value in cell
// check cell id pattern 3x3 === winning combination or coordinates
// iterate 3 attemps, set score counter for winning if X -, winning score = //  3,
//
// if select the non-winning cell - no score,
//
// check the pattern
// set default null vs blank

    // var board = $(".cell");
    var player1 = 'x';
    var player2 = 'o';
    var winner = "";
    var turnCount = 0;
    var gameStart = "_";

    var currentTurn = 'x';

    window.board = [
      ["","",""],
      ["","",""],
      ["","",""]
    ];

    var checkWin = function () {

      // winning rows:
      // board[0][0], board[0][1], board[0][2]
      // board[1][0], board[1][1], board[1][2]
      // board[2][0], board[2][1], board[2][2]

      // if( board[0][0] === 'x' && board[0][1] == 'x' && board[0][2] == 'x'){
      // }
      //
      if( (board[0][0] + board[0][1] + board[0][2]) === 'xxx'){
        alert('X wins!');
      }
      if ( (board[1][0] + board[1][1] + board[1][2]) === 'xxx'){
        alert('X wins!');
      }
      if ( (board[2][0] + board [2][1] + board[2][2] === 'xxx'){
      }
      if ( (board[0][0] + board [1][0] + board [2][0] === 'xxx'){
      }
      if ( (board[0][1] + board [1][1] + board [2][0] === 'xxx')}
      }
      if 

    };

    var cellClick = function(){
      console.log('clicked!');

      turnCount++;
      // turnCount += 1;
      // turnCount = turnCount + 1;

      var id = this.id;
      var row = id[0];
      var col = id[1];
      board[row][col] = currentTurn;
      $(this).html( currentTurn );

      checkWin();

      // switch to next player's turn
      if( currentTurn === 'x') {
        currentTurn = 'o';
      } else {
        currentTurn = 'x';
      }


    };



    $(".cell").on("click", cellClick);

  });
// =================================================================
  // for (var i = 0; i < board.length; i++) {
  //   board[i]
  //
  //
  // }
// }
