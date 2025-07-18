// Test de ejemplo para comprobar la instalación de Jest + ts-jest + TypeScript

describe('Test de ejemplo', () => {
  it('debería sumar correctamente', () => {
    const suma = (a: number, b: number) => a + b;
    expect(suma(2, 3)).toBe(5);
  });
}); 