/*Sumar los elementos de cada una de las posiciones de dos arreglos y guardar el resultado en otro arreglo
• El arreglo tiene dimensión 6 y los números de los dos vectores los carga el usuario*/
import * as rls from "readline-sync";
let tamanioArreglo:number=6;
let numerosArreglo1:number[]=new Array(tamanioArreglo);
let numerosArreglo2:number[]=new Array(tamanioArreglo);
let sumaArreglos:number[]=new Array(tamanioArreglo);
sumaArreglos = [0,0,0,0,0,0]; //inicializa las posiciones con valor 0
for(let i = 0; i<numerosArreglo1.length; i++){
    numerosArreglo1[i]=rls.questionInt(`Indique un numero del arreglo 1: `);
};  
for (let i = 0; i<numerosArreglo2.length; i++){
    numerosArreglo2[i]=rls.questionInt(`Indique el numero del arreglo 2: `);
    sumaArreglos[i]=numerosArreglo1[i]+numerosArreglo2[i];
}
for (let i = 0; i<sumaArreglos.length; i++){
    console.log(`La suma de las posiciones del arreglo1 mas el arreglo2 son: ` + sumaArreglos[i]);
};
