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

window.addEventListener("load" , function(event) { 
  var buttonb = document.getElementById("esconde")
  buttonb.addEventListener("click" , function(){
        //var container = document.getElementById("mostra1")
        //container.classList.toggle("mystyle")
        clickbotao()
        //setTimeout(() => { document.addEventListener('click', handlerClickFora, false) }, 200);
        
      })
  var clickbotao = ()=>{
    //  var buttonb = document.getElementById("esconde")
    var container = document.getElementById("mostra1")
    container.style.display = 'block';
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

    async function clickBotao(id){
      
      global.a = id

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
      
      
      console.log(dado[dado.length-1])
      
    return(
        <div class = 'pai'>

          <div class = 'menu'>

            

            <div class='logo'>
            <img src={logoFortesol} alt='logo'/>
            </div>

            <div class='atualiza'>

             <button class = 'bt_atualiza' id ='esconde'><a>Ultimos</a></button>
              <div id='mostra1'>

              <div class='div_button'>
                <button class='button' onClick ={ (e) => clickBotao(5)}>5 min</button>
                <button class='button' onClick = { (e) => clickBotao(15)}>15 min</button>
              </div>
            </div>
            </div>
      
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
              <button class='button_form' type='button' type="submit">start</button>
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

          {/* <div class='atualiza'>

         '   <button id = "esconde">click em mim</button>
            <div id="mostra1">

              <div class='div_button'>
                <button class='button' onClick ={ (e) => clickBotao(5)}>5 min</button>
                <button class='button' onClick = { (e) => clickBotao(15)}>15 min</button>
              </div>
            </div>'

          </div> */}

        </div>
    )
}