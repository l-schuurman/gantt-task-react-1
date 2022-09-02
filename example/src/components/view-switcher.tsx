import React from "react";
import "gantt-task-react/dist/index.css";
type ViewSwitcherProps = {
  isChecked: boolean;
  zoomLevel: number;
  onViewListChange: (isChecked: boolean) => void;
  onZoomChange: (zoomLevel: number) => void;
};

export const ViewSwitcher: React.FC<ViewSwitcherProps> = ({
  onViewListChange,
  onZoomChange,
  isChecked,
  zoomLevel
}) => {
  return (
    <div className="ViewContainer">
      <button
        className="Button"
        onClick={() => onZoomChange(zoomLevel - 1)}
      >
        -{zoomLevel}
      </button>

      <button
        className="Button"
        onClick={() => onZoomChange(zoomLevel + 1)}
      >
        +{zoomLevel}
      </button>

      <div className="Switch">
        <label className="Switch_Toggle">
          <input
            type="checkbox"
            defaultChecked={isChecked}
            onClick={() => onViewListChange(!isChecked)}
          />
          <span className="Slider" />
        </label>
        Show Task List
      </div>
    </div>
  );
};
