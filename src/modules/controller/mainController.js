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
    const WeatherData = await this.getWeatherData(e);
    this.view.showMainCard();
    this.createMainCard(WeatherData.currentWeather);
  }

  async getWeatherData(e) {
    e.preventDefault();
    const geoLocation = await this.model.geoCode(this.getElements().input.value);
    const currentWeather = await this.model.getCurrentWeather(geoLocation.lat, geoLocation.lon);
    const fiveDayWeather = await this.model.getFiveDayWeather(geoLocation.lat, geoLocation.lon);

    return { geoLocation, currentWeather, fiveDayWeather };
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
}
export default Controller;
