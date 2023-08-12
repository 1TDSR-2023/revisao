let listaTarefasArray = []
const tarefas = []
const listaImportancia = document.getElementById('#listaDeImportancia');

//Ação para o botão
const botaoAddTarefa = document.querySelector("#btnAddTarefa");
botaoAddTarefa.addEventListener('click',(evento) => {
    evento.preventDefault();

    const inputDescricao = document.querySelector("#listaDescricao");
    const inputAutor = document.querySelector("#listaAutor");
    const inputDepartamento = document.querySelector("#listaDepartamento");
    const inputImportancia = document.querySelector("#listaImportancia");

//Inserindo a nova tarefa no array com o método push();
    listaTarefasArray.push(inputDescricao.value);
    listaTarefasArray.push(inputAutor.value);
    listaTarefasArray.push(inputDepartamento.value);
    listaTarefasArray.push(inputImportancia.value);

//Recuperando a lista UL através do id com querySelector();

//Elemento li criado.
    let li = document.createElement("li");

//Adiocionando texto dentro do elemento LI;
    li.textContent = inputDescricao.value;
    li.textContent = inputAutor.value;
    li.textContent = inputDepartamento.value;
    li.textContent = inputImportancia.value;  
});

console.log(listaTarefasArray);
inputTarefa.value = "";
