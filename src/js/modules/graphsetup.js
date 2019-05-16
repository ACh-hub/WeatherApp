export default class GraphSetup {
    constructor(data) {
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
                scales: {
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
                }
            }
        }
    }
}