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
let fog = document.getElementById(`fog`);
let moon = document.getElementById(`moon`);
let moonGlow = document.getElementById(`moon-glow`);
let sun = document.getElementById(`sun`);
let sunGlow = document.getElementById(`sun-glow`);
let sunset = document.getElementById(`sunset`);
let sunsetGlow = document.getElementById(`sunset-glow`);
let cloudGlow = document.getElementById(`cloud-glow`);
let city = document.querySelector(`.city`);
let displayDate = document.querySelectorAll(`.date`);
let d = new Date();
console.log(d);
const time = d.getHours();
// const time = 20;
// const time = 10;
console.log(time);

if (time > 19 || time < 6) {
  weatherBackground.style.background = `linear-gradient(to bottom, #116687, rgba(13, 69, 102, 0))`;
  foregroundHill.style.fill = `#518689`;
  middleHill.style.fill = `#63AEB2`;
  backgroundHill.style.fill = `#7BBBBF`;
  sun.style.display = `none`;
  sunGlow.style.display = `none`;
  cloudGlow.style.display = `block`;
  moon.style.display = `block`;
  moonGlow.style.display = `block`;
  fog.style.display = `block`;
  city.style.color = `white`;
  displayDate.forEach((entries) => {
    entries.style.color = `white`;
  });
} else if (time === 6 || time === 18) {
  weatherBackground.style.background = `linear-gradient(to bottom, #f7e5a5, #fff8d2)`;
  sun.style.display = `none`;
  sunGlow.style.display = `none`;
  sunset.style.display = `block`;
  sunsetGlow.style.display = `block`;
  cloudGlow.style.display = `block`;
  foregroundHill.style.fill = `#CDE088`;
  middleHill.style.fill = `#DBEAA1`;
  backgroundHill.style.fill = `#EBF4AF`;
} else {
  weatherBackground.style.background = `#fff8d2`;
}
