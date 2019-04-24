export default class ApiCall {
    constructor() {
        this.currentWeatherUrl = 'http://192.168.1.29:3000/weather/latest';
    }

    async getCurrentWeather() {
        const response = await fetch(this.currentWeatherUrl);
        const responseData = await response.json();
        return responseData;
    }
}