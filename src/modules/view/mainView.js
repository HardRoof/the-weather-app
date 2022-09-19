import changeBg from "./changeBg";
import image0 from "../../images/home/aaron-burden--3Dc-I-65ug-unsplash.jpeg";
import image1 from "../../images/home/daniel-leone-v7daTKlZzaw-unsplash.jpeg";
import image2 from "../../images/home/greg-rosenke-J90VAXIQK88-unsplash.jpeg";
import image3 from "../../images/home/ian-dooley-DuBNA1QMpPA-unsplash.jpeg";
import image4 from "../../images/home/john-fowler-RsRTIofe0HE-unsplash.jpeg";
import image5 from "../../images/home/simon-berger-twukN12EN7c-unsplash.jpg";
import image6 from "../../images/home/caleb-stokes-pY1FKeEP8v8-unsplash.jpg";
import image7 from "../../images/home/willian-justen-de-vasconcellos-jOF2TFSNxQI-unsplash.jpeg";
import image8 from "../../images/home/abednego-s-g-h7FysA92Jww-unsplash.jpeg";
import image9 from "../../images/home/nidheesh-kavalan-Ha501MB_XE8-unsplash.jpeg";
import image10 from "../../images/home/goran-backman-ng6ZSJQTKoA-unsplash.jpeg";
import image11 from "../../images/home/billy-huynh-PHB9CK5K7js-unsplash.jpeg";

class View {
  constructor() {}

  setHomePageBg() {
    const randomNumber = Math.floor(Math.random() * 12);
    const images = [image0, image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11];
    document.body.style.background = `url(${images[randomNumber]}) no-repeat center center`;
    document.body.style.backgroundSize = "cover";
  }

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
    span.textContent = '✖ Location not found. Please try another city or matching format: "City" or "City, Country".';
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
