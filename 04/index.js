const contaBancaria = {
	nome: "Maria",
	saldo: 0,
	historicos: [],
	depositar: function (num) {
		let numEmReais = num / 100;
		this.saldo += numEmReais;
		console.log(numEmReais);
		contaBancaria.historicos.push({
			tipo: "Deposito",
			valor: numEmReais,
		});
		return `Deposito de R$${numEmReais} realizado para o cliente ${this.nome}`
	},
    sacar: function(valor) {
        let saldoEmCentavos = this.saldo * 100
        if(valor > saldoEmCentavos) {
            return `Saldo insuficiente para o saque de: ${this.nome}`
        }else{
            const resultado = saldoEmCentavos - valor
            this.saldo = resultado / 100
            contaBancaria.historicos.push({
                tipo: "Saque",
                valor: valor / 100,
            })
            return `Saque de R$${valor / 100} realizado para o cliente: ${this.nome}`
        }
    },
    extrato: function() {
            let historicoString = '';
            for (let i = 0; i < this.historicos.length; i++) {
              const historico = this.historicos[i];
              historicoString += `${historico.tipo} de R$${historico.valor}\n`;
            }
            return `Extrato de ${this.nome} - Saldo: R$${this.saldo}, Histórico:\n${historicoString}`
          }
        
};


console.log(contaBancaria.depositar(10000));
console.log(contaBancaria.sacar(50000));
console.log(contaBancaria.sacar(5000));
console.log(contaBancaria.extrato());

