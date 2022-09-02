import { Task } from "../types/public-types";

export const addToDate = (
  date: number,
  quantity: number,
) => {
  const newDate = date + quantity;
  return newDate;
};

export const ganttDateRange = (
  tasks: Task[],
) => {
  let newStartDate: number = tasks[0].start;
  let newEndDate: number = tasks[0].start;
  for (const task of tasks) {
    if (task.start < newStartDate) {
      newStartDate = task.start;
    }
    if (task.end > newEndDate) {
      newEndDate = task.end;
    }
  }
      newEndDate = addToDate(newEndDate, 1);
 
  return [newStartDate, newEndDate];
};

export const seedDates = (
  startDate: number,
  endDate: number,
  interval: number
) => {
  let currentDate: number = startDate;
  currentDate = addToDate(currentDate, -interval)
  const dates: number[] = [currentDate];
  console.log(interval);
  while (currentDate < endDate) {
    currentDate = addToDate(currentDate, interval)
    dates.push(currentDate);
  }
  return dates;
};

export const getMaxZoom = (startDate: number, endDate: number, svgContainerWidth: number, columnWidth: number) => {
  let n = endDate - startDate;
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