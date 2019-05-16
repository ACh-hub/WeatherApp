export default class Ui {
    constructor(){
        this.mainChartGridArea = document.querySelector(".main-chart");
        this.stationGridArea = document.querySelector(".station");
        this.temperatureGridArea = document.querySelector(".temperature");
        this.humidityGridArea = document.querySelector(".humidity");
        this.timeGridArea = document.querySelector(".time");
        this.pressureGridArea = document.querySelector(".pressure");
        this.rainGridArea = document.querySelector(".rain");
        this.lightGridArea = document.querySelector(".light");
        this.windGridArea = document.querySelector(".wind");

    }

    async updateUi(weather) {
        this.mainChartGridArea.innerHTML = "Blah blah balh";
        this.stationGridArea.innerHTML = weather.station;
        this.temperatureGridArea.innerHTML = weather.temperature;
        this.humidityGridArea.innerHTML = weather.humidity;
        this.timeGridArea.innerHTML = weather.reportTime;
        this.pressureGridArea.innerHTML = weather.pressure;
        this.rainGridArea.innerHTML = weather.rain;
        this.lightGridArea.innerHTML = weather.brightness;
        this.windGridArea.innerHTML = weather.windDirection + " " + weather.windStrength;
        return this;
    }
}


