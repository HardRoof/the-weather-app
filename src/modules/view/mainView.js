import changeBg from "./changeBg";

class View {
  constructor() {}

  showContent(position) {
    const temp = document.getElementsByTagName("template")[position];
    const clone = temp.content.cloneNode(true);
    document.getElementsByClassName("container")[0].append(clone);
  }

  deleteContent(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }

  changeBackground(currentWeather) {
    changeBg(currentWeather.weather[0].icon);
  }

  showEmptyError(span) {
    span.textContent = "✖ This field is required.";
    span.classList.add("error--active");
  }

  showUnknownCityError(span) {
    span.textContent = "✖ Location not found. Please try another city.";
    span.classList.add("error--active");
  }

  CheckEmpty(input, span) {
    if (input.validity.valid) {
      span.textContent = ""; // Reset to initial state
      span.className = "form__notFound";
    }
  }
}

export default View;
