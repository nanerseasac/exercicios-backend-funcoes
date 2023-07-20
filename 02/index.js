const carro = {
	ligado: false,
	velocidade: 0,
	ligar: function () {
		this.ligado === true
			? console.log("Este carro já está ligado.")
			: ((this.ligado = true), this.carStatus());
	},
	desligar: function () {
		this.ligado === false
			? console.log("Este carro já está desligado.")
			: ((this.ligado = false), (this.velocidade = 0), this.carStatus());
	},
	acelerar: function () {
		this.ligado === false
			? console.log("Não é possível acelerar um carro desligado.")
			: ((this.velocidade += 10), this.carStatus());
	},
	desacelerar: function () {
		this.ligado === false
			? console.log("Não é possível desacelerar um carro desligado.")
			: ((this.velocidade -= 10), this.carStatus());
	},
	carStatus: function () {
		console.log(
			`Carro ${this.ligado ? "Ligado" : "Desligado"}. Velocidade: ${this.velocidade}`
		);
	},
};

carro.desligar();
carro.ligar();
carro.ligar();
carro.acelerar();
carro.acelerar();
carro.desacelerar();
carro.desligar();
carro.acelerar();
carro.desacelerar();
