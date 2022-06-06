function verificaPalindromo(){
    let palindromo = prompt('Insira uma palavra ou número?');

    let ePalindromo = true;

    for(let i =0; i <= Math.floor(palindromo.length/2);i++){
        if(palindromo[i] != palindromo[palindromo.length - i - 1]){
            ePalindromo = false;
        }
    }
    return ePalindromo;
}

document.getElementsByTagName('h2')[0].innerHTML = verificaPalindromo() ? "SIM" : "NÃO";


