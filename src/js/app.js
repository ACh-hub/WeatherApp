import "core-js/stable";
import "regenerator-runtime/runtime";

import "../scss/styles.scss";

import Ui from "./modules/ui";
import ApiCall from "./modules/apicall";
import Weather from "./modules/weather";

const ui = new Ui();
const apicall = new ApiCall();
const weather = new Weather();

const updateAll = async () => {
    const r = await apicall.getCurrentWeather();
    const w = await weather.updateCurrentWeather(r);
    const e = await ui.updateUi(w);
    return e;
}

updateAll();