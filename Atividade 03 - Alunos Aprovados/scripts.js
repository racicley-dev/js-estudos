const alunos = [
    {
        nome: 'João',
        nota: 10.0,
        turma: '1C' 
    },
    {
        nome: 'Maria',
        nota: 10.0,
        turma: '2C' 
    },
    {
        nome: 'Carlos',
        nota: 1.0,
        turma: '1F' 
    },
    {
        nome: 'Jessica',
        nota: 5.0,
        turma: '1B' 
    }
]

function verificaAprov(arr, media){
    let aprovados = [];
    for(let i=0; i< arr.length; i++){
        
        const {nota, nome} = arr[i];

        if(nota >= media){
            aprovados.push(nome);
        }
    }
    return aprovados;
}