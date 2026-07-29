# Informe de auditoría técnica y funcional

**Proyecto:** Motor de Valoración Fiscal ONT — Sarapiquí

**Fecha de corte:** 29 de julio de 2026

**Rama de trabajo:** `audit/correccion-integral-v29`

## 1. Resultado ejecutivo

El flujo estático principal queda funcional después de la corrección. La
validación automatizada aprueba estructura, recursos, fórmulas representativas,
catálogos, proporcionalidad del derecho, depreciación y generación del PDF.

La conformidad operativa definitiva requiere validación municipal de casos
reales y un backend para consecutivos multiusuario, seguridad, auditoría y
gestión documental.

## 2. Fuentes contrastadas

1. Manual de Valores Base Unitarios por Tipología Constructiva 2023, ONT.
2. Modelo de Valoración de Bienes Inmuebles 2023, ONT.
3. Reforma del Manual, resolución 0004 del 3 de noviembre de 2025.
4. Ley del Impuesto sobre Bienes Inmuebles N.º 7509.
5. Reglamento a la Ley del Impuesto sobre Bienes Inmuebles.
6. Formulario de Declaración de Bienes Inmuebles de Sarapiquí.
7. Plataforma municipal de valores y material oficial de zonas homogéneas.
8. Páginas oficiales del escudo y la bandera de Sarapiquí.

La búsqueda de archivos privados en ChatGPT Library no se pudo completar por el
error interno `NO_MICROSHARD`. Por transparencia, ningún hallazgo se atribuye a
archivos de Biblioteca que no pudieron abrirse.

## 3. Hallazgos corregidos

### 3.1 Fórmulas y catálogos

- Se separaron los intervalos de regularidad urbana y rural en sus límites de
  500, 1 500, 50 000 y 200 000 m².
- Se incorporó el método Cole para familias `TA`, `TM` y `TV`.
- Se corrigió una inconsistencia de presentación: la tabla calculaba con
  Ross–Heidecke aunque el resumen aplicaba Cole. Ahora ambos usan `depreciate`.
- Se normalizaron los nueve estados de conservación oficiales y se conservaron
  alias para expedientes antiguos.
- Se corrigieron valores, unidades y vidas útiles de torres y elementos
  complementarios afectados por errores de extracción.
- Se verificaron `AP01`, `AP02`, `EO01` y `EO02` de la reforma 2025, con unidad
  por módulo y vida útil de 50 años.

### 3.2 Derecho y valor proporcional

- Se añadió `Proporción del derecho (%)` en Expediente.
- Para derechos distintos de `000`, el porcentaje es obligatorio, mayor que
  cero y hasta 100 %.
- El valor total del inmueble no se modifica.
- El valor del derecho se calcula sobre el total consolidado de terreno,
  construcciones y obras.
- El informe, Word, PDF y anexos muestran derecho, proporción, total del
  inmueble y valor del derecho.
- La solución respeta la estructura del formulario municipal, que solicita un
  formulario por cada inmueble o derecho y contiene un campo específico
  `VALOR DEL DERECHO`.

### 3.3 Expediente y documentos

- Consecutivo local `DEC-AAAA-NNNNNN`, persistente al guardar y exportar.
- Hoja principal con cuatro construcciones.
- Anexos automáticos en bloques de 18 para líneas adicionales.
- Todas las construcciones, incluidas las anexas, participan en el total.
- Word editable con marco, paleta municipal y escudo incrustado.
- PDF 1.7 AcroForm, tamaño carta, marco institucional, escudo y anexos.

### 3.4 Parámetros protegidos

- En métodos rural, agropecuario y zona ligada, hidrología y capacidad de uso
  se cargan desde la zona normativa.
- Los controles quedan deshabilitados para el usuario final.
- Las zonas sin parámetros completos mantienen estado `REVISAR`.

La excepción para perfiles autorizados no puede implementarse con seguridad en
una aplicación estática. Debe resolverse en servidor con autenticación, roles y
auditoría.

### 3.5 UX/UI y accesibilidad

- Escudo en encabezado de aplicación, informe principal y anexos.
- Paleta inspirada en la bandera: blanco, celeste, verde claro, verde oscuro y
  acento dorado.
- Jerarquía visual consistente para secciones, entradas y resultados.
- Enlace para saltar al contenido principal.
- Foco de teclado visible y respeto de `prefers-reduced-motion`.
- Navegación semántica, `aria-current`, diálogo identificado y avisos
  `status/alert`.
- Asociación automática de etiquetas y ayudas con controles.
- Etiquetas accesibles para inputs y acciones de tablas dinámicas.

## 4. Pruebas ejecutadas

Comando:

```bash
npm run quality
```

Resultado:

- 9 páginas verificadas.
- 15 recursos locales verificados.
- 15 pruebas automatizadas aprobadas.
- 0 pruebas fallidas.

Cobertura representativa:

- ejemplos urbano, rural, agropecuario y zona ligada;
- identidad de factores;
- límites de regularidad;
- entradas inválidas;
- Ross–Heidecke y Cole;
- reforma ONT 2025;
- unicidad y conteo de catálogos;
- consecutivo;
- proporcionalidad del derecho;
- parámetros rurales normativos bloqueados;
- anexos y suma de construcciones;
- escudo y marco dentro del PDF.

Verificación visual del PDF:

- 3 páginas tamaño carta;
- formulario AcroForm;
- escudo legible en hoja principal y anexos;
- total del inmueble y valor del derecho diferenciados;
- marcos visibles;
- 24 construcciones distribuidas entre hoja principal y dos anexos.

## 5. Riesgos y trabajo pendiente

### Alta prioridad

1. Backend municipal con autenticación, roles y autorización.
2. Consecutivo transaccional único para todos los usuarios.
3. Bitácora inmutable con usuario, fecha, módulo, motivo, valor anterior y nuevo.
4. Repositorio documental central con filtros y control de acceso.
5. Base de datos operativa y exportación Excel centralizada.

### Prioridad técnica

1. Contrastar la totalidad del catálogo contra el archivo fuente privado cuando
   Biblioteca vuelva a estar disponible.
2. Validar las 181 zonas con la plataforma oficial adoptada específicamente por
   Sarapiquí y documentar fecha de vigencia.
3. Crear casos municipales firmados para remodelaciones, mejoras, deterioros,
   ampliaciones y disminución de componentes.
4. Someter Word y PDF a aceptación formal de Administración Tributaria.
5. Añadir pruebas end-to-end en navegador y análisis WCAG automatizado.

## 6. Criterio de aceptación

El proyecto puede aceptarse como herramienta estática de apoyo y demostración
si se conserva la revisión profesional. No debe declararse como sistema
municipal multiusuario seguro hasta completar los componentes de servidor
indicados.
