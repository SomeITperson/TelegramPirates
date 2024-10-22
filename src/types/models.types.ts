export interface Essence {
  draw: (ctx: CTX) => void;
}

export type CTX = HTMLCanvasElement