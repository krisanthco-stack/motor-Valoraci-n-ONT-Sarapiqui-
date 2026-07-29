# Motor de Valoración Fiscal ONT — Sarapiquí

Aplicación web estática para apoyar la declaración y valoración fiscal de bienes
inmuebles de la Municipalidad de Sarapiquí.

## Estado de esta revisión

- 181 zonas homogéneas urbanas y rurales.
- 9 zonas agropecuarias.
- 476 tipologías, instalaciones y obras complementarias.
- Manual ONT 2023 y reforma publicada en 2025 identificados por registro.
- Cálculo urbano, rural, agropecuario y zona ligada.
- Depreciación Ross–Heidecke y Cole según la familia constructiva.
- Consecutivo local de declaración.
- Cálculo separado del valor total del inmueble y del valor proporcional del derecho.
- Word editable y PDF AcroForm con escudo de Sarapiquí.
- Anexos automáticos cuando existen más de cuatro construcciones.
- Respaldo e importación de expedientes en JSON.
- Funcionamiento sin conexión mediante service worker.

## Uso

Abra `index.html` desde un servidor web o publique la raíz del repositorio en
GitHub Pages. Las páginas históricas (`expediente.html`, `terreno.html`, etc.)
redireccionan a la aplicación principal.

Para validar el proyecto:

```bash
npm run quality
```

Este comando verifica recursos, rutas y pruebas de cálculo.

## Derechos y proporcionalidad

El formulario oficial municipal indica que debe presentarse un formulario por
cada inmueble o derecho sobre este. El sistema conserva el valor completo del
inmueble y calcula:

```text
Valor del derecho = Valor total del inmueble × Proporción / 100
```

El porcentaje debe provenir de la participación registral. Un derecho distinto
de `000` exige una proporción mayor que cero y no superior al 100 %.

## Documentos

- El Word se genera como HTML editable compatible con Word y LibreOffice.
- El PDF usa campos AcroForm editables.
- El escudo se incrusta en ambos documentos.
- Las construcciones 1 a 4 aparecen en la hoja principal.
- Las construcciones adicionales se distribuyen en anexos y todas forman parte
  del total del inmueble y del valor proporcional del derecho.

## Fuentes oficiales

- [Manual de Valores Base Unitarios por Tipología Constructiva 2023](https://www.hacienda.go.cr/docs/ManualdeValoresBaseUnitariosporTipologiaConstructiva.pdf)
- [Modelo de Valoración 2023](https://www.hacienda.go.cr/docs/2023_ModelodeValoracion.pdf)
- [Reforma del Manual, resolución 0004 de 2025](https://pgrweb.go.cr/scij/Busqueda/Normativa/Normas/nrm_texto_completo.aspx?nValor1=1&nValor2=105813&nValor3=148652&param1=NRTC&strTipM=TC)
- [Formulario de Declaración de Bienes Inmuebles de Sarapiquí](https://www.sarapiqui.go.cr/wp-content/uploads/2023/01/Formulario-Declaraci%C3%B3n-de-Bienes-Inmuebles.pdf)
- [Ley del Impuesto sobre Bienes Inmuebles N.º 7509](https://pgrweb.go.cr/scij/Busqueda/Normativa/Normas/nrm_texto_completo.aspx?nValor1=1&nValor2=26598&nValor3=28161&param1=NRTC&strTipM=TC)
- [Plataforma de Valores de Sarapiquí](https://www.sarapiqui.go.cr/plataforma-de-valores/)

## Limitaciones operativas

La aplicación actual es estática y guarda el expediente en el navegador.
Por ello:

- el consecutivo es único dentro de ese navegador, no entre varios usuarios;
- no existe autenticación robusta ni autorización administrativa real;
- no existe una bitácora central e inmutable de cambios;
- no hay repositorio documental ni Excel maestro multiusuario en servidor.

Estas funciones requieren un backend transaccional, usuarios autenticados y una
base de datos. No deben simularse como controles de seguridad en el navegador.

## Privacidad

No publique respaldos JSON que contengan datos personales. Los datos operativos
deben permanecer en los equipos autorizados o en una infraestructura municipal
con controles de acceso.

Consulte [AUDITORIA_FINAL.md](AUDITORIA_FINAL.md) para ver hallazgos, pruebas y
recomendaciones.
