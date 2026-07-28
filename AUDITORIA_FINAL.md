# Auditoría final - Motor ONT V29 con formulario municipal editable

## Resultado general

**APROBADO**

- Errores JavaScript en navegador: **0**.
- Pruebas del motor V29: **9/9 aprobadas**.
- Zonas homogéneas integradas: **181**.
- Zonas agropecuarias integradas: **9**.
- Tipologías ONT integradas: **476**.
- Estados Ross-Heidecke: **9**.
- Funciones matemáticas protegidas sin cambios: **9/9**.
- Bloque de datos V29 sin cambios: **Sí**.

## Cambios funcionales comprobados

1. Expediente con propietario o razón social, cédula, domicilio fiscal/social, correo, teléfono, celular, dirección de notificaciones y representante legal.
2. Identificación registral con finca, derecho, duplicado, plano y condición inscrita/no inscrita.
3. Servicios 01 con cuatro descripciones completas.
4. Servicios 02 con dieciséis combinaciones detalladas.
5. Construcciones con selector descriptivo antes del código ONT.
6. Código y unidad completados automáticamente desde el catálogo V29.
7. Informe con estructura semejante al formulario municipal: propietario, notificaciones, inmueble, terreno, construcciones, valores y uso municipal.
8. Descarga Word editable en formato `.doc` compatible con Word y LibreOffice.
9. Descarga PDF editable con campos AcroForm.
10. Impresión/PDF convencional disponible por separado.

## Auditoría de botones

Todos los controles revisados mostraron estado **OK**:

- Importar y exportar respaldo JSON.
- Guardar y nuevo expediente.
- Selector de construcción.
- Agregar y eliminar construcciones y obras.
- Descargar Word editable.
- Descargar PDF editable.
- Imprimir/PDF.
- Ejecutar auditoría.

## PDF editable

- Documento válido PDF 1.7.
- Una página tamaño carta.
- **81 campos editables**.
- Sin errores de estructura al inspeccionar.
- Los campos permanecen editables; no se aplanan.

## Word editable

- Documento generado como HTML compatible con Microsoft Word (`.doc`).
- Se verificó su apertura y renderización en una página.
- El usuario puede modificar textos, tablas y valores después de descargarlo.

## Integridad del cálculo

Las siguientes funciones permanecen idénticas a la versión auditada anterior:

- `urban`: sin cambios
- `rural`: sin cambios
- `agroCalc`: sin cambios
- `linked`: sin cambios
- `ross`: sin cambios
- `landCalc`: sin cambios
- `regExp`: sin cambios
- `urbanAreaExp`: sin cambios
- `frontExp`: sin cambios

SHA-256 del HTML final:

```text
f357793413c90e640ba2f65a6e1aa4854991034caf81455e7dab50de303692af
```
