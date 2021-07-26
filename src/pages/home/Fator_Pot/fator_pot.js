

export function fator_potencia(response) {
    var fator_pot1 = response[7]
    var fator_pot1 = fator_pot1[0]

    var fator_pot2 = response[8]
    var fator_pot2 = fator_pot2[0]

    var fator_pot3 = response[9]
    var fator_pot3 = fator_pot3[0]

    return [fator_pot1,fator_pot2,fator_pot3]

}