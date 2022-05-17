const gameBoard = (() => {
  const gameBoardArr = ['', '', '', '', '', '', '', '', ''];
  return { gameBoardArr };
})();

function Player(marker) {
  return { marker };
}

const gameStats = (() => {
  const currentMarker = 'X';
  return { currentMarker };
})();

export { gameBoard, Player, gameStats };
