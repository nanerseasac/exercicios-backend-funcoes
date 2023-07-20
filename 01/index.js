const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
};



const corrigirProva = (prova) => {
    let counter = 0
    for(let i = 0;i < prova.questoes.length; i++) {
        if(prova.questoes[i].resposta === prova.questoes[i].correta) {
            counter++
        }
    }
    console.log(`O aluno(a) ${prova.aluno} acertou ${counter} questões e obteve nota ${counter * 2}`)
}

corrigirProva(prova)
