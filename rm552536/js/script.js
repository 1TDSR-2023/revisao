//console.log("Hello word");

//declarar um array de string alunos 
//let alunos = ["João", "Maria", "José", "Ana"];
//imprimir o array de alunos
//console.log(alunos);
//imprimir primeiro elemento
//console.log(alunos[0]);
//imprimir todos os elementos do array 
//for (let i = 0; i < alunos.length; i++){
//    console.log(alunos[i]);
//}

//declarar um array de objetos
let alunos = [
    {nome: "João", idade: 18},
    {nome: "Pedro", idade: 18},
    {nome: "Ana", idade: 18},
    {nome: "Maria", idade: 18},
];

//imprimir array
console.log(alunos);
//imprimir primeiro array 
console.log(alunos[0].idade);
console.log(alunos[0].nome);

//pode ser printado da mesma forma usando as mesma coisas

console.log(alunos[0]["nome"]);
console.log(alunos[0]["idade"]);

//imprimir todos os elementos
for (let i = 0; i < alunos.length; i++) {
    console.log(alunos[i].idade);
    console.log(alunos[i].nome);
}

//adicionar um novo aluno no array de alunos com push
alunos.push({nome: "Carlos", idade: 17});
alunos.forEach(alunos => console.log(alunos.nome));
console.log(alunos);

//remover o ultimo aluno do array com pop
alunos.pop();
console.log(alunos);

//novo array de alunos a partir de alunos
let nomesAlunos = alunos.map(alunos => alunos.nome);

//imprimir novo array de nomes
console.log(nomesAlunos);

//colocando em orde alfabetica o novo array 
nomesAlunos.sort();
console.log(nomesAlunos);

//invertendo a ordem do novo array
nomesAlunos.reverse();
console.log(nomesAlunos);

//alterando elementos do array de alunos com splice p mexer no meio
nomesAlunos.splice(1, 2, "Carlos", "Pedro");
console.log(nomesAlunos);

//adicionando elementos no inicio do array com unshift
nomesAlunos.unshift("Maddu", "Maze");
console.log(nomesAlunos);

//removendo elementos no final da lista do array com shift
nomesAlunos.shift();
console.log(nomesAlunos);


//JASON = JavaScript object 