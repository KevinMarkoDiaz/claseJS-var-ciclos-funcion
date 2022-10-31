//Var - Const - Let

let definicionVariables = 
`Una variable es un contenedor de un valor, como un 
número que podríamos usar en una suma o una cadena que podríamos usar como parte de una oración.`

//Declarar !== Inicializar !== Actualizar

//  #Declarar

let myName;
let myAge;

//  #Inicializar

myName = 'Chris';
myAge = 37;

//Declarar + Inicializar

// let myName = 'Chris';
// let myAge = 37;

//  #Actualizar

// myName = 'Bob';
// myAge = 40;


const definicionConstantes = 
`Una variable es un contenedor de un valor, como un 
número que podríamos usar en una suma o una cadena que podríamos usar como parte de una oración.

A tener en cuenta:

    -debes inicializarlos cuando los declaras.
    
        const count;        :(
            
        const count = 1;    :)

    -no puede asignarles un nuevo valor después de haberlos inicializado.

        const count = 1;        
    
        count = 3;          :(
`

//SCOPE

const SCOPE = `El ámbito es el contexto actual de ejecución en el que los valores y las expresiones son "visibles" o se puede hacer referencia a ellos. Si una variable o expresión no está en el ámbito actual, no estará disponible para su uso. Los ámbitos también se pueden superponer en una jerarquía, de modo que los ámbitos secundarios tengan acceso a los ámbitos principales, pero no al revés.

JavaScript tiene los siguientes tipos de ámbitos:

Ámbito global: el ámbito predeterminado para todo el código que se ejecuta en modo script.
Ámbito del módulo: el ámbito del código que se ejecuta en modo módulo.
Ámbito de función: el ámbito creado con una función .
Además, las variables declaradas con leto constpueden pertenecer a un ámbito adicional:

Ámbito de bloque: el ámbito creado con un par de llaves (un bloque ).`

//Ejemplo SCOPE funciones:

/*

    Una función crea un alcance, de modo que (por ejemplo) no se puede acceder a una variable definida
    exclusivamente dentro de la función desde fuera de la función o dentro de otras funciones. 
    Por ejemplo, lo siguiente no es válido:

*/

const scopeGlobal = 'scope superior con const o let'

function exampleFunction() {
    const x = "declarado dentro de una funcion con let o const"; // x can only be used in exampleFunction
    console.log(`declarado fuera de una funcion ${scopeGlobal}`);
    console.log(x);
  }
console.log('==>')
console.log(`declarado fuera de una funcion ${scopeGlobal}`);
console.log(x); // error