export default class Ui {
    constructor() {

        this.mainChartContext = document.querySelector("#main-chart-canvas");
        this.stationName = document.querySelector(".station-name");
        this.mainChartGridArea = document.querySelector(".main-chart");
        this.temperatureGridArea = document.querySelector(".temperature");
        this.humidityGridArea = document.querySelector(".humidity");
        this.timeGridArea = document.querySelector(".time");
        this.pressureGridArea = document.querySelector(".pressure");
        this.rainGridArea = document.querySelector(".rain");
        this.lightGridArea = document.querySelector(".light");
        this.windGridArea = document.querySelector(".wind");

    }

    async updateUi(weather) {

        this.stationName.innerHTML =
            `<h1>${weather.station}</h1>`;

        this.temperatureGridArea.innerHTML = weather.temperature;
        this.humidityGridArea.innerHTML = weather.humidity;
        this.timeGridArea.innerHTML = `<h2>Last report: ${weather.actualDate}</h2>`;
        this.pressureGridArea.innerHTML = weather.pressure;
        this.rainGridArea.innerHTML = weather.rain;
        this.lightGridArea.innerHTML = weather.brightness;
        this.windGridArea.innerHTML = weather.windDirection + " " + weather.windStrength;
        return this;
    }
}