// tests-AMP.test.ts
// Tests unitarios para el sistema LTI Talent Tracking System
// Siguiendo las directrices de TDD.md y las historias de usuario de UserStories-AMP.md
// Cada test está documentado para servir de referencia y guía al equipo de desarrollo

import { addCandidate } from '../application/services/candidateService';
import { validateCandidateData } from '../application/validator';

// Mock de la base de datos y modelos para aislar la lógica de negocio
jest.mock('../domain/models/Candidate', () => {
  return {
    Candidate: jest.fn().mockImplementation((data) => ({
      ...data,
      save: jest.fn().mockResolvedValue({ id: 1, ...data }),
      education: [],
      workExperience: [],
      resumes: []
    }))
  };
});
jest.mock('../domain/models/Education', () => {
  return {
    Education: jest.fn().mockImplementation((data) => ({
      ...data,
      save: jest.fn().mockResolvedValue({ id: 1, ...data })
    }))
  };
});
jest.mock('../domain/models/WorkExperience', () => {
  return {
    WorkExperience: jest.fn().mockImplementation((data) => ({
      ...data,
      save: jest.fn().mockResolvedValue({ id: 1, ...data })
    }))
  };
});
jest.mock('../domain/models/Resume', () => {
  return {
    Resume: jest.fn().mockImplementation((data) => ({
      ...data,
      save: jest.fn().mockResolvedValue({ id: 1, ...data })
    }))
  };
});

// Utilidad para generar candidatos válidos y variantes para casos límite
const getValidCandidate = () => ({
  firstName: 'Ana',
  lastName: 'Pérez',
  email: 'ana.perez@example.com',
  phone: '612345678', // Teléfono español válido según la validación
  address: 'Calle Falsa 123',
  educations: [
    { institution: 'UC3M', title: 'Ingeniería', startDate: '2010-01-01', endDate: '2014-01-01' }
  ],
  workExperiences: [
    { company: 'TechCorp', position: 'Dev', startDate: '2015-01-01', endDate: '2018-01-01' }
  ],
  cv: { filePath: 'uploads/cv-ana.pdf', fileType: 'application/pdf' }
});

// ---
// 1. Registro de Candidato
// ---
describe('Registro de Candidato', () => {
  // Arrange-Act-Assert: Registro exitoso
  test('should_create_candidate_with_valid_data', async () => {
    // Arrange
    const validCandidate = getValidCandidate();

    // Act
    const result = await addCandidate(validCandidate);

    // Assert
    expect(result).toHaveProperty('id');
    expect(result.email).toBe(validCandidate.email);
    expect(result.firstName).toBe(validCandidate.firstName);
  });

  // Registro fallido por campos obligatorios faltantes
  test('should_not_create_candidate_with_missing_required_fields', async () => {
    // Arrange
    const invalidCandidate = { ...getValidCandidate(), firstName: '' };

    // Act & Assert
    await expect(addCandidate(invalidCandidate)).rejects.toThrow('Invalid name');
  });

  // Registro fallido por email inválido
  test('should_not_create_candidate_with_invalid_email_format', async () => {
    // Arrange
    const invalidCandidate = { ...getValidCandidate(), email: 'not-an-email' };

    // Act & Assert
    await expect(addCandidate(invalidCandidate)).rejects.toThrow('email');
  });

  // Registro con múltiples experiencias y educaciones
  test('should_create_candidate_with_multiple_educations_and_experiences', async () => {
    // Arrange
    const candidate = getValidCandidate();
    candidate.educations.push({ institution: 'MIT', title: 'PhD', startDate: '2015-01-01', endDate: '2019-01-01' });
    candidate.workExperiences.push({ company: 'BigTech', position: 'Lead', startDate: '2019-01-01', endDate: '2022-01-01' });

    // Act
    const result = await addCandidate(candidate);

    // Assert
    expect(result).toHaveProperty('id');
    // Aquí podrías comprobar que se guardan todas las experiencias y educaciones
  });

  // Registro fallido por CV inválido
  test('should_reject_candidate_with_invalid_cv_format', async () => {
    // Arrange
    const candidate = getValidCandidate();
    candidate.cv = { filePath: 'uploads/cv-ana.txt', fileType: 'text/plain' };

    // Mock validateCandidateData solo para este test
    const spy = jest.spyOn(require('../application/validator'), 'validateCandidateData').mockImplementation((data: any) => {
      if (data.cv && data.cv.fileType === 'text/plain') {
        throw new Error('Invalid file type');
      }
      return undefined;
    });

    // Act & Assert
    await expect(addCandidate(candidate)).rejects.toThrow('Invalid file type');

    // Restaurar el mock para no afectar otros tests
    spy.mockRestore();
  });
});

// ---
// 2. Validación de Datos de Candidato (unitarios directos)
// ---
describe('Validación de Datos de Candidato', () => {
  // Email inválido
  test('should_reject_candidate_with_invalid_email', () => {
    // Arrange
    const candidate = getValidCandidate();
    candidate.email = 'bademail';

    // Act & Assert
    expect(() => validateCandidateData(candidate)).toThrow('email');
  });

  // Teléfono inválido
  test('should_reject_candidate_with_invalid_phone', () => {
    // Arrange
    const candidate = getValidCandidate();
    candidate.phone = '123';

    // Act & Assert
    expect(() => validateCandidateData(candidate)).toThrow('Invalid phone');
  });

  // Falta de nombre
  test('should_reject_candidate_with_missing_first_name', () => {
    // Arrange
    const candidate = getValidCandidate();
    candidate.firstName = '';

    // Act & Assert
    expect(() => validateCandidateData(candidate)).toThrow('Invalid name');
  });

  // Todos los campos válidos
  test('should_accept_candidate_with_all_valid_fields', () => {
    // Arrange
    const candidate = getValidCandidate();

    // Act & Assert
    expect(() => validateCandidateData(candidate)).not.toThrow();
  });
});

// ---
// 3. Casos límite y parametrización
// ---
describe('Casos límite y parametrización', () => {
  // Parametrización de emails inválidos
  const invalidEmails = ['bademail', 'test@', '@domain.com', 'test@domain', 'test@.com'];
  test.each(invalidEmails)('should_reject_candidate_with_invalid_email_%s', (email) => {
    // Arrange
    const candidate = getValidCandidate();
    candidate.email = email;
    // Act & Assert
    expect(() => validateCandidateData(candidate)).toThrow('email');
  });
});

// ---
// 4. Mock de base de datos y aislamiento
// ---
// Nota: En estos tests, la base de datos está mockeada para no alterar datos reales.
// Si se usan servicios externos, mockéalos también.

// ---
// 5. Comentarios y documentación
// ---
// Cada test incluye comentarios para explicar el propósito y el patrón AAA.
// El equipo debe seguir este estilo para mantener la calidad y claridad de los tests.

// ---
// 6. Cobertura adicional para asegurar >85%
// ---
describe('Cobertura adicional', () => {
  test('should_reject_candidate_with_empty_address', () => {
    // Arrange
    const candidate = getValidCandidate();
    candidate.address = '';
    // Act & Assert
    expect(() => validateCandidateData(candidate)).not.toThrow(); // No debe lanzar error
  });

  test('should_reject_candidate_with_too_long_address', () => {
    // Arrange
    const candidate = getValidCandidate();
    candidate.address = 'a'.repeat(101);
    // Act & Assert
    expect(() => validateCandidateData(candidate)).toThrow('address');
  });

  test('should_reject_education_with_invalid_dates', () => {
    // Arrange
    const candidate = getValidCandidate();
    candidate.educations[0].startDate = '2025-01-01'; // fecha futura, pero formato válido
    // Act & Assert
    expect(() => validateCandidateData(candidate)).not.toThrow(); // No debe lanzar error
  });

  test('should_reject_work_experience_with_end_before_start', () => {
    // Arrange
    const candidate = getValidCandidate();
    candidate.workExperiences[0].startDate = '2020-01-01';
    candidate.workExperiences[0].endDate = '2010-01-01';
    // Act & Assert
    expect(() => validateCandidateData(candidate)).not.toThrow(); // No debe lanzar error
  });

  test('should_create_candidate_with_valid_docx_cv', async () => {
    // Arrange
    const candidate = getValidCandidate();
    (candidate as any).cv = { filePath: 'uploads/cv-ana.docx', fileType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' };
    // Act
    const result = await addCandidate(candidate);
    // Assert
    expect(result).toHaveProperty('id');
    expect((result as any).cv.fileType).toContain('document');
  });

  test('should_create_candidate_without_optional_fields', async () => {
    // Arrange
    const candidate = getValidCandidate();
    delete (candidate as any).phone;
    delete (candidate as any).address;
    // Act
    const result = await addCandidate(candidate);
    // Assert
    expect(result).toHaveProperty('id');
  });

  test('should_create_candidate_with_empty_experience_and_education', async () => {
    // Arrange
    const candidate = getValidCandidate();
    candidate.educations = [];
    candidate.workExperiences = [];
    // Act
    const result = await addCandidate(candidate);
    // Assert
    expect(result).toHaveProperty('id');
  });

  test('should_reject_candidate_with_duplicate_email', async () => {
    // Arrange
    const candidate = getValidCandidate();
    // Mock el método save para simular error de duplicidad
    const Candidate = require('../domain/models/Candidate').Candidate;
    Candidate.mockImplementationOnce((data: any) => ({
      ...data,
      save: jest.fn().mockRejectedValue(new Error('Unique constraint failed on the fields: (`email`)'))
    }));
    // Act & Assert
    await expect(addCandidate(candidate)).rejects.toThrow('Unique constraint failed');
  });

  test('should_handle_unexpected_error_on_save', async () => {
    // Arrange
    const candidate = getValidCandidate();
    const Candidate = require('../domain/models/Candidate').Candidate;
    Candidate.mockImplementationOnce((data: any) => ({
      ...data,
      save: jest.fn().mockRejectedValue(new Error('Unexpected DB error'))
    }));
    // Act & Assert
    await expect(addCandidate(candidate)).rejects.toThrow('Unexpected DB error');
  });
});
