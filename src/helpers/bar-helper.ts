import { Task } from "../types/public-types";
import { BarTask, TaskTypeInternal } from "../types/bar-task";

export const convertToBarTasks = (
  tasks: Task[],
  cycles: number[],
  columnWidth: number,
  rowHeight: number,
  taskHeight: number,
  barCornerRadius: number,
  minTaskWidth: number,
  barBackgroundColor: string,
  barBackgroundSelectedColor: string,
  projectBackgroundColor: string,
  projectBackgroundSelectedColor: string,
  milestoneBackgroundColor: string,
  milestoneBackgroundSelectedColor: string
) => {
  let barTasks = tasks.map((t, i) => {
    return convertToBarTask(
      t,
      i,
      cycles,
      columnWidth,
      rowHeight,
      taskHeight,
      barCornerRadius,
      minTaskWidth,
      barBackgroundColor,
      barBackgroundSelectedColor,
      projectBackgroundColor,
      projectBackgroundSelectedColor,
      milestoneBackgroundColor,
      milestoneBackgroundSelectedColor
    );
  });

  // set dependencies
  barTasks = barTasks.map(task => {
    const dependencies = task.dependencies || [];
    for (let j = 0; j < dependencies.length; j++) {
      const dependence = barTasks.findIndex(
        value => value.id === dependencies[j]
      );
      if (dependence !== -1) barTasks[dependence].barChildren.push(task);
    }
    return task;
  });

  return barTasks;
};

const convertToBarTask = (
  task: Task,
  index: number,
  cycles: number[],
  columnWidth: number,
  rowHeight: number,
  taskHeight: number,
  barCornerRadius: number,
  minTaskWidth: number,
  barBackgroundColor: string,
  barBackgroundSelectedColor: string,
  projectBackgroundColor: string,
  projectBackgroundSelectedColor: string,
  milestoneBackgroundColor: string,
  milestoneBackgroundSelectedColor: string
): BarTask => {
  let barTask: BarTask;
  switch (task.type) {
    case "milestone":
      barTask = convertToMilestone(
        task,
        index,
        cycles,
        columnWidth,
        rowHeight,
        taskHeight,
        barCornerRadius,
        minTaskWidth,
        milestoneBackgroundColor,
        milestoneBackgroundSelectedColor
      );
      break;
    case "project":
      barTask = convertToBar(
        task,
        index,
        cycles,
        columnWidth,
        rowHeight,
        taskHeight,
        barCornerRadius,
        minTaskWidth,
        projectBackgroundColor,
        projectBackgroundSelectedColor
      );
      break;
    default:
      barTask = convertToBar(
        task,
        index,
        cycles,
        columnWidth,
        rowHeight,
        taskHeight,
        barCornerRadius,
        minTaskWidth,
        barBackgroundColor,
        barBackgroundSelectedColor
      );
      break;
  }
  return barTask;
};

const convertToBar = (
  task: Task,
  index: number,
  cycles: number[],
  columnWidth: number,
  rowHeight: number,
  taskHeight: number,
  barCornerRadius: number,
  minTaskWidth: number,
  barBackgroundColor: string,
  barBackgroundSelectedColor: string
): BarTask => {
  let x1: number;
  let x2: number;
  x1 = taskXCoordinate(task.start, cycles, columnWidth);
  x2 = taskXCoordinate(task.end, cycles, columnWidth);

  let typeInternal: TaskTypeInternal = task.type;
  if (typeInternal === "task" && x2 - x1 < minTaskWidth) {
    typeInternal = "smalltask";
    x2 = x1 + minTaskWidth;
  }

  const y = taskYCoordinate(index, rowHeight, taskHeight);
  const hideChildren = task.type === "project" ? task.hideChildren : undefined;

  const styles = {
    backgroundColor: barBackgroundColor,
    backgroundSelectedColor: barBackgroundSelectedColor,
    ...task.styles,
  };
  return {
    ...task,
    typeInternal,
    x1,
    x2,
    y,
    index,
    barCornerRadius,
    minTaskWidth,
    hideChildren,
    height: taskHeight,
    barChildren: [],
    styles,
  };
};

const convertToMilestone = (
  task: Task,
  index: number,
  cycles: number[],
  columnWidth: number,
  rowHeight: number,
  taskHeight: number,
  barCornerRadius: number,
  minTaskWidth: number,
  milestoneBackgroundColor: string,
  milestoneBackgroundSelectedColor: string
): BarTask => {
  const x = taskXCoordinate(task.start, cycles, columnWidth);
  const y = taskYCoordinate(index, rowHeight, taskHeight);

  const x1 = x - taskHeight * 0.5;
  const x2 = x + taskHeight * 0.5;

  const rotatedHeight = taskHeight / 1.414;
  const styles = {
    backgroundColor: milestoneBackgroundColor,
    backgroundSelectedColor: milestoneBackgroundSelectedColor,
    ...task.styles,
  };
  return {
    ...task,
    end: task.start,
    x1,
    x2,
    y,
    index,
    barCornerRadius,
    minTaskWidth,
    typeInternal: task.type,
    height: rotatedHeight,
    hideChildren: undefined,
    barChildren: [],
    styles,
  };
};

const taskXCoordinate = (xCycle: number, cycles: number[], columnWidth: number) => {
  const index = cycles.findIndex(d => d > xCycle) - 1;

  let percentOfInterval = 0;

  if (cycles[index] !== xCycle) {
    const remainderMillis = xCycle - cycles[index];
    percentOfInterval = remainderMillis / (cycles[index + 1] - cycles[index]);
  }

  const x = index * columnWidth + percentOfInterval * columnWidth;
  return x;
};

const taskYCoordinate = (
  index: number,
  rowHeight: number,
  taskHeight: number
) => {
  const y = index * rowHeight + (rowHeight - taskHeight) / 2;
  return y;
};