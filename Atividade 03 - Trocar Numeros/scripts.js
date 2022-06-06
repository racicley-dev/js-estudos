const entrada = [0, 1, 2, 3, 6, 8, 10, 13, 14, 17, 20, 21, 22, 27, 30, 36, 40, 60, 75, 90, 91, 99]

for(let i = 0;i<entrada.length;i++){
    document.getElementById('entrada').innerHTML += ' '+entrada[i]; 
    
    if(entrada[i] % 2 === 0){
        entrada[i] = 0;
    }

    document.getElementById('saida').innerHTML += ' '+entrada[i];
}
