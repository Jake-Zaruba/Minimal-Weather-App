"use strict";

//////////////////////////////////////////////////////////////
//WEATHER API///////////////////////////////////////////////////////////////////////////////////////////////////////////////

let currentCity = document.querySelector(`.city`);
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
          const cityName = data.name;
          currentTemp.innerHTML = `&nbsp;` + Math.round(temp) + `&deg;`;
          currentCity.innerHTML = cityName.toUpperCase();
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
// let city = document.querySelector(`.city`);
let displayDate = document.querySelectorAll(`.date`);
let d = new Date();
console.log(d);
const time = d.getHours();
// console.log(time);

//////////////////////////////////////////////////////////////
//DAY OF WEEK CHANGES///////////////////////////////////////////////////////////////////////////////////////////////////////

let dayOfWeek = document.getElementById(`day`);
let day = d.getDay();

switch (day) {
  case 0:
    day = `SUNDAY`;
    break;
  case 1:
    day = `MONDAY`;
    break;
  case 2:
    day = `TUESDAY`;
    break;
  case 3:
    day = `WEDNESDAY`;
    break;
  case 4:
    day = `THURSDAY`;
    break;
  case 5:
    day = `FRIDAY`;
    break;
  case 6:
    day = `SATURDAY`;
    break;
}
// console.log(day);

dayOfWeek.innerHTML = day;

//////////////////////////////////////////////////////////////
//MONTH CHANGES/////////////////////////////////////////////////////////////////////////////////////////////////////////////

let displayMonth = document.getElementById(`month`);
let month = d.getMonth();

switch (month) {
  case 0:
    month = `JANUARY`;
    break;
  case 1:
    month = `FEBRUARY`;
    break;
  case 2:
    month = `MARCH`;
    break;
  case 3:
    month = `APRIL`;
    break;
  case 4:
    month = `MAY`;
    break;
  case 5:
    month = `JUNE`;
    break;
  case 6:
    month = `JULY`;
    break;
  case 7:
    month = `AUGUST`;
    break;
  case 8:
    month = `SEPTEMBER`;
    break;
  case 9:
    month = `OCTOBER`;
    break;
  case 10:
    month = `NOVEMBER`;
    break;
  case 11:
    month = `DECEMBER`;
    break;
}
// console.log(month);

displayMonth.innerHTML = month + `&nbsp;`;

//////////////////////////////////////////////////////////////
//MONTH CHANGES/////////////////////////////////////////////////////////////////////////////////////////////////////////////

let displayDay = document.getElementById(`day-of-month`);
let dayOfMonth = d.getDate();

const getDayEnding = function (dayNumber) {
  let dayEnding;
  if (dayNumber === 1 || dayNumber === 21 || dayNumber === 31) {
    dayEnding = `st`;
  } else if (dayNumber === 2 || dayNumber === 22) {
    dayEnding = `nd`;
  } else if (dayNumber === 3 || dayNumber === 23) {
    dayEnding = `rd`;
  } else {
    dayEnding = `th`;
  }
  // console.log(dayEnding);
  return dayEnding;
};
// console.log(dayOfMonth);
// console.log(getDayEnding(dayOfMonth));
let dayEnding = getDayEnding(dayOfMonth);
displayDay.innerHTML = dayOfMonth + `${dayEnding}`;

//////////////////////////////////////////////////////////////
//TIME OF DAY ANIMATION CHANGES/////////////////////////////////////////////////////////////////////////////////////////////

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
  currentCity.style.color = `white`;
  displayDate.forEach((entries) => {
    entries.style.color = `white`;
  });
} else if (time === 6 || time === 19) {
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
