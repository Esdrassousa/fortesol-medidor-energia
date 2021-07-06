import { Component } from "react"
import './style.css'

function event_botoes(){

    return(
    window.addEventListener("load" , function(event) { 
    var buttonb = document.getElementById("esconde")
    buttonb.addEventListener("click" , function(){
          var container = document.getElementById("mostra1")
          container.classList.toggle("mystyle")
          clickbotao()
          //setTimeout(() => { document.addEventListener('click', handlerClickFora, false) }, 200);
          
        })
  
    var butao_hinde_L1 = document.getElementById('button_L_L1')
    butao_hinde_L1.addEventListener("click", function(){
        
     /*  if (butao_hinde_L1.classList.red == true){
        butao_hinde_L1.classList.toggle('button_L_L1')
        console.log('entrou aqui')
      } */

      if (butao_hinde_L1.className == 'blue'){
        //butao_hinde_L1.classList.toggle('red')
        /* butao_hinde_L1.classList.remove('button_L_L1')
        butao_hinde_L1.classList.add('red') */
        butao_hinde_L1.classList.replace('blue', 'red');
        console.log('entrou aqui')
      }
      
      else{
        //butao_hinde_L1.classList.toggle('red')
        butao_hinde_L1.classList.replace('red', 'blue');
        
       
      }
      
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

    )}

    export default event_botoes