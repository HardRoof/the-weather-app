import MainCard from "./mainCard";
import EightDaysCard from "./EightDaysCard";

class Model {
  constructor() {
    this.key = "90720f422bb5cf74f91be76101f48f50";
    this.metric = "metric";
    this.imperial = "imperial";
  }

  async geoCode(searchText) {
    try {
      const URL = `http://api.openweathermap.org/geo/1.0/direct?q=${searchText}&appid=${this.key}`;
      const response = await fetch(URL, { mode: "cors" });
      const data = await response.json();
      if (typeof data[0] === "undefined") {
        console.log(1); // To handle unknown city
      }
      return data[0];
    } catch (err) {
      return console.log(err);
    }
  }

  async getCurrentWeather(lat, lon) {
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.key}&units=metric`;
    const response = await fetch(URL, { mode: "cors" });
    if (!response.ok) {
      throw Error(response.status);
    }
    const data = await response.json();
    // console.log(data);
    return data;
  }

  async getEightDaysWeather(lat, lon) {
    const URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely,alerts&units=metric&appid=20f7632ffc2c022654e4093c6947b4f4`;
    const response = await fetch(URL, { mode: "cors" });
    if (!response.ok) {
      throw Error(response.status);
    }
    const data = await response.json();
    console.log(data);
    return data;
  }

  generateMainCard(condition, city, degrees, feelsLike, wind, humidity) {
    let mainCardItem = new MainCard(condition, city, degrees, feelsLike, wind, humidity);
    return mainCardItem;
  }
  generateEightDaysCard(eightDaysWeather) {
    let eightDaysCardItem = new EightDaysCard(eightDaysWeather);
    return eightDaysCardItem;
  }
}

export default Model;
