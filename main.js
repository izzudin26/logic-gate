let btn = document.querySelector("#button")
let val1 = document.querySelector("#val1")
let val2 = document.querySelector("#val2")
let gate = document.querySelector("#gate")
btn.addEventListener("click", () => {
    switch(gate.value){
        case "OR":
            return OR(val1.value, val2.value)
        break

        case "NOR":
           return NOR(val1.value, val2.value)
        break

        case "AND":
           return AND(val1.value, val2.value)
        break

        case "NAND":
           return NAND(val1.value, val2.value)
        break

        case "X-OR":
            return XOR(val1.value, val2.value)
        break

        case "X-NOR":
            return XNOR(val1.value, val2.value)
        break
    }
})