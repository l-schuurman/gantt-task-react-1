import { Task } from "./public-types";

export interface BarTask extends Task {
  index: number;
  x1: number;
  x2: number;
  y: number;
  height: number;
  barCornerRadius: number;
  minTaskWidth: number;
  barChildren: BarTask[];
  styles: {
    backgroundColor: string;
    backgroundSelectedColor: string;
  };
}