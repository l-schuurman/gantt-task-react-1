import React from "react";
import { TopPartOfCalendar } from "./top-part-of-calendar";
import styles from "./calendar.module.css";

export type CalendarProps = {
  dateSetup: number[];
  headerHeight: number;
  columnWidth: number;
  fontFamily: string;
  fontSize: string;
};

export const Calendar: React.FC<CalendarProps> = ({
  dateSetup,
  headerHeight,
  columnWidth,
  fontFamily,
  fontSize,
}) => {
  const getHeaderValues = () => {
    const topValues: React.ReactElement[] = [];
    for (let i = 1; i < dateSetup.length - 1; i++) {
      const date = dateSetup[i];
      if (
        date !== dateSetup[i - 1]
      ) {
        const topValue = date.toString();

        topValues.push(
          <TopPartOfCalendar
            key={topValue}
            value={topValue}
            x1Line={columnWidth * i}
            y1Line={0}
            y2Line={headerHeight}
            xText={columnWidth * i}
            yText={15}
          />
        );
      }
    }
    return topValues;
  };

  let topValues: React.ReactElement[] = getHeaderValues();

  return (
    <g className="calendar" fontSize={fontSize} fontFamily={fontFamily}>
      <rect
        x={0}
        y={0}
        width={columnWidth * (dateSetup.length - 1)}
        height={headerHeight}
        className={styles.calendarHeader}
      />
      {topValues}
    </g>
  );
};
