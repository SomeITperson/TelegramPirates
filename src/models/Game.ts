import { CTX, Essence } from "../types/models.types"
import { Board } from "./Board"

interface IGame extends Essence {
  play: (ctx: CTX) => void;
}

export class Game implements IGame {
  board: Board

  constructor() {
    this.board = new Board()
  }

  draw(ctx: HTMLCanvasElement) {
    this.board.draw(ctx)
  }

  play(ctx: HTMLCanvasElement) {
    this.board.initBoard()
    this.draw(ctx)
  }
}
