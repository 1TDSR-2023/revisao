let listaTarefasArray = [];

const botaoAddTarefa = document.querySelector("#btnAddTarefa");

botaoAddTarefa.addEventListener("click", (evento) => {
    evento.preventDefault();

    const objListaTarefas = {
        descricao: document.querySelector("#idTarefa").value,
        autor: document.querySelector("#idAutor").value,
        departamento: document.querySelector("#idDepartamento").value,
        importancia: document.querySelector("#idImportancia").value,
        valor: document.querySelector("#idValor").value,
        duracao: document.querySelector("#idDuracao").value
    };

    listaTarefasArray.push(objListaTarefas);

    const listaTarefasUL = document.querySelector("#lista-tarefas");

    listaTarefasUL.innerHTML = ""; // Limpa a lista antes de recriar ela..

    listaTarefasArray.forEach((tarefa) => {
        const li = document.createElement("li");
        li.textContent = `Descrição: ${tarefa.descricao}, Autor: ${tarefa.autor}, Departamento: ${tarefa.departamento}, Importância: ${tarefa.importancia}, Valor a parte: ${tarefa.valor}, Duracao a parte: ${tarefa.valor}`;

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

//Tentativa de organizar as tarefas por importancia...

// const listaTarefasUL2 = document.querySelector("#tarefasPorImportancia");
// listaTarefasUL2.innerHTML = ""; // limpa a lista.

// function ordenarListaPorImportancia() {
//     listaTarefasArray.sort((a, b) => b.importancia - a.importancia);
//     atualizarImportancias();
//   }
   
//   //atualizando a lista de importância
  
//   function atualizarImportancias() {
//     listaImportancia.innerHTML = '';

//     listaTarefasArray.forEach(tarefaDois => {
//       const li2 = document.createElement('li');  
//       li2.textContent = `Descrição: ${tarefaDois.descricao.value}`;
//       tarefasPorImportancia.appendChild(li2);
//     });
//   }

