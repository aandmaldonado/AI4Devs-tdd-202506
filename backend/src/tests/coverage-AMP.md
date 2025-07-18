# Reporte de Cobertura de Tests

A continuación se documenta el último reporte de cobertura generado por Jest para el backend del sistema LTI Talent Tracking System.

---

## Resumen del Reporte

```
----------------------|---------|----------|---------|---------|-------------------------------
File                  | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s             
----------------------|---------|----------|---------|---------|-------------------------------
All files             |   89.32 |       75 |     100 |   87.64 |                               
 application          |   84.12 |       78 |     100 |   82.14 |                               
  validator.ts        |   84.12 |       78 |     100 |   82.14 | 28,40,44,50,56,60,64,70,76,83 
 application/services |    97.5 |       60 |     100 |   96.96 |                               
  candidateService.ts |    97.5 |       60 |     100 |   96.96 | 50                            
----------------------|---------|----------|---------|---------|-------------------------------
```

- **Statements:** 89.32% (Porcentaje de sentencias ejecutadas por los tests)
- **Branches:** 75% (Porcentaje de ramas de decisión cubiertas)
- **Functions:** 100% (Porcentaje de funciones/métodos ejecutados)
- **Lines:** 87.64% (Porcentaje de líneas de código ejecutadas)

## ¿Cómo interpretar el reporte?

- **% Stmts (Statements):** Indica qué porcentaje de todas las sentencias del código han sido ejecutadas por los tests. Un valor alto significa que la mayoría del código ha sido probado.
- **% Branch (Branches):** Mide la cobertura de las ramas de decisión (if/else, switch, ternarios). Es común que este valor sea menor si hay muchos condicionales no testeados.
- **% Funcs (Functions):** Porcentaje de funciones o métodos que han sido ejecutados al menos una vez por los tests.
- **% Lines:** Similar a statements, pero mide línea por línea.
- **Uncovered Line #s:** Muestra los números de línea que no han sido ejecutados por ningún test, útil para identificar áreas a mejorar.

## Áreas de mejora
- El archivo `validator.ts` tiene líneas no cubiertas (ver columna "Uncovered Line #s"). Revisar esas líneas y agregar tests que ejerciten esos caminos.
- La cobertura de ramas (branches) es la más baja. Para mejorarla, agrega tests que cubran todos los caminos posibles en condicionales y validaciones.

## Recomendaciones
- Mantener la cobertura por encima del 85% para asegurar calidad y detectar regresiones.
- Revisar periódicamente el reporte y priorizar la cobertura de ramas y líneas no cubiertas.
- Usar el reporte como guía para refactorizar y mejorar la robustez del sistema.

---

**¡Una cobertura alta es clave para la calidad y la confianza en el desarrollo ágil!**
