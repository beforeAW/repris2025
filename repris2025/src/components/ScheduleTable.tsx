import React from "react";
import type { TimeSlot } from "../types/types";
import type { DaySchedule } from "../types/types";

interface ScheduleTableProps {
  times: TimeSlot[];
  schedule: DaySchedule;
}

// Expects: times.length === meals.length + activities.length
// Layout: Meal, Activity, Meal, Activity, ...
const ScheduleTable: React.FC<ScheduleTableProps> = ({ times, schedule }) => {
  const { meals, activities, date } = schedule;
  const items: Array<{ time: TimeSlot; value: string }> = [];
  let mealIdx = 0;
  let activityIdx = 0;

  if (date === "2025-07-26") {
    // Start with activity, then alternate activity/meal
    for (let i = 0; i < times.length; i++) {
      if (i % 2 === 0 && activityIdx < activities.length) {
        items.push({ time: times[i], value: activities[activityIdx++] });
      } else if (mealIdx < meals.length) {
        items.push({ time: times[i], value: meals[mealIdx++] });
      }
    }
  } else {
    // Default: alternate meal/activity
    for (let i = 0; i < times.length; i++) {
      if (i % 2 === 0 && mealIdx < meals.length) {
        items.push({ time: times[i], value: meals[mealIdx++] });
      } else if (activityIdx < activities.length) {
        items.push({ time: times[i], value: activities[activityIdx++] });
      }
    }
  }

  return (
    <div className="schedule-table-container">
      <h2 className="schedule-table-date">{schedule.date}</h2>
      <table className="schedule-table">
        <tbody>
          {items.map((item, idx) => (
            <React.Fragment key={idx}>
              <tr>
                <td className="schedule-table-time">{item.time}</td>
              </tr>
              <tr>
                <td className="schedule-table-activity">{item.value}</td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScheduleTable;
