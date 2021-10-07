const game = (function () {
  const gameBoard = {
    board: ["", "", "", "", "", "", "", "", ""],
  };

  const Players = function (name, marker, winState = false) {
    return { name, marker, winState };
  };

  const render = function () {
    const board = gameBoard.board;
    const boardContainer = document.querySelector(".board-container");
    let index = 0;

    for (const area of board) {
      const square = document.createElement("div");
      square.textContent = area;
      square.classList.add("marker-area");
      square.setAttribute("id", index);
      boardContainer.appendChild(square);
      index++;
    }
  };

  const placeMark = function (marker, index) {};

  const gameplay = function () {};

  return { render };
})();

game.render();
