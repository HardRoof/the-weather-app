class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    document.body.addEventListener("submit", (e) => this.searchWeather(e));
    document.body.addEventListener("input", () => this.checkInput());
    window.addEventListener("load", (e) => this.startHomePageForecast(e));
  }

  getElements() {
    const input = document.querySelector("input");
    const degreeBig = document.querySelectorAll(".card__degrees")[0];
    const degreeSmall = document.querySelectorAll(".details__feelsLike, .dailyCard__max, .dailyCard__min");
    const wind = document.querySelector(".details__wind");
    const main = document.querySelector(".container");
    const span = document.querySelectorAll(".form__notFound")[0];
    const switchBtn = document.querySelector(".switch input");
    const loadDiv = document.getElementsByClassName("container__loader")[0];
    const searchBtn = document.querySelector('[alt="Search"]');

    return { input, degreeBig, degreeSmall, wind, main, span, switchBtn, loadDiv, searchBtn };
  }

  checkInput() {
    this.view.CheckEmpty(this.getElements().input, this.getElements().span);
  }

  async searchWeather(e) {
    e.preventDefault();
    if (!this.getElements().input.validity.valid) return this.view.showEmptyError(this.getElements().span);
    this.view.showContent(2);
    const geoLocation = await this.getGeoLocation();
    if (typeof geoLocation === "undefined") {
      this.getElements().loadDiv.remove();
      return this.view.showUnknownCityError(this.getElements().span);
    }
    const currentWeather = await this.getCurrentWeather(geoLocation);
    const eightDaysWeather = await this.getEightDaysWeather(geoLocation);
    if (this.getElements().main.hasChildNodes()) this.view.deleteContent(this.getElements().main);
    this.view.showContent(0);
    this.getElements().switchBtn.addEventListener("click", (e) => this.changeUnits(e));
    this.model.createMainCard(currentWeather, geoLocation);
    this.view.showContent(1);
    this.model.createEightDaysCard(eightDaysWeather);
    this.view.changeBackground(currentWeather);
  }

  async getGeoLocation() {
    const geoLocation = await this.model.fetchGeoLocation(this.getElements().input.value);
    return geoLocation;
  }

  async getCurrentWeather(geoLocation) {
    const currentWeather = await this.model.fetchCurrentWeather(geoLocation.lat, geoLocation.lon);
    return currentWeather;
  }

  async getEightDaysWeather(geoLocation) {
    const eightDaysWeather = await this.model.fetchEightDaysWeather(geoLocation.lat, geoLocation.lon);
    return eightDaysWeather;
  }

  changeUnits() {
    if (this.getElements().degreeBig.classList.contains("celsius--big")) {
      this.getElements().degreeBig.textContent = this.convertToFahrenheit(this.getElements().degreeBig.textContent);
      this.getElements().wind.textContent = `${this.convertToMph(this.getElements().wind.textContent)} mph`;
    }
    if (this.getElements().degreeBig.classList.contains("fahrenheit--big")) {
      this.getElements().degreeBig.textContent = this.convertToCelsius(this.getElements().degreeBig.textContent);
      this.getElements().wind.textContent = `${this.convertToKmh(this.getElements().wind.textContent)} km/h`;
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

  startHomePageForecast() {
    this.getElements().searchBtn.click();
    this.getElements().input.value = "";
  }
}
export default Controller;
