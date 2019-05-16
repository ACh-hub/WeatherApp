import Weather from "../modules/weather";

export default class Graph {

    constructor() {
        this.graphData = [];
    }

    async updateGraphs(data) {

        // Get needed data from data source
        data.forEach((reading) => {
            const dataPoint = new Weather(
                reading.temperature,
                reading.humidity,
                reading.pressure,
                reading.brightness,
                reading.reportTime
            );
            this.graphData.push(dataPoint);
        });

        return this;
    }
}