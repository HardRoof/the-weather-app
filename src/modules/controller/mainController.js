class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    document.body.addEventListener("submit", (e) => this.searchWeather(e));
    document.body.addEventListener("input", () => this.checkInput());
    document.querySelector(".switch input").addEventListener("click", (e) => this.changeUnits(e));
  }

  getElements() {
    const input = document.querySelector("input");
    const degreeBig = document.querySelectorAll(".card__degrees")[0];
    const degreeSmall = document.querySelectorAll(".details__feelsLike, .dailyCard__max, .dailyCard__min");
    const wind = document.querySelector(".details__wind");
    const main = document.querySelector(".container");
    const span = document.querySelectorAll(".form__notFound")[0];

    return { input, degreeBig, degreeSmall, wind, main, span };
  }

  checkInput() {
    this.view.CheckEmpty(this.getElements().input, this.getElements().span);
  }

  async searchWeather(e) {
    e.preventDefault();
    switch (!this.getElements().input.validity.valid) {
      case true:
        return this.view.showEmptyError(this.getElements().span);
    }
    const weatherData = await this.getWeatherData();
    if (typeof weatherData === "undefined") {
      console.log("test");
    }
    if (this.getElements().main.hasChildNodes()) this.view.deleteForecast(this.getElements().main);
    this.view.showForecast(0);
    this.model.createMainCard(weatherData.currentWeather, weatherData.geoLocation);
    this.view.showForecast(1);
    this.model.createEightDaysCard(weatherData.eightDaysWeather);
    this.view.changeBackground(weatherData.currentWeather);
  }

  async getWeatherData() {
    //split in three functions
    const geoLocation = await this.model.getGeoCode(this.getElements().input.value);
    const currentWeather = await this.model.getCurrentWeather(geoLocation.lat, geoLocation.lon);
    const eightDaysWeather = await this.model.getEightDaysWeather(geoLocation.lat, geoLocation.lon);

    return { geoLocation, currentWeather, eightDaysWeather };
  }

  changeUnits() {
    if (this.getElements().degreeBig.classList.contains("celsius--big")) {
      this.getElements().degreeBig.textContent = this.convertToFahrenheit(this.getElements().degreeBig.textContent);
      this.getElements().wind.textContent = this.convertToMph(this.getElements().wind.textContent) + " mph";
    }
    if (this.getElements().degreeBig.classList.contains("fahrenheit--big")) {
      this.getElements().degreeBig.textContent = this.convertToCelsius(this.getElements().degreeBig.textContent);
      this.getElements().wind.textContent = this.convertToKmh(this.getElements().wind.textContent) + " km/h";
    }
    this.getElements().degreeBig.classList.toggle("celsius--big");
    this.getElements().degreeBig.classList.toggle("fahrenheit--big");
    for (const element of this.getElements().degreeSmall) {
      if (element.classList.contains("celsius")) element.textContent = this.convertToFahrenheit(element.textContent);
      if (element.classList.contains("fahrenheit")) element.textContent = this.convertToCelsius(element.textContent);
      element.classList.toggle("celsius");
      element.classList.toggle("fahrenheit");
    }
  }
  convertToCelsius(degree) {
    const valNum = parseFloat(degree);
    return Math.round((valNum - 32) / 1.8);
  }
  convertToFahrenheit(degree) {
    const valNum = parseFloat(degree);
    return Math.round(valNum * 1.8 + 32);
  }
  convertToKmh(speed) {
    const valNum = parseFloat(speed);
    return (valNum * 1.609).toFixed(2);
  }
  convertToMph(speed) {
    const valNum = parseFloat(speed);
    return (valNum / 1.609).toFixed(2);
  }
}
export default Controller;
