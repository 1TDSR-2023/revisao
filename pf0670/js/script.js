// console.log("Hello World!");

//Declarar um array de String de alunos.
let alunos = ["João", "Maria", "José", "Pedro", "Ana"];
//Imprimir o array de alunos.
console.log(alunos);
//Imprimir o primeiro elemento do array de alunos.
console.log(alunos[0]);
//Imprimir todos os elementos do array de alunos.
for (let i = 0; i < alunos.length; i++) {
    console.log(alunos[i]);
}
//Imprimir todos os elementos do array de alunos com forEach.
alunos.forEach(function (aluno) {
    console.log(aluno);
}); //Função anônima.
alunos.forEach(aluno => console.log(aluno)); //Arrow function.
//Imprimir todos os elementos do array de alunos com for of.
for (let aluno of alunos) {
    console.log(aluno);
}
//Imprimir todos os elementos do array de alunos com for in.
for (let i in alunos) {
    console.log(alunos[i]);
}
