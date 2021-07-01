import React , {useEffect} from 'react'
import './style.css'
import ReactDOM from  'react-dom'
import { Chart } from "react-google-charts";
import { useState } from 'react';
import api from '../../services/api'
import logoFortesol from '../../imagens/logo.png';
import {Bubble, Line} from "react-chartjs-2";
global.a = 0;
global.data = 0
global.esconde_linha1 = 100
window.addEventListener("load" , function(event) { 
  var buttonb = document.getElementById("esconde")
  buttonb.addEventListener("click" , function(){
        var container = document.getElementById("mostra1")
        container.classList.toggle("mystyle")
        clickbotao()
        //setTimeout(() => { document.addEventListener('click', handlerClickFora, false) }, 200);
        
      })

  
  var clickbotao = ()=>{
    //  var buttonb = document.getElementById("esconde")
    var container = document.getElementById("mostra1")
    container.classList.toggle("mystyle")
    if (container.style.display == 'block'){
      container.style.display = 'none';
      document.removeEventListener('click' , handlerClickFora, false)
    }else{
      container.style.display = 'block';
      document.removeEventListener('click' , handlerClickFora, false)
    }
    
    setTimeout(() => { document.addEventListener('click', handlerClickFora, false) }, 200);
  }
  var handlerClickFora =()=>{
    var container = document.getElementById("mostra1")
    var buttonb = document.getElementById("esconde")
    if(!container.contains(event.target)){
      container.style.display = 'none';
      //buttonb.style.display = 'none';
      
      document.removeEventListener('click', handlerClickFora, false);    
    }
  }
})
export default function Home(){

      
      const [dado ,setDados] = useState([['', 'corrente'], 
      ['2021-03-20, 09:59:22',5.88],
      
     
      ],
     );
    
     async function dados(e){
        e.preventDefault()
        if (global.a == 0) {
          var minutes_recebidos = '5'
          global.data = {
            minutes_recebidos
          } 
      }else{
        var minutes_recebidos = global.
        global.data = {
          minutes_recebidos
        } 
      }
        await api.post('/', global.data).then(response => {
          //var a = response.data
          setDados(response.data)
             
        })
       

    }

    async  function Limpar(){
      if (global.esconde_linha1 !=100){
        global.esconde_linha1 = 100
        console.log('entrou aquiiiiiiiiii')
      }

      else{
        global.esconde_linha1 = 0
        console.log('entrou aqui')
      }

      
    }

    async function clickBotao(id,text){
      
      global.a = id
      document.getElementById('esconde').textContent = text
    }

    /* var b = [['', 'corrente']]  */
    useEffect(async  () => {
      if (global.a == 0) {
        var minutes_recebidos = '5'
        global.data = {
          minutes_recebidos
        } 
    }else{


      var minutes_recebidos = global.a
      global.data = {
        minutes_recebidos
      } 
    }
      await api.post('/', global.data).then(response => {
        
        setDados(response.data)
           
      
    })
      },[dado])


      
    if(global.esconde_linha1 !=100){

      var options = {
        title: 'Forte Sol',
        
        hAxis: {title: 'data',  titleTextStyle: {color: '#333'},viewWindow: {
           //valor máximo a ser mostrado no eixo X
          
           max:global.esconde_linha1,
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
  }else{
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
  }
         
      console.log(global.esconde_linha1)
      
    return(
        <div class = 'pai'>

          <div class = 'menu'>

            

            
            <img src={logoFortesol} alt='logo'/>
            

            <div class='atualiza'>

             <button class = 'bt_atualiza' id ='esconde' title="Ultimos">Ultimos</button>
              <div class = 'mystyle' id='mostra1'>

              <div class='div_button'>
                <button type ='button' class='button' onClick ={ (e) => clickBotao(5,"Ultimos 5 minutos")}>5 min</button>
                <button class='button' onClick = { (e) => clickBotao(15,"Ultimos 15 minutos")}>15 min</button>
                <button class='button' onClick ={ (e) => clickBotao(30,"Ultimos 30 minutos")}>30 min</button>
                <button class='button' onClick = { (e) => clickBotao(45 ,"Ultimos 45 minutos")}>45 min</button>
              </div>
            </div>
            </div>
      
            </div>
          <div class='graficos'>  


          <form onSubmit={dados}>

          
          <Chart onCha
            width={'99vw'}
            height={'50vh'}
            /* width={'100%'}
            height={'100%'} */
            options={options}
            chartType="AreaChart"
            //chartType="LineChart"
            data={dado}
            
            />
            <div class = "button_form_div">
              <button class='button_form' type='button' type="submit">start</button>
              
              </div>
          </form>

          <button class='button_form' onClick={(e) =>Limpar()}>limpar</button>
          </div>

        

        </div>
    )
}