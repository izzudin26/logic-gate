let btn = document.querySelector("#button")
let val1 = document.querySelector("#val1")
let val2 = document.querySelector("#val2")
let gate = document.querySelector("#gate")
let incrementbtn1 = document.querySelector("#increment1")
let incrementbtn2 = document.querySelector("#increment2")
let decrementbtn1 = document.querySelector("#decrement1")
let decrementbtn2 = document.querySelector("#decrement2")

const increment = (textbox) => {
    if(textbox.value == 0){
        textbox.value = 1
    }
}

const decrement = (textbox) => {
    if(textbox.value > 0){
        textbox.value = 0
    }
}

incrementbtn1.addEventListener("click", () => {
    return increment(val1)
})

decrementbtn1.addEventListener("click", () => {
    return decrement(val1)
})

incrementbtn2.addEventListener("click", () => {
    return increment(val2)
})

decrementbtn2.addEventListener("click", () => {
    return decrement(val2)
})

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