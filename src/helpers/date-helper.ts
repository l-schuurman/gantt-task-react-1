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
  let newStartCycle: number = tasks[0].start;
  let newEndCycle: number = tasks[0].start;
  for (const task of tasks) {
    if (task.start < newStartCycle) {
      newStartCycle = task.start;
    }
    if (task.end > newEndCycle) {
      newEndCycle = task.end;
    }
  }
  newEndCycle = addToCycle(newEndCycle, 1);

  return [newStartCycle, newEndCycle];
};

export const seedCycles = (
  startCycle: number,
  endCycle: number,
  interval: number
) => {
  let currentCycle: number = startCycle;
  currentCycle = addToCycle(currentCycle, -interval)
  const cycles: number[] = [currentCycle];
  console.log(interval);
  while (currentCycle < endCycle) {
    currentCycle = addToCycle(currentCycle, interval)
    cycles.push(currentCycle);
  }
  return cycles;
};

export const getMaxZoom = (startCycle: number, endCycle: number, svgContainerWidth: number, columnWidth: number) => {
  let n = endCycle - startCycle;
  console.log("n", n)
  let defWidth = svgContainerWidth === 0 ? 15 : Math.floor(svgContainerWidth / columnWidth);
  console.log("defWidth", svgContainerWidth, columnWidth, defWidth)
  const threshold = 1.2;

  let maxZoom = Math.ceil(Math.log2(Math.ceil(n / defWidth)));
  console.log("maxZoom", maxZoom);

  if ((Math.ceil(n / defWidth) / Math.pow(2, maxZoom - 1)) < threshold) {
    maxZoom -= 1;
  }

  return maxZoom
};