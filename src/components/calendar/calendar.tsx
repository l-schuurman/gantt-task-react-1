import React from "react";
import { TopPartOfCalendar } from "./top-part-of-calendar";
import { DateSetup } from "../../types/date-setup";
import styles from "./calendar.module.css";

export type CalendarProps = {
  dateSetup: DateSetup;
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
  const getCalendarValuesForYear = () => {
    const topValues: React.ReactElement[] = [];
    for (let i = 1; i < dateSetup.dates.length - 1; i++) {
      const date = dateSetup.dates[i];
      if (
        date !== dateSetup.dates[i - 1]
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

  let topValues: React.ReactElement[] = getCalendarValuesForYear();

  return (
    <g className="calendar" fontSize={fontSize} fontFamily={fontFamily}>
      <rect
        x={0}
        y={0}
        width={columnWidth * (dateSetup.dates.length - 1)}
        height={headerHeight}
        className={styles.calendarHeader}
      />
      {topValues}
    </g>
  );
};
