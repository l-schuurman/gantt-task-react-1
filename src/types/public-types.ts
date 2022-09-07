export type TaskType = "task" | "milestone" | "project";
export interface Task {
  id: string;
  type: TaskType;
  name: string;
  start: number;
  end: number;
  styles?: {
    backgroundColor?: string;
    backgroundSelectedColor?: string;
  };
  isDisabled?: boolean;
  project?: string;
  dependencies?: string[];
  hideChildren?: boolean;
  displayOrder?: number;
}

export interface EventOption {
  /**
   * Time step value for date changes.
   */
  timeStep?: number;
  /**
   * Invokes on bar select on unselect.
   */
  onSelect?: (task: Task, isSelected: boolean) => void;
  /**
   * Invokes on bar click.
   */
  onClick?: (task: Task) => void;
  /**
   * Invokes on expander on task list
   */
  onExpanderClick?: (task: Task) => void;
}

export interface DisplayOption {
  viewCycle?: number;
  preStepsCount?: number;
  /**
   * Specifies the month name language. Able formats: ISO 639-2, Java Locale
   */
  locale?: string;
  onZoomChange: (zoomLevel: number) => void;
  zoomLevel: number;
}

export interface StylingOption {
  headerHeight?: number;
  columnWidth?: number;
  listCellWidth?: string;
  rowHeight?: number;
  ganttHeight?: number;
  barCornerRadius?: number;
  handleWidth?: number;
  fontFamily?: string;
  fontSize?: string;
  /**
   * How many of row width can be taken by task.
   * From 0 to 100
   */
  barFill?: number;
  barBackgroundColor?: string;
  barBackgroundSelectedColor?: string;
  projectBackgroundColor?: string;
  projectBackgroundSelectedColor?: string;
  milestoneBackgroundColor?: string;
  milestoneBackgroundSelectedColor?: string;
  arrowColor?: string;
  arrowIndent?: number;
  todayColor?: string;
  TooltipContent?: React.FC<{
    task: Task;
    fontSize: string;
    fontFamily: string;
  }>;
  TaskListHeader?: React.FC<{
    headerHeight: number;
    rowWidth: string;
    fontFamily: string;
    fontSize: string;
  }>;
  TaskListTable?: React.FC<{
    rowHeight: number;
    rowWidth: string;
    fontFamily: string;
    fontSize: string;
    locale: string;
    tasks: Task[];
    selectedTaskId: string;
    /**
     * Sets selected task by id
     */
    setSelectedTask: (taskId: string) => void;
    onExpanderClick: (task: Task) => void;
  }>;
}

export interface GanttProps extends EventOption, DisplayOption, StylingOption {
  tasks: Task[];
}
