
//Criando a lista de tarefas array vazia...
let listaTarefasArray = [];

//Recuperando o botão do formulário que vai iniciar o processo de inserção da tarefa.
const botaoAddTarefa = document.querySelector("#btnAddTarefa");

//Adicionando um listener ao botão para esperar um clique que vai disparar a ação.
botaoAddTarefa.addEventListener("click", (evento)=>{
    evento.preventDefault();
    //Pegando os valores dos campos
    const inputTarefa = document.querySelector("#idTarefa");
    
    //Inserindo a nova tarefa no array com o método push();
    listaTarefasArray.push(inputTarefa.value);

    const listaTarefasUL = document.querySelector("#lista-tarefas");

    let li = document.createElement("li");
        
    console.log(listaTarefasArray);
    inputTarefa.value = "";
});