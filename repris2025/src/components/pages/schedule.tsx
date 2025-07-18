import { useState } from "react";
import ScheduleTable from "../ScheduleTable";
import type { DaySchedule, TimeSlot } from "../../types/types";
const times: TimeSlot[] = [
  "07:00-09:00",
  "09:00-11:30",
  "12:00-13:00",
  "13:30-16:00",
  "17:00-18:00",
  "20:00",
];

const schedules: DaySchedule[] = [
  {
    date: "2025-07-30",
    department: "Spårarna",
    meals: ["Lunch", "Middag"],
    activities: [ "FlowerPower", "Lägerbål"],
  },
  {
    date: "2025-07-31",
    department: "Spårarna",
    meals: ["Frukost", "Lunch", "Middag"],
    activities: ["Programboxar", "Olympiad", "Ledig kväll"],
  },
  {
    date: "2025-08-01",
    department: "Spårarna",
    meals: ["Frukost", "Lunch", "Middag"],
    activities: ["Framtidsmässa", "Framtidsmässa", "Avslutning/Disco"],
  },
  {
    date: "2025-08-02",
    department: "Spårarna",
    meals: ["Frukost"],
    activities: ["Hemresa"],
  },

  // Upptäckare schedule for all 8 days
  {
    date: "2025-07-26",
    department: "Upptäckarna",
    meals: ["Middag"],
    activities: ["Bygga läger", "Bio"],
  },
  {
    date: "2025-07-27",
    department: "Upptäckarna",
    meals: ["Frukost", "Lunch", "Middag"],
    activities: ["Bygga läger / Programboxar", "Bygga läger / Programboxar", "Invigning"],
  },
  {
    date: "2025-07-28",
    department: "Upptäckarna",
    meals: ["Frukost", "Lunch", "Middag"],
    activities: ["FlowerPower", "Programboxar", "Singalong"],
  },
  {
    date: "2025-07-29",
    department: "Upptäckarna",
    meals: ["Frukost", "Lunch", "Middag"],
    activities: ["Programboxar", "Antikens Grekland", "Bio"],
  },
  {
    date: "2025-07-30",
    department: "Upptäckarna",
    meals: ["Frukost", "Lunch", "Middag"],
    activities: ["Stenåldern", "Programboxar", "Lägerbål"],
  },
  {
    date: "2025-07-31",
    department: "Upptäckarna",
    meals: ["Frukost", "Lunch", "Middag"],
    activities: ["Programboxar", "Vikingatiden", "Ledig kväll"],
  },
  {
    date: "2025-08-01",
    department: "Upptäckarna",
    meals: ["Frukost", "Lunch", "Middag"],
    activities: ["Framtidsmässa", "Framtidsmässa", "Avslutning/Disco"],
  },
  {
    date: "2025-08-02",
    department: "Upptäckarna",
    meals: ["Frukost"],
    activities: ["Hemresa"],
  },
  // Äventyrarna schedule for all 8 days
  {
    date: "2025-07-26",
    department: "Äventyrarna",
    meals: ["Middag"],
    activities: ["Bygga läger", "Bio"],
  },
  {
    date: "2025-07-27",
    department: "Äventyrarna",
    meals: ["Frukost", "Lunch", "Middag"],
    activities: ["Bygga läger / Programboxar", "Bygga läger / Programboxar", "Invigning"],
  },
  {
    date: "2025-07-28",
    department: "Äventyrarna",
    meals: ["Frukost", "Lunch", "Middag"],
    activities: ["Programboxar", "Antikens Grekland", "Singalong"],
  },
  {
    date: "2025-07-29",
    department: "Äventyrarna",
    meals: ["Frukost", "Lunch", "Middag"],
    activities: ["FlowerPower", "Programboxar", "Bio"],
  },
  {
    date: "2025-07-30",
    department: "Äventyrarna",
    meals: ["Frukost", "Lunch", "Middag"],
    activities: ["Vikingatiden", "Programboxar", "Lägerbål"],
  },
  {
    date: "2025-07-31",
    department: "Äventyrarna",
    meals: ["Frukost", "Lunch", "Middag"],
    activities: ["Stenåldern", "Programboxar", "Ledig kväll"],
  },
  {
    date: "2025-08-01",
    department: "Äventyrarna",
    meals: ["Frukost", "Lunch", "Middag"],
    activities: ["Framtidsmässa", "Framtidsmässa", "Avslutning/Disco"],
  },
  {
    date: "2025-08-02",
    department: "Äventyrarna",
    meals: ["Frukost"],
    activities: ["Hemresa"],
  },

  // Utmanarna schedule for all 8 days
  {
    date: "2025-07-26",
    department: "Utmanarna",
    meals: ["Middag"],
    activities: ["Bygga läger", "Bio"],
  },
  {
    date: "2025-07-27",
    department: "Utmanarna",
    meals: ["Frukost", "Lunch", "Middag"],
    activities: ["Bygga läger / Programboxar", "Bygga läger / Programboxar", "Invigning"],
  },
  {
    date: "2025-07-28",
    department: "Utmanarna",
    meals: ["Frukost", "Lunch", "Middag"],
    activities: ["Melonjakt", "Melonjakt", "Singalong"],
  },
  {
    date: "2025-07-29",
    department: "Utmanarna",
    meals: ["Frukost", "Lunch", "Middag"],
    activities: ["Programboxar", "Klanernas kamp", "Eget program"],
  },
  {
    date: "2025-07-30",
    department: "Utmanarna",
    meals: ["Frukost", "Lunch", "Middag"],
    activities: ["Paddling", "Programboxar", "Kvällsaktivitet"],
  },
  {
    date: "2025-07-31",
    department: "Utmanarna",
    meals: ["Frukost", "Lunch", "Middag"],
    activities: ["Programboxar", "FlowerPower", "Ledig kväll"],
  },
  {
    date: "2025-08-01",
    department: "Utmanarna",
    meals: ["Frukost", "Lunch", "Middag"],
    activities: ["Framtidsmässa", "Framtidsmässa", "Avslutning/Disco"],
  },
  {
    date: "2025-08-02",
    department: "Utmanarna",
    meals: ["Frukost"],
    activities: ["Hemresa"],
  },
];

const departments = Array.from(new Set(schedules.map(s => s.department)));

const SchedulePage = () => {
  const [selectedDept, setSelectedDept] = useState<string>(departments[0]);
  const selectedSchedules = schedules.filter(s => s.department === selectedDept);

  return (
    <section className="schedule-page">
      <h1>Schema</h1>
      <h2>Schemat för de olika avdelningarna</h2>
      <div className="schedule-controls-card schedule-controls-vertical">
        <label htmlFor="department-select" className="schedule-controls-label">Välj Avdelning: </label>
        <select
          id="department-select"
          value={selectedDept}
          onChange={e => setSelectedDept(e.target.value)}
          className="custom-select"
        >
          {departments.map(dept => (
            <option key={dept} value={dept}>{dept}</option>
          ))}
        </select>
      </div> {/* End schedule-controls */}
      <h1>{selectedDept}</h1>
      <div className="schedule-table-wrapper"> 
        {selectedSchedules.map((schedule) => {
          let customTimes = times;
          // For Spårare 2025-07-30, remove first two timeslots
          if (schedule.department === "Spårarna" && schedule.date === "2025-07-30") {
            customTimes = times.slice(2);
          }
          // For all departments on 2025-08-02, remove last four timeslots
          else if (schedule.date === "2025-08-02") {
            customTimes = times.slice(0, 2);
          }
          // For Upptäckare, Äventyrarna, Utmanarna on 2025-07-26, remove first three timeslots
          else if (
            ["Upptäckarna", "Äventyrarna", "Utmanarna"].includes(schedule.department) &&
            schedule.date === "2025-07-26"
          ) {
            customTimes = times.slice(3);
          }
          let cardClass = "schedule-table-item";
          if (selectedDept === "Spårarna") cardClass += " sparare-bg";
          if (selectedDept === "Upptäckarna") cardClass += " upptackare-bg";
          if (selectedDept === "Äventyrarna") cardClass += " aventyrarna-bg";
          if (selectedDept === "Utmanarna") cardClass += " utmanarna-bg";
          return (
            <div key={schedule.date + schedule.department} className={cardClass}>
              <ScheduleTable times={customTimes} schedule={schedule} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SchedulePage