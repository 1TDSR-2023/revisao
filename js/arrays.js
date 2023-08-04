const formTarefas = document.getElementById('form-tarefas');
const formLista = document.getElementById('form-lista');
const input = document.getElementById('caixa');

const listaTarefas = [];

function adicionarTarefa() {
    const formTarefas = input.value;
        if (formTarefas){
            form.push(formTarefas);
            renderform();
            formInput.value = '';
        }
}

function removeForm(index){
    forms.splice (index, 1);
    renderform();
}

function renderform(){
    formlist.innerHTML = '';
    for(let i = 0; i < form.length; i++ ){
        const li = document.createElement('li');
        li.textContent = form[i];
        const removeButton = document.createElement('button');
        removeButton.textContent = '*'
    }
}