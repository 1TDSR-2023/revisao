const listaTarefasArray = []
const tarefas = []
const listaImportancia = document.getElementById('listaDeImportancia');


//Ação para o botão

function adicionarTarefa(){
    const inputDescricao = document.querySelector("#listaDescricao");
    const inputAutor = document.querySelector("#listaAutor");
    const inputDepartamento = document.querySelector("#listaDepartamento");
    const inputImportancia = document.querySelector("#listaImportancia");

//Inserindo a nova tarefa no array com o método push();
    listaTarefasArray.push(inputDescricao.value);
    listaTarefasArray.push(inputAutor.value);
    listaTarefasArray.push(inputDepartamento.value);
    listaTarefasArray.push(inputImportancia.value);


    let li = document.createElement("li");
    li.textContent = inputDescricao.value;
    li.textContent = inputAutor.value;
    li.textContent =  inputDepartamento.value;
    li.textContent = inputImportancia.value;
    listaImportancia.appendChild(li);

}