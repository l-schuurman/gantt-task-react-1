import { Task } from "../types/public-types";

export const addToCycle = (
  cycle: number,
  quantity: number,
) => {
  return cycle + quantity;
};

export const ganttCycleRange = (
  tasks: Task[],
) => {
  let newStart: number = tasks[0].start;
  let newEnd: number = tasks[0].start;
  for (const task of tasks) {
    if (task.start < newStart) {
      newStart = task.start;
    }
    if (task.end > newEnd) {
      newEnd = task.end;
    }
  }
  newEnd = addToCycle(newEnd, 1);

  return [newStart, newEnd];
};

export const seedCycles = (
  start: number,
  end: number,
  interval: number
) => {
  let current: number = start;
  current = addToCycle(current, -interval)
  const cycles: number[] = [current];
  while (current < end) {
    current = addToCycle(current, interval)
    cycles.push(current);
  }
  return cycles;
};

export const getMaxZoom = (start: number, end: number, svgContainerWidth: number, columnWidth: number) => {
  let n = end - start;
  let defWidth = svgContainerWidth === 0 ? 15 : Math.floor(svgContainerWidth / columnWidth);
  const threshold = 1.2;

  let maxZoom = Math.ceil(Math.log2(Math.ceil(n / defWidth)));

  if ((Math.ceil(n / defWidth) / Math.pow(2, maxZoom - 1)) < threshold) {
    maxZoom -= 1;
  }

  return maxZoom
};