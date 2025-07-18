# Historias de Usuario - LTI Talent Tracking System

---

## 1. Registro de Candidato

**Como** reclutador,
quiero registrar un nuevo candidato con su información personal, educación, experiencia laboral y CV,
para que pueda gestionar y dar seguimiento a los postulantes en el sistema.

**Criterios de Aceptación:**
- Dado que el reclutador accede al formulario de registro,
  cuando completa los campos obligatorios y opcionales y envía el formulario,
  entonces el candidato se almacena correctamente en la base de datos y aparece en el dashboard.
- Dado que el reclutador omite campos obligatorios o introduce datos inválidos,
  cuando intenta enviar el formulario,
  entonces el sistema muestra mensajes de error claros y no permite el registro hasta corregirlos.

**Notas Adicionales:**
- El CV debe ser un archivo PDF o DOCX.
- Se pueden registrar múltiples experiencias laborales y formaciones académicas.

**Tareas:**
- Crear formulario de registro de candidato.
- Validar datos en frontend y backend.
- Implementar endpoint POST /candidates.
- Guardar datos en la base de datos.
- Mostrar mensajes de éxito y error.

---

## 2. Subida de CV

**Como** reclutador,
quiero poder subir el CV del candidato en formato PDF o DOCX,
para que la información relevante esté centralizada y accesible para futuras revisiones.

**Criterios de Aceptación:**
- Dado que el reclutador selecciona un archivo válido,
  cuando lo sube mediante el formulario,
  entonces el archivo se almacena correctamente y se asocia al candidato.
- Dado que el archivo no es PDF ni DOCX,
  cuando intenta subirlo,
  entonces el sistema rechaza la carga y muestra un mensaje de error.

**Notas Adicionales:**
- El tamaño máximo permitido es 10MB.

**Tareas:**
- Implementar componente de subida de archivos.
- Validar tipo y tamaño de archivo en frontend y backend.
- Asociar archivo subido al registro del candidato.

---

## 3. Visualización de Candidatos

**Como** reclutador,
quiero ver una lista de todos los candidatos registrados,
para poder gestionar y consultar fácilmente la información de los postulantes.

**Criterios de Aceptación:**
- Dado que el reclutador accede al dashboard,
  cuando la página carga,
  entonces se muestra una lista con los datos principales de cada candidato.
- Dado que hay muchos candidatos,
  cuando navega por la lista,
  entonces puede buscar y filtrar por nombre, email u otros campos relevantes.

**Notas Adicionales:**
- El dashboard debe ser claro y responsivo.

**Tareas:**
- Implementar vista de lista de candidatos.
- Conectar con backend para obtener datos.
- Añadir filtros y búsqueda.

---

## 4. Validación de Datos de Candidato

**Como** sistema,
quiero validar los datos ingresados para cada candidato,
para asegurar la calidad y consistencia de la información almacenada.

**Criterios de Aceptación:**
- Dado que se envía un formulario de candidato,
  cuando los datos no cumplen con los requisitos de formato o están incompletos,
  entonces el sistema rechaza la operación y muestra mensajes de error específicos.
- Dado que los datos son válidos,
  cuando se envía el formulario,
  entonces el sistema permite el registro y almacena la información.

**Notas Adicionales:**
- Validaciones incluyen: email, nombre, teléfono, fechas, etc.

**Tareas:**
- Definir reglas de validación en backend.
- Implementar validaciones en frontend.
- Mostrar mensajes de error claros.

---

## 5. Gestión de Experiencia Laboral y Educación

**Como** reclutador,
quiero poder agregar múltiples experiencias laborales y formaciones académicas a cada candidato,
para tener un perfil completo y detallado de cada postulante.

**Criterios de Aceptación:**
- Dado que el reclutador añade una nueva experiencia o educación,
  cuando completa los campos y guarda,
  entonces la información se asocia correctamente al candidato.
- Dado que elimina o edita una experiencia o educación,
  cuando realiza la acción,
  entonces los cambios se reflejan en la base de datos y en la interfaz.

**Notas Adicionales:**
- Cada experiencia y educación debe tener fechas y descripciones claras.

**Tareas:**
- Permitir agregar, editar y eliminar experiencias y educaciones en el formulario.
- Guardar cambios en backend y reflejarlos en frontend.

---

## 6. Seguridad y Control de Acceso

**Como** administrador,
quiero que solo usuarios autorizados puedan acceder a la gestión de candidatos,
para proteger la información sensible y cumplir con normativas de privacidad.

**Criterios de Aceptación:**
- Dado que un usuario no autenticado intenta acceder al sistema,
  cuando navega a cualquier ruta protegida,
  entonces el sistema lo redirige a la página de login o muestra un error de acceso.
- Dado que un usuario autenticado accede al sistema,
  cuando navega por las funcionalidades,
  entonces puede operar normalmente según sus permisos.

**Notas Adicionales:**
- Considerar integración futura de autenticación y roles.

**Tareas:**
- Implementar middleware de autenticación (futuro).
- Proteger rutas sensibles.

---

## Historias de Usuario Relacionadas
- Registro de Candidato ↔ Subida de CV
- Registro de Candidato ↔ Gestión de Experiencia Laboral y Educación
- Visualización de Candidatos ↔ Filtros y Búsqueda
- Seguridad y Control de Acceso ↔ Todas las funcionalidades principales 