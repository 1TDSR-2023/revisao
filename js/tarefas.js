let listaTarefasArray =[];

const botaoAddTarefa = document.querySelector("#btnAddTarefa");

botaoAddTarefa.addEventListener("click",(evento)=>{
    const inputTarefa = document.querySelector("#idTarefa");
    console.log(inputTarefa.value);
    inputTarefa.value = "";
});