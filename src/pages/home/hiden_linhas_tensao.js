

export function hiden_linhas_tensao(esconde_linha1_tensao ,esconde_linha2_tensao, esconde_linha3_tensao) {
    if(esconde_linha1_tensao !=100 & esconde_linha2_tensao == 100 & esconde_linha3_tensao == 100){
        var Vetor_tensao = [['', 'tensao b', 'tensao c']]
      }
      
      else if(esconde_linha1_tensao !=100 & esconde_linha2_tensao != 100 & esconde_linha3_tensao == 100){
        var Vetor_tensao = [['', 'tensao c']]
      }

      else if(esconde_linha1_tensao ==100 & esconde_linha2_tensao != 100 & esconde_linha3_tensao == 100){
        var Vetor_tensao = [['', 'tensao a' , 'tensao c']]
      }

      else if(esconde_linha1_tensao ==100 & esconde_linha2_tensao != 100 & esconde_linha3_tensao != 100){
        var Vetor_tensao = [['', 'tensao a']]
      }
      else if(esconde_linha1_tensao ==100 & esconde_linha2_tensao == 100 & esconde_linha3_tensao != 100){
        var Vetor_tensao = [['', 'tensao a','tensao b']]
      }

      else if(esconde_linha1_tensao !=100 & esconde_linha2_tensao == 100 & esconde_linha3_tensao != 100){
        var Vetor_tensao = [['','tensao b']]
      }
      else{
        var Vetor_tensao = [['', 'tensao a', 'tensao b', 'tensao c']]
      }

      return Vetor_tensao
}


export function hiden_linhas_tensao_pos_for(response,i,Vetor_tensao,esconde_linha1_tensao,esconde_linha2_tensao,esconde_linha_tensao) {
    
    var data_horas_mimuto  = response[0]
            var data_horas_mimuto = data_horas_mimuto[0]
            
            
            var tensao1  = response[4]
            var tensao1 = tensao1[0] 

            var tensao2  = response[5]
            var tensao2 = tensao2[0]

            var tensao3  = response[6]
            var tensao3 = tensao3[0]
    
    if(esconde_linha1_tensao !=100 & esconde_linha2_tensao == 100 & esconde_linha_tensao == 100){
        var vetor_junt_tensao = [data_horas_mimuto[i],tensao2[i],tensao3[i]]
        Vetor_tensao.push(vetor_junt_tensao)
      }
      else if(esconde_linha1_tensao !=100 & esconde_linha2_tensao != 100 & esconde_linha_tensao != 100){
        var vetor_junt_tensao = []
        Vetor_tensao.push(vetor_junt_tensao)
      }
      else if(esconde_linha1_tensao !=100 & esconde_linha2_tensao != 100 & esconde_linha_tensao == 100){
        var vetor_junt_tensao = [data_horas_mimuto[i],tensao3[i]]
        Vetor_tensao.push(vetor_junt_tensao)
      }

      else if(esconde_linha1_tensao ==100 & esconde_linha2_tensao != 100 & esconde_linha_tensao == 100){
        var vetor_junt_tensao = [data_horas_mimuto[i],tensao1[i] ,tensao3[i]]
        Vetor_tensao.push(vetor_junt_tensao)
      }

      else if(esconde_linha1_tensao ==100 & esconde_linha2_tensao != 100 & esconde_linha_tensao != 100){
        var vetor_junt_tensao = [data_horas_mimuto[i],tensao1[i]]
        Vetor_tensao.push(vetor_junt_tensao)
      }

      else if(esconde_linha1_tensao ==100 & esconde_linha2_tensao == 100 & esconde_linha_tensao != 100){
        var vetor_junt_tensao = [data_horas_mimuto[i],tensao1[i],tensao2[i]]
        Vetor_tensao.push(vetor_junt_tensao)
      }

      else if(esconde_linha1_tensao !=100 & esconde_linha2_tensao == 100 & esconde_linha_tensao != 100){
        var vetor_junt_tensao = [data_horas_mimuto[i],tensao2[i]]
        Vetor_tensao.push(vetor_junt_tensao)
      }
      else{
        var vetor_junt_tensao = [data_horas_mimuto[i],tensao1[i],tensao2[i],tensao3[i]]
        Vetor_tensao.push(vetor_junt_tensao)
      }


      return Vetor_tensao
}

