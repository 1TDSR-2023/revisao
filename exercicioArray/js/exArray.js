//----------------------------Exercicio 1------------------------------
//criando array com 10 salarios
const salarios = [1000, 2000, 5000, 600, 8000, 2500, 10000, 9000, 1200, 900]

//função que calcula o aumento, ""dúvida, da pra colocar direto no map?""
function calcularSalario(salarios){
    if (salarios <= 2000){
        return salarios * 1.15;
    }else{
        return salarios * 1.10;    }
}

//usando o map para atribuir um aumento de 15% para salarios ate 2000, e 10% para salarios acima de 2000.
aumentoSalario = salarios.map(calcularSalario);

//dando o console.log para mostrar o array com o aumento.
console.log(aumentoSalario);

//------------------------------Exercicio 2--------------------------------------
//criando novo array com o metodo filter. contendo somente salarios superiores a 2500.
//filtrando os salarios.
const salariosAltos = salarios.filter( (salarios) => salarios >= 2500)

//mostrando o novo array contendo só salarios maiores que 2500.
console.log(salariosAltos);


//--------------------------------Exercicio 3--------------------------------------------
//exercicio 3, usando o reduce para somar todos os salarios altos :)  
const somaSalarios = salariosAltos.reduce( (acumulador, salariosAltos) => acumulador + salariosAltos);

//mostrando no console 
console.log(somaSalarios);



