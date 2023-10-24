// 1. Crie uma função chamada "soma" que recebe dois parâmetros, "a" e "b". A função deve calcular a soma dos dois parâmetros e retornar o resultado. Em seguida, chame a função "soma" com valores diferentes e exiba o resultado no console.


// let number1 = parseInt(prompt("Digite o primeiro número da soma"))
// let number2 = parseInt(prompt("Digite o segundo número da soma"))

// function soma (n1, n2){
//     return n1 + n2
// }
// const resultado = soma (number1, number2)
// console.log(resultado)


// 2. Crie uma função chamada "media" que recebe três parâmetros, "a", "b" e "c". A função deve calcular a média dos três valores e retornar o resultado. Em seguida, chame a função "media" com valores diferentes e exiba o resultado no console.


// let a = parseInt(prompt("Digite o primeiro número para calcular a média"))
// let b = parseInt(prompt("Digite o segundo número para calcular a média"))
// let c = parseInt(prompt("Digite o terceiro número para calcular a média"))

// function media (n1, n2, n3){
//     return (n1 + n2 + n3)/3
// }
// const resultado = media (a, b, c)
// console.log(resultado)


// 3. Crie uma função chamada "maiorValor" que recebe três parâmetros, "a", "b" e "c". A função deve retornar o maior valor entre os três. Em seguida, chame a função "maiorValor" com valores diferentes e exiba o resultado no console.


// let a = parseInt(prompt("Digite o primeiro número"))
// let b = parseInt(prompt("Digite o segundo número"))
// let c = parseInt(prompt("Digite o terceiro número"))

// function maiorValor (n1, n2, n3){
//     if (n1>n2 && n1>n3){
//         return n1
//     }
//     if (n2>n1 && n2>n3){
//         return n2
//     }
//     else{
//         return n3
//     }
// }
// const resultado = maiorValor (a, b, c)
// console.log(resultado)


// 4. Crie uma função chamada "imprimeMensagem" que recebe um parâmetro "mensagem". A função deve exibir a mensagem recebida no console. Em seguida, chame a função "imprimeMensagem" com diferentes mensagens e exiba o resultado no console.

// let mensagem = prompt("Deixe uma mensagem:")

// function imprimeMensagem (mensagem){
//     return mensagem
// }

// const resultado = imprimeMensagem (mensagem)
// console.log(resultado)

// 5. Crie uma função chamada "imprimeNumeros" que recebe um parâmetro "num". A função deve imprimir no console todos os números de 0 até "num", em ordem crescente. Em seguida, chame a função "imprimeNumeros" com diferentes valores para "num" e exiba o resultado no console.


// let num = parseInt(prompt("Digite um número"))


// function imprimeNumeros (n1){
//     for(let n1 = 1; n1 <= num; n1++ ){
//     console.log(n1)
// }
// }
// const resultado = imprimeNumeros (num)


// 6. Crie uma função chamada "imprimeImpares" que recebe um parâmetro "num". A função deve imprimir no console todos os números ímpares de "num" até 0, em ordem decrescente. Em seguida, chame a função "imprimeImpares" com diferentes valores para "num" e exiba o resultado no console.


// let num = parseInt(prompt("Digite um número para saber se é ímpar"))

// function imprimeImpares (n){
//     for(let n1 = 0; n>= n1; n-- ) {
//         if(n % 2 !== 0){
//             console.log(n)
//         }
//     }
// }
//  const resultado = imprimeImpares (num)


// 7. Crie uma função chamada "calculaAreaRetangulo" que recebe dois parâmetros, "base" e "altura". A função deve calcular a área de um retângulo utilizando a fórmula "base x altura" e retornar o resultado. Em seguida, chame a função "calculaAreaRetangulo" com diferentes valores para "base" e "altura" e exiba o resultado no console.


// let base = parseInt(prompt("Digite o valor da base:"))
// let altura = parseInt(prompt("Digite o valor da altura:"))


// function calculaAreaRetangulo (n1, n2){
//     return n1 * n2
// }
// const resultado = calculaAreaRetangulo (base, altura)
// console.log(resultado)


// 8. Crie uma função chamada "verificaPrimo" que recebe um parâmetro "num". A função deve verificar se o número recebido é primo e exibir uma mensagem no console informando se é ou não primo. Em seguida, chame a função "verificaPrimo" com diferentes valores para "num" e exiba o resultado no console.


// let num = parseInt(prompt("Digite um valor para saber se é um número primo"))

// function verificaPrimo (n){
//     if (n/2 != 1){
//         return "Não é um número primo!"
//     }
//     else{
//         return "É um número primo!"
//     }
// }
// const resultado = verificaPrimo (num)
// console.log(resultado)


// 9. Crie uma função chamada "concatenaTexto" que recebe dois parâmetros, "texto1" e "texto2". A função deve concatenar os dois textos recebidos e retornar o resultado. Em seguida, chame a função "concatenaTexto" com diferentes valores para "texto1" e "texto2" e exiba o resultado no console.

// let texto1 = prompt("Digite o primeiro texto:")
// let texto2 = prompt("Digite o segundo texto:")

// function concatenaTexto (t1, t2){
//     return t1 + " " + t2
// }

// const resultado = concatenaTexto (texto1, texto2)
// console.log(resultado)


// 10. Crie uma função chamada "imprimeTabuada" que recebe um parâmetro "num". A função deve imprimir no console a tabuada do número recebido, de 1 até 10. Em seguida, chame a função "imprimeTabuada" com diferentes valores para "num" e exiba o resultado no console.

let num = prompt("Digite um número para ter a tabuada:")

function imprimeTabuada (n){
    for(let n1 = 1; n1<= 10; n1++ ) {
        console.log(`${n} * ${n1} = ${n*n1}          `) 
}
}
const resultado = imprimeTabuada (num)

