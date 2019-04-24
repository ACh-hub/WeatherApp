export default class Weather {

    async updateCurrentWeather(data) {
        this.station = data.stationID;
        this.temperature = data.temperature;
        this.humidity = data.humidity;
        this.pressure = data.pressure;
        this.rain = data.rain;
        this.brightness = data.brightness;
        this.windDirection = data.windDirection;
        this.windStrength = data.windStrength;
        this.reportTime = data.reportTime;
        return this;
    }
}
