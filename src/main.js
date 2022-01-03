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

  updateArray = () => {
    console.log("hey!")
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

      holder.addEventListener("click", () => {
        gameBoard.gameBoardArr[Number(id)] = currentMarker;
        renderBoard();
      });
    }
  }

  return {renderBoard, addListeners};
})();

const gamePlay = (() => {
  const player1 = Player("X");
  const player2 = Player("O");
  currentMarker = player1.marker;

  displayController.renderBoard();
  displayController.addListeners();
})();
