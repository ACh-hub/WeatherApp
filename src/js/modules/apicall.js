export default class ApiCall {
    constructor() {
        this.currentWeatherUrl = 'http://media:3000/weather/latest';
        // Requires date in format yyyy-m-d 
        this.todaysWeatherUrl = 'http://media:3000/weather/';
    }

    async getCurrentWeather() {
        const response = await fetch(this.currentWeatherUrl);
        const responseData = await response.json();
        return responseData;
    }

    async getTodaysWeather() {
        const today = new Date();
        const year = today.getUTCFullYear();
        const month = today.getUTCMonth()+1;
        const day = today.getUTCDate();

        const todayString = `${year}-${month}-${day}`;

        const url = this.todaysWeatherUrl+todayString;

        const response = await fetch(url);
        const responseData = await response.json();
        return responseData;
    }
}