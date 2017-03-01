$(document).ready(function() {

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
        return true; // first row
      }
      if ( (board[1][0] + board[1][1] + board[1][2]) === 'xxx'){
        return true; // second row
      }
      if ( (board[2][0] + board[2][1] + board[2][2]) === 'xxx'){
        return true; // third row
      }

      if ( (board[0][0] + board[1][0] + board[2][0]) === 'xxx'){
        return true; // first col -ok
      }

      if ( (board[0][1] + board[1][1] + board[2][1]) === 'xxx'){
        return true; // second col - ok
      }

      if ( (board[0][2] + board[2][2] + board[2][2]) === 'xxx'){
        return true;// third col - ok
      }

      if ( (board[0][2] + board[1][1] + board[2][0]) === 'xxx'){
        return true; // diagonal -45
      }

      if ( (board[0][0] + board[1][1] + board[2][2]) === 'xxx'){
        return true; //diagonal works
      }

      console.log("Play again");
      return false;

    };

    var checkWin_o = function () {

      if( (board[0][0] + board[0][1] + board[0][2]) === 'ooo'){
        return true; // first row ok
      }
      if ( (board[1][0] + board[1][1] + board[1][2]) === 'ooo'){
        return true; // second row ok
      }
      if ( (board[2][0] + board[2][1] + board[2][2]) === 'ooo'){
        return true; // thrid row ok
      }

      if ( (board[0][0] + board[1][0] + board[2][0]) === 'ooo'){
        return true; // firt Column ok
      }

      if ( (board[0][1] + board[1][1] + board[2][1]) === 'ooo'){
        return true; // second Column ok
      }

      if ( (board[0][2] + board[1][2] + board[2][2]) === 'ooo'){
        return true; // third Column ok
      }

      if ( (board[0][0] + board[1][1] + board[2][2]) === 'ooo'){
        return true; // diagonal ok
      }
      if ( (board[2][0] + board[1][1] + board[2][0]) === 'ooo'){
        return true; // diagonal -45 ok

      }

      console.log("Play again");
      return false;

  }; // end of checkWin_o


    var cellClick = function(){
      console.log('clicked!');

      turnCount++;
      console.log('count:', turnCount);
      // turnCount += 1;
      // turnCount = turnCount + 1;

      var id = this.id;
      var row = id[0];
      var col = id[1];
      board[row][col] = currentTurn;
      console.log(this);
      $(this).css('background-image', 'url(../images/man.png)');
      $(this).html( currentTurn );

      // var xWin = checkWin_x();
      if( checkWin_x() ){
        alert('X wins!');
        gameReset();
      } else if( checkWin_o() ){
        alert('O wins!');
        gameReset();
      } else if ( turnCount === 9 ) {
        alert ("It's a draw");
        gameReset();
      }


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
      turnCount === 0;
    }

    // $(".cell").on("click", cellClick);

    $(".cell").on("click", cellClick);



});
