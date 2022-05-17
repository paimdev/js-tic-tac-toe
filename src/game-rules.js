import { gameBoard } from './game-objects';

const currentMarker = 'X';

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

export default gameRules;
