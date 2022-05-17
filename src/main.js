const gameBoard = (() => {
  const gameBoardArr = ['', '', '', '', '', '', '', '', ''];
  return { gameBoardArr };
})();

function Player(marker) {
  return { marker };
}

const player1 = Player('X');
const player2 = Player('O');
let currentMarker = player1.marker;

const displayController = (() => {
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

const gameRules = (() => {
  function checkWin() {
    if (
      gameBoard.gameBoardArr[0] === currentMarker
      && gameBoard.gameBoardArr[1] === currentMarker
      && gameBoard.gameBoardArr[2] === currentMarker
    ) {
      return true;
    }
    if (
      gameBoard.gameBoardArr[3] === currentMarker
      && gameBoard.gameBoardArr[4] === currentMarker
      && gameBoard.gameBoardArr[5] === currentMarker
    ) {
      return true;
    }
    if (
      gameBoard.gameBoardArr[6] === currentMarker
      && gameBoard.gameBoardArr[7] === currentMarker
      && gameBoard.gameBoardArr[8] === currentMarker
    ) {
      return true;
    }
    if (
      gameBoard.gameBoardArr[0] === currentMarker
      && gameBoard.gameBoardArr[3] === currentMarker
      && gameBoard.gameBoardArr[6] === currentMarker
    ) {
      return true;
    }
    if (
      gameBoard.gameBoardArr[1] === currentMarker
      && gameBoard.gameBoardArr[4] === currentMarker
      && gameBoard.gameBoardArr[7] === currentMarker
    ) {
      return true;
    }
    if (
      gameBoard.gameBoardArr[2] === currentMarker
      && gameBoard.gameBoardArr[5] === currentMarker
      && gameBoard.gameBoardArr[8] === currentMarker
    ) {
      return true;
    }
    if (
      gameBoard.gameBoardArr[0] === currentMarker
      && gameBoard.gameBoardArr[4] === currentMarker
      && gameBoard.gameBoardArr[8] === currentMarker
    ) {
      return true;
    }
    if (
      gameBoard.gameBoardArr[2] === currentMarker
      && gameBoard.gameBoardArr[4] === currentMarker
      && gameBoard.gameBoardArr[6] === currentMarker
    ) {
      return true;
    }
    return false;
  }

  const checkTie = () => !gameBoard.gameBoardArr.includes('');

  const checkFinish = () => {
    if (checkWin() === true || checkTie() === true) {
      displayController.finishGame();
    }
  };
  return { checkWin, checkTie, checkFinish };
})();

displayController.renderBoard();
