const game = (function () {
  const gameBoard = {
    board: ["", "", "", "", "", "", "", "", ""],
  };

  currentMarker = "X";

  const render = function () {
    clearBoard();
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
    listeners();
  };

  const clearBoard = function () {
    const areas = document.querySelectorAll(".marker-area");

    for (const area of areas) {
      area.remove();
    }
  };

  const listeners = function () {
    const squares = document.querySelectorAll(".marker-area");

    for (const square of squares) {
      const id = square.getAttribute("id");
      square.addEventListener("click", () => {
        placeMark(currentMarker, id);
        render();
        nextPlayer();
        if (winningPositions.horizontal || winningPositions.vertical || winningPositions.diagonal) {
          console.log("the game was won");
        };
      });
    }
  };

  const nextPlayer = function () {
    if (currentMarker === "X") {
      currentMarker = "O";
    } else {
      currentMarker = "X";
    }
  };

  const gameplay = (function () {
    render();
  })();

  return { render, listeners, gameplay };
})();
