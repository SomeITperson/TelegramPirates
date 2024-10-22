import { CTX, Essence } from "../types/models.types";
import { Cell } from "./Cell";

interface IBoard extends Essence {
  initBoard: () => void;
}

export class Board implements IBoard {
  cells: Cell[][]

  constructor() {
    this.cells = []
  }

  initBoard() {
    for (let i = 0; i < 10; i++) {
      const row = []
      for (let j = 0; j < 10; j++) {
        row.push(new Cell(j, i))
      }
      this.cells.push(row)
    }
  }

  draw(ctx: CTX) {}
}