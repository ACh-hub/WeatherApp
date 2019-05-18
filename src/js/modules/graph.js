import Chart from 'chart.js';

export default class Graph {

    constructor(context){

        this.scalesConfig = {
            yAxes: [{
                id: 'TemperatureY',
                type: 'linear',
                position: 'left'
            },
            {
                id: 'HumidityY',
                type: 'linear',
                position: 'right'
            },
            {
                id: 'PressureY',
                type: 'linear',
                position: 'right'
            }]
        };

        this.colorConfig = {


        };

        this.setup = {
            type: 'line',
            data: {
                // Updated dynamically
                labels: [],
                datasets: [{
                        label: "Temperature",
                        yAxisID: 'TemperatureY',
                        backgroundColor: 'rgba(255, 99, 132, 0.6)',
                        borderColor: 'rgb(255, 99, 132)',
                        //Updated dynamically
                        data: [],
                    },
                    {
                        label: "Humidity",
                        yAxisID: 'HumidityY',
                        backgroundColor: 'rgba(10, 30, 132, 0.6)',
                        borderColor: 'rgb(56, 99, 132)',
                        //Updated dynamically
                        data: [],
                    }
                    ,
                    {
                        label: "Pressure",
                        yAxisID: 'PressureY',
                        backgroundColor: 'rgba(10, 56, 44, 0.6)',
                        borderColor: 'rgb(56, 99, 20)',
                        //Updated dynamically
                        data: [],
                    }
                ]
            },
            options:{
                scales: this.scalesConfig
            }
        };

        this.chart = new Chart(context,this.setup);
    }

    async updateGraph(data) {
        //Clear data
        this.chart.data.labels = [];
        for(let it in this.chart.data.datasets){
            this.chart.data.datasets[it].data = [];
        }

        data.forEach((reading) => {
            let actualDate = new Date(reading.reportTime).toLocaleTimeString();
            this.chart.data.labels.push(actualDate);
            //Update datasets
            this.chart.data.datasets[0].data.push(reading.temperature);
            this.chart.data.datasets[1].data.push(reading.humidity);
            this.chart.data.datasets[2].data.push(reading.pressure);
        });

        this.chart.update();
        return this;
    }
}