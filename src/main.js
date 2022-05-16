const gameBoard = (() => {
  const gameBoardArr = ["", "", "", "", "", "", "", "", ""];
  return {gameBoardArr};
})();

const gameRules = (() => {

  checkWin = () => {
    if (gameBoard.gameBoardArr[0] === currentMarker && gameBoard.gameBoardArr[1] === currentMarker && gameBoard.gameBoardArr[2] === currentMarker){
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
      console.log("Finish");
      displayController.removeListeners();
    }
  }
  return {checkWin, checkTie, checkFinish};

})();

const Player = function(marker) {
  return {marker};
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
      let id = holder.id;

      holder.removeEventListener("click", (e) => {
        clickEvents(id);
      });
    }
  }

  return {renderBoard, removeListeners};
})();

const player1 = Player("X");
const player2 = Player("O");
currentMarker = player1.marker;

displayController.renderBoard();
