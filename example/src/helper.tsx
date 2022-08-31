import { Task, TaskType } from "../../dist/types/public-types";

export function initTasks() {
// const scheduleJSON = JSON.parse(require('C:\\Users\\Black\\Code\\ReactProjects\\gantt-task-react\\example\\src\\scheduleJSONaes.json'));
// const { scheduleJSON } = require('./scheduleJSONaes.js')


const { scheduleJSON } = require('./radix.js')

  let tasks: Task[] = [];

  // let projectID = String(scheduleJSON[0].pID);
  // let projectTaskItem = {
  //   id: String(scheduleJSON[0].pID),
  //   type: "task",
  //   start: new Date(2000 + scheduleJSON[0].pStart),
  //   end: new Date(2000 + scheduleJSON[0].pEnd),
  //   name: scheduleJSON[0].pName,
  //   progress: 100,
  //   dependencies: scheduleJSON[0].pDepend.map(String),
  // }

  scheduleJSON.forEach((node: any, index: any) => {

    let taskItem = {
      id: String(node.pID),
      type: "task" as TaskType,
      start: new Date(2000 + node.pStart, 0),
      end: new Date(2000 + node.pEnd, 0),
      name: node.pName,
      progress: 100,
      dependencies: node.pDepend.map(String),
      displayOrder: index,
      isDisabled: true,
    }

    tasks.push(taskItem);
  });

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
    if (start.getTime() > task.start.getTime()) {
      start = task.start;
    }
    if (end.getTime() < task.end.getTime()) {
      end = task.end;
    }
  }
  return [start, end];
}
