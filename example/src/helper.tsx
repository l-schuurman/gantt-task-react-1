import { Task, TaskType } from "../../dist/types/public-types";

export function initTasks() {

  const { scheduleJSON } = require('./radix.js')

  let tasks: Task[] = [];

  let parents = new Set();
  scheduleJSON.forEach((element: any) => {
    parents.add(String(element.pParent));
  })

  scheduleJSON.forEach((node: any, index: any) => {

    let taskItem: Task = {
      id: String(node.pID),
      type: "task" as TaskType,
      start: node.pStart,
      end: node.pEnd,
      name: node.pName,
      dependencies: node.pDepend.map(String),
      displayOrder: index + 1,
      source: node.pRes.text,
    }
    if (taskItem.id !== "1") {
      taskItem.project = String(node.pParent);
    }

    if (parents.has(taskItem.id)) {
      taskItem.type = "project";
      taskItem.hideChildren = true;
    } else {
      taskItem.type = "task";
    }

    tasks.push(taskItem);

  }
  );
  console.log(tasks)

  let [start, end] = getStartEndDate(tasks);
  tasks[0].start = Math.max(start, 0);
  tasks[0].end = end - start;

  //  Unhide the top row
  tasks[0].hideChildren = false;

  return tasks;
}

export function getStartEndDateForProject(tasks: Task[], projectId: string) {
  const projectTasks = tasks.filter(t => t.project === projectId);
  let start = projectTasks[0].start;
  let end = projectTasks[0].end;

  for (let i = 0; i < projectTasks.length; i++) {
    const task = projectTasks[i];
    if (start > task.start) {
      start = task.start;
    }
    if (end < task.end) {
      end = task.end;
    }
  }
  return [start, end];
}

function getStartEndDate(tasks: Task[]) {
  let start = tasks[0].start;
  let end = tasks[0].end;

  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    if (start > task.start) {
      start = task.start;
    }
    if (end < task.end) {
      end = task.end;
    }
  }
  return [start, end];
}
