const OR = (value1, value2) => {
    console.log(parseInt)
    if(parseInt(value1) == 1 || parseInt(value2) == 1){
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

const XOR = (value1, value2) => {
    let count = parseInt(value1) + parseInt(value2)
    console.log(count)
    if(count === 1){
        LightOn()
    }else{
        lightOff()
    }
}

const XNOR = (value1, value2) => {
    let count = parseInt(value1) + parseInt(value2)
    if(count == 1){
        lightOff()
    }else{
        LightOn()
    }
}