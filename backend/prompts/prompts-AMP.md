# Historial de prompts 📑

## Modelo 🤖

- **LLM:** Gemini
- **Versión:** 2.5 Pro

## Categorías 🏷️

- **⚙️ Configuración y Automatización:** Tareas relacionadas con la configuración inicial del proyecto, instalación de dependencias y la creación de scripts para automatizar procesos.
- **📄 Generación de Documentación:** Creación de archivos de documentación, como manuales de usuario, guías de instalación o reportes.
- **🧠 Análisis y Diseño:** Tareas que implican el análisis de código o requisitos para extraer información y diseñar soluciones, como la creación de historias de usuario.
- **💡 Creación de Tests:** Desarrollo de nuevos tests unitarios para verificar la funcionalidad del código.
- **🐞 Depuración de Tests:** Proceso de identificar, analizar y corregir errores en los tests existentes que están fallando.
- **📊 Reporte y Cobertura:** Generación y análisis de reportes, específicamente sobre la cobertura de los tests.
- **✍️ Edición y Refinamiento:** Modificación y mejora de archivos existentes, incluyendo la categorización y reestructuración de contenido.

## Estadísticas 📈

| categoria                         | cantidad | prompts                                       |
| --------------------------------- | -------- | --------------------------------------------- |
| ⚙️ Configuración y Automatización | 2        | prompt 1, prompt 3                            |
| 📄 Generación de Documentación    | 4        | prompt 2, prompt 5, prompt 6, prompt 12       |
| 🧠 Análisis y Diseño              | 2        | prompt 5, prompt 6                            |
| 💡 Creación de Tests              | 2        | prompt 4, prompt 7                            |
| 🐞 Depuración de Tests            | 3        | prompt 8, prompt 9, prompt 10                 |
| 📊 Reporte y Cobertura            | 2        | prompt 11, prompt 12                          |
| ✍️ Edición y Refinamiento         | 2        | prompt 13, prompt 14                          |

**Total de prompts: 14**

## Prompts del usuario 📝

**Prompt 1:** `⚙️ Configuración y Automatización`
Tu misión será preparar el proyecto para poder ejecutar tests unitarios desde consola usando el comando npm test.

A continuación tienes 2 tutoriales que te ayudarán con esta tarea:

@https://medium.com/@angelygranados/c%C3%B3mo-empezar-a-hacer-unit-testing-con-jest-gu%C3%ADa-b%C3%A1sica-ca6d9654672

@https://jestjs.io/docs/getting-started

Recuerda que el código está escrito en Typescript. La mejor opción es utilizar ts-jest:

@https://github.com/kulshekhar/ts-jest

**Prompt 2:** `📄 Generación de Documentación`
documenta todo el proceso en un nuevo archivo formato markdown, nombralo con algo representativo

**Prompt 3:** `⚙️ Configuración y Automatización`
@SETUP_UNIT_TESTS_JEST_TS.md realiza la instalación automanticamente

**Prompt 4:** `💡 Creación de Tests`
crea un test de ejemplo para comprobar la instalación

**Prompt 5:** `🧠 Análisis y Diseño` `📄 Generación de Documentación`
analiza todo el codigo y aplicando ingeneria inversa extrae la maxima cantidad de historias de usuario.

Ejemplos de User Story

Desarrollo de Productos:"Como gerente de producto, quiero una manera en que los miembros del equipo puedan entender cómo las tareas individuales contribuyen a los objetivos, para que puedan priorizar mejor su trabajo."

Experiencia del Cliente:"Como cliente recurrente, espero que mi información quede guardada para crear una experiencia de pago más fluida, para que pueda completar mis compras de manera rápida y sencilla."

Aplicación Móvil:"Como usuario frecuente de la aplicación, quiero una forma de simplificar la información relevante de la manera más rápida posible, para poder acceder a la información que necesito de manera eficiente."

Las historias deben tener la siguiente estructura:

Formato estándar: "Como [tipo de usuario], quiero [realizar una acción] para [obtener un beneficio]".

Descripción: Una descripción concisa y en lenguaje natural de la funcionalidad que el usuario desea.

Criterios de Aceptación: Condiciones específicas que deben cumplirse para considerar la User Story como "terminada", éstos deberian de seguir un formato similar a “Dado que” [contexto inicial], "cuando” [acción realizada], “entonces” [resultado esperado].

Notas adicionales: Notas que puedan ayudar al desarrollo de la historia

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

**Prompt 6:** `🧠 Análisis y Diseño` `📄 Generación de Documentación`
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

**Prompt 7:** `💡 Creación de Tests`
eres un desarrollador backend senior con experiencia en TDD, debes analizar @TDD.md y generar el set de tests unitarios en @tests-AMP.test.ts debes seguir al pie de la letra las directrices del documento, usando buenas praticas y generando tests unitarios de alta calidad. comenta todo lo necesario para que el equipo de desarrollo entienda el proceso de desarrollo y pueda generar tests unitarios de alta calidad.

apoyate en @UserStories-AMP.md

**Prompt 8:** `🐞 Depuración de Tests`
@tests-AMP.test.ts todos los tests fallan al validar el campo phone, adapta la validacion para que sea correcta

**Prompt 9:** `🐞 Depuración de Tests`
@tests-AMP.test.ts fallan los tests con conexion a BD. utiliza mocks para no depender de la bd y no alterar datos

**Prompt 10:** `🐞 Depuración de Tests`
@tests-AMP.test.ts falla el caso con formato cv invalido, arreglalo

**Prompt 11:** `📊 Reporte y Cobertura`
@tests-AMP.test.ts asegurate que la cobertura sea sobre el 85%

**Prompt 12:** `📄 Generación de Documentación` `📊 Reporte y Cobertura`
documenta el reporte de cobertura en el archivo @coverage.md y muestra cómo interpretar el reporte de cobertura

**Prompt 13:** `✍️ Edición y Refinamiento`
analiza @prompts-AMP.md agrega en la cabecera el LLM y su version utilizada en el proyecto.

Luego analiza cada prompt y categorizalo, las categorias deben ser relevantes y descriptivas y deben tener un emoji unico, el listado de categorias estilo leyenda debe estar en la seccion categorias

**Prompt 14:** `✍️ Edición y Refinamiento`
analiza @prompts-AMP.md y genera una tabla markdown con estadisticas de los prompts indicando categoria y que prompts fueron usados (solo numeracion por ejemplo prompt 1) sigue la estructura de columnas:

- categoria: nombre mas emoji
- cantidad: valor numerico
- prompts: prompt 1, prompt 2, prompt 3, ...

bajo la tabla indica la cantidad de prompts totales

agrega todo esto en la seccion estadisticas.

luego analiza todos los prompts y escribe las conclusiones del proceso de desarrollo en la seccion conclusiones

## Conclusiones 🏁

El flujo de prompts simula de manera efectiva un ciclo de desarrollo de software ágil, guiado por la metodología TDD (Test-Driven Development), donde el LLM actúa como un asistente versátil en cada fase.

1.  **Fase Inicial (Setup y Requisitos):** El proceso comienza con la configuración del entorno de pruebas (`Prompt 1`, `3`) y la documentación inicial (`Prompt 2`). Inmediatamente después, se realiza un análisis del código existente para definir los requisitos en forma de historias de usuario (`Prompt 5`), emulando el rol de un Product Owner.

2.  **Fase de Diseño Técnico y Desarrollo:** Las historias de usuario se traducen en especificaciones técnicas para los tests (`Prompt 6`), asumiendo el rol de un Líder Técnico. A continuación, se generan los tests unitarios basados en dichas especificaciones (`Prompt 4`, `7`), cumpliendo el rol de un Desarrollador Senior.

3.  **Fase de Depuración y Calidad:** Como es común en el desarrollo, los tests iniciales fallan. Se entra en un ciclo de depuración iterativo para corregir validaciones, mocks y casos específicos (`Prompt 8`, `9`, `10`). Una vez que los tests pasan, el enfoque se mueve hacia la calidad del código, asegurando una cobertura de tests adecuada (`Prompt 11`) y generando la documentación correspondiente (`Prompt 12`).

4.  **Fase de Meta-Análisis y Refinamiento:** El ciclo concluye con la organización y el análisis del propio proceso de prompting (`Prompt 13`, `14`), lo que demuestra una capa de refinamiento y mejora continua.

En resumen, el historial de prompts evidencia un proceso completo y coherente que va desde la concepción de una necesidad hasta la implementación, prueba, depuración y documentación, utilizando el LLM como una herramienta polivalente que se adapta a diferentes roles y tareas del ciclo de vida del software.