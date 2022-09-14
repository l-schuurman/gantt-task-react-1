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
  project?: string;
  dependencies?: string[];
  hideChildren?: boolean;
  displayOrder?: number;
  source?: string;
}

export interface EventOption {
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
  minTaskWidth?: number;
  fontFamily?: string;
  fontSize?: number;
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
    fontSize: number;
    fontFamily: string;
  }>;
  TaskListHeader?: React.FC<{
    headerHeight: number;
    rowWidth: string;
    fontFamily: string;
    fontSize: number;
  }>;
  TaskListTable?: React.FC<{
    rowHeight: number;
    rowWidth: string;
    fontFamily: string;
    fontSize: number;
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
