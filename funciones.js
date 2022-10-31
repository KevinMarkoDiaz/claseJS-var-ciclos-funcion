// Funciones

const funciones =
    `
    En términos generales, una función es un "subprograma" que puede ser llamado por código externo 
    (o interno en caso de recursión) a la función. Al igual que el programa en sí mismo, 
    una función se compone de una secuencia de declaraciones, 
    que conforman el llamado cuerpo de la función. Se pueden pasar valores a una función, 
    y la función puede devolver un valor.

    Para devolver un valor especifico distinto del predeterminado, una función debe tener una sentencia return, 
    que especifique el valor a devolver. Una función sin una instrucción return devolverá el valor predeterminado,
    el valor predeterminado es undefined.

    Los parámetros en la llamada a una función son los argumentos de la función. 
    Los argumentos se pasan a las funciones por valor.

 `

/*
 
-Definiendo funciones

   Hay varias formas de definir funciones:
 
   1.

   -Declaración de una función (La instrucción function)

   Hay una sintaxis especial para declarar funciones:

   function nombre(param, param) {
   instrucciones
   };


   nombre:
       El nombre de la función.

   param:
       El nombre de un argumento que se pasará a la función. Una función puede tener hasta 255 argumentos.

   instrucciones:
       Las instruciones que forman el cuerpo de la función.



   2.

   La expresión de función flecha (=>):

   Una expresión de función flecha tiene una sintaxis más corta y su léxico se une a este valor.

   (param, param) => { instrucciones }

   param => expresión

   ejemplo:
*/

// function cicloQueImprimePorConsola(limite) {
//     for (let i = 0; i < limite; i++) {
//         if (i === 3) {
//             continue;
//         }
//         console.log(`Ciclo No. ${i}`)
//     };

// }
// cicloQueImprimePorConsola(10);

const cicloQueImprimePorConsolaSitaxisFlecha = (limite, numeroASaltar) => {
    for (let i = 0; i < limite; i++) {
        if (i === numeroASaltar) {
            continue;
        }
        console.log(`Ciclo No. ${i}`)
    };
};
cicloQueImprimePorConsolaSitaxisFlecha(10, 5)