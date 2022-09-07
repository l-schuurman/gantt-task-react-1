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
      isDisabled: true,
    }
    if (taskItem.id !== "1") {
      taskItem.project = String(node.pParent);
    }

    console.log(parents, taskItem.id)
    if (parents.has(taskItem.id)) {
      console.log("hiiiii")
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
  tasks[0].start = start;
  tasks[0].end = end;
  tasks[0].hideChildren = false;


  // tasks[0] = projectTaskItem;

  // const currentDate = new Date();
  // const tasks: Task[] = [
  //   {
  //     start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 6),
  //     end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
  //     name: "Some Project",
  //     id: "ProjectSample",
  //     progress: 25,
  //     type: "task",
  //   },
  //   {
  //     start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
  //     end: new Date(
  //       currentDate.getFullYear(),
  //       currentDate.getMonth(),
  //       2,
  //       12,
  //       28
  //     ),
  //     name: "Idea",
  //     id: "Task 0",
  //     progress: 45,
  //     type: "task",
  //   },
  //   {
  //     start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
  //     end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4, 0, 0),
  //     name: "Research",
  //     id: "Task 1",
  //     progress: 25,
  //     dependencies: ["Task 0"],
  //     type: "task",
  //   },
  //   {
  //     start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4),
  //     end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8, 0, 0),
  //     name: "Discussion with team",
  //     id: "Task 2",
  //     progress: 10,
  //     dependencies: ["Task 1"],
  //     type: "task",
  //   },
  //   {
  //     start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
  //     end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 9, 0, 0),
  //     name: "Developing",
  //     id: "Task 3",
  //     progress: 2,
  //     dependencies: ["Task 2"],
  //     type: "task",
  //   },
  //   {
  //     start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
  //     end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 10),
  //     name: "Review",
  //     id: "Task 4",
  //     type: "task",
  //     progress: 70,
  //     dependencies: ["Task 2"],
  //   },
  //   {
  //     start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
  //     end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
  //     name: "Release",
  //     id: "Task 6",
  //     progress: currentDate.getMonth(),
  //     type: "milestone",
  //     dependencies: ["Task 4"],
  //   },
  //   {
  //     start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 18),
  //     end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 19),
  //     name: "Party Time",
  //     id: "Task 9",
  //     progress: 0,
  //     type: "task",
  //   },
  // ];
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
