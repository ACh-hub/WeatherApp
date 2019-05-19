import Chart from 'chart.js';

export default class Graph {

    constructor(context){

        this.container = document.querySelector("#main-chart-canvas");

        this.scalesConfig = {
            yAxes: [{
                id: 'TemperatureY',
                type: 'linear',
                position: 'left',
                gridLines: {
                    display: false
                    }
            },
            {
                id: 'HumidityY',
                type: 'linear',
                position: 'right',
                gridLines: {
                    display: false
                    }
            },
            {
                id: 'PressureY',
                type: 'linear',
                position: 'right',
                gridLines: {
                    display: false
                    }
            }],
            xAxes: [{
                gridLines: {
                display: false
                }

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
                        backgroundColor: 'rgba(128,64,64, 0.3)',
                        borderColor: 'rgb(128,64,64)',
                        //Updated dynamically
                        data: [],
                    },
                    {
                        label: "Humidity",
                        yAxisID: 'HumidityY',
                        backgroundColor: 'rgba(216,192,144, 0.3)',
                        borderColor: 'rgb(216,192,144)',
                        //Updated dynamically
                        data: [],
                    }
                    ,
                    {
                        label: "Pressure",
                        yAxisID: 'PressureY',
                        backgroundColor: 'rgba(136,144,144,0.3)',
                        borderColor: 'rgb(136,144,144)',
                        //Updated dynamically
                        data: [],

                    }
                ]
            },
            options:{
                scales: this.scalesConfig,
                onHover: function(evt) {
                    if(evt.type=='mouseout'){
                        for(let it in this.chart.config.options.scales.xAxes){
                            this.chart.config.options.scales.xAxes[it].gridLines.display = false;
                        }
                        for(let it in this.chart.config.options.scales.yAxes){
                            this.chart.config.options.scales.yAxes[it].gridLines.display = false;
                        }
                        this.chart.update();
                    }
                    if(evt.type=='mousemove') {
                        for(let it in this.chart.config.options.scales.xAxes){
                            this.chart.config.options.scales.xAxes[it].gridLines.display = true;
                        }
                        for(let it in this.chart.config.options.scales.yAxes){
                            this.chart.config.options.scales.yAxes[it].gridLines.display = true;
                        }
                        this.chart.update();
                    }

                  }
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