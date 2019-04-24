import "core-js/stable";
import "regenerator-runtime/runtime";

import "../scss/styles.scss";

import Weather from "./modules/weather";

const weather = new Weather();
console.log(weather.getWeather());
