export type TimeSlot =
  | "07:00-09:00"
  | "09:00-11:30"
  | "12:00-13:00"
  | "13:30-16:00"
  | "17:00-18:00"
  | "20:00";

export type ScheduleDate =
  | "2025-07-26"
  | "2025-07-27"
  | "2025-07-28"
  | "2025-07-29"
  | "2025-07-30"
  | "2025-07-31"
  | "2025-08-01"
  | "2025-08-02"
  | "2025-08-03";

export type MealType =
  | "Frukost"
  | "Lunch"
  | "Middag";

export type ActivityType =
  | "Antikens Grekland"
  | "Avslutning/Disco"
  | "Bio"
  | "Bygga läger"
  | "Bygga läger / Programboxar"
  | "Eget program"
  | "FlowerPower"
  | "Framtidsmässa"
  | "Hemresa"
  | "Invigning"
  | "Klanernas kamp"
  | "Kvällsaktivitet"
  | "Lägerbål"
  | "Ledig kväll"
  | "Melonjakt"
  | "Olympiad"
  | "Programboxar"
  | "Paddling"
  | "Singalong"
  | "Stenåldern"
  | "Vikingatiden";

export interface DaySchedule {
  date: ScheduleDate;
  department: string;
  activities: ActivityType[];
  meals: MealType[];
}
