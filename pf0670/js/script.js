// console.log("Hello World!");

// //Declarar um array de String de alunos.
// let alunos = ["João", "Maria", "José", "Pedro", "Ana"];
// //Imprimir o array de alunos.
// console.log(alunos);
// //Imprimir o primeiro elemento do array de alunos.
// console.log(alunos[0]);
// //Imprimir todos os elementos do array de alunos.
// for (let i = 0; i < alunos.length; i++) {
//     console.log(alunos[i]);
// }
// //Imprimir todos os elementos do array de alunos com forEach.
// alunos.forEach(function (aluno) {
//     console.log(aluno);
// }); //Função anônima.

// alunos.forEach(aluno => console.log(aluno)); //Arrow function.

// //Imprimir todos os elementos do array de alunos com for of.
// for (let aluno of alunos) {
//     console.log(aluno);
// }
// //Imprimir todos os elementos do array de alunos com for in.
// for (let i in alunos) {
//     console.log(alunos[i]);
// }


//Declarar um array de objetos de alunos.
let alunos = [
    { nome: "João", idade: 18 },
    { nome: "Maria", idade: 17 },
    { nome: "José", idade: 20 },
    { nome: "Pedro", idade: 19 },
    { nome: "Ana", idade: 16 }
];

//Imprimir o array de alunos.
console.log(alunos);
//Imprimir o primeiro elemento do array de alunos.
console.log(alunos[0].nome);
console.log(alunos[0].idade);
console.log(alunos[0]["nome"]);
console.log(alunos[0]["idade"]);

//Imprimir todos os elementos do array de alunos.
for (let i = 0; i < alunos.length; i++) {
    console.log(alunos[i].nome);
    console.log(alunos[i].idade);
}

//Imprimir todos os elementos do array de alunos com forEach.
alunos.forEach(function (aluno) {
    console.log(aluno.nome);
    console.log(aluno.idade);
}); //Função anônima.

alunos.forEach(aluno => console.log(aluno.nome)); //Arrow function.

//Adicionar um novo aluno no array de alunos com push.
alunos.push({ nome: "Carlos", idade: 17 });
alunos.forEach(aluno => console.log(aluno.nome));

//Remover o último aluno do array de alunos com pop.
alunos.pop();
console.log(alunos);


//Criando um novo array de alunos a partir do array de alunos.
let nomesAlunos = alunos.map(aluno => aluno.nome);

//imprimir o novo array de nome de alunos.
console.log(nomesAlunos);

//Colocando em ordem alfabética o novo array de nomes de alunos.
nomesAlunos.sort();
console.log(nomesAlunos);

//invertendo a ordem do novo array de nomes de alunos.
nomesAlunos.reverse();
console.log(nomesAlunos);
