import React from "react";
import { BarTask } from "../../types/bar-task";

type ArrowProps = {
  taskFrom: BarTask;
  taskTo: BarTask;
  rowHeight: number;
  taskHeight: number;
  arrowIndent: number;
};
export const Arrow: React.FC<ArrowProps> = ({
  taskFrom,
  taskTo,
  rowHeight,
  taskHeight,
  arrowIndent,
}) => {
  let path: string;
  let trianglePoints: string;

    [path, trianglePoints] = drownPathAndTriangle(
      taskFrom,
      taskTo,
      rowHeight,
      taskHeight,
      arrowIndent
    );

  return (
    <g className="arrow">
      <path strokeWidth="1.5" d={path} fill="none" />
      <polygon points={trianglePoints} />
    </g>
  );
};

const drownPathAndTriangle = (
  taskFrom: BarTask,
  taskTo: BarTask,
  rowHeight: number,
  taskHeight: number,
  arrowIndent: number
) => {
  const indexCompare = taskFrom.index > taskTo.index ? -1 : 1; // Checks which task is displayed first in task list
  const taskFromStartPosition = taskFrom.y + taskHeight / 2; // y-position of the middle of the start task
  const taskToEndPosition = taskTo.y + taskHeight / 2; // y-position of the middle of the destination task
  const taskFromEndPosition = taskFrom.x2 + arrowIndent * 2; // Whether arrow needs to "backtrack" left or can go straight down
  const taskFromHorizontalOffsetValue =
    taskFromEndPosition < taskTo.x1 ? "" : `H ${taskTo.x1 - arrowIndent}`; // Draw horizontal line left, if needed.
  const taskToHorizontalOffsetValue =
    taskFromEndPosition > taskTo.x1
      ? arrowIndent
      : taskTo.x1 - taskFrom.x2 - arrowIndent; // Length of horizontal line going to the right
  const taskToVerticalOffsetValue = taskToEndPosition - indexCompare * rowHeight / 2;
  
  // Construct the path
  const path = `M ${taskFrom.x2} ${taskFromStartPosition} 
  h ${arrowIndent} 
  V ${taskToVerticalOffsetValue} 
  ${taskFromHorizontalOffsetValue}
  v ${indexCompare * rowHeight / 2} 
  h ${taskToHorizontalOffsetValue}`;

  const trianglePoints = `${taskTo.x1},${taskToEndPosition} 
  ${taskTo.x1 - 5},${taskToEndPosition - 5} 
  ${taskTo.x1 - 5},${taskToEndPosition + 5}`;
  return [path, trianglePoints];
};