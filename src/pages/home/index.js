import React, { useEffect } from 'react'
import './style.css'
import ReactDOM from 'react-dom'
import { Chart } from "react-google-charts";
import { useState } from 'react';
import classes from "./ScatterPlot.module.css";
import api from '../../services/api'
import logoFortesol from '../../imagens/logo.png';

import event_botoes from './event_botoes'
import { hiden_linhas_tensao, hiden_linhas_tensao_pos_for, options_tensao } from './Tensao/hiden_linhas_tensao'
import { hiden_linhas_corrente, hiden_linhas_corrente_pos_for, options_corrente } from './Corrente/hidden_linhas_corrente'


global.tempo_aux_para_enviar_backend = 0;
global.tempo_para_enviar_backend = 0


global.esconde_linha1_tensao = 100
global.esconde_linha2_tensao = 100
global.esconde_linha3_tensao = 100

global.esconde_linha1_corrente = 100
global.esconde_linha2_corrente = 100
global.esconde_linha3_corrente = 100




event_botoes()

export default function Home() {


  const [dado, setDados] = useState([['', 'Corrente'],
  ['', 0]]
  );

  
  const [tensao, setTensao] = useState([['', 'Tensão'], ['', 0]])


  async function atualiza_grafico(e) {

    e.preventDefault()
    if (global.tempo_aux_para_enviar_backend == 0) {
      var minutes_recebidos = '5'
      global.tempo_para_enviar_backend = {
        minutes_recebidos
      }
    } else {
      var minutes_recebidos = global.tempo_aux_para_enviar_backend
        global.tempo_para_enviar_backend = {
        minutes_recebidos
      }
    }
    await api.post('/', global.tempo_para_enviar_backend).then(response => {

      var tamanho = (response.data[0])
      var tamanho = tamanho[0].length

      var Vetor_tensao = hiden_linhas_tensao(global.esconde_linha1_tensao, global.esconde_linha2_tensao, global.esconde_linha3_tensao)
      var Vetor_corrente = hiden_linhas_corrente(global.esconde_linha1_corrente, global.esconde_linha2_corrente, global.esconde_linha3_corrente)
      for (var i = 0; i < tamanho; i++) {

        var Vetor_Corrente = hiden_linhas_corrente_pos_for(response.data, i, Vetor_corrente, global.esconde_linha1_corrente, global.esconde_linha2_corrente, global.esconde_linha3_corrente)

        var Vetor_tensao = hiden_linhas_tensao_pos_for(response.data, i, Vetor_tensao, global.esconde_linha1_tensao, global.esconde_linha2_tensao, global.esconde_linha3_tensao)



      }

      setDados(Vetor_Corrente)
      setTensao(Vetor_tensao)

    })


  }


  async function Hiden_linha1_corrente(indice) {

    if (indice == 1) {
      if (global.esconde_linha1_corrente != 100) {
        global.esconde_linha1_corrente = 100

      }

      else {
        global.esconde_linha1_corrente = 0

      }

    }

    if (indice == 2) {
      if (global.esconde_linha2_corrente != 100) {
        global.esconde_linha2_corrente = 100

      }

      else {
        global.esconde_linha2_corrente = 0

      }

    }

    if (indice == 3) {
      if (global.esconde_linha3_corrente != 100) {
        global.esconde_linha3_corrente = 100

      }

      else {
        global.esconde_linha3_corrente = 0

      }

    }
  }

  async function Hiden_linha1_tensao(indice) {

    if (indice == 1) {
      if (global.esconde_linha1_tensao != 100) {
        global.esconde_linha1_tensao = 100

      }

      else {
        global.esconde_linha1_tensao = 0

      }

    }

    if (indice == 2) {
      if (global.esconde_linha2_tensao != 100) {
        global.esconde_linha2_tensao = 100

      }

      else {
        global.esconde_linha2_tensao = 0

      }

    }

    if (indice == 3) {
      if (global.esconde_linha3_tensao != 100) {
        global.esconde_linha3_tensao = 100

      }

      else {
        global.esconde_linha3_tensao = 0

      }

    }
  }



  async function clickBotao_de_tempo(id, text) {

    global.tempo_aux_para_enviar_backend = id
    document.getElementById('esconde').textContent = text
  }




  useEffect(async () => {
    if (global.tempo_aux_para_enviar_backend == 0) {
      var minutes_recebidos = '5'
      global.tempo_para_enviar_backend = {
        minutes_recebidos
      }
    } else {

      var minutes_recebidos = global.tempo_aux_para_enviar_backend
      global.tempo_para_enviar_backend = {
        minutes_recebidos
      }
    }
    await api.post('/', global.tempo_para_enviar_backend).then(response => {



      var tamanho = (response.data[0])
      var tamanho = tamanho[0].length





      var Vetor_tensao = hiden_linhas_tensao(global.esconde_linha1_tensao, global.esconde_linha2_tensao, global.esconde_linha3_tensao)
      var Vetor_corrente = hiden_linhas_corrente(global.esconde_linha1_corrente, global.esconde_linha2_corrente, global.esconde_linha3_corrente)
      for (var i = 0; i < tamanho; i++) {

        var Vetor_Corrente = hiden_linhas_corrente_pos_for(response.data, i, Vetor_corrente, global.esconde_linha1_corrente, global.esconde_linha2_corrente, global.esconde_linha3_corrente)

        var Vetor_tensao = hiden_linhas_tensao_pos_for(response.data, i, Vetor_tensao, global.esconde_linha1_tensao, global.esconde_linha2_tensao, global.esconde_linha3_tensao)



      }

      setDados(Vetor_Corrente)
      setTensao(Vetor_tensao)



      console.log(tamanho)



    })
  }, [dado])




  var options1_corrente = options_corrente(global.esconde_linha1_corrente, global.esconde_linha2_corrente, global.esconde_linha3_corrente)

  var options1_tensao = options_tensao(global.esconde_linha1_tensao, global.esconde_linha2_tensao, global.esconde_linha3_tensao)
  ////////////////////////////////////////////////

  const ScatterPlot = props => {
    const [x1, setX1] = useState(0);
    const [x2, setX2] = useState(0);
    const [y1, setY1] = useState(0);
    const [y2, setY2] = useState(0);
    const [x3, setX3] = useState(0);
    const [x4, setX4] = useState(0);
    const [y3, setY3] = useState(0);
    const [y4, setY4] = useState(0);
    const [selectDivStyle, setSelectDivStyle] = useState({
      left: "0px",
      top: "0px",
      width: "0px",
      height: "0px"
    });
    const { data } = props;

    const reCalcSelectBox = () => {
      setX3(Math.min(x1, x2));
      setX4(Math.max(x1, x2));
      setY3(Math.min(y1, y2));
      setY4(Math.max(y1, y2));
      const styleLeft = x3 + "px";
      const styleTop = y3 + "px";
      const styleWidth = x4 - x3 + "px";
      const styleHeight = y4 - y3 + "px";
      setSelectDivStyle({
        left: styleLeft,
        top: styleTop,
        width: styleWidth,
        height: styleHeight
      });
    };

    let hideSelect = true;
    const mouseDownOnChart = e => {
      hideSelect = false;
      setX1(e.pageX);
      setY1(e.pageY);
      reCalcSelectBox();
    };

    const mouseMoveOnChart = e => {
      setX2(e.pageX);
      setY2(e.pageY);
      reCalcSelectBox();
    };

    const mouseUpOnChart = e => {
      hideSelect = true;
      // selectPoints();
    };

    const selectPoints = () => {
      // Not yet implemented
    };

    const selectBoxClasses = [classes.selectDivContainer];

    if (hideSelect) {
      selectBoxClasses.push(classes.hidden);
    }
  }
  /////////////////////////////////////////////////

  return (
    <div class='pai'>

      <div class='menu'>

        <img src={logoFortesol} alt='logo' />


        <div class='atualiza'>

          <button class='bt_atualiza' id='esconde' title="Ultimos">Ultimos</button>
          <div class='mystyle' id='mostra1'>

            <div class='div_button'>
              <button type='button' class='button' onClick={(e) => clickBotao_de_tempo(5, "Ultimos 5 minutos")}>5 min</button>
              <button class='button' onClick={(e) => clickBotao_de_tempo(15, "Ultimos 15 minutos")}>15 min</button>
              <button class='button' onClick={(e) => clickBotao_de_tempo(30, "Ultimos 30 minutos")}>30 min</button>
              <button class='button' onClick={(e) => clickBotao_de_tempo(45, "Ultimos 45 minutos")}>45 min</button>
            </div>
          </div>
        </div>

      </div>

      <div
        onMouseDown={ScatterPlot.mouseDownOnChart}
        onMouseUp={ScatterPlot.mouseUpOnChart}
        onMouseMove={ScatterPlot.mouseMoveOnChart}
        className={ScatterPlot.selectBoxClasses}
      ></div>
      <div class='graficos'>


        <form onSubmit={atualiza_grafico}>

          <Chart onCha

            width={'99vw'}
            height={'50vh'}
            /* width={'100%'}
            height={'100%'} */
            options={options1_corrente}
            chartType="AreaChart"
            //chartType="LineChart"
            data={dado}
            ScrollBar
            rootProps={{ 'data-testid': '10' }}

          >
          </Chart>

          <button id='button_L_L1_corrente' class='blue1' onClick={(e) => Hiden_linha1_corrente(1)}>Corrente_A</button>
          <button id='button_L_L2_corrente' class='cinza' onClick={(e) => Hiden_linha1_corrente(2)} >Corrente_B</button>
          <button id='button_L_L3_corrente' class='ambar' onClick={(e) => Hiden_linha1_corrente(3)} >Corrente_C</button>

          <Chart

            width={'99vw'}
            height={'50vh'}
            /* width={'100%'}
            height={'100%'} */
            options={options1_tensao}
            chartType="AreaChart"
            //chartType="LineChart"
            data={tensao}
            ScrollBar
            rootProps={{ 'data-testid': '10' }}

          >
          </Chart>
          <button id='button_L_L1_tensao' class='blue1' onClick={(e) => Hiden_linha1_tensao(1)}>Tensão_A</button>
          <button id='button_L_L2_tensao' class='cinza' onClick={(e) => Hiden_linha1_tensao(2)} >Tensão_B</button>
          <button id='button_L_L3_tensao' class='ambar' onClick={(e) => Hiden_linha1_tensao(3)} >Tensão_C</button>


          {/* <Chart
            width={'50vw'}
            height={'20vh'}

            options={{
              greenFrom: 0,
              greenTo: 10,
              redFrom: 10,
              redTo: 15,
              yellowFrom: 15,
              yellowTo: 20,
              minorTicks: 0.1,
              min: 0,
              max: 20
            }}
            chartType="Gauge"
            //chartType="LineChart"

            data={dado1}

          /> */}
          <div class="button_form_div">

            {/* <button class='button_form' type='button' type="submit">start</button> */}

          </div>
        </form>


      </div>



    </div>
  )
}