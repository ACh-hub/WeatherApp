import Chart from 'chart.js';

export default class Graph {

    constructor(context, setup){
        this.chart = new Chart(context,setup);
    }

    async updateGraph(data) {
        //Clear data
        this.chart.data.labels = [];
        this.chart.data.datasets[0].data = [];
        this.chart.data.datasets[1].data = [];
        this.chart.data.datasets[2].data = [];


        data.forEach((reading) => {
            this.chart.data.labels.push(reading.reportTime);
            //Update datasets
            this.chart.data.datasets[0].data.push(reading.temperature);
            this.chart.data.datasets[1].data.push(reading.humidity);
            this.chart.data.datasets[2].data.push(reading.pressure);
        });

        this.chart.update();
        return this;
    }
}