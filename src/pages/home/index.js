import React , {useEffect} from 'react'
import './style.css'
import ReactDOM from  'react-dom'
import { Chart } from "react-google-charts";
import { useState } from 'react';
import api from '../../services/api'
import logoFortesol from '../../imagens/logo.png';
import {Line} from "react-chartjs-2";


export default function Home(){


      const [dado ,setDados] = useState([['', 'corrente'], 
      ['2021-03-20, 09:59:22',5.88],
      
     
      ],
     );

     async function dados(e){
        e.preventDefault()
        await api.get('/').then(response => {
          var a = response.data
          setDados(response.data)
            
            
        })
       

    }
    /* var b = [['', 'corrente']]  */
    useEffect(async  () => {
      await api.get('/').then(response => {

        /* var a = response.data
        b.push([a[0], a[1]]) */
        setDados(response.data)
        /* setDados([['', 'corrente'], [a[0], a[1]]]) */
        //console.log("o valor de a é: " , b)
        
        
    })
      },[dado])
      console.log("o valor é: " , dado)
      
      
    return(
        <div >
            <div class='logo'>
            <img src={logoFortesol} alt='logo'/>
            </div>
            
            <div class='graficos'>


           
            </div>
            
          <form onSubmit={dados}>
          <Chart onCha
            width={'500px'}
            height={'300px'}
            chartType="LineChart"
            data={dado}
            
            />
            
            
            
              <button  type='button' type="submit">click</button>
          </form>
        </div>
    )
}