class mainCard {
  constructor(condition, city, degrees, feelsLike, wind, humidity) {
    this.condition = condition;
    this.city = city;
    this.degrees = degrees;
    this.feelsLike = feelsLike;
    this.wind = wind;
    this.humidity = humidity;
  }

  fillMainCard() {
    const cardInfo = document.querySelectorAll("p");
    const cardData = [this.condition, this.city, this.degrees, this.feelsLike, this.wind, this.humidity];
    for (let i = 0; i < cardInfo.length; i++) {
      cardInfo[i].textContent = cardData[i];
    }
  }
}

export default mainCard;
