let btn = document.querySelector("#button")
let val1 = document.querySelector("#val1")
let val2 = document.querySelector("#val2")
let gate = document.querySelector("#gate")
btn.addEventListener("click", () => {
    console.log(gate.value)
    switch(gate.value){
        case "OR":
            return OR(val1, val2)
        break

        case "NOR":
           return NOR(val1, val2)
        break

        case "AND":
           return AND(val1, val2)
        break

        case "NAND":
           return NAND(val1, val2)
        break
    }
})