// ----- EXERCÍCIOS DE ARRAYS E MANIPULAÇÃO DE ARRAYS -------


// Array de salários
const salarios = [5000, 2200, 1800, 2500, 1000, 10000, 9000, 2000, 2400, 1000];

// Função para calcular o aumento 
function calcularAumento(salario) {
    // Aumenta 15% para salários até 2000
   // Aumenta 10% para salários acima de 2000
   
    if (salario <= 2000) {
            return salario * 1.15; 
        } else {
            return salario * 1.10; 
        }
    }
    
    // Aplicar o aumento utilizando o método map()
salariosAumentados = salarios.map(calcularAumento);
    
console.log(salariosAumentados);

// Filtrar salário superior a 2500 ultilizadno o método filter()
const salarios2500 = salariosAumentados.filter(function(salario){
    return salario > 2500;
});

console.log(salarios2500);

// Somar todos os salários utilizando o método reduce()
const somaSalarios = salariosAumentados.reduce(function(acumulador, salario){
    return acumulador + salario;
});

console.log(somaSalarios);