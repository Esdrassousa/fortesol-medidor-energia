import React , {useEffect} from 'react'
import './style.css'
import ReactDOM from  'react-dom'
import { Chart } from "react-google-charts";
import { useState } from 'react';
import api from '../../services/api'
import logoFortesol from '../../imagens/logo.png';
import {Line} from "react-chartjs-2";
global.a = 0;
global.data = 0

window.addEventListener("load" , function() { 
  var buttonb = document.getElementById('esconde')
  buttonb.addEventListener("click" , function(){
        var container = document.getElementById('mostra1')
        container.classList.toggle('mystyle')
      })
})
export default function Home(){

      
      const [dado ,setDados] = useState([['', 'corrente'], 
      ['2021-03-20, 09:59:22',5.88],
      
     
      ],
     );
    
     async function dados(e){
        e.preventDefault()
        if (global.a == 0) {
          var min = '5'
          global.data = {
            min
          } 
      }else{
        var min = global.
        global.data = {
          min
        } 
      }
        await api.post('/', global.data).then(response => {
          //var a = response.data
          setDados(response.data)
                
        })
       

    }

    async function clickBotao(id){
      
      global.a = id

    }

    /* var b = [['', 'corrente']]  */
    useEffect(async  () => {
      if (global.a == 0) {
        var min = '5'
        global.data = {
          min
        } 
    }else{
      var min = global.a
      global.data = {
        min
      } 
    }
      await api.post('/', global.data).then(response => {

        
        setDados(response.data)
        
        
        
    })
      },[dado])
      
      var data_atual = new Date()
      //console.log("o valor é: " , dado)
    
    
   

    
      
      
    return(
        <div class = 'pai'>
            <div class='logo'>
            <img src={logoFortesol} alt='logo'/>
            </div>
      
            
          <div class='graficos'>   
          <form onSubmit={dados}>

           
          <Chart onCha
            width={'500px'}
            height={'300px'}
            chartType="LineChart"
            data={dado}
            
            />
            <div class = "button_form_div">
              <button class='button_form' type='button' type="submit">click</button>
              </div>
          </form>
          </div>

         {/*  <label for ='toggle-1'>
            Clique aqui
            </label>

            <input type = "checkbox" id = "toggle-1"></input>
          <div id = 'mostra' class = 'botoes'>
            <button onClick ={ (e) => clickBotao(5)}>5 min</button>
            <button onClick = { (e) => clickBotao(15)}>15 min</button>
           
          </div> */}

          <div class='atualiza'>

         '   <button id = "esconde">click em mim</button>
            <div id="mostra1">

              <div class='div_button'>
                <button class='button' onClick ={ (e) => clickBotao(5)}>5 min</button>
                <button class='button' onClick = { (e) => clickBotao(15)}>15 min</button>
              </div>
            </div>'

          </div>

        </div>
    )
}