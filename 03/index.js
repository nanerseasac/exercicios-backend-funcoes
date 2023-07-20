const carrinho = {
	nomeDoCliente: "Guido Bernal",
	produtos: [
		{
			id: 1,
			nome: "Camisa",
			qtd: 3,
			precoUnit: 3000,
		},
		{
			id: 2,
			nome: "Bermuda",
			qtd: 2,
			precoUnit: 5000,
		},
	],
	imprimirResumo: function () {
		console.log(`Cliente: ${this.nomeDoCliente}
Total de itens: ${this.calcularTotalDeItens()} itens
Total a pagar: R$ ${this.calcularTotalAPagar().toFixed(2)}`);
	},
    AddProduto: function (produto) {
        for(let i = 0;i < this.produtos.length;i++) {
            if(produto === this.produtos[i].nome) {
                this.produtos[i].qtd++
            }
        }
        this.produtos.push(produto)
    },
    imprimirDetalhes: function() {
        console.log(`total de itens: ${this.calcularTotalDeItens()}, e o total a Pagar R$ ${this.calcularTotalAPagar().toFixed(2)} Reais.`)
    },
    calcularTotalDeItens: function(){
        let qtdTotal = 0;
		for (let i = 0; i < this.produtos.length; i++) {
			qtdTotal += this.produtos[i].qtd;
		}
        return qtdTotal
    },
    calcularTotalAPagar: function(){
        let totalPrice = 0;
		let qtdTotal = 0;
		for (let i = 0; i < this.produtos.length; i++) {
			qtdTotal += this.produtos[i].qtd;
			totalPrice += this.produtos[i].qtd * this.produtos[i].precoUnit;
		}
		const precoEmReais = totalPrice / 100;
        return precoEmReais
    },
    calcularDesconto: function() {
        let cheapestItem = 9999999
        let desconto = 0
        let descontPorcentagem = 0
        for(let i = 0;i < this.produtos.length;i++) {
            if(this.produtos[i].precoUnit < cheapestItem) {
                cheapestItem = this.produtos[i].precoUnit
            }if(this.calcularTotalDeItens() > 4) {
                desconto = cheapestItem / 100
             }
             if(this.calcularTotalAPagar() > 100) {
                descontPorcentagem = this.calcularTotalAPagar() / 10
             }
        }
        desconto > descontPorcentagem ? console.log(`R$ ${desconto.toFixed(2)}.`) : console.log(`R$ ${descontPorcentagem.toFixed(2)}`)
    }

    
};

const imprimirResumoDoCarrinho = (carrinho) => {
	let totalPrice = 0;
	let qtdTotal = 0;
	for (let i = 0; i < carrinho.produtos.length; i++) {
		qtdTotal += carrinho.produtos[i].qtd;
		totalPrice += carrinho.produtos[i].qtd * carrinho.produtos[i].precoUnit;
	}
	const precoEmReais = totalPrice / 100;
	console.log(`Cliente: ${carrinho.nomeDoCliente}
Total de itens: ${qtdTotal} itens
Total a pagar: R$ ${precoEmReais.toFixed(2)}`);
};

const addProdutoAoCarrinho = (carrinho, produto) => {
    for(let i = 0;i < carrinho.produtos.length;i++) {
        if(produto === carrinho.produtos[i].nome) {
            carrinho.produtos[i].qtd++
        }
    }
    carrinho.produtos.push(produto)
}

const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
}


carrinho.AddProduto(novaBermuda)


const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
}


carrinho.AddProduto(novoTenis)



carrinho.calcularDesconto()

