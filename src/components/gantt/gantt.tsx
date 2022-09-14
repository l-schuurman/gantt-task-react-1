import React, {
  useState,
  SyntheticEvent,
  useRef,
  useEffect,
  useMemo,
} from "react";
import { GanttProps, Task } from "../../types/public-types";
import { GridProps } from "../grid/grid";
import { ganttCycleRange, seedCycles, getMaxZoom } from "../../helpers/date-helper";
import { CalendarProps } from "../calendar/calendar";
import { TaskGanttContentProps } from "./task-gantt-content";
import { TaskListHeaderDefault } from "../task-list/task-list-header";
import { TaskListTableDefault } from "../task-list/task-list-table";
import { StandardTooltipContent, Tooltip } from "../other/tooltip";
import { VerticalScroll } from "../other/vertical-scroll";
import { TaskListProps, TaskList } from "../task-list/task-list";
import { TaskGantt } from "./task-gantt";
import { BarTask } from "../../types/bar-task";
import { convertToBarTasks } from "../../helpers/bar-helper";
import { GanttEvent } from "../../types/gantt-task-actions";
import { HorizontalScroll } from "../other/horizontal-scroll";
import { removeHiddenTasks, sortTasks } from "../../helpers/other-helper";
import styles from "./gantt.module.css";

export const Gantt: React.FunctionComponent<GanttProps> = ({
  tasks,

  /* --- Pixel sizes for various parts of the Gantt chart --- */
  headerHeight = 30, // Height of Gantt chart header
  rowHeight = 20, // Height of each row in the table
  columnWidth = 60, // Width of each column in the table
  listCellWidth = "155px", // Width of each task cell
  barFill = 60, // Percent of the row the bar fills. 100 = full row bar, 50 = half row bar
  barCornerRadius = 3, // How rounded the bars are, 0 = rectangles
  arrowIndent = 20, // Arrow path leading to/from tasks
  minTaskWidth = 5, // In large designs, tasks will not be visible, so set a minimum width of 5px.
  fontSize = 14,

  /* Default is 0, renders unlimited height if no ganttHeight is passed in, 
     otherwise renders limited height with vertical scroll*/
  ganttHeight = 0,

  /* --- COLOR STYLES --- */
  barBackgroundColor = "#b8c2cc",
  barBackgroundSelectedColor = "#28eaed",
  projectBackgroundColor = "#fac465",
  projectBackgroundSelectedColor = "#f7bb53",
  milestoneBackgroundColor = "#f1c453",
  milestoneBackgroundSelectedColor = "#f29e4c",
  arrowColor = "grey",
  fontFamily = "Arial, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue",
  
  viewCycle,
  TooltipContent = StandardTooltipContent,
  TaskListHeader = TaskListHeaderDefault,
  TaskListTable = TaskListTableDefault,
  onClick,
  onSelect,
  onExpanderClick,
  onZoomChange,
  zoomLevel,
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);                            // DOM element of entire chart
  const taskListRef = useRef<HTMLDivElement>(null);                           // Dom element of the task details left pane

  const [taskListWidth, setTaskListWidth] = useState(0);                      // Width of the task list
  const [svgContainerWidth, setSvgContainerWidth] = useState(0);              // Width of the chart component
  const [svgContainerHeight, setSvgContainerHeight] = useState(ganttHeight);  // Height of the chart component
  const [barTasks, setBarTasks] = useState<BarTask[]>([]);                    // Array of the tasks
  const [ganttEvent, setGanttEvent] = useState<GanttEvent>({                  // Defines a mouse action
    action: "",
  });
  const taskHeight = useMemo(                                                 // Height of each bar
    () => rowHeight * (barFill / 100),
    [rowHeight, barFill]
  );

  const [start, end] = ganttCycleRange(tasks);

  // Determine maximum zoom level and constrain the current zoomLevel in the range [0, maxZoom]
  const maxZoom = getMaxZoom(start, end, svgContainerWidth, columnWidth)
  zoomLevel = Math.min(maxZoom, zoomLevel);
  zoomLevel = Math.max(0, zoomLevel);
  onZoomChange(zoomLevel);

  // Determine the interval the tasks while be displayed
  const zoomInterval = Math.pow(2, maxZoom - zoomLevel);

  // Create the array of values the Gantt chart will be rendered to
  const [cycles, setCycles] = useState<number[]>(() => {
    const [start, end] = ganttCycleRange(tasks);
    return seedCycles(start, end, zoomInterval);
  });

  // 
  const [currentViewCycle, setCurrentViewCycle] = useState<number | undefined>(
    undefined
  );

  const [selectedTask, setSelectedTask] = useState<BarTask>();

  const svgWidth = (cycles.length - 1) * columnWidth;
  const ganttFullHeight = barTasks.length * rowHeight;

  const [scrollY, setScrollY] = useState(0);
  const [scrollX, setScrollX] = useState(-1);
  const [ignoreScrollEvent, setIgnoreScrollEvent] = useState(false);

  // task change events
  useEffect(() => {
    let filteredTasks: Task[];
    if (onExpanderClick) {
      filteredTasks = removeHiddenTasks(tasks);
    } else {
      filteredTasks = tasks;
    }
    filteredTasks = filteredTasks.sort(sortTasks);
    const [start, end] = ganttCycleRange(
      filteredTasks);
    let newCycles = seedCycles(start, end, zoomInterval);
    setCycles(newCycles);
    setBarTasks(
      convertToBarTasks(
        filteredTasks,
        newCycles,
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
      )
    );
  }, [
    tasks,
    rowHeight,
    barCornerRadius,
    columnWidth,
    taskHeight,
    minTaskWidth,
    barBackgroundColor,
    barBackgroundSelectedColor,
    projectBackgroundColor,
    projectBackgroundSelectedColor,
    milestoneBackgroundColor,
    milestoneBackgroundSelectedColor,
    scrollX,
    onExpanderClick,
  ]);

  useEffect(() => {
    if (
      ((viewCycle && !currentViewCycle) ||
        (viewCycle && currentViewCycle?.valueOf() !== viewCycle.valueOf()))
    ) {
      const tempCycles = cycles;
      const index = tempCycles.findIndex(
        (d, i) =>
          viewCycle >= d &&
          i + 1 !== tempCycles.length &&
          viewCycle < tempCycles[i + 1]
      );
      if (index === -1) {
        return;
      }
      setCurrentViewCycle(viewCycle);
      setScrollX(columnWidth * index);
    }
  }, [
    viewCycle,
    columnWidth,
    cycles,
    currentViewCycle,
    setCurrentViewCycle,
  ]);

  useEffect(() => {
    if (!listCellWidth) {
      setTaskListWidth(0);
    }
    if (taskListRef.current) {
      setTaskListWidth(taskListRef.current.offsetWidth);
    }
  }, [taskListRef, listCellWidth]);

  useEffect(() => {
    if (wrapperRef.current) {
      setSvgContainerWidth(wrapperRef.current.offsetWidth - taskListWidth);
    }
  }, [wrapperRef, taskListWidth]);

  useEffect(() => {
    if (ganttHeight) {
      setSvgContainerHeight(ganttHeight + headerHeight);
    } else {
      setSvgContainerHeight(tasks.length * rowHeight + headerHeight);
    }
  }, [ganttHeight, tasks, headerHeight, rowHeight]);

  // scroll events
  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (event.shiftKey || event.deltaX) {
        const scrollMove = event.deltaX ? event.deltaX : event.deltaY;
        let newScrollX = scrollX + scrollMove;
        if (newScrollX < 0) {
          newScrollX = 0;
        } else if (newScrollX > svgWidth) {
          newScrollX = svgWidth;
        }
        setScrollX(newScrollX);
        event.preventDefault();
      } else if (ganttHeight) {
        let newScrollY = scrollY + event.deltaY;
        if (newScrollY < 0) {
          newScrollY = 0;
        } else if (newScrollY > ganttFullHeight - ganttHeight) {
          newScrollY = ganttFullHeight - ganttHeight;
        }
        if (newScrollY !== scrollY) {
          setScrollY(newScrollY);
          event.preventDefault();
        }
      }

      setIgnoreScrollEvent(true);
    };

    // subscribe if scroll is necessary
    wrapperRef.current?.addEventListener("wheel", handleWheel, {
      passive: false,
    });
    return () => {
      wrapperRef.current?.removeEventListener("wheel", handleWheel);
    };
  }, [
    wrapperRef,
    scrollY,
    scrollX,
    ganttHeight,
    svgWidth,
    ganttFullHeight,
  ]);

  const handleScrollY = (event: SyntheticEvent<HTMLDivElement>) => {
    if (scrollY !== event.currentTarget.scrollTop && !ignoreScrollEvent) {
      setScrollY(event.currentTarget.scrollTop);
      setIgnoreScrollEvent(true);
    } else {
      setIgnoreScrollEvent(false);
    }
  };

  const handleScrollX = (event: SyntheticEvent<HTMLDivElement>) => {
    if (scrollX !== event.currentTarget.scrollLeft && !ignoreScrollEvent) {
      setScrollX(event.currentTarget.scrollLeft);
      setIgnoreScrollEvent(true);
    } else {
      setIgnoreScrollEvent(false);
    }
  };

  /**
   * Handles arrow keys events and transform it to new scroll
   */
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    event.preventDefault();
    let newScrollY = scrollY;
    let newScrollX = scrollX;
    let isX = true;
    switch (event.key) {
      case "Down": // IE/Edge specific value
      case "ArrowDown":
        newScrollY += rowHeight;
        isX = false;
        break;
      case "Up": // IE/Edge specific value
      case "ArrowUp":
        newScrollY -= rowHeight;
        isX = false;
        break;
      case "Left":
      case "ArrowLeft":
        newScrollX -= columnWidth;
        break;
      case "Right": // IE/Edge specific value
      case "ArrowRight":
        newScrollX += columnWidth;
        break;
    }
    if (isX) {
      if (newScrollX < 0) {
        newScrollX = 0;
      } else if (newScrollX > svgWidth) {
        newScrollX = svgWidth;
      }
      setScrollX(newScrollX);
    } else {
      if (newScrollY < 0) {
        newScrollY = 0;
      } else if (newScrollY > ganttFullHeight - ganttHeight) {
        newScrollY = ganttFullHeight - ganttHeight;
      }
      setScrollY(newScrollY);
    }
    setIgnoreScrollEvent(true);
  };

  /**
   * Task select event
   */
  const handleSelectedTask = (taskId: string) => {
    const newSelectedTask = barTasks.find(t => t.id === taskId);
    const oldSelectedTask = barTasks.find(
      t => !!selectedTask && t.id === selectedTask.id
    );
    if (onSelect) {
      if (oldSelectedTask) {
        onSelect(oldSelectedTask, false);
      }
      if (newSelectedTask) {
        onSelect(newSelectedTask, true);
      }
    }
    setSelectedTask(newSelectedTask);
  };
  const handleExpanderClick = (task: Task) => {
    if (onExpanderClick && task.hideChildren !== undefined) {
      onExpanderClick({ ...task, hideChildren: !task.hideChildren });
    }
  };

  const gridProps: GridProps = {
    columnWidth,
    svgWidth,
    tasks: tasks,
    rowHeight,
    cycles: cycles,
  };
  const calendarProps: CalendarProps = {
    cycles,
    headerHeight,
    columnWidth,
    fontFamily,
    fontSize,
  };
  const barProps: TaskGanttContentProps = {
    tasks: barTasks,
    cycles: cycles,
    ganttEvent,
    selectedTask,
    rowHeight,
    taskHeight,
    columnWidth,
    arrowColor,
    fontFamily,
    fontSize,
    arrowIndent,
    svgWidth,
    setGanttEvent,
    setSelectedTask: handleSelectedTask,
    onClick,
  };

  const tableProps: TaskListProps = {
    rowHeight,
    rowWidth: listCellWidth,
    fontFamily,
    fontSize,
    tasks: barTasks,
    headerHeight,
    scrollY,
    ganttHeight,
    horizontalContainerClass: styles.horizontalContainer,
    selectedTask,
    taskListRef,
    setSelectedTask: handleSelectedTask,
    onExpanderClick: handleExpanderClick,
    TaskListHeader,
    TaskListTable,
  };
  return (
    <div>
      <div
        className={styles.wrapper}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        ref={wrapperRef}
      >
        {listCellWidth && <TaskList {...tableProps} />}
        <TaskGantt
          gridProps={gridProps}
          calendarProps={calendarProps}
          barProps={barProps}
          ganttHeight={ganttHeight}
          scrollY={scrollY}
          scrollX={scrollX}
        />
        {ganttEvent.changedTask && (
          <Tooltip
            arrowIndent={arrowIndent}
            rowHeight={rowHeight}
            svgContainerHeight={svgContainerHeight}
            svgContainerWidth={svgContainerWidth}
            fontFamily={fontFamily}
            fontSize={fontSize}
            scrollX={scrollX}
            scrollY={scrollY}
            task={ganttEvent.changedTask}
            headerHeight={headerHeight}
            taskListWidth={taskListWidth}
            TooltipContent={TooltipContent}
            svgWidth={svgWidth}
          />
        )}
        <VerticalScroll
          ganttFullHeight={ganttFullHeight}
          ganttHeight={ganttHeight}
          headerHeight={headerHeight}
          scroll={scrollY}
          onScroll={handleScrollY}
        />
      </div>
      <HorizontalScroll
        svgWidth={svgWidth}
        taskListWidth={taskListWidth}
        scroll={scrollX}
        onScroll={handleScrollX}
      />
    </div>
  );
};
