//Bucles e iteraciones


// # for

/*

    -Un forbucle se repite hasta que una condición específica se evalúa como falsa.

    Una fordeclaración se ve de la siguiente manera:

       for ([expresión inicial]; [expresión condicional]; [expresión acumuladora]){

            bloque de código

       };



    ## continuar declaración ##   

    -La continueinstrucción se puede utilizar para reiniciar una instrucción while, do-while o for.

       Cuando se usa continue finaliza la iteración actual de la instrucción while, 
       do-while o for y continúa la ejecución del ciclo con la siguiente iteración. 

       A diferencia de la breakdeclaración, continue no finaliza la ejecución del bucle por completo. 
       En un whilebucle, vuelve a la condición. En un forbucle, salta al increment-expression.

       La sintaxis de la continuesentencia es:

            -continue;
  
*/

// const limite = 5;

// for (let i = 0; i < limite; i++) {
//     console.log(`Ciclo No. ${i}`)    
// };


//       ## For con continue


// const limite = 5;

// for (let i = 0; i < limite; i++) {
//     if (i === 3) {
//         continue;
//       }
//     console.log(`Ciclo No. ${i}`)    
// };

//------------------------------------------------------------------------------------------------>


// # do...while

/*

La do...whiledeclaración se repite hasta que una condición específica se evalúa como falsa.

Una do...whiledeclaración se ve de la siguiente manera:

    do{
        bloque de código
    }
    while (expresión condicional);


    -El bloque de código se ejecuta una vez antes de comprobar la condición.

    -Si la expresión condicional es true, la declaración se ejecuta de nuevo. Al final de cada ejecución, se comprueba la condición. 
     Cuando la condición es false, la ejecución se detiene.

    Ejemplo:

        En el siguiente ejemplo, el dociclo itera al menos una vez y se repite hasta ique ya no es menor que 5.

*/

// let i = 0;

// do {
//   i += 1;
//   console.log(`     La variable tiene un valor de ${i}`);
// } while (i < 5);



//--------------------------------------------------------------------------------------------------------------->


// # while


/*

Una whilesentencia ejecuta sus sentencias siempre que una condición especificada se evalúe como true. 

    -Una whiledeclaración se ve de la siguiente manera:

        while (condicion){
            bloque de código
        }  


    Si condicion se convierte en false, el bloque de código del ciclo deja de ejecutarse y 
    el control pasa a la instrucción que sigue al ciclo.

    La prueba de condición ocurre antes del bloque de código que se ejecuta en el bucle. Si la condición devuelve true, 
    el bloque de código ejecuta y condición se vuelve a probar. 

    Si la condición devuelve false, la ejecución se detiene 


    ## Evite bucles infinitos. ##
    
        -Asegúrese de que la condición en un ciclo eventualmente se convierta false; 
         de lo contrario, ¡el ciclo nunca terminará!

    Ejemplo:
    
        -El siguiente whilebucle itera siempre que n sea menor que 3:

*/

// let n = 0;

// while (n < 3) {

//     console.log(`     La variable tiene un valor de ${n}`);

//     n++;
// };