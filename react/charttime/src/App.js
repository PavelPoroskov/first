import React, { Component } from 'react';


import {Scatter, Line} from 'react-chartjs-2'
//import momemt from 'moment'
import * as moment from 'moment'

import './App.css';

var timeFormat = 'MM/DD/YYYY HH:mm';
// function newDate(days) {
//   return moment().add(days, 'd').toDate();
// }
function newDateString(days) {
  return moment().add(days, 'd').format(timeFormat);
}

class App extends Component {
  render() {

    const data = {
      labels: ['Scatter'],
      datasets: [
        {
          label: 'My First dataset',
          //fill: false,
          backgroundColor: 'rgba(75,192,192,0.4)',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 10,
          pointHitRadius: 10,
          data: [
            { x: 40, y: 18 },
            { x: 55, y: 25 },
            { x: 56, y: 36 },
            { x: 59, y: 49 },
            { x: 65, y: 75 },
            { x: 80, y: 90 },
            { x: 81, y: 29 },
          ]
        }
      ]
    };

    const data2 =  
    {
        // labels: [ // Date Objects
        //   newDate(0),
        //   newDate(1),
        //   newDate(2),
        //   newDate(3),
        //   newDate(4),
        //   newDate(5),
        //   newDate(6)
        // ],
        datasets: [
        // {
        //   label: 'My First dataset',
        //   backgroundColor: color(window.chartColors.red).alpha(0.5).rgbString(),
        //   borderColor: window.chartColors.red,
        //   fill: false,
        //   data: [
        //     randomScalingFactor(),
        //     randomScalingFactor(),
        //     randomScalingFactor(),
        //     randomScalingFactor(),
        //     randomScalingFactor(),
        //     randomScalingFactor(),
        //     randomScalingFactor()
        //   ],
        // }, 
        // {
        //   label: 'My Second dataset',
        //   backgroundColor: color(window.chartColors.blue).alpha(0.5).rgbString(),
        //   borderColor: window.chartColors.blue,
        //   fill: false,
        //   data: [
        //     randomScalingFactor(),
        //     randomScalingFactor(),
        //     randomScalingFactor(),
        //     randomScalingFactor(),
        //     randomScalingFactor(),
        //     randomScalingFactor(),
        //     randomScalingFactor()
        //   ],
        // }, 
        {
          label: 'Dataset with point data',
          backgroundColor: "#3e95cd",
          borderColor: "#3e95cd",
          fill: false,
          data: [{
            x: newDateString(0),
            y: 1
          }, {
            x: newDateString(5),
            y: 1
          }, {
            x: newDateString(7),
            y: 2
          }, {
            x: newDateString(15),
            y: 1
          }],
        }]
      }
    const options =  {
        title: {
          text: 'Chart.js Time Scale'
        },
        scales: {
          xAxes: [{
            type: 'time',
            time: {
              format: timeFormat,
              // round: 'day'
              tooltipFormat: 'll HH:mm'
            },
            scaleLabel: {
              display: true,
              labelString: 'Date'
            }
          }],
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'value'
            }
          }]
        },
      }

    return (
      <div className="App">
        <Line data={data2} options={options}/>
        <Line data={data} />
        <Scatter data={data} />
      </div>
    );
  }
}

export default App;
