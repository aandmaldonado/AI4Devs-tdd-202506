# Directrices Técnicas para Tests Unitarios (TDD)

Este documento traduce las historias de usuario a criterios técnicos para la creación de tests unitarios de alta calidad en el sistema LTI Talent Tracking System.

---

## Buenas Prácticas Generales
- Usa nombres de funciones de prueba descriptivos y claros.
- Aplica el patrón Arrange-Act-Assert (AAA) en cada test.
- Parametriza pruebas repetitivas con diferentes entradas.
- Incluye mensajes de aserción útiles para el diagnóstico rápido.
- Cubre casos límite y de error, no solo los casos felices.
- Mockea la base de datos y servicios externos para aislar la lógica.
- Mantén los tests independientes y repetibles.

---

## 1. Registro de Candidato

### Casos a cubrir:
- Registro exitoso con todos los campos válidos.
- Registro fallido por campos obligatorios faltantes.
- Registro fallido por datos inválidos (email, teléfono, etc).
- Registro con múltiples experiencias y educaciones.
- Registro con CV adjunto válido.
- Registro fallido por CV inválido.

### Ejemplo de nombres de pruebas:
- `should_create_candidate_with_valid_data`
- `should_not_create_candidate_with_missing_required_fields`
- `should_not_create_candidate_with_invalid_email_format`
- `should_create_candidate_with_multiple_educations_and_experiences`
- `should_attach_valid_cv_to_candidate`
- `should_reject_candidate_with_invalid_cv_format`

### Notas técnicas:
- Mockear la persistencia de la base de datos.
- Usar datos de ejemplo variados y casos límite (e.g., nombre máximo/min, emails edge-case).

---

## 2. Subida de CV

### Casos a cubrir:
- Subida exitosa de archivo PDF.
- Subida exitosa de archivo DOCX.
- Rechazo de archivos de tipo no permitido.
- Rechazo de archivos que exceden el tamaño máximo.

### Ejemplo de nombres de pruebas:
- `should_upload_pdf_cv_successfully`
- `should_upload_docx_cv_successfully`
- `should_reject_cv_with_unsupported_file_type`
- `should_reject_cv_exceeding_maximum_size`

### Notas técnicas:
- Mockear el sistema de archivos y almacenamiento.
- Probar límites de tamaño y extensiones.

---

## 3. Visualización de Candidatos

### Casos a cubrir:
- Listar todos los candidatos existentes.
- Filtrar candidatos por nombre, email, etc.
- Manejar lista vacía de candidatos.

### Ejemplo de nombres de pruebas:
- `should_list_all_candidates`
- `should_filter_candidates_by_name`
- `should_return_empty_list_when_no_candidates_exist`

### Notas técnicas:
- Mockear la consulta a la base de datos.
- Probar con diferentes volúmenes de datos.

---

## 4. Validación de Datos de Candidato

### Casos a cubrir:
- Rechazo de datos con formato incorrecto (email, teléfono, fechas).
- Rechazo de campos obligatorios vacíos.
- Aceptación de datos válidos.

### Ejemplo de nombres de pruebas:
- `should_reject_candidate_with_invalid_email`
- `should_reject_candidate_with_invalid_phone`
- `should_reject_candidate_with_missing_first_name`
- `should_accept_candidate_with_all_valid_fields`

### Notas técnicas:
- Parametrizar pruebas de validación para múltiples formatos inválidos.

---

## 5. Gestión de Experiencia Laboral y Educación

### Casos a cubrir:
- Agregar experiencia laboral y educación correctamente.
- Editar experiencia laboral y educación.
- Eliminar experiencia laboral y educación.
- Manejar fechas límite (inicio > fin, fechas futuras, etc).

### Ejemplo de nombres de pruebas:
- `should_add_work_experience_to_candidate`
- `should_edit_education_of_candidate`
- `should_delete_work_experience_from_candidate`
- `should_reject_experience_with_invalid_dates`

### Notas técnicas:
- Mockear operaciones de actualización y borrado en la base de datos.
- Probar casos límite de fechas.

---

## 6. Seguridad y Control de Acceso

### Casos a cubrir:
- Rechazo de acceso a rutas protegidas sin autenticación.
- Permitir acceso a usuarios autenticados.
- Manejar intentos de acceso con roles no autorizados (futuro).

### Ejemplo de nombres de pruebas:
- `should_reject_unauthenticated_access_to_candidate_routes`
- `should_allow_authenticated_access_to_candidate_routes`
- `should_reject_access_for_unauthorized_roles`

### Notas técnicas:
- Mockear el middleware de autenticación.
- Simular diferentes estados de sesión/rol.

---

## Ejemplo de patrón AAA en Jest/TypeScript

```typescript
// Ejemplo completo del patrón Arrange-Act-Assert (AAA)
test('should_create_candidate_with_valid_data', async () => {
  // Arrange: Configura los datos y mocks necesarios para la prueba
  const validCandidate = {
    firstName: 'Ana',
    lastName: 'Pérez',
    email: 'ana.perez@example.com',
    phone: '+34123456789',
    address: 'Calle Falsa 123',
    education: [
      { institution: 'UC3M', title: 'Ingeniería', startDate: '2010-01-01', endDate: '2014-01-01' }
    ],
    workExperience: [
      { company: 'TechCorp', position: 'Dev', startDate: '2015-01-01', endDate: '2018-01-01' }
    ],
    resumes: [
      { filePath: 'uploads/cv-ana.pdf', fileType: 'application/pdf', uploadDate: new Date() }
    ]
  };
  const mockDatabase = { saveCandidate: jest.fn().mockResolvedValue({ id: 1, ...validCandidate }) };
  // Aquí podrías inyectar mockDatabase en tu servicio si aplica

  // Act: Ejecuta la funcionalidad a testear
  const result = await mockDatabase.saveCandidate(validCandidate);

  // Assert: Verifica que el resultado es el esperado
  expect(result).toHaveProperty('id');
  expect(result.email).toBe(validCandidate.email);
  expect(result.firstName).toBe('Ana');
  expect(result.education.length).toBe(1);
  expect(result.resumes[0].fileType).toBe('application/pdf');
});
```

---

## Consideraciones Finales
- Documenta cada test con comentarios si la lógica no es trivial.
- Usa mocks y spies para aislar dependencias externas.
- Revisa y actualiza los tests al modificar la lógica de negocio.
- Prioriza la cobertura de los criterios de aceptación definidos en las historias de usuario.
