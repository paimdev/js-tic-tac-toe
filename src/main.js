const gameBoard = (() => {
  const gameBoardArr = ["", "", "", "", "", "", "", "", ""];

  checkWin = () => {
    null
  }

  checkTie = () => {
    return !gameBoardArr.includes("");
  }

  return {gameBoardArr, checkWin, checkTie};
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
    if (currentMarker === "X") {
      currentMarker = "O";
    } else {
      currentMarker = "X";
    }   
  }

  checkFinish = () => {
    console.log(gameBoard.checkTie());
    if (gameBoard.checkWin() === true || gameBoard.checkTie() === true) {
      console.log("Finish");
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
        updateArray(id);
        renderBoard();
        changeMarker();
        console.log(gameBoard.gameBoardArr);
        checkFinish();
      });
    }
  }

  return {renderBoard, addListeners};
})();

const player1 = Player("X");
const player2 = Player("O");
currentMarker = player1.marker;

displayController.renderBoard();
