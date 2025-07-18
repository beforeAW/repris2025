import { useEffect, useState } from 'react';

interface CurrentWeather {
  temperature: number;
  windspeed: number;
  winddirection: number;
  weathercode: number;
}

interface DailyWeather {
  time: string[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  precipitation_sum: number[];
  weathercode: number[];
}

interface HourlyWeather {
  time: string[];
  temperature_2m: number[];
  precipitation: number[];
  weathercode: number[];
  winddirection_10m: number[];
}

interface WeatherApiResponse {
  current_weather: CurrentWeather;
  daily: DailyWeather;
  hourly: HourlyWeather;
}

const WEATHER_API =
  'https://api.open-meteo.com/v1/forecast?latitude=56.82940&longitude=16.41137&current_weather=true&hourly=temperature_2m,precipitation,weathercode,winddirection_10m&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,weathercode&timezone=auto';

const weatherIcons: Record<number, string> = {
  0: '☀️', // Clear
  1: '🌤️', // Mainly clear
  2: '⛅', // Partly cloudy
  3: '☁️', // Overcast
  45: '🌫️', // Fog
  48: '🌫️',
  51: '🌦️', // Drizzle
  53: '🌦️',
  55: '🌦️',
  61: '🌧️', // Rain
  63: '🌧️',
  65: '🌧️',
  71: '🌨️', // Snow
  73: '🌨️',
  75: '🌨️',
  80: '🌦️', // Showers
  81: '🌦️',
  82: '🌦️',
  95: '⛈️', // Thunderstorm
  96: '⛈️',
  99: '⛈️',
};

function degToCompass(num: number) {
  const val = Math.round(num / 22.5) % 16;
  return [
    'N', 'NNO', 'NO', 'ONO', 'O', 'OSO', 'SO', 'SSO',
    'S', 'SSV', 'SV', 'VSV', 'V', 'VNV', 'NV', 'NNV',
  ][val];
}

const WeatherPage = () => {
  const [weather, setWeather] = useState<WeatherApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(WEATHER_API)
      .then((res) => res.json())
      .then((data) => {
        setWeather(data);
        setLoading(false);
      })
      .catch(() => {
        setError('Kunde inte hämta väderdata.');
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Hämtar väder...</div>;
  if (error) return <div>{error}</div>;
  if (!weather || !weather.current_weather || !weather.daily || !weather.hourly) {
    return <div>Kunde inte hämta komplett väderdata.</div>;
  }

  const current = weather.current_weather;
  const daily = weather.daily;
  const hourly = weather.hourly;
  const today = daily.time[0];

  interface TodayHour {
    hour: string;
    date: string;
    temp: number;
    precip: number;
    code: number;
    winddir: number;
  }
  const todayHours: TodayHour[] = hourly.time
    .map((t: string, i: number): TodayHour => ({
      hour: t.slice(11, 16),
      date: t.slice(0, 10),
      temp: hourly.temperature_2m[i],
      precip: hourly.precipitation[i],
      code: hourly.weathercode[i],
      winddir: hourly.winddirection_10m[i],
    }))
    .filter((h: TodayHour) => h.date === today);

  return (
    <div>
      <section className="weather-section">
        <h1>Vädret på lägret</h1>
        <h2>Vädret idag</h2>
        <div className="weather-today-icon">
          {weatherIcons[current.weathercode] || '❓'}
        </div>
        <div className="weather-today-info">
          {current.temperature}°C, Vind: {(current.windspeed / 3.6).toFixed(1)} m/s, Riktning: {degToCompass(current.winddirection)} ({current.winddirection}°)
        </div>
        <h2>Timme för timme</h2>
        <ul className="weather-hour-list">
          {todayHours.map((h, i) => (
            <li key={i} className="weather-hour-item">
              <div style={{fontWeight: 600}}>{h.hour}</div>
              <div className="weather-hour-icon">{weatherIcons[h.code] || '❓'}</div>
              <div>{h.temp}°C</div>
              <div className="weather-hour-precip">💧{h.precip} mm</div>
              <div className="weather-hour-wind">↗️ {degToCompass(h.winddir)} ({h.winddir}°)</div>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2>7 dagars prognos</h2>
        <ul className="weather-daily-list">
          {daily.time.map((date: string, i: number) => (
            <li key={date} className="weather-daily-item">
              <div style={{fontWeight: 600}}>{date}</div>
              <div className="weather-daily-icon">{weatherIcons[daily.weathercode[i]] || '❓'}</div>
              <div>{daily.temperature_2m_max[i]}° / {daily.temperature_2m_min[i]}°C</div>
              <div>Nederbörd: {daily.precipitation_sum[i]} mm</div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default WeatherPage;