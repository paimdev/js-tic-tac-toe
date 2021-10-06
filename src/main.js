(function () {
  const gameBoard = {
    gameBoard: [1,2,3,4,5,6,7,8,9],
  };

  const Players = function (name, marker, winState=false) {
    return {name, marker, winState};
  };



  const gameplay = (function() {
    const player1 = Players("Josh", "X");
    const player2 = Players("Joran", "O");

    while (true) {
      render();
      player1.play();
      checkWin();
      render();
      player2.play();
      checkWin();
    }
  })();


})();
