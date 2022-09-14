import clearSkyDay from "../../images/clear-sky/grooveland-designs-zjoydJb17mE-unsplash.jpeg";
import clearSkyNight from "../../images/clear-sky/vince-sanga-LBQ1RVn5dfM-unsplash.jpg";
import fewCloudsDay from "../../images/few-clouds/aziz-ayad-NJDyFoXDAus-unsplash.jpeg";
import fewCloudsNight from "../../images/few-clouds/kym-mackinnon-wNSWuIjkD1I-unsplash.jpg";
import scatteredCloudsDay from "../../images/scattered-clouds/nick-fewings-ZtDiJzokZi0-unsplash.jpeg";
import scatteredCloudsNight from "../../images/scattered-clouds/herrmann-stamm-4vmjOLf9edk-unsplash.jpeg";
import brokenCloudsDay from "../../images/broken-clouds/dave-hoefler-llEjCH71E9o-unsplash.jpg";
import brokenCloudsNight from "../../images/broken-clouds/anandu-vinod-pbxwxwfI0B4-unsplash.jpg";
import showerRainDay from "../../images/shower-rain/ed-leszczynskl-R3ofE-8DyLk-unsplash.jpeg";
import showerRainNight from "../../images/shower-rain/kyle-szegedi-JSmc0GmSV1o-unsplash.jpg";
import rainDay from "../../images/rain/simon-kuznetsov-igQx3ETkKZY-unsplash.jpeg";
import rainNight from "../../images/rain/anna-atkins-rNBaaxyeWWM-unsplash.jpg";
import thunderstormDay from "../../images/thunderstorm/raychel-sanner-LCswFCnyE6Y-unsplash.jpg";
import thunderstormNight from "../../images/thunderstorm/eugene-triguba-Cm5zI68Wdew-unsplash.jpg";
import snowDay from "../../images/snow/nathan-fertig-_o_Nw3H21Js-unsplash.jpg";
import snowNight from "../../images/snow/alex-teplitz-I-Tg2H84mos-unsplash.jpg";
import mistDay from "../../images/mist/chris-leipelt-kWd5ER2XpSg-unsplash.jpeg";
import mistNight from "../../images/mist/daniil-onischenko-3C6DIGvZfEw-unsplash.jpeg";

export default function (iconCode) {
  switch (iconCode) {
    case "01d":
      setDailyContainerBG("dailyContainer--black");
      return changeMainBg(clearSkyDay);
    case "01n":
      setDailyContainerBG("dailyContainer--white");
      return changeMainBg(clearSkyNight);
    case "02d":
      setDailyContainerBG("dailyContainer--black");
      return changeMainBg(fewCloudsDay);
    case "02n":
      setDailyContainerBG("dailyContainer--white");
      return changeMainBg(fewCloudsNight);
    case "03d":
      setDailyContainerBG("dailyContainer--black");
      return changeMainBg(scatteredCloudsDay);
    case "03n":
      setDailyContainerBG("dailyContainer--white");
      return changeMainBg(scatteredCloudsNight);
    case "04d":
      setDailyContainerBG("dailyContainer--black");
      return changeMainBg(brokenCloudsDay);
    case "04n":
      setDailyContainerBG("dailyContainer--white");
      return changeMainBg(brokenCloudsNight);
    case "09d":
      setDailyContainerBG("dailyContainer--black");
      return changeMainBg(showerRainDay);
    case "09n":
      setDailyContainerBG("dailyContainer--white");
      return changeMainBg(showerRainNight);
    case "10d":
      setDailyContainerBG("dailyContainer--black");
      return changeMainBg(rainDay);
    case "10n":
      setDailyContainerBG("dailyContainer--white");
      return changeMainBg(rainNight);
    case "11d":
      setDailyContainerBG("dailyContainer--black");
      return changeMainBg(thunderstormDay);
    case "11n":
      setDailyContainerBG("dailyContainer--white");
      return changeMainBg(thunderstormNight);
    case "13d":
      setDailyContainerBG("dailyContainer--black");
      return changeMainBg(snowDay);
    case "13n":
      setDailyContainerBG("dailyContainer--white");
      return changeMainBg(snowNight);
    case "50d":
      setDailyContainerBG("dailyContainer--black");
      return changeMainBg(mistDay);
    case "50n":
      setDailyContainerBG("dailyContainer--white");
      return changeMainBg(mistNight);
  }
}

function changeMainBg(image) {
  document.body.style.background = `url(${image}) no-repeat center center`;
  document.body.style.backgroundSize = "cover";
}

function setDailyContainerBG(color) {
  console.log(document.querySelectorAll(".dailyContainer"));
  document.querySelectorAll(".dailyContainer")[0].classList.add(color);
}
