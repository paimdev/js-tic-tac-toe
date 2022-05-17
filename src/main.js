import gameRules from './game-rules';
import { Player } from './game-objects';
import displayController from './display-controller';

const player1 = Player('X');
const player2 = Player('O');

displayController(player1, player2).renderBoard();
