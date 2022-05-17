import { gameBoard, gameStats } from './game-objects';
import gameRules from './game-rules';

let { currentMarker } = gameStats;

const displayController = ((player1, player2) => {
  const gameContainer = document.querySelector('.board-container');

  const updateArray = (id) => {
    gameBoard.gameBoardArr[Number(id)] = currentMarker;
  };

  const changeMarker = () => {
    if (currentMarker === player1.marker) {
      currentMarker = player2.marker;
    } else {
      currentMarker = player1.marker;
    }
  };

  const addListeners = () => {
    const markerHolderList = document.querySelectorAll('.marker-area');

    markerHolderList.forEach((element) => {
      const { id } = element;

      element.addEventListener('click', () => {
        updateArray(id);
        renderBoard();
        gameRules.checkFinish();
        changeMarker();
      });
    });
  };

  const renderBoard = () => {
    // console.log("render");
    gameContainer.innerHTML = '';
    const iterateArray = Object.values(gameBoard.gameBoardArr);

    iterateArray.forEach((element, index) => {
      const markerHolder = document.createElement('div');
      markerHolder.className = 'marker-area';
      markerHolder.id = index;
      markerHolder.innerText = gameBoard.gameBoardArr[index];

      gameContainer.appendChild(markerHolder);
    });

    addListeners();
  };

  const removeListeners = () => {
    const markerHolderList = document.querySelectorAll('.marker-area');

    markerHolderList.forEach((element) => {
      element.addEventListener('click', () => {
        const newHolder = element.cloneNode(true);
        element.parentNode.replaceChild(newHolder, element);
      });
    });
  };

  const finishGame = () => {
    // console.log("Finish");
    removeListeners();

    const winTieContainer = document.querySelector('.win-tie-container');
    const winTieText = document.createElement('p');
    winTieText.innerText = `The Winner is ${currentMarker}`;
    winTieContainer.appendChild(winTieText);

    const restartButton = document.createElement('button');
    restartButton.innerText = 'Restart Game';
    restartButton.addEventListener('click', () => {
      gameBoard.gameBoardArr = ['', '', '', '', '', '', '', '', ''];
      renderBoard();
      winTieContainer.removeChild(winTieText);
      winTieContainer.removeChild(restartButton);
    });
    winTieContainer.appendChild(restartButton);
  };

  return { renderBoard, finishGame };
})();

export default displayController;
