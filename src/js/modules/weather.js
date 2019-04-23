
export default class Weather {
    constructor() {}

    async getWeather() {
        const response = await fetch('http://192.168.1.29:3000/weather');
        const responseData = await response.json();
        return responseData;
    }
}