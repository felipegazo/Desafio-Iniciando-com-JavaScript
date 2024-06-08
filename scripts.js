alert("Hello World!")

let number1 = prompt("Digite um número")
let number2 = prompt("Digite outro número")

alert(`A soma dos numeros é: ${Number(number1) + Number(number2)}`)
alert(`A subtação dos numeros é: ${Number(number1) - Number(number2)}`)
alert(`A multiplicação dos numeros é: ${Number(number1) * Number(number2)}`)
alert(`A divisão dos numeros é: ${Number(number1) / Number(number2)}`)

if((Number(number1) + Number(number2)) % 2 === 0) {
    alert(`A soma dos numeros é PAR`)
} else {
    alert(`A soma dos numeros é ÍMPAR`)
}

if((Number(number1) + Number(number2)) % 2 !== 0) {
    alert(`A soma dos numeros é ÍMPAR`)
} else {
    alert(`A soma dos numeros não é ÍMPAR`)
}



let isANumber = 10

if(typeof isANumber == "number") {
    alert("A variável É um número")
} else {
    alert("A variável Não é um número")
}

let isAString = "Felipe"

if(typeof isAString == "string") {
    alert("A variável É uma String")
} else {
    alert("A variável Não é uma String")
}

let isBoolean = true

if(typeof isBoolean == "boolean") {
    alert("A variável É Booleano")
} else {
    alert("A variável Não É Booleano")
}


