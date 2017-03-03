$(document).ready(function() {


    // var board = $(".cell");

    var turnCount = 0;
    var $msg = $('#message'); //create $msg to store result messages
    //set currentTurn
    var currentTurn = 'x'; //set the starting turn in this case set as 'x'to have first turn

    var gameOver = false;  // set the ininial game start

    var playScore_X = 0;
    var playScore_O = 0;
    var $scoreMsg_O = $('#showScore_O');
    var $scoreMsg_X = $('#showScore_X')




    window.board = [  //create global vairable board with 3x3 blank, data pattern
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

      // var xWin = checkWin_x();
      if( checkWin_x() ){
        $msg.html('X, You win!');
        playScore_X++;
        $scoreMsg_X.html('Score X: ' + playScore_X);
        //$showscore.html(playScore_X);
        // playScore_X += 1;
        // playScore_X = playScore_X + 1
        gameOver = true;
        gameReset(4000);
      } else if( checkWin_o() ){
        $msg.html('O, You win!');
        playScore_O++;
        $scoreMsg_O.html('Score O: ' + playScore_O);
        gameOver = true;
        gameReset(4000);
      } else if ( turnCount === 9 ) {
        $msg.html("It's a draw!");
        gameOver = true;
        gameReset(4000);
      }


      // switch to next player's turn
      if( currentTurn === 'x') {
        currentTurn = 'o';
      } else {
        currentTurn = 'x';
      }

    };
//create gameReset function to clear the board
    window.gameReset = function(delay){
      console.log("Game reset running");
      window.board = [
        ["","",""],
        ["","",""],
        ["","",""]
      ]

    //set time out for game result message display - 4s, clear message, clear board
    // NOTE: if this function is called as a click handler, 'delay' will be the
    // jQuery event object, not a number. But setTimeout is clever enough to
    // just set a 0 milisecond delay (i.e. run the timeout code immediately)
    // if you pass in something that is not a number as your delay argument...
    // so this code still works! (for now)
      setTimeout(function(){
        $(".cell").removeClass('x').removeClass('o');
        turnCount = 0;
        $msg.html('');
        gameOver = false;
      }, delay);


    };



    $("#start").on("click", gameReset); //set gameReset function to event handler

    $(".cell").on("click", cellClick); // create eventhandler click cell



});
