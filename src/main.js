const game = (function () {
  const gameBoard = {
    board: ['X', 'X', 'O', 'X', 'O', 'X', 'X', 'O', 'O',]
  }

  const Players = function (name, marker, winState=false) {
    return {name, marker, winState};
  };

  const render = () => {
    const board = gameBoard.board;
    const boardContainer = document.querySelector('.board-container');

    board.forEach(element => {
      const square = document.createElement('div');
      square.classList.add('square-marker');
      square.innerText = element;
      boardContainer.appendChild(square);
    });
  };

  const gameplay = ()  => {
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
