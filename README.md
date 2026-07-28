# Motor de Valoración Fiscal ONT — Sarapiquí

**Interfaz profesional V29 UI 1.1**

Proyecto web estático, modular y listo para GitHub Pages, generado exclusivamente desde:

`Propuesta_Motor_Valoracion_ONT_V29_AUDITADA.xlsx`

## Estado verificado

- 19 hojas del V29.
- 668 fórmulas auditadas.
- 181 zonas homogéneas.
- 9 zonas agropecuarias.
- 476 registros del catálogo ONT.
- 9 estados Ross–Heidecke.
- 0 referencias `#REF!`.
- 0 enlaces externos.
- 0 funciones `LET`, `XLOOKUP` o `_xludf`.
- SHA-256 del archivo fuente: `926ad1ad4fcbb086f3dd9f520bc1a4b04104f1867ee64c5ab02df00d72d089a5`.

## Qué incluye

- Expediente y datos reales del inmueble.
- Cálculo urbano.
- Cálculo rural.
- Cálculo agropecuario.
- Cálculo de zona ligada: hasta 5 000 m² urbanos y remanente rural.
- Construcciones con Ross–Heidecke.
- Obras complementarias y equipo.
- Resumen consolidado.
- Informe imprimible.
- Catálogos y auditoría.
- Guardado local con IndexedDB y respaldo alternativo.
- Exportación e importación JSON.
- Registro local de errores.
- PWA y funcionamiento sin conexión.
- Pruebas automáticas del motor.

## Por qué no se bloquea con Excel abierto

La aplicación publicada **no abre ni controla Excel**. Los datos aprobados del V29 fueron convertidos a un archivo de datos de solo lectura durante la construcción del proyecto. Por eso:

- Excel puede estar abierto sin bloquear la aplicación;
- no se usa COM, macros ni automatización de Office;
- los cálculos se ejecutan en JavaScript dentro del navegador;
- el libro fuente se conserva en `source/` solamente para trazabilidad.

## Publicación sin terminal

Lea:

`docs/GUIA_GITHUB_SIN_TERMINAL.md`

La publicación recomendada es desde la rama `main` y la carpeta `/(root)`.

Documentación oficial:

- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages

## Pruebas sin terminal

Después de publicar, abra:

`https://SU-USUARIO.github.io/SU-REPOSITORIO/tests/`

La pantalla debe indicar que todas las pruebas están aprobadas.

## Archivos que no deben editarse manualmente

- `assets/js/data-v29.js`
- `assets/js/engine/land-engine.js`
- `assets/js/engine/ross-engine.js`
- `source/Propuesta_Motor_Valoracion_ONT_V29_AUDITADA.xlsx`

Consulte `docs/ACTUALIZAR_DATOS_V29.md` antes de incorporar una fuente distinta.

## Privacidad

Los avalúos guardados se almacenan en el navegador del usuario. No cargue respaldos JSON con datos personales al repositorio público.


## Rediseño visual

Consulte `docs/CAMBIOS_INTERFAZ_V29_UI.md`. El rediseño no modifica el motor matemático ni los catálogos.
