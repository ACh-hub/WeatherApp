export default class Weather {

    constructor(
        temperature,
        humidity,
        pressure,
        brightness,
        reportTime
        )
        {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.brightness = brightness;
        this.reportTime = reportTime;
    }

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
        this.actualDate = new Date(this.reportTime).toLocaleString();
        return this;
    }
}

