//Criando a lista de tarefas vazia
let listaTarefasArray = [];

//Recuperando o botão do formulário que vai iniciar o processo de inserção da tarefa
const botaoAddTarefa = document.querySelector("#btnAddTarefa");

//Adicionando um listener ao botão para esperar um clique que vai disparar a ação
botaoAddTarefa.addEventListener("click", (evento)=>{
    //pegando os valores dos campos
    const inputTarefa = document.querySelector("#idTarefa");

    //inserindo a nova tarefa no array com o método push
    listaTarefasArray.push(inputTarefa.value)

    //Recuperando a lista UL através do id com querySelector()
    const listaTarefasUl = document.querySelector("#listaTarefa")

    //criando o elemento li
    let li = document.createElement("li");

    //adicionando texto dentro do elemento li
    li.textContent = inputTarefa.value;

    //adicionando o elemento li a UL
    listaTarefasUl.appendChild(li);



    //criando o botão de excluir tarefas
    let botaoApagar = document.createElement("button");

    //inserindo texto no botão
    botaoApagar.textContent = " X ";

    //adicionando um botão para apagar a tarefa
    li.appendChild(botaoApagar);

    botaoApagar.addEventListener("click", (evt)=>{

        //removendo do HTML
        evt.target.parentNode.remove();
        
        //
    })


    console.log(listaTarefasArray);
    inputTarefa.value = "";
})




