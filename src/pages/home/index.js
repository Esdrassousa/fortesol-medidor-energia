import React from 'react'
import './style.css'
import ReactDOM from  'react-dom'


import logoFortesol from '../../imagens/logo.png';

export default function Home(){
    return(
        <div >
            <div class='logo'>
            <img src={logoFortesol} alt='logo'/>
            </div>
            
            <div class='graficos'>
            <div class = "corrente_div">
            <iframe class = "corrente" width="450" height="260"  src="https://thingspeak.com/channels/1373277/charts/1?bgcolor=%23ffffff&color=%23d62020&days=1&dynamic=true&type=line"></iframe>
            </div>

            <div class ="potencia_div">
            <iframe width="450" height="260" src="https://thingspeak.com/channels/1373277/widgets/309831"></iframe>
            </div>
            </div>
        </div>
    )
}

