let A=[5]
let B=[5]
for (let i = 0; i < 5; i++) {
    A[i]=prompt("informe o valor de A")
    B[i]=prompt(" informe o valor de B")
    console.log(A[i])
    console.log(B[i])
    
}


for (let j = 0; j < 5; j++){

    if (A[j]===B[j]) {
        console.log(`${A[j]}=${B[j]}`)
       // document.write(`a posicão A e B são iguais ${A[j]}=${B[j]} `)
       // document.write(`<br`)
    } else {
        document.write(`os valores não são iguais ${A[j]} são diferentes ${B[j]}`)
        `${A[j]}=${B[j]}`
    }

}