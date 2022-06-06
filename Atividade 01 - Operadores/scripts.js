var numeros = prompt('Insira os dois números');

let num1 = numeros.split(' ')[0];

let num2 = numeros.split(' ')[1];

let resultado = '';

if(Number(num1) === Number(num2)){
    resultado = resultado + `Os numeros ${num1} e ${num2} são iguais. `;
}else{
    resultado = resultado + `Os numeros ${num1} e ${num2} não são iguais. `;
}

let soma = Number(num1) + Number(num2);

resultado = resultado + `Sua soma é ${soma}, `;

if(soma > 10){
    resultado = resultado + `que é maior que 10 e `;
}else{
    resultado = resultado + `que é menor que 10 e `;
}

if(soma > 20){
    resultado = resultado + `que é maior que 20.`;
}else{
    resultado = resultado + `que é menor que 20.`;
}

console.log(resultado);