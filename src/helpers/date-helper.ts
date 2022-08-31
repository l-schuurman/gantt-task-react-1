import { Task, ViewMode } from "../types/public-types";
import DateTimeFormatOptions = Intl.DateTimeFormatOptions;
import DateTimeFormat = Intl.DateTimeFormat;

type DateHelperScales =
  | "year"
  | "month"
  | "day"
  | "hour"
  | "minute"
  | "second"
  | "millisecond";

const intlDTCache = {};
export const getCachedDateTimeFormat = (
  locString: string | string[],
  opts: DateTimeFormatOptions = {}
): DateTimeFormat => {
  const key = JSON.stringify([locString, opts]);
  let dtf = intlDTCache[key];
  if (!dtf) {
    dtf = new Intl.DateTimeFormat(locString, opts);
    intlDTCache[key] = dtf;
  }
  return dtf;
};

export const addToDate = (
  date: Date,
  quantity: number,
  scale: DateHelperScales
) => {
  const newDate = new Date(
    date.getFullYear() + (scale === "year" ? quantity : 0),
    date.getMonth() + (scale === "month" ? quantity : 0),
    date.getDate() + (scale === "day" ? quantity : 0),
    date.getHours() + (scale === "hour" ? quantity : 0),
    date.getMinutes() + (scale === "minute" ? quantity : 0),
    date.getSeconds() + (scale === "second" ? quantity : 0),
    date.getMilliseconds() + (scale === "millisecond" ? quantity : 0)
  );
  return newDate;
};

export const startOfDate = (date: Date, scale: DateHelperScales) => {
  const scores = [
    "millisecond",
    "second",
    "minute",
    "hour",
    "day",
    "month",
    "year",
  ];

  const shouldReset = (_scale: DateHelperScales) => {
    const maxScore = scores.indexOf(scale);
    return scores.indexOf(_scale) <= maxScore;
  };
  const newDate = new Date(
    date.getFullYear(),
    shouldReset("year") ? 0 : date.getMonth(),
    shouldReset("month") ? 1 : date.getDate(),
    shouldReset("day") ? 0 : date.getHours(),
    shouldReset("hour") ? 0 : date.getMinutes(),
    shouldReset("minute") ? 0 : date.getSeconds(),
    shouldReset("second") ? 0 : date.getMilliseconds()
  );
  return newDate;
};

export const ganttDateRange = (
  tasks: Task[],
) => {
  let newStartDate: Date = tasks[0].start;
  let newEndDate: Date = tasks[0].start;
  for (const task of tasks) {
    if (task.start < newStartDate) {
      newStartDate = task.start;
    }
    if (task.end > newEndDate) {
      newEndDate = task.end;
    }
  }
      newStartDate = addToDate(newStartDate, 0, "year");
      newStartDate = startOfDate(newStartDate, "year");
      newEndDate = addToDate(newEndDate, 1, "year");
      newEndDate = startOfDate(newEndDate, "year");
 
  return [newStartDate, newEndDate];
};

export const seedDates = (
  startDate: Date,
  endDate: Date,
  viewMode: ViewMode,
  interval: number
) => {
  let currentDate: Date = new Date(startDate);
  currentDate = addToDate(currentDate, -interval, "year")
  const dates: Date[] = [currentDate];
  console.log(interval);
  while (currentDate < endDate) {
    currentDate = addToDate(currentDate, interval, "year")
    switch (viewMode) {
        default:
          break;
    //   case ViewMode.Year:
    //     currentDate = addToDate(currentDate, 1, "year");
    //     break;
    //   case ViewMode.Month:
    //     currentDate = addToDate(currentDate, 2, "year");
    //     break;
    //   case ViewMode.Week:
    //     currentDate = addToDate(currentDate, 4, "year");
    //     break;
    //   case ViewMode.Day:
    //     currentDate = addToDate(currentDate, 8, "year");
    //     break;
    //   case ViewMode.HalfDay:
    //     currentDate = addToDate(currentDate, 16, "year");
    //     break;
    //   case ViewMode.QuarterDay:
    //     currentDate = addToDate(currentDate, 32, "year");
    //     break;
    //   case ViewMode.Hour:
    //     currentDate = addToDate(currentDate, 64, "year");
    //     break;
    }
    dates.push(currentDate);
  }
  return dates;
};

export const getLocaleMonth = (date: Date, locale: string) => {
  let bottomValue = getCachedDateTimeFormat(locale, {
    month: "long",
  }).format(date);
  bottomValue = bottomValue.replace(
    bottomValue[0],
    bottomValue[0].toLocaleUpperCase()
  );
  return bottomValue;
};

export const getLocalDayOfWeek = (
  date: Date,
  locale: string,
  format?: "long" | "short" | "narrow" | undefined
) => {
  let bottomValue = getCachedDateTimeFormat(locale, {
    weekday: format,
  }).format(date);
  bottomValue = bottomValue.replace(
    bottomValue[0],
    bottomValue[0].toLocaleUpperCase()
  );
  return bottomValue;
};

export const getWeekNumberISO8601 = (date: Date) => {
  const tmpDate = new Date(date.valueOf());
  const dayNumber = (tmpDate.getDay() + 6) % 7;
  tmpDate.setDate(tmpDate.getDate() - dayNumber + 3);
  const firstThursday = tmpDate.valueOf();
  tmpDate.setMonth(0, 1);
  if (tmpDate.getDay() !== 4) {
    tmpDate.setMonth(0, 1 + ((4 - tmpDate.getDay() + 7) % 7));
  }
  const weekNumber = (
    1 + Math.ceil((firstThursday - tmpDate.valueOf()) / 604800000)
  ).toString();

  if (weekNumber.length === 1) {
    return `0${weekNumber}`;
  } else {
    return weekNumber;
  }
};

export const getDaysInMonth = (month: number, year: number) => {
  return new Date(year, month + 1, 0).getDate();
};

export const getMaxZoom = (startDate: Date, endDate: Date, svgContainerWidth: number, columnWidth: number) => {
  let n = endDate.getFullYear() - startDate.getFullYear();
  console.log("n", n)
  let defWidth = svgContainerWidth === 0 ? 15: Math.floor(svgContainerWidth / columnWidth);
  console.log("defWidth", svgContainerWidth, columnWidth, defWidth)
  const threshold = 1.2;

  let maxZoom = Math.ceil(Math.log2(Math.ceil(n / defWidth)));
  console.log("maxZoom", maxZoom);

  if ((Math.ceil(n / defWidth) / Math.pow(2, maxZoom - 1)) < threshold) {
    maxZoom -= 1;
  }

  return maxZoom
};