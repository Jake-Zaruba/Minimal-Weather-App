"use strict";

window.addEventListener(`load`, () => {
  let lon;
  let lat;
  let currentTemp = document.querySelector(`.main-temp`);

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      lon = position.coords.longitude;
      lat = position.coords.latitude;

      const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=1b82c02641bb16a6d993fd26b9eb7e7f&units=imperial`;

      fetch(api)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          const { temp } = data.main;
          currentTemp.innerHTML = `&nbsp;` + Math.round(temp) + `&deg;`;
        });
    });
  } else {
    document.querySelector(`.city`).textContent = `Location Off`;
  }
});

let weatherBackground = document.querySelector(`.element-container`);
let foregroundHill = document.getElementById(`hill-foreground-fill`);
let middleHill = document.getElementById(`hill-middle-fill`);
let backgroundHill = document.getElementById(`hill-background-fill`);
let cloud = document.getElementById(`cloud`);
let city = document.querySelector(`.city`);
let displayDate = document.querySelectorAll(`.date`);
let d = new Date();
console.log(d);
const time = d.getHours();
console.log(time);

if (time > 19 || time < 6) {
  weatherBackground.style.background = `linear-gradient(to bottom, #116687, #0D4666)`;
  foregroundHill.style.fill = `#407085`;
  middleHill.style.fill = `#799baa`;
  backgroundHill.style.fill = `#8ca9b6`;
  cloud.style.display = `none`;
  city.style.color = `white`;
  displayDate.forEach((entries) => {
    entries.style.color = `white`;
  });
} else if (time === 6 || time === 18) {
  weatherBackground.style.background = `linear-gradient(to bottom, #f7e5a5, #fff8d2)`;
} else {
  weatherBackground.style.background = `#fff8d2`;
}
