const game = (function () {
  const gameBoard = {
    board: ["", "", "", "", "", "", "", "", ""],
  };

  currentMarker = "X";

  const winningPositions = function () {
    const board = gameBoard.board;

    const horizontal = function () {
      if (board[0] == "X" && board[1] == "X" && board[2] == "X") {
        return true;
      } else if (board[3] == "X" && board[4] == "X" && board[5] == "X") {
        return true;
      } else if (board[6] == "X" && board[7] == "X" && board[8] == "X") {
        return true;
      } else if (board[0] == "O" && board[1] == "O" && board[2] == "O") {
        return true;
      } else if (board[3] == "O" && board[4] == "O" && board[5] == "O") {
        return true;
      } else if (board[6] == "O" && board[7] == "O" && board[8] == "O") {
        return true;
      } else {
        return false;
      }
    };
    const vertical = function () {
      if (board[0] == "X" && board[3] == "X" && board[6] == "X") {
        return true;
      } else if (board[1] == "X" && board[4] == "X" && board[7] == "X") {
        return true;
      } else if (board[2] == "X" && board[5] == "X" && board[8] == "X") {
        return true;
      } else if (board[0] == "O" && board[3] == "O" && board[6] == "O") {
        return true;
      } else if (board[1] == "O" && board[4] == "O" && board[7] == "O") {
        return true;
      } else if (board[2] == "O" && board[5] == "O" && board[8] == "O") {
        return true;
      } else {
        return false;
      }
    };

    const diagonal = function () {
      if (board[0] == "X" && board[4] == "X" && board[8] == "X") {
        return true;
      } else if (board[2] == "X" && board[4] == "X" && board[6] == "X") {
        return true;
      } else if (board[0] == "O" && board[4] == "O" && board[8] == "O") {
        return true;
      } else if (board[2] == "O" && board[4] == "O" && board[6] == "O") {
        return true;
      } else {
        return false;
      }
    };
  };

  const Players = function (name, marker, winState = false) {
    return { name, marker, winState };
  };

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
      });
    }
  };

  const placeMark = function (marker, index) {
    let board = gameBoard.board;

    if (board[index] === "") {
      board[index] = marker;
    } else {
      invalidPlay();
    }
  };

  const nextPlayer = function () {
    if (currentMarker === "X") {
      currentMarker = "O";
    } else {
      currentMarker = "X";
    }
  };

  const gameWin = function () {};

  const gameplay = (function () {
    render();
  })();

  return { render, listeners, gameplay };
})();
