class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    document.querySelector("body").addEventListener("submit", (e) => this.searchWeather(e));
  }

  getElements() {
    const input = document.querySelector("input");

    return { input };
  }

  async searchWeather(e) {
    const weatherData = await this.getWeatherData(e);
    this.view.showMainCard(0);
    console.log(weatherData.currentWeather);
    this.createMainCard(weatherData.currentWeather);
    this.view.showMainCard(1);
    this.createEightDaysCard(weatherData.eightDaysWeather);
  }

  async getWeatherData(e) {
    e.preventDefault();
    const geoLocation = await this.model.geoCode(this.getElements().input.value);
    const currentWeather = await this.model.getCurrentWeather(geoLocation.lat, geoLocation.lon);
    const eightDaysWeather = await this.model.getEightDaysWeather(geoLocation.lat, geoLocation.lon);

    return { geoLocation, currentWeather, eightDaysWeather };
  }

  createMainCard(currentWeather) {
    const condition = currentWeather.weather[0].description;
    const regionNamesInEnglish = new Intl.DisplayNames(["en"], { type: "region" });
    const city = currentWeather.name + ", " + regionNamesInEnglish.of(currentWeather.sys.country);
    const degrees = Math.round(currentWeather.main.temp);
    const feelsLike = "FEELS LIKE: " + Math.round(currentWeather.main.feels_like);
    const wind = "WIND: " + currentWeather.wind.speed;
    const humidity = "HUMIDITY: " + currentWeather.main.humidity + "%";
    const mainCard = this.model.generateMainCard(condition, city, degrees, feelsLike, wind, humidity);
    mainCard.fillMainCard();
  }

  createEightDaysCard(eightDaysWeather) {
    const eightDaysCard = this.model.generateEightDaysCard(eightDaysWeather);
    eightDaysCard.fillEightDaysCard();
  }
}
export default Controller;
