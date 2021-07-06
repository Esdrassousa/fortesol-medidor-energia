import React , {useEffect} from 'react'
import './style.css'
import ReactDOM from  'react-dom'
import { Chart } from "react-google-charts";
import { useState } from 'react';
import api from '../../services/api'
import logoFortesol from '../../imagens/logo.png';
import {Bubble, Line} from "react-chartjs-2";
import event_botoes from './event_botoes'
import Options_graficos from './optios_grafics'
global.tempo_aux_para_enviar_backend = 0;
global.tempo_para_enviar_backend = 0
global.esconde_linha1 = 100

const Options_de_graficos  = new Options_graficos()

event_botoes()

export default function Home(){

      
      const [dado ,setDados] = useState([['', 'corrente'], 
      ['', 0]]
     );

     const [dado1, setDado1] = useState([
      ['Label', 'Value'],
      ['Memory', 0],
    
    ]);
    

     async function atualiza_grafico(e){
        e.preventDefault()
        if (global.tempo_aux_para_enviar_backend == 0) {
          var minutes_recebidos = '5'
          global.tempo_para_enviar_backend = {
            minutes_recebidos
          } 
        }else{
          var minutes_recebidos = global.
          global.tempo_para_enviar_backend = {
            minutes_recebidos
          } 
        }
        await api.post('/', global.tempo_para_enviar_backend).then(response => {
          
          setDados(response.data)
          console.log((response.data).length)
          var fim = (response.data).length
          var dado2 = response.data[fim-1]
          dado2 =dado2[1]
          console.log(dado2) 

          setDado1([
            ['Label', 'Value'],
            ['Memory', dado2],
          
          ])
          
             
        })
       

    }

    async  function Hiden_linha(){
      if (global.esconde_linha1 !=100){
        global.esconde_linha1 = 100
        
      }

      else{
        global.esconde_linha1 = 0
        
      }

      
    }

    async function clickBotao_de_tempo(id,text){
      
      global.tempo_aux_para_enviar_backend = id
      document.getElementById('esconde').textContent = text
    }

   
    
    
    useEffect(async  () => {
      if (global.tempo_aux_para_enviar_backend == 0) {
        var minutes_recebidos = '5'
        global.tempo_para_enviar_backend = {
          minutes_recebidos
        } 
    }else{


      var minutes_recebidos = global.tempo_aux_para_enviar_backend
      global.tempo_para_enviar_backend = {
        minutes_recebidos
      } 
    }
      await api.post('/', global.tempo_para_enviar_backend).then(response => {
        
        setDados(response.data)
        
        

        
        var fim = (response.data).length
        var dado2 = response.data[fim-1]
        dado2 =dado2[1]
        console.log(dado2) 

        setDado1([
          ['Label', 'Value'],
          ['Memory', dado2],
        
        ])   
      
    })
      },[dado])


      
    if(global.esconde_linha1 !=100){

      var options = Options_de_graficos.optios1()
       
    }else{
      var options = Options_de_graficos.optios2()
    }
         
   
    return(
        <div class = 'pai'>

          <div class = 'menu'>

            <img src={logoFortesol} alt='logo'/>
            

            <div class='atualiza'>

             <button class = 'bt_atualiza' id ='esconde' title="Ultimos">Ultimos</button>
              <div class = 'mystyle' id='mostra1'>

              <div class='div_button'>
                <button type ='button' class='button' onClick ={ (e) => clickBotao_de_tempo(5,"Ultimos 5 minutos")}>5 min</button>
                <button class='button' onClick = { (e) => clickBotao_de_tempo(15,"Ultimos 15 minutos")}>15 min</button>
                <button class='button' onClick ={ (e) => clickBotao_de_tempo(30,"Ultimos 30 minutos")}>30 min</button>
                <button class='button' onClick = { (e) => clickBotao_de_tempo(45 ,"Ultimos 45 minutos")}>45 min</button>
              </div>
            </div>
            </div>
      
            </div>
          <div class='graficos'>  


          <form onSubmit={atualiza_grafico}>

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
          
          <Chart 
            width={'50vw'}
            height={'20vh'}
            
              
            /* width={'100%'}
            height={'100%'} */
            options={{
              greenFrom:0,
              greenTo:10,
              redFrom: 10,
              redTo: 15,
              yellowFrom: 15,
              yellowTo: 20,
              minorTicks: 0.1,
              min:0,
              max:20
            }}
            chartType="Gauge"
            //chartType="LineChart"
            
            data={dado1}
            
            />
            <div class = "button_form_div">

              {/* <button class='button_form' type='button' type="submit">start</button> */}
              
              </div>
          </form>

          <button id = 'button_L_L1' class='blue' onClick={(e) =>Hiden_linha()} >Linha1</button>
          </div>

        

        </div>
    )
}