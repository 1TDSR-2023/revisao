let listaTarefasArray =[];

const botaoAddTarefa = document.querySelector("#btnAddTarefa");

botaoAddTarefa.addEventListener("click",(evento)=>{
    const inputTarefa = document.querySelector("#idTarefa");
    
    listaTarefasArray.push(inputTarefa.value)
    
    console.log(inputTarefa.value);
    inputTarefa.value = "";
});