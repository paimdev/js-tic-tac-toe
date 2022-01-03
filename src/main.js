const gameBoard = (() => {
  const gameBoardArr = ["", "", "", "", "", "", "", "", ""];

  return {gameBoardArr};
})();

const Player = function(marker) {
  this.marker = marker;

  return {marker};
}

const displayController = (() => {
  const gameContainer = document.querySelector(".board-container");

  updateBoard = () => {
    for (item in gameBoard.gameBoardArr) {
      const markerHolder = document.createElement("div");
      markerHolder.className = "marker-area";
      markerHolder.innerText = gameBoard.gameBoardArr[item];

      gameContainer.appendChild(markerHolder);
    }
  }

  return {updateBoard};
})();

const gamePlay = (() => {
  displayController.updateBoard();
  
})();
