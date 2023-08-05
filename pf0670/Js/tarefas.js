
//Criando a lista de tarefas array vazia...
let listaTarefasArray = [];

//Recuperando o botão do formulario que vai iniciar o processo de inserção da tarefa.
const botaoAddTarefa = document.querySelector("#btnAddTarefa");

//Adicionando um listener ao botão para esperar um clique que vai disparar a ação.
botaoAddTarefa.addEventListener("click", (evento)=>{
    evento.preventDefault();

    const inputTarefa = document.querySelector("#idTarefa");

    listaTarefasArray.push(inputTarefa.value);



    console.log(listaTarefasArray);
    inputTarefa.value = "";
});
