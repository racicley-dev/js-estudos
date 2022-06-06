function calculaIdade(anos){
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

    const joao = 
    {
        nome: 'João',
        idade: 11
    };

    const maria = {
        nome: 'Maria',
        idade: 7
    };

    const carlos = {
        nome: 'Carlos',
        idade: 17
    };

    const ana = {
        nome: 'Ana',
        idade: 20
    };


    //console.log(calculaIdade.call(joao, 20));

    console.log(calculaIdade.apply(maria, [20]));