$(document).ready(function() {


    // var board = $(".cell");

    var player1 = "../images/man.png";
    var player2 = "../images/donut.png";
    var winner = "";
    var turnCount = 0;
    var $msg = $('#message'); //create $msg to store result messages
    //set currentTurn
    var currentTurn = 'x'; //set the starting turn in this case set as 'x'to have first turn

    var gameOver = false;  // set the ininial game start

    window.board = [
      ["","",""],
      ["","",""],
      ["","",""]
    ];

// create check x winning function, and define winning pattern
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

      return false;

    };
//create check winning function and define winning pattern for '0'
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
      if ( (board[2][0] + board[1][1] + board[0][2]) === 'ooo'){
        return true; // diagonal -45 ok

      }

      return false;

  }; // end of checkWin_o


    var cellClick = function(){
      console.log('clicked!');

      var id = this.id;
      var row = id[0];
      var col = id[1];

      // Return early from this click handler function (which means we ignore the click)
      // if the game is over, or the square is already taken (not empty)
      if( gameOver || board[row][col] !== "" ){
        return;
      }

      turnCount++;
      console.log('count:', turnCount);
      // turnCount += 1;
      // turnCount = turnCount + 1;

      board[row][col] = currentTurn;
      console.log(this);

      // $(this).css('background-image', 'url(images/man.png)');

      $(this).addClass( currentTurn );

      // $(this).html( currentTurn );

      // var xWin = checkWin_x();
      if( checkWin_x() ){
        $msg.html('X, You win!');
        // alert('X wins!');
        gameOver = true;
        gameReset();
      } else if( checkWin_o() ){
        $msg.html('O, You win!');
        gameOver = true;
        gameReset();
      } else if ( turnCount === 9 ) {
        $msg.html("It's a draw!");
        gameOver = true;
        gameReset();
      }


      // switch to next player's turn
      if( currentTurn === 'x') {
        currentTurn = 'o';
      } else {
        currentTurn = 'x';
      }

    };
//create gameReset function to clear the board
    window.gameReset = function(){
      console.log("Game reset running");
      window.board = [
        ["","",""],
        ["","",""],
        ["","",""]
      ]
//set time out for game result message display - 3s, clear message, clear board
      setTimeout(function(){
        $(".cell").removeClass('x').removeClass('o');
        turnCount = 0;
        $msg.html('');
        gameOver = false;
      }, 4000);

    };

    $("#start").on("click", gameReset); //set gameReset function to event handler

    $(".cell").on("click", cellClick); // create eventhandler click cell



});
