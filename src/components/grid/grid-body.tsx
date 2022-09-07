import React from "react";
import { Task } from "../../types/public-types";
import styles from "./grid.module.css";

export type GridBodyProps = {
  tasks: Task[];
  cycles: number[];
  svgWidth: number;
  rowHeight: number;
  columnWidth: number;
};
export const GridBody: React.FC<GridBodyProps> = ({
  tasks,
  cycles,
  rowHeight,
  svgWidth,
  columnWidth,
}) => {
  let y = 0;
  const gridRows: React.ReactElement[] = [];
  const rowLines: React.ReactElement[] = [
    <line
      key="RowLineFirst"
      x="0"
      y1={0}
      x2={svgWidth}
      y2={0}
      className={styles.gridRowLine}
    />,
  ];
  for (const task of tasks) {
    gridRows.push(
      <rect
        key={"Row" + task.id}
        x="0"
        y={y}
        width={svgWidth}
        height={rowHeight}
        className={styles.gridRow}
      />
    );
    rowLines.push(
      <line
        key={"RowLine" + task.id}
        x="0"
        y1={y + rowHeight}
        x2={svgWidth}
        y2={y + rowHeight}
        className={styles.gridRowLine}
      />
    );
    y += rowHeight;
  }

  let tickX = 0;
  const ticks: React.ReactElement[] = [];
  for (let i = 0; i < cycles.length - 1; i++) {
    const cycle = cycles[i];
    ticks.push(
      <line
        key={cycle}
        x1={tickX}
        y1={0}
        x2={tickX}
        y2={y}
        className={styles.gridTick}
      />
    );
    tickX += columnWidth;
  }
  return (
    <g className="gridBody">
      <g className="rows">{gridRows}</g>
      <g className="rowLines">{rowLines}</g>
      <g className="ticks">{ticks}</g>
    </g>
  );
};
