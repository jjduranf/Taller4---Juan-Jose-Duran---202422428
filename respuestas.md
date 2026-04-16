1. ¿Qué ventaja tiene usar TypeScript y definir la clase Serie en lugar de usar 
objetos literales genéricos (any) como lo haríamos en JavaScript puro al iterar 
la tabla? 

Al usar esto el programador se puede asegurar que esta asignando todos los datos del tipo (En este caso Serie) de forma correcta, pues puede ocurrir que el programador se equivoque en el tipo de dato asignado, y que para la season que tenia que ser un number, el programador ponga un string con un numero. Igualmente se logra tener una mejor documentacion y claridad en el codigo, pues al tener claro de que tipo de dato es cada cosa, y saber de donde sale cada uno de los atributos, es mucho mas claro el codigo tanto para el programador o una persona externa que desee observarlo.

2. En tu función que calcula el promedio, ¿por qué es recomendable usar 
variables let para el acumulador de la suma y const para el arreglo de datos? 

Esto es porque let se usa cuando se necesita una variable que tenga la posibilidad de cambiar a lo largo de la ejecucion del programa, como lo es la suma necesaria para el calculo de promedio, y const es una variable que no puede cambiar, por lo que es muy util para usarla en el arreglo y con esto me aseguro que este no se pueda cambiar, y asi no cometa errores reasignando los valores del arreglo.

3. ¿Qué pasaría en tiempo de compilación si intentas asignar el valor "cinco" al 
atributo seasons de una Serie en el archivo data.ts?


Si se intentara realizar esto se presentaria un error de compilacion, pues al ser typescript un lenguaje tipado si se inserta un string ("cinco") a un valor que tiene que ser number, el compilador no permitira realizar esto y retornara un error inmediatamente.