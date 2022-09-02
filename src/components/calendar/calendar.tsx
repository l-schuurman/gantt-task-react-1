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
    const topValues: React.ReactNode[] = [];
    for (let i = 1; i < dateSetup.dates.length - 1; i++) {
      const date = dateSetup.dates[i];
      if (
        i === 0 ||
        date.getFullYear() !== dateSetup.dates[i - 1].getFullYear()
      ) {
        const topValue = (date.getFullYear() - 1999).toString();

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
    return [topValues, bottomValues];
  };

  let topValues: React.ReactNode[] = [];
  let bottomValues: React.ReactNode[] = [];
  [topValues, bottomValues] = getCalendarValuesForYear();

  return (
    <g className="calendar" fontSize={fontSize} fontFamily={fontFamily}>
      <rect
        x={0}
        y={0}
        width={columnWidth * (dateSetup.dates.length - 1)}
        height={headerHeight}
        className={styles.calendarHeader}
      />
      {bottomValues} {topValues}
    </g>
  );
};
