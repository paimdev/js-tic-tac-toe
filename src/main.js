const game = (function () {
  const gameBoard = {
    board: ["", "", "", "", "", "", "", "", ""],
  };

  const Players = function (name, marker, winState = false) {
    return { name, marker, winState };
  };

  Players.prototype.play = function (i) {
    if (gameBoard.board[i] === "") {
      gameBoard.board = this.marker;
      render();
    } else {
      return invalidPlay(this);
    }
  };

  const render = (function () {
    const board = gameBoard.board;
    const boardContainer = document.querySelector(".board-container");

    board.forEach((element) => {
      const square = document.createElement("div");
      square.classList.add("square-marker");
      square.innerText = element;
      boardContainer.appendChild(square);
    });
  })();

  const listeners = (function () {
    const squares = document.querySelectorAll(".square-marker");
    for (const square of squares) {
      square.addEventListener("click", () => {
        gameBoard.board[i] = 'X'
        render();
      });
    };
  })();

  const gameplay = () => {
    const player1 = Players("Josh", "X");
    const player2 = Players("Joran", "O");

    while (true) {
      player1.play();
      checkWin();
      player2.play();
      checkWin();
    }
  };
})();
