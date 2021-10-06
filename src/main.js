(function () {
  const gameBoard = {
    gameBoard: ["","","","","","","","",""],
  };

  const Players = function (name, marker, winState=false) {
    return {name, marker, winState};
  };

  const render = () => {
    const board = this.gameBoard;
    const gameContainer = document.querySelector('.game-container');

    board.forEach(element => {
      const square = document.createElement('div');
      gameContainer.appendChild(square);
    });
  };

  const gameplay = function() {
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
  };


})();
