import React , {useEffect} from 'react'
import './style.css'
import ReactDOM from  'react-dom'
import { Chart} from "react-google-charts";
import { useState } from 'react';
import classes from "./ScatterPlot.module.css";
import api from '../../services/api'
import logoFortesol from '../../imagens/logo.png';

import event_botoes from './event_botoes'
import Options_graficos from './optios_grafics'
import Options_graficos_tensao from './options_graph_tensao'
global.tempo_aux_para_enviar_backend = 0;
global.tempo_para_enviar_backend = 0
global.esconde_linha1 = 100
global.esconde_linha1_tensao = 100
global.esconde_linha2_tensao = 100
global.esconde_linha3_tensao = 100

const Options_de_graficos  = new Options_graficos()
const Options_de_graficos_tensao  = new Options_graficos_tensao()

event_botoes()

export default function Home(){

      
      const [dado ,setDados] = useState([['', 'corrente a'], 
      ['', 0]]
     );

     const [dado1, setDado1] = useState([
      ['Label', 'Value'],
      ['Memory', 0],
    
    ]);

    const [tensao, setTensao] = useState([[]])
    

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
          
            
          
          var tamanho = (response.data[0])
          var tamanho  = tamanho[0].length
          var vetor = [['', 'corrente a', 'corrente b']]
          for(var i=0; i<tamanho ; i++){
            var data_horas_mimuto  = response.data[0]
            var data_horas_mimuto = data_horas_mimuto[0]
            var corrente1  = response.data[1]
            var corrente1 = corrente1[0]
            var corrente2  = response.data[2]
            var corrente2 = corrente2[0] 
            var vetor3 = [data_horas_mimuto[i],corrente1[i],corrente2[i]]
            vetor.push(vetor3)
          }
          //var vator1 = [vetor[0] , vetor[1]]
          setDados(vetor)
          
         
          var fim = (response.data).length
          var dado2 = response.data[fim-1]
          dado2 =dado2[1]
          //console.log(dado2) 

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

    async function Hiden_linha1_tensao(indice) {

      if (indice ==1){
        if (global.esconde_linha1_tensao !=100){
          global.esconde_linha1_tensao = 100
          
        }

        else{
          global.esconde_linha1_tensao = 0
          
        }

      }

      if (indice ==2){
        if (global.esconde_linha2_tensao !=100){
          global.esconde_linha2_tensao = 100
          
        }

        else{
          global.esconde_linha2_tensao = 0
          
        }

      }

      if (indice == 3){
        if (global.esconde_linha3_tensao !=100){
          global.esconde_linha3_tensao = 100
          
        }

        else{
          global.esconde_linha3_tensao = 0
          
        }

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


        
        var tamanho = (response.data[0])
        var tamanho  = tamanho[0].length
        //var res = response.data[]
        

        if(global.esconde_linha1 !=100){
          var vetor = [['', 'corrente b']]
        }else{
          var vetor = [['', 'corrente a', 'corrente b']]
        }

        if(global.esconde_linha1_tensao !=100 & global.esconde_linha2_tensao == 100 & global.esconde_linha3_tensao == 100){
          var Vetor_tensao = [['', 'tensao b', 'tensao c']]
        }
        
        else if(global.esconde_linha1_tensao !=100 & global.esconde_linha2_tensao != 100 & global.esconde_linha3_tensao == 100){
          var Vetor_tensao = [['', 'tensao c']]
        }

        else if(global.esconde_linha1_tensao ==100 & global.esconde_linha2_tensao != 100 & global.esconde_linha3_tensao == 100){
          var Vetor_tensao = [['', 'tensao a' , 'tensao c']]
        }

        else if(global.esconde_linha1_tensao ==100 & global.esconde_linha2_tensao != 100 & global.esconde_linha3_tensao != 100){
          var Vetor_tensao = [['', 'tensao a']]
        }
        else{
          var Vetor_tensao = [['', 'tensao a', 'tensao b', 'tensao c']]
        }
        for(var i=0; i<tamanho ; i++)  {
            var data_horas_mimuto  = response.data[0]
            var data_horas_mimuto = data_horas_mimuto[0]
            
            var corrente1  = response.data[1]
            var corrente1 = corrente1[0]
            var corrente2  = response.data[2]
            var corrente2 = corrente2[0]

            var tensao1  = response.data[4]
            var tensao1 = tensao1[0] 

            var tensao2  = response.data[5]
            var tensao2 = tensao2[0]

            var tensao3  = response.data[6]
            var tensao3 = tensao3[0]

            if(global.esconde_linha1_tensao !=100 & global.esconde_linha2_tensao == 100 & global.esconde_linha3_tensao == 100){
              var vetor_junt_tensao = [data_horas_mimuto[i],tensao2[i],tensao3[i]]
              Vetor_tensao.push(vetor_junt_tensao)
            }
            else if(global.esconde_linha1_tensao !=100 & global.esconde_linha2_tensao != 100 & global.esconde_linha3_tensao != 100){
              var vetor_junt_tensao = []
              Vetor_tensao.push(vetor_junt_tensao)
            }
            else if(global.esconde_linha1_tensao !=100 & global.esconde_linha2_tensao != 100 & global.esconde_linha3_tensao == 100){
              var vetor_junt_tensao = [data_horas_mimuto[i],tensao3[i]]
              Vetor_tensao.push(vetor_junt_tensao)
            }

            else if(global.esconde_linha1_tensao ==100 & global.esconde_linha2_tensao != 100 & global.esconde_linha3_tensao == 100){
              var vetor_junt_tensao = [data_horas_mimuto[i],tensao1[i] ,tensao3[i]]
              Vetor_tensao.push(vetor_junt_tensao)
            }

            else if(global.esconde_linha1_tensao ==100 & global.esconde_linha2_tensao != 100 & global.esconde_linha3_tensao != 100){
              var vetor_junt_tensao = [data_horas_mimuto[i],tensao1[i]]
              Vetor_tensao.push(vetor_junt_tensao)
            }
            else{
              var vetor_junt_tensao = [data_horas_mimuto[i],tensao1[i],tensao2[i],tensao3[i]]
              Vetor_tensao.push(vetor_junt_tensao)
            }

            if(global.esconde_linha1 !=100){
              var vetor3 = [data_horas_mimuto[i],corrente2[i]]
              vetor.push(vetor3)
            }
            else{
              var vetor3 = [data_horas_mimuto[i],corrente1[i],corrente2[i]]
              vetor.push(vetor3)
            }

            
        }
        console.log(vetor)
        //var vator1 = [vetor[0] , vetor[1]]
        setDados(vetor)
        setTensao(Vetor_tensao)
        var fim = (response.data).length
        var dado2 = response.data[fim-1]
        dado2 =dado2[1]
        console.log(tamanho) 

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


    
    if(global.esconde_linha1_tensao !=100 & global.esconde_linha2_tensao !=100 & global.esconde_linha3_tensao !=100){

      var options1_tensao = Options_de_graficos_tensao.optios1()
    }
    else if(global.esconde_linha1_tensao !=100 & global.esconde_linha2_tensao ==100 & global.esconde_linha3_tensao ==100){

      var options1_tensao = Options_de_graficos_tensao.optios2()
       
    }
    else if(global.esconde_linha1_tensao !=100 & global.esconde_linha2_tensao !=100 & global.esconde_linha3_tensao ==100){

      var options1_tensao = Options_de_graficos_tensao.optios3()
       
    }
    else if(global.esconde_linha1_tensao ==100 & global.esconde_linha2_tensao !=100 & global.esconde_linha3_tensao ==100){

      var options1_tensao = Options_de_graficos_tensao.optios4()
       
    }
    else if(global.esconde_linha1_tensao ==100 & global.esconde_linha2_tensao !=100 & global.esconde_linha3_tensao !=100){

      var options1_tensao = Options_de_graficos_tensao.optios5()
       
    }
    else{
      var options1_tensao = Options_de_graficos_tensao.optios6()
    }
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
      }}
      /////////////////////////////////////////////////
   
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
            options={options}
            chartType="AreaChart"
            //chartType="LineChart"
            data={dado}
            ScrollBar
            rootProps = {{'data-testid': '10'}}
            
            >
            </Chart>
            <button id = 'button_L_L1' class='blue' onClick={(e) =>Hiden_linha()} >Linha1</button>
            
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
            rootProps = {{'data-testid': '10'}}
            
            >
            </Chart>
          <button id = 'button_L_L1_tensao' class='blue1' onClick={(e)=>Hiden_linha1_tensao(1)}>Tensão_A</button>
          <button id = 'button_L_L2_tensao' class='cinza' onClick={(e) =>Hiden_linha1_tensao(2)} >Tensão_B</button>
          <button id = 'button_L_L3_tensao' class='ambar' onClick={(e) =>Hiden_linha1_tensao(3)} >Tensão_C</button>
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

          
          </div>

        

        </div>
    )
}