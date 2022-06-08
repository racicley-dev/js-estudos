class ContaBancaria{
    constructor(ag, numero, tipo){
        this.agencia = ag;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0.0;
    }

    get saldo(){
        return this._saldo;
    }

    set saldo(valor){
        this._saldo = valor;
    }

    sacar(valor){
        if(valor > this._saldo){
            console.log('Saldo insuficiente!');
        }else{
            this._saldo = this._saldo - valor;
            return this._saldo;
        }
    }

    depositar(valor){
        this._saldo = this._saldo + valor;
    }
}

class ContaCorrente extends ContaBancaria{
    constructor(agencia, numero, cartao){
        //o método super seta no construtor do filho os parâmetros da classe pai
        super(agencia, numero);

        this.tipo = 'CC';
        this._cartaoCredito = cartao;
    }

    get cartaoCredito(){
        return this._cartaoCredito;
    }

    set cartaoCredito(num_cartao){
        this._cartaoCredito = num_cartao;
    }


}

class ContaPoupanca extends ContaBancaria{
    constructor(ag, numero){
        super(ag, numero);
        this.tipo = 'poupança';
    }


}

class ContaUniversitaria extends ContaBancaria{
    constructor(ag, numero){
        super(ag, numero);
        this.tipo = 'universitaria';
    }

    sacar(valor){
        if(valor < 500 && valor > this._saldo){
            this._saldo = this._saldo - valor;
            return this._saldo;
        }else{
            console.log('Valor não permitido ou saldo insuficiente!');
        }
    }
}
