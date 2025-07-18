**Prompt 1:** 
Tu misión será preparar el proyecto para poder ejecutar tests unitarios desde consola usando el comando npm test.

A continuación tienes 2 tutoriales que te ayudarán con esta tarea:

@https://medium.com/@angelygranados/c%C3%B3mo-empezar-a-hacer-unit-testing-con-jest-gu%C3%ADa-b%C3%A1sica-ca6d9654672 

@https://jestjs.io/docs/getting-started 

Recuerda que el código está escrito en Typescript. La mejor opción es utilizar ts-jest:

@https://github.com/kulshekhar/ts-jest 

**Prompt 2:** 
documenta todo el proceso en un nuevo archivo formato markdown, nombralo con algo representativo

**Prompt 3:** 
@SETUP_UNIT_TESTS_JEST_TS.md realiza la instalación automanticamente

**Prompt 4:** 
crea un test de ejemplo para comprobar la instalación

**Prompt 5:** 
analiza todo el codigo y aplicando ingeneria inversa extrae la maxima cantidad de historias de usuario.

Ejemplos de User Story

Desarrollo de Productos:"Como gerente de producto, quiero una manera en que los miembros del equipo puedan entender cómo las tareas individuales contribuyen a los objetivos, para que puedan priorizar mejor su trabajo."

Experiencia del Cliente:"Como cliente recurrente, espero que mi información quede guardada para crear una experiencia de pago más fluida, para que pueda completar mis compras de manera rápida y sencilla."

Aplicación Móvil:"Como usuario frecuente de la aplicación, quiero una forma de simplificar la información relevante de la manera más rápida posible, para poder acceder a la información que necesito de manera eficiente."

Las historias deben tener la siguiente estructura:

Formato estándar: "Como [tipo de usuario], quiero [realizar una acción] para [obtener un beneficio]".

Descripción: Una descripción concisa y en lenguaje natural de la funcionalidad que el usuario desea.

Criterios de Aceptación: Condiciones específicas que deben cumplirse para considerar la User Story como "terminada", éstos deberian de seguir un formato similar a “Dado que” [contexto inicial], "cuando” [acción realizada], “entonces” [resultado esperado].

Notas adicionales:  Notas que puedan ayudar al desarrollo de la historia

Tareas: Lista de tareas y subtareas para que esta historia pueda ser completada

guiate por el siguiente ejemplo de estructura:

Título de la Historia de Usuario: 

Como [rol del usuario],
quiero [acción que desea realizar el usuario],
para que [beneficio que espera obtener el usuario].
Criterios de Aceptación:

[Detalle específico de funcionalidad]
[Detalle específico de funcionalidad]
[Detalle específico de funcionalidad]
Notas Adicionales:

[Cualquier consideración adicional]
Historias de Usuario Relacionadas:

[Relaciones con otras historias de usuario]

crea un nuevo archivo UserStories-AMP.md y documenta todo aplicando buenas practicas agiles como si fueras un product owner

**Prompt 6:** 
Eres lider tecnico experto en TDD y necesitas dar las directrices al equipo de desarrollo para que escriban los tests unitarios.

analiza @UserStories-AMP.md y transcribe las historias de usario a un lenguaje tecnico para que los desarrolladores generen test unitarios de alta calidad.

Debes considerar buenas practicas como:

Utiliza nombres de funciones de prueba descriptivos que indiquen claramente lo que cada prueba está verificando.

Patrón Arrange-Act-Assert (AAA)

Para las pruebas que siguen un patrón similar pero usan diferentes entradas, considera parametrizarlas para evitar la duplicación de código.

Los mensajes de afirmaciones para entender rápidamente qué salió mal.

Pruebas de Casos Límite

Mock de la base de datos cuando sea necesario para no alterar los datos. 

documenta todo en @TDD.md 

**Prompt 7:** 
eres un desarrollador backend senior con experiencia en TDD, debes analizar @TDD.md y generar el set de tests unitarios en @tests-AMP.test.ts  debes seguir al pie de la letra las directrices del documento, usando buenas praticas y generando tests unitarios de alta calidad. comenta todo lo necesario para que el equipo de desarrollo entienda el proceso de desarrollo y pueda generar tests unitarios de alta calidad.

apoyate en @UserStories-AMP.md 

**Prompt 8:** 
@tests-AMP.test.ts todos los tests fallan al validar el campo phone, adapta la validacion para que sea correcta

**Prompt 9:**
@tests-AMP.test.ts fallan los tests con conexion a BD. utiliza mocks para no depender de la bd y no alterar datos

**Prompt 10:**
@tests-AMP.test.ts falla el caso con formato cv invalido, arreglalo

**Prompt 11:**
@tests-AMP.test.ts asegurate que la cobertura sea sobre el 85%

**Prompt 12:** 
documenta el reporte de cobertura en el archivo @coverage.md y muestra cómo interpretar el reporte de cobertura
