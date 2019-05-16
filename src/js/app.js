import "core-js/stable";
import "regenerator-runtime/runtime";

import "../scss/styles.scss";

import Ui from "./modules/ui";
import ApiCall from "./modules/apicall";
import Weather from "./modules/weather";
import Graph from "./modules/graph";

const ui = new Ui();
const apicall = new ApiCall();
const weather = new Weather();
const graph = new Graph();

const updateAll = async () => {
    const r = await apicall.getCurrentWeather();
    const w = await weather.updateCurrentWeather(r);
    const t = await apicall.getTodaysWeather();
    const g = await graph.updateGraphs(t);
    const e = await ui.updateUi(w);

    // 10 minutes = 600000
    setTimeout(updateAll, 600000)
}

updateAll();