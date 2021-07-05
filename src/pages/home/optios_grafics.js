import { Component } from "react"


class Options_graficos extends Component{

    optios1(){
        
    
    var options = {
        title: 'Forte Sol',
        
        hAxis: {title: 'data',  titleTextStyle: {color: '#333'},viewWindow: {
           //valor máximo a ser mostrado no eixo X
          
           max:0,
        }},
        vAxis: {title: 'Corrente'},
        series: {
          // Gives each series an axis name that matches the Y-axis below.
          0: { axis: 'Corrente' },
          1: { axis: 'Daylight' },
        },
        pointSize: 5,
        xAxes: [{
          type: 'time',
          time: {
              unit: 'day',
              distribution: 'linear',
              displayFormats: {
                  'MM': 'SS'
              }
          },
          bounds: 'ticks',
      }],

        backgroundColor: 'transparent',
   }

   return (options)
}

   optios2(){
        
    
    var options = {
        title: 'Forte Sol',
        
        hAxis: {title: 'data',  titleTextStyle: {color: '#333'},viewWindow: {
           //valor máximo a ser mostrado no eixo X
          
           
        }},
        vAxis: {title: 'Corrente'},
        series: {
          // Gives each series an axis name that matches the Y-axis below.
          0: { axis: 'Corrente' },
          1: { axis: 'Daylight' },
        },
        pointSize: 5,
        xAxes: [{
          type: 'time',
          time: {
              unit: 'day',
              distribution: 'linear',
              displayFormats: {
                  'MM': 'SS'
              }
          },
          bounds: 'ticks',
      }],

        backgroundColor: 'transparent',
   }
   return (options)
}

}

export default Options_graficos