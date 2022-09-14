import React from "react";
import { TopPartOfCalendar } from "./top-part-of-calendar";
import styles from "./calendar.module.css";

export type CalendarProps = {
  cycles: number[];
  headerHeight: number;
  columnWidth: number;
  fontFamily: string;
  fontSize: number;
};

export const Calendar: React.FC<CalendarProps> = ({
  cycles,
  headerHeight,
  columnWidth,
  fontFamily,
  fontSize,
}) => {
  const getHeaderValues = () => {
    const topValues: React.ReactElement[] = [];

    // We render an extra cycle before and after the data to account for arrows
    // Skip the first and last index when displaying the cycles
    for (let i = 1; i < cycles.length - 1; i++) {
      const cycle = cycles[i];
        const topValue = cycle;

        topValues.push(
          <TopPartOfCalendar
            key={topValue}
            value={topValue}
            x1Line={columnWidth * i}
            y1Line={0}
            y2Line={headerHeight}
            xText={columnWidth * i}
            yText={20}
          />
        );

    }
    return topValues;
  };

  let topValues: React.ReactElement[] = getHeaderValues();

  return (
    <g className="calendar" fontSize={fontSize} fontFamily={fontFamily}>
      <rect
        x={0}
        y={0}
        width={columnWidth * (cycles.length - 1)}
        height={headerHeight}
        className={styles.calendarHeader}
      />
      {topValues}
    </g>
  );
};
