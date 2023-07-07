const alunos = [{nome: "joao", nota: 2}, {nome: "diogo", nota: 9}, {nome: "mari", nota: 10}, {nome: "amorim", nota: 6}, {nome: "tiago", nota: 5}];

function aprovado(aluno) {
    return aluno.nota >= 6
}

console.log(alunos.filter(aprovado));