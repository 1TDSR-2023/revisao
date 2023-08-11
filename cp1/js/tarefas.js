let listaTarefasArray = []
const listaFormulario = document.getElementById('#listaFormulario');

const btnAddTarefa = document.querySelector("#btnAddTarefa");
btnAddTarefa.addEventListener("click", (evento) => {
    evento.preventDefault();

    const inputDescricao = document.querySelector("#listaDescricao");
    const inputAutor = document.querySelector("#listaAutor");
    const inputDepartamento = document.querySelector("#listaDepartamento");
    const inputImportancia = document.querySelector("#listaImportancia");

    listaTarefasArray.push(inputDescricao.value);
    listaTarefasArray.push(inputAutor.value);
    listaTarefasArray.push(inputDepartamento.value);
    listaTarefasArray.push(inputImportancia.value);
}); 