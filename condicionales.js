//Control de flujo

const expresionesCondicionales =
    `   
    Una expresión condicional es un conjunto de instrucciones que se
    ejecutarán si una condición especificada es verdadera. JavaScript 
    admite dos expresiones condicionales: if...else y switch.
`;

//  # if...else

/*

Utiliza la expresión if para ejecutar una instrucción si una condición lógica es true.
Utiliza la cláusula opcional else para ejecutar una instrucción si la condición es false.

Una declaración if se ve así:

    if (condition) {
    statement_1;
    } else {
    statement_2;
    };


Aquí, la condition puede ser cualquier expresión que se evalúe como true o false.

    -Si condition se evalúa como true, se ejecuta statement_1. De lo contrario, se ejecuta statement_2.

    -statement_1 y statement_2 pueden ser cualquier declaración, incluidas otras declaraciones if anidadas.

También puedes componer las declaraciones usando else if para que se prueben varias condiciones en secuencia, de la siguiente manera:

    if (condition_1) {
    statement_1;
    } else if (condition_2) {
    statement_2;
    } else if (condition_n) {
    statement_n;
    } else {
    statement_last;
    };


Valores falsos:

    -Los siguientes valores se evalúan como "False"

        -false
        -undefined
        -null
        -0
        -NaN
        -la cadena vacía ("")

*/

// const DATO_A_VALIDAR = 3;

// if (DATO_A_VALIDAR <= 5) {
//     console.log('El número <= 5')
// } else if (DATO_A_VALIDAR > 5 && DATO_A_VALIDAR < 10) {
//     console.log('El número es > a 5 y < 10')
// } else {
//     console.log('El número es > 10 o no es un numero')
// }


//-------------------------------------------------------------------------------------------------------------->


//  # switch 


/*

Una instrucción switch permite que un programa evalúe una expresión e intente 
hacer coincidir el valor de la expresión con una etiqueta case. 
Si la encuentra, el programa ejecuta la declaración asociada.

Una instrucción switch se ve así:

    switch (expression) {
        case label_1:
            statements_1
            [break;]
        case label_2:
            statements_2
            [break;]
            …
        default:
            statements_def
            [break;]
    }

 
El programa primero busca una cláusula case con una etiqueta que coincida con el valor de expresión y 
luego transfiere el control a esa cláusula, ejecutando las declaraciones asociadas.

Si no se encuentra una etiqueta coincidente, el programa busca la cláusula opcional default:

Si se encuentra una cláusula default, el programa transfiere el control a esa cláusula, ejecutando las declaraciones asociadas.

Si no se encuentra una cláusula default, el programa reanuda la ejecución en la declaración que sigue al final de switch.

(Por convención, la cláusula default está escrita como la última cláusula, pero no es necesario que sea así).    


-Declaraciones break:

    La declaración opcional break asociada con cada cláusula case asegura que el programa salga de switch 
    una vez que se ejecuta la instrucción coincidente, 
    y luego continúa la ejecución en la declaración que sigue a switch. Si se omite break, 
    el programa continúa la ejecución dentro de la instrucción switch (y evaluará el siguiente case, y así sucesivamente).



EJEMPLO:

    En el siguiente ejemplo, si fruittype se evalúa como 'Bananas', el programa hace coincidir el valor con el caso 'Bananas' 
    y ejecuta la declaración asociada. Cuando se encuentra break, el programa sale del switch y 
    continúa la ejecución de la instrucción que sigue a switch. Si se omitiera break, 
    también se ejecutará la instrucción para case 'Cherries'.    

*/

// const fruittype = "Bananas";


// switch (fruittype) {
//     case "Oranges":
//       console.log("Las naranjas cuestan $0.59 la libra.");
//       break;
//     case "Apples":
//       console.log("Las manzanas cuestan $0.32 la libra.");
//       break;
//     case "Bananas":
//       console.log("Los plátanos cuestan $0.48 la libra.");
//       break;

//     default:
//       console.log(`Lo sentimos, no tenemos ${fruittype}.`);
//   }

//   console.log("¿Hay algo más que quieras?");