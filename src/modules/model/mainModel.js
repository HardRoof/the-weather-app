import MainCard from "./mainCard";
import EightDaysCard from "./EightDaysCard";

class Model {
  constructor() {
    this.key = "90720f422bb5cf74f91be76101f48f50";
    this.metric = "metric";
    this.imperial = "imperial";
  }

  async getGeoCode(searchText) {
    try {
      const URL = `http://api.openweathermap.org/geo/1.0/direct?q=${searchText}&appid=${this.key}`;
      const response = await fetch(URL, { mode: "cors" });
      const data = await response.json();
      //console.log(data);
      return data[0];
    } catch (err) {
      console.log(err, "Refresh page and try again later");
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
    //console.log(data);
    return data;
  }

  createMainCard(currentWeather, geoLocation) {
    const condition = currentWeather.weather[0].description;
    const regionNamesInEnglish = new Intl.DisplayNames(["en"], { type: "region" }); // To convert CA to Canada, per example
    const city = geoLocation.name + ", " + regionNamesInEnglish.of(currentWeather.sys.country);
    const degrees = Math.round(currentWeather.main.temp);
    const feelsLike = Math.round(currentWeather.main.feels_like);
    const wind = this.convertFromMs(currentWeather.wind.speed) + " km/h";
    const humidity = "HUMIDITY: " + currentWeather.main.humidity + "%";
    const mainCard = this.generateMainCard(condition, city, degrees, feelsLike, wind, humidity);
    mainCard.fillMainCard();
  }

  convertFromMs(speed) {
    return (speed * 3.6).toFixed(2);
  }

  generateMainCard(condition, city, degrees, feelsLike, wind, humidity) {
    let mainCardItem = new MainCard(condition, city, degrees, feelsLike, wind, humidity);
    return mainCardItem;
  }

  createEightDaysCard(eightDaysWeather) {
    const eightDaysCard = this.generateEightDaysCard(eightDaysWeather);
    eightDaysCard.fillEightDaysCard();
  }

  generateEightDaysCard(eightDaysWeather) {
    let eightDaysCardItem = new EightDaysCard(eightDaysWeather);
    return eightDaysCardItem;
  }
}

export default Model;
