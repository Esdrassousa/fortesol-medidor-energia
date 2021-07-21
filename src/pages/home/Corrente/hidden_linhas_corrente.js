import Options_graficos_corrente from './options_grapf_corrente'

const Options_de_graficos_corrente = new Options_graficos_corrente()

export function hiden_linhas_corrente(esconde_linha1_corrente, esconde_linha2_corrente, esconde_linha3_corrente) {
    if (esconde_linha1_corrente != 100 & esconde_linha2_corrente == 100 & esconde_linha3_corrente == 100) {
        var Vetor_corrente = [['', 'corrente b', 'corrente c']]
    }

    else if (esconde_linha1_corrente != 100 & esconde_linha2_corrente != 100 & esconde_linha3_corrente == 100) {
        var Vetor_corrente = [['', 'corrente c']]
    }

    else if (esconde_linha1_corrente == 100 & esconde_linha2_corrente != 100 & esconde_linha3_corrente == 100) {
        var Vetor_corrente = [['', 'corrente a', 'corrente c']]
    }

    else if (esconde_linha1_corrente == 100 & esconde_linha2_corrente != 100 & esconde_linha3_corrente != 100) {
        var Vetor_corrente = [['', 'corrente a']]
    }
    else if (esconde_linha1_corrente == 100 & esconde_linha2_corrente == 100 & esconde_linha3_corrente != 100) {
        var Vetor_corrente = [['', 'corrente a', 'corrente b']]
    }

    else if (esconde_linha1_corrente != 100 & esconde_linha2_corrente == 100 & esconde_linha3_corrente != 100) {
        var Vetor_corrente = [['', 'corrente b']]
    }
    else {
        var Vetor_corrente = [['', 'corrente a', 'corrente b', 'corrente c']]
    }

    return Vetor_corrente
}


export function hiden_linhas_corrente_pos_for(response, i, Vetor_corrente, esconde_linha1_corrente, esconde_linha2_corrente, esconde_linha3_corrente) {

    var data_horas_mimuto = response[0]
    var data_horas_mimuto = data_horas_mimuto[0]


    var corrente1 = response[1]
    var corrente1 = corrente1[0]

    var corrente2 = response[2]
    var corrente2 = corrente2[0]

    var corrente3 = response[3]
    var corrente3 = corrente3[0]

    if (esconde_linha1_corrente != 100 & esconde_linha2_corrente == 100 & esconde_linha3_corrente == 100) {
        var vetor_junt_corrente = [data_horas_mimuto[i], corrente2[i], corrente3[i]]
        Vetor_corrente.push(vetor_junt_corrente)
    }
    else if (esconde_linha1_corrente != 100 & esconde_linha2_corrente != 100 & esconde_linha3_corrente != 100) {
        var vetor_junt_corrente = []
        Vetor_corrente.push(vetor_junt_corrente)
    }
    else if (esconde_linha1_corrente != 100 & esconde_linha2_corrente != 100 & esconde_linha3_corrente == 100) {
        var vetor_junt_corrente = [data_horas_mimuto[i], corrente3[i]]
        Vetor_corrente.push(vetor_junt_corrente)
    }

    else if (esconde_linha1_corrente == 100 & esconde_linha2_corrente != 100 & esconde_linha3_corrente == 100) {
        var vetor_junt_corrente = [data_horas_mimuto[i], corrente1[i], corrente3[i]]
        Vetor_corrente.push(vetor_junt_corrente)
    }

    else if (esconde_linha1_corrente == 100 & esconde_linha2_corrente != 100 & esconde_linha3_corrente != 100) {
        var vetor_junt_corrente = [data_horas_mimuto[i], corrente1[i]]
        Vetor_corrente.push(vetor_junt_corrente)
    }

    else if (esconde_linha1_corrente == 100 & esconde_linha2_corrente == 100 & esconde_linha3_corrente != 100) {
        var vetor_junt_corrente = [data_horas_mimuto[i], corrente1[i], corrente2[i]]
        Vetor_corrente.push(vetor_junt_corrente)
    }

    else if (esconde_linha1_corrente != 100 & esconde_linha2_corrente == 100 & esconde_linha3_corrente != 100) {
        var vetor_junt_corrente = [data_horas_mimuto[i], corrente2[i]]
        Vetor_corrente.push(vetor_junt_corrente)
    }
    else {
        var vetor_junt_corrente = [data_horas_mimuto[i], corrente1[i], corrente2[i], corrente3[i]]
        Vetor_corrente.push(vetor_junt_corrente)
    }


    return Vetor_corrente
}


export function options_corrente(esconde_linha1_corrente, esconde_linha2_corrente, esconde_linha3_corrente) {
    if (esconde_linha1_corrente != 100 & esconde_linha2_corrente != 100 & esconde_linha3_corrente != 100) {

        var options1_corrente = Options_de_graficos_corrente.optios1()
    }
    else if (esconde_linha1_corrente != 100 & esconde_linha2_corrente == 100 & esconde_linha3_corrente == 100) {

        var options1_corrente = Options_de_graficos_corrente.optios2()

    }
    else if (esconde_linha1_corrente != 100 & esconde_linha2_corrente != 100 & esconde_linha3_corrente == 100) {

        var options1_corrente = Options_de_graficos_corrente.optios3()

    }
    else if (esconde_linha1_corrente == 100 & esconde_linha2_corrente != 100 & esconde_linha3_corrente == 100) {

        var options1_corrente = Options_de_graficos_corrente.optios4()

    }
    else if (esconde_linha1_corrente == 100 & esconde_linha2_corrente != 100 & esconde_linha3_corrente != 100) {

        var options1_corrente = Options_de_graficos_corrente.optios5()

    }
    else if (esconde_linha1_corrente == 100 & esconde_linha2_corrente == 100 & esconde_linha3_corrente != 100) {

        var options1_corrente = Options_de_graficos_corrente.optios7()

    }
    else if (esconde_linha1_corrente != 100 & esconde_linha2_corrente == 100 & esconde_linha3_corrente != 100) {

        var options1_corrente = Options_de_graficos_corrente.optios8()

    }
    else {
        var options1_corrente = Options_de_graficos_corrente.optios6()
    }

    return options1_corrente
}

