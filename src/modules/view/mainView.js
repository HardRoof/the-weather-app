import changeBg from "./changeBg";

class View {
  constructor() {}

  showForecast(position) {
    const temp = document.getElementsByTagName("template")[position];
    const clone = temp.content.cloneNode(true);
    document.getElementsByClassName("container")[0].append(clone);
  }
  deleteForecast(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }
  changeBackground(currentWeather) {
    changeBg(currentWeather.weather[0].icon);
  }
}

export default View;
