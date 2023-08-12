// const taskForm = document.getElementById('taskForm');
// const taskInput = document.getElementById('taskInput');
// const taskList = document.getElementById('taskList');
// const tasks = [];

// function addTask() {
//     const taskText = taskInput.value;
//     if (taskText) {
//         tasks.push(taskText);
//         renderTasks();
//         taskInput.value = '';
//     }
// }

// function removeTask(index) {
//     tasks.splice(index, 1);
//     renderTasks();
// }

// function renderTasks() {
//     taskList.innerHTML = '';
//     for (let i = 0; i < tasks.length; i++) {
//         const li = document.createElement('li');
//         li.textContent = tasks[i];
//         const removeButton = document.createElement('button');
//         removeButton.textContent = 'X';
//         removeButton.addEventListener('click', () => removeTask(i));
//         li.appendChild(removeButton);
//         taskList.appendChild(li);
//     }
// }

// taskForm.addEventListener('submit', function(event) {
//     event.preventDefault();
//     addTask();
// });

// renderTasks();

//criando uma lista de tarefas
const tabela = document.getElementById('tabela');
const tbody = document.getElementById('tbody');
const listaImportancia = document.getElementById('listaImportancia');
const tarefas = [];

//dando ação ao botão de adicionar tarefa
function adicionarTarefa() {
  const descricao = document.getElementById('descricao').value;
  const autor = document.getElementById('autor').value;
  const departamento = document.getElementById('departamento').value;
  const importancia = parseInt(document.getElementById('importancia').value);

  const tarefa = {
    descricao: descricao,
    autor: autor,
    departamento: departamento,
    importancia: importancia,
    valor: 0,
    duracao: 0,
  };

  tarefas.push(tarefa);
  atualizarTabela();
  ordenarListaPorImportancia();
}

//criando a tabela
function atualizarTabela() {
  tbody.innerHTML = '';
  tarefas.forEach(tarefa => {
    const row = criarRow(tarefa);
    tbody.appendChild(row);
  });
}

//criando as linhas da tabela
function criarRow(tarefa) {
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${tarefa.descricao}</td>
    <td>${tarefa.autor}</td>
    <td>${tarefa.departamento}</td>
    <td>${tarefa.importancia}</td>
    <td><input type="number" class="valor" value="${tarefa.valor}" onchange="atualizarValor(${tarefas.indexOf(tarefa)}, this)"></td>
    <td><input type="number" class="duracao" value="${tarefa.duracao}" onchange="atualizarDuracao(${tarefas.indexOf(tarefa)}, this)"></td>
    <td><button onclick="excluirTarefa(${tarefas.indexOf(tarefa)})">Excluir</button></td>
  `;
  return row;
}

//excluindo tarefas
function excluirTarefa(index) {
  tarefas.splice(index, 1);
  atualizarTabela();
  ordenarListaPorImportancia();
}

//atualizando os valores
function atualizarValor(index, input) {
  tarefas[index].valor = parseFloat(input.value);
}

//atualizando a duração
function atualizarDuracao(index, input) {
  tarefas[index].duracao = parseFloat(input.value);
}

//ordenando a lista por importância
function ordenarListaPorImportancia() {
  tarefas.sort((a, b) => b.importancia - a.importancia);
  atualizarListaImportancia();
}

//atualizando a lista de importância
function atualizarListaImportancia() {
  listaImportancia.innerHTML = '';
  tarefas.forEach(tarefa => {
    const li = document.createElement('li');
    li.textContent = tarefa.descricao;
    listaImportancia.appendChild(li);
  });
}

console.log(tarefas);