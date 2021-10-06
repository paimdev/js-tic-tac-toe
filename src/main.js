const game = (function () {
  const gameBoard = {
    board: ['', '', '', '', '', '', '', '', '',]
  }

  const Players = function (name, marker, winState=false) {
    return {name, marker, winState};
  };

  const render = () => {
    const board = gameBoard.board;
    const boardContainer = document.querySelector('.board-container');

    board.forEach(element => {
      const square = document.createElement('div');
      boardContainer.appendChild(square);
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

  return {render};

})();

game.render();
