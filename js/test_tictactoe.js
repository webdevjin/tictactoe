$(document).ready(function() {

// check cell id pattern 3x3 === winning combination or coordinates
// iterate 3 attemps, set score counter for winning if X -, winning score = //  3,
//
// if select the non-winning cell - no score,
//==to do
// apply semantic - interface
// -game end
// - game restart
// - game loop
// - set counter for player, check draw/cat
//var cnt = 0;
          // for (var i = 9; i < board.length; i++) {
          //   board[i]
          // }
          //   return "draw";  // Cat's game!
          // }


    // var board = $(".cell");

    var player1 = 'x';
    var player2 = 'o';
    var winner = "";
    var turnCount = 0;


    var currentTurn = 'x';

    window.board = [
      ["","",""],
      ["","",""],
      ["","",""]
    ];



    var checkWin_x = function () {
      if( (board[0][0] + board[0][1] + board[0][2]) === 'xxx'){
        alert('X wins!');
        gameReset();
      }
      if ( (board[1][0] + board[1][1] + board[1][2]) === 'xxx'){
        alert('X wins!');
        gameReset();
      }
      if ( (board[2][0] + board[2][1] + board[2][2]) === 'xxx'){
        alert('X wins!');
        gameReset();
      }

      if ( (board[0][0] + board[1][0] + board[2][0]) === 'xxx'){
        alert('X wins!');
        gameReset();
      }

      if ( (board[1][0] + board[1][1] + board[1][2]) === 'xxx'){
        alert('X wins!');
        gameReset();
      }

      if ( (board[2][0] + board[2][1] + board[2][2]) === 'xxx'){
        alert('X wins!');
        gameReset();
      }

      if ( (board[0][1] + board[1][1] + board[2][2]) === 'xxx'){
        alert('X wins!');
        gameReset();
      }
      if ( (board[0][0] + board[1][1] + board[2][2]) === 'xxx'){
        alert('X wins!');
        gameReset();
      } else {
       console.log("Play again");
      };
    };

      // var checkWin_o = function () {
      //
      //   if( (board[0][0] + board[0][1] + board[0][2]) === 'ooo'){
      //     alert('O wins!');
      //   }
      //   if ( (board[1][0] + board[1][1] + board[1][2]) === 'ooo'){
      //     alert('O wins!');
      //   }
      //   if ( (board[2][0] + board[2][1] + board[2][2]) === 'ooo'){
      //     alert('O wins!');
      //   }
      //
      //   if ( (board[0][0] + board[1][0] + board[2][0]) === 'ooo'){
      //     alert('O wins!');
      //   }
      //
      //   if ( (board[1][0] + board[1][1] + board[1][2]) === 'ooo'){
      //     alert('O wins!');
      //   }
      //
      //   if ( (board[2][0] + board[2][1] + board[2][2]) === 'ooo'){
      //     alert('O wins!');
      //   }
      //
      //   if ( (board[0][1] + board[1][1] + board[2][2]) === 'ooo'){
      //     alert('O wins!');
      //   }
      //   if ( (board[2][0] + board[1][1] + board[2][0]) === 'ooo'){
      //     alert('O wins!');
      //
      //   } else {
      //     console.log("Play again");
      //   };

        // //  } else {
        //  console.log ("Play again")

        checkWin_o();

         $("#start").on("click"), cellClick();

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

      checkWin_x();



      // switch to next player's turn
      if( currentTurn === 'x') {
        currentTurn = 'o';
      } else {
        currentTurn = 'x';
      }

    };

    var gameReset = function(){
      window.board = [
        ["","",""],
        ["","",""],
        ["","",""]
      ]
      $(".cell").html("");
    }

    $(".cell").on("click", cellClick);


});

// =================================================================
  // for (var i = 0; i < board.length; i++) {
  //   board[i]
  //
  //
  //
// }
