function trataErro(array, numero){
    
    try{
        if(!array || !numero) throw new ReferenceError("Faltam parâmetros!");

        if(typeof array !== 'object') throw new TypeError("O Array precisa ser um objeto.");

        if(typeof numero !== 'number') throw new TypeError("Informe corretamente um caracter numérico.");

        if(array.length !== numero) throw new RangeError("O tamanho do array e o número precisam ser iguais.");

        return array;
    }catch(e){
        if(e instanceof ReferenceError){
            console.log("Este é um ReferenceError!");
            console.log(e.name);
            console.log(e.stack);
            console.log(e.message);
        } else if(e instanceof TypeError){
            console.log("Este é um TypeError!");
            console.log(e.name);
            console.log(e.stack);
            console.log(e.message);
        } else if(e instanceof RangeError){
            console.log("Este é um RangeError!");
            console.log(e.name);
            console.log(e.stack);
            console.log(e.message);
        }else{
            console.log("Erro não esperado: ", e);
        }
    }

}


arr = [1,2,3]

//trataErro();
//trataErro(arr,7);
trataErro(arr,'3');