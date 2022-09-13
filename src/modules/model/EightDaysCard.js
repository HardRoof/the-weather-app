class EightDaysCard {
  constructor(eightDaysWeather) {
    this.data = eightDaysWeather;
  }

  fillEightDaysCard() {
    const maxTemp = document.querySelectorAll(".dailyCard__max");
    const minTemp = document.querySelectorAll(".dailyCard__min");
    const img = document.querySelectorAll(".dailyContainer img");
    const day = document.querySelectorAll("h3");
    for (let i = 0; i < this.data.daily.length; i++) {
      maxTemp[i].textContent = Math.round(this.data.daily[i].temp.max);
      minTemp[i].textContent = Math.round(this.data.daily[i].temp.min);
      img[i].src = `http://openweathermap.org/img/wn/${this.data.daily[i].weather[0].icon}@2x.png`;
      const dayOfWeek = this.getDayOfWeek(new Date(this.data.daily[i].dt * 1000).getDay()); //Turns Unix Timestamp to week day
      day[i].textContent = dayOfWeek;
    }
  }
  getDayOfWeek(number) {
    switch (number) {
      case 0:
        return "Sunday";
      case 1:
        return "Monday";
      case 2:
        return "Tuesday";
      case 3:
        return "Wednesday";
      case 4:
        return "Thursday";
      case 5:
        return "Friday";
      case 6:
        return "Saturday";
    }
  }
}

export default EightDaysCard;
