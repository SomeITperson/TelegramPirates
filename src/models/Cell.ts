import { Essence } from "../types/models.types";

interface ICell extends Essence {

}

export class Cell implements ICell {
  readonly size: number = 60
  readonly x: number
  readonly y: number

  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }
  
  draw(ctx) {

  }
}