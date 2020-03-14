const OR = (value1, value2) => {
    if(parseInt(value1) !== 0 || parseInt(value2) !== 0){
         LightOn()
    }else{
         lightOff()
    }
}

const NOR = (value1, value2) => {
    if(parseInt(value1) !== 0 || parseInt(value2) !== 0){
         lightOff()
    }else{
         LightOn()
    }
}

const AND = (value1, value2) => {
    if(parseInt(value1) == 1 && parseInt(value2) == 1){
         LightOn()
    }else{
         lightOff()
    }
}

const NAND = (value1, value2) => {
    if(parseInt(value1) == 1 && parseInt(value2) == 1){
         lightOff()
    }else{
         LightOn()
    }
}