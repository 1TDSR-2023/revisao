// console.log("Hello World");

//Declarar array de alunos

// let alunos = ["caio","boris","correa"];

// //Imprimir o array de alunos
// console.log(alunos);

// //imprimir todos os elementos do array de alunos com forEach arrow function
// alunos.forEach( aluno => console.log(aluno))

// //imprimir todos os elementos do array de alunos com for Of arrow function
// for(let aluno of alunos){
//     console.log(aluno)
// }

// //imprimir todos os elementos do array de alunos com for In arrow function
// for(let aluno in alunos){
//     console.log(aluno)
// }


//Declarar um array de objetos de alunos
let alunos = [
    {nome: "caio", idade: 12},
    {nome: "boris", idade: 12},
    {nome: "correa", idade: 12}
];

//Imprimir array de alunos
console.log(alunos[0].nome);
console.log(alunos[0]["nome"]);

//imprimir todos os elementos do array de alunos

for(let i = 0; i <alunos.length; i++){
    console.log(alunos[i].nome);
    console.log(alunos[i].idade);
};

alunos.forEach(aluno => console.log(aluno.nome))

//adicionar um novo aluno no array de alunos com push
alunos.push({nome: "joazin", idade: 45});
console.log(alunos);

//Remover o último aluno do array de alunos com pop
alunos.pop();


//Criando um novo array de alunos a partir do array de alunos
let nomesAlunos = alunos.map(aluno => aluno.nome);

//imprimir o novo array de nomes de alunos;
console.log(nomesAlunos);

//Colocando em ordem alfabética o novo array de nomes de alunos
nomesAlunos.sort();
console.log(nomesAlunos);

//invertendo ordem do novo array de nomes de aluno
nomesAlunos.reverse();
console.log(nomesAlunos);


//Alterando elemetos do array de alunos com splice
nomesAlunos.splice(1,2,"Carlos", "Pedro")

//Alterando elementos no array de alunos com unshift
nomesAlunos.unshift("caio","juniu")



