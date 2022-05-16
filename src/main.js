const gameBoard = (() => {
  let gameBoardArr = ["", "", "", "", "", "", "", "", ""];
  return { gameBoardArr };
})();

const gameRules = (() => {

  checkWin = () => {
    if (gameBoard.gameBoardArr[0] === currentMarker && gameBoard.gameBoardArr[1] === currentMarker && gameBoard.gameBoardArr[2] === currentMarker) {
      return true;
    } else if (gameBoard.gameBoardArr[3] === currentMarker && gameBoard.gameBoardArr[4] === currentMarker && gameBoard.gameBoardArr[5] === currentMarker) {
      return true;
    } else if (gameBoard.gameBoardArr[6] === currentMarker && gameBoard.gameBoardArr[7] === currentMarker && gameBoard.gameBoardArr[8] === currentMarker) {
      return true;
    } else if (gameBoard.gameBoardArr[0] === currentMarker && gameBoard.gameBoardArr[3] === currentMarker && gameBoard.gameBoardArr[6] === currentMarker) {
      return true;
    } else if (gameBoard.gameBoardArr[1] === currentMarker && gameBoard.gameBoardArr[4] === currentMarker && gameBoard.gameBoardArr[7] === currentMarker) {
      return true;
    } else if (gameBoard.gameBoardArr[2] === currentMarker && gameBoard.gameBoardArr[5] === currentMarker && gameBoard.gameBoardArr[8] === currentMarker) {
      return true;
    } else if (gameBoard.gameBoardArr[0] === currentMarker && gameBoard.gameBoardArr[4] === currentMarker && gameBoard.gameBoardArr[8] === currentMarker) {
      return true;
    } else if (gameBoard.gameBoardArr[2] === currentMarker && gameBoard.gameBoardArr[4] === currentMarker && gameBoard.gameBoardArr[6] === currentMarker) {
      return true;
    }
  }

  checkTie = () => {
    return !gameBoard.gameBoardArr.includes("");
  }

  checkFinish = () => {
    if (checkWin() === true || checkTie() === true) {
      displayController.finishGame();
    }
  }
  return { checkWin, checkTie, checkFinish };

})();

const Player = function (marker) {
  return { marker };
}

const displayController = (() => {
  const gameContainer = document.querySelector(".board-container");

  updateArray = id => {
    gameBoard.gameBoardArr[Number(id)] = currentMarker;
  }

  changeMarker = () => {
    if (currentMarker === player1.marker) {
      currentMarker = player2.marker;
    } else {
      currentMarker = player1.marker;
    }
  }

  clickEvents = id => {
    if (gameBoard.gameBoardArr[Number(id)] === "") {
      updateArray(id);
      renderBoard();
      gameRules.checkFinish();
      changeMarker();
      console.log(gameBoard.gameBoardArr);
    }
  }

  renderBoard = () => {
    console.log("render");
    gameContainer.innerHTML = "";

    for (let item in gameBoard.gameBoardArr) {
      const markerHolder = document.createElement("div");
      markerHolder.className = "marker-area";
      markerHolder.id = item;
      markerHolder.innerText = gameBoard.gameBoardArr[item];

      gameContainer.appendChild(markerHolder);
    }
    addListeners();
  }

  addListeners = () => {
    const markerHolderList = document.querySelectorAll(".marker-area");

    for (let holder of markerHolderList) {
      let id = holder.id;

      holder.addEventListener("click", (e) => {
        clickEvents(id);
      });
    }
  }

  removeListeners = () => {
    const markerHolderList = document.querySelectorAll(".marker-area");

    for (let holder of markerHolderList) {
      const newHolder = holder.cloneNode(true);
      holder.parentNode.replaceChild(newHolder, holder);
      console.log("Removed all listners");
    }
  }

  finishGame = () => {
    console.log("Finish");
    removeListeners();

    const winTieContainer = document.querySelector(".win-tie-container");
    const winTieText = document.createElement('p');
    winTieText.innerText = `The Winner is ${currentMarker}`;
    winTieContainer.appendChild(winTieText);

    const restartButton = document.createElement('button');
    restartButton.innerText = "Restart Game";
    restartButton.addEventListener('click', () => {
      gameBoard.gameBoardArr = ["", "", "", "", "", "", "", "", ""];
      renderBoard();
      winTieContainer.removeChild(winTieText);
      winTieContainer.removeChild(restartButton);
    });
    winTieContainer.appendChild(restartButton);
  };

  return { renderBoard, finishGame };
})();

const player1 = Player("X");
const player2 = Player("O");
currentMarker = player1.marker;

displayController.renderBoard();
