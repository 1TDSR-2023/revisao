//console.log("Hello World!");

//Declarar um array de String de alunos.
let alunos = ["João", "Maria", "José", "Pedro", "Ana"];
//Imprimir o array de alunos.
console.log(alunos);
//Imprimir o primeiro elemento do array de alunos.
console.log(alunos[0]);
//Imprimir o último elemento do array de alunos.
for (let i = 0; i < alunos.length; i++) {
    console.log(alunos[i]);
}
//Imprimir todos os elementos de array de aluno com forEach.
alunos.forEach(function (aluno) {
    console.log(aluno);
}); //arrow function
alunos.forEach(aluno => console.log(aluno)); //arrow function
//Imprimir todos os elementos de array de aluno com for of.
for (let aluno of alunos) {
    console.log(aluno);
}
//Imprimir todos os elementos de array de aluno com for in.
for (let i in alunos) {
    console.log(alunos[i]);
}