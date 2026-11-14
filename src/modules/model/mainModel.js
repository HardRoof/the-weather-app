import MainCard from "./mainCard";
import EightDaysCard from "./EightDaysCard";

class Model {
  constructor() {
    this.key = "90720f422bb5cf74f91be76101f48f50";
    this.metric = "metric";
    this.imperial = "imperial";
  }

  async fetchGeoLocation(searchText) {
    try {
      const URL = `https://api.openweathermap.org/geo/1.0/direct?q=${searchText}&appid=${this.key}`;
      const response = await fetch(URL, { mode: "cors" });
      const data = await response.json();
      return data[0];
    } catch (err) {
      return console.log(err, "Refresh page and try again later");
    }
  }

  async fetchCurrentWeather(lat, lon) {
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.key}&units=metric`;
    const response = await fetch(URL, { mode: "cors" });
    if (!response.ok) {
      throw Error(response.status);
    }
    const data = await response.json();
    return data;
  }

  // Daily forecast from Open-Meteo (free, no key). OpenWeather closed the
  // free One Call 2.5 API this used before.
  async fetchEightDaysWeather(lat, lon) {
    const URL = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto&forecast_days=8`;
    const response = await fetch(URL, { mode: "cors" });
    if (!response.ok) {
      throw Error(response.status);
    }
    const data = await response.json();
    return this.toDailyForecast(data);
  }

  // Reshapes Open-Meteo's answer into what EightDaysCard reads
  toDailyForecast(data) {
    const daily = data.daily.time.map((date, i) => ({
      dt: new Date(`${date}T12:00:00`).getTime() / 1000,
      temp: { max: data.daily.temperature_2m_max[i], min: data.daily.temperature_2m_min[i] },
      weather: [{ icon: this.iconFromWeatherCode(data.daily.weather_code[i]) }],
    }));
    return { daily };
  }

  // WMO weather code to the OpenWeather icon the cards show
  iconFromWeatherCode(code) {
    if (code === 0) return "01d"; // clear
    if (code === 1) return "02d"; // mainly clear
    if (code === 2) return "03d"; // partly cloudy
    if (code === 3) return "04d"; // overcast
    if (code === 45 || code === 48) return "50d"; // fog
    if (code >= 51 && code <= 57) return "09d"; // drizzle
    if (code >= 61 && code <= 67) return "10d"; // rain
    if (code >= 71 && code <= 77) return "13d"; // snow
    if (code >= 80 && code <= 82) return "09d"; // rain showers
    if (code === 85 || code === 86) return "13d"; // snow showers
    if (code >= 95) return "11d"; // thunderstorm
    return "03d";
  }

  createMainCard(currentWeather, geoLocation) {
    const condition = currentWeather.weather[0].description;
    const regionNamesInEnglish = new Intl.DisplayNames(["en"], { type: "region" }); // To convert CA to Canada, per example
    const city = `${geoLocation.name}, ${regionNamesInEnglish.of(currentWeather.sys.country)}`;
    const degrees = Math.round(currentWeather.main.temp);
    const feelsLike = Math.round(currentWeather.main.feels_like);
    const wind = `${this.convertFromMs(currentWeather.wind.speed)} km/h`;
    const humidity = `HUMIDITY: ${currentWeather.main.humidity}%`;
    const mainCard = this.generateMainCard(condition, city, degrees, feelsLike, wind, humidity);
    mainCard.fillMainCard();
  }

  convertFromMs(speed) {
    return (speed * 3.6).toFixed(2);
  }

  generateMainCard(condition, city, degrees, feelsLike, wind, humidity) {
    const mainCardItem = new MainCard(condition, city, degrees, feelsLike, wind, humidity);
    return mainCardItem;
  }

  createEightDaysCard(eightDaysWeather) {
    const eightDaysCard = this.generateEightDaysCard(eightDaysWeather);
    eightDaysCard.fillEightDaysCard();
  }

  generateEightDaysCard(eightDaysWeather) {
    const eightDaysCardItem = new EightDaysCard(eightDaysWeather);
    return eightDaysCardItem;
  }
}

export default Model;
