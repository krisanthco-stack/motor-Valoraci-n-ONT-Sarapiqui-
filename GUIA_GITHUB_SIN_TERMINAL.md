# Guía visual para subir el proyecto a GitHub sin terminal

## Regla principal

No suba el archivo ZIP directamente.

1. Descargue el ZIP entregado.
2. Haga clic derecho sobre él.
3. Seleccione **Extraer todo**.
4. Abra la carpeta extraída.
5. Suba **todo lo que está dentro de esa carpeta**.

En la primera pantalla del repositorio deben verse directamente:

```text
.github/
assets/
docs/
source/
tests/
tools/
.nojekyll
index.html
expediente.html
terreno.html
construcciones.html
obras.html
resumen.html
informe.html
catalogos.html
auditoria.html
manifest.webmanifest
service-worker.js
README.md
```

No debe aparecer una carpeta adicional que contenga todo el proyecto.

---

## A. Crear un repositorio nuevo

1. Entre a GitHub e inicie sesión.
2. Presione el símbolo **+** de la esquina superior derecha.
3. Seleccione **New repository**.
4. Nombre recomendado:

```text
motor-valoracion-ont-sarapiqui
```

5. Seleccione **Public**.
6. No agregue README, licencia ni `.gitignore`; el proyecto ya los contiene.
7. Presione **Create repository**.

---

## B. Subir los archivos

Cuando el repositorio esté vacío verá el recuadro **Quick setup**.

1. Presione el enlace **uploading an existing file**.
2. Abra la carpeta extraída en Windows.
3. Seleccione todo con `Ctrl + A`.
4. Arrastre los archivos y carpetas a GitHub.
5. Espere a que termine la carga.
6. En **Commit changes**, escriba:

```text
Publicar Motor ONT V29
```

7. Seleccione **Commit directly to the main branch**.
8. Presione el botón verde **Commit changes**.

---

## C. Activar GitHub Pages

1. Abra la pestaña **Settings** del repositorio.
2. En el menú izquierdo, busque **Pages**.
3. En **Build and deployment**, seleccione:

```text
Source: Deploy from a branch
Branch: main
Folder: /(root)
```

4. Presione **Save** cuando esté disponible.
5. Espere el proceso de publicación.
6. Abra la pestaña **Actions**.
7. Confirme que **pages build and deployment** termine con marca verde.

La dirección tendrá una forma semejante a:

```text
https://SU-USUARIO.github.io/motor-valoracion-ont-sarapiqui/
```

---

## D. Comprobar que funciona

Abra estas direcciones:

```text
https://SU-USUARIO.github.io/SU-REPOSITORIO/
https://SU-USUARIO.github.io/SU-REPOSITORIO/tests/
```

En la segunda dirección deben aparecer seis pruebas aprobadas.

Revise también:

- que Expediente permita cambiar de método;
- que las zonas cambien con el distrito;
- que Terreno muestre los factores;
- que se puedan agregar construcciones y obras;
- que el informe se pueda imprimir;
- que Auditoría muestre 668 fórmulas y cero referencias rotas.

---

## E. Actualizar una versión futura

1. Descomprima el ZIP nuevo.
2. Abra el repositorio.
3. Seleccione **Add file → Upload files**.
4. Arrastre todo el contenido nuevo.
5. Confirme el reemplazo de archivos.
6. Escriba un mensaje como:

```text
Actualizar Motor ONT
```

7. Confirme en `main`.
8. Espere la acción de GitHub.
9. Abra la aplicación y presione `Ctrl + F5`.

---

## F. Errores frecuentes

### Error 404

Confirme que `index.html` esté en la raíz del repositorio y que Pages use:

```text
main
/(root)
```

### La página abre sin diseño

Confirme que exista:

```text
assets/css/app.css
assets/js/data-v29.js
```

### Los cambios no aparecen

Presione `Ctrl + F5`. La aplicación usa caché sin conexión.

### Las pruebas fallan

Abra `auditoria.html`, descargue el registro de errores y no utilice el resultado hasta corregir la falla.

---

## G. Datos confidenciales

GitHub Pages publica una aplicación estática en Internet. No suba:

- respaldos JSON de avalúos reales;
- datos personales de contribuyentes;
- expedientes municipales;
- contraseñas o tokens;
- fotografías privadas.

El repositorio debe contener solamente el programa, los catálogos aprobados y el archivo V29 de referencia autorizado para publicación.
