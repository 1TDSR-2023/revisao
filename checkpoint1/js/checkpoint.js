let listaTarefasArray = [];

const botaoAddTarefa = document.querySelector("#btnAddTarefa");

botaoAddTarefa.addEventListener("click", (evento) => {
    evento.preventDefault();

    const objListaTarefas = {
        descricao: document.querySelector("#idTarefa").value,
        autor: document.querySelector("#idAutor").value,
        departamento: document.querySelector("#idDepartamento").value,
        importancia: document.querySelector("#idImportancia").value
    };

    listaTarefasArray.push(objListaTarefas);

    const listaTarefasUL = document.querySelector("#lista-tarefas");

    listaTarefasUL.innerHTML = ""; // Limpa a lista antes de recriar ela..

    listaTarefasArray.forEach((tarefa) => {
        const li = document.createElement("li");
        li.textContent = `Descrição: ${tarefa.descricao}, Autor: ${tarefa.autor}, Departamento: ${tarefa.departamento}, Importância: ${tarefa.importancia}`;

        const botaoApagaTarefa = document.createElement("button");
        botaoApagaTarefa.textContent = " x ";
        botaoApagaTarefa.addEventListener("click", () => {
            const index = listaTarefasArray.indexOf(tarefa);
            if (index > -1) {
                listaTarefasArray.splice(index, 1);
                listaTarefasUL.removeChild(li);
            }
        });

        li.appendChild(botaoApagaTarefa);
        listaTarefasUL.appendChild(li);
    });

    console.log(listaTarefasArray);
});