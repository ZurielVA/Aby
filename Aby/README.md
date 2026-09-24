# Invitación interactiva — Fiesta sorpresa de Aby

Esta carpeta contiene una primera versión funcional de la invitación web.

## Qué incluye

- Diseño responsive para celular, tablet y computadora.
- Estética inspirada en Muñeca Lele / artesanía mexicana.
- Foto de Aby.
- Animaciones de entrada, flores, pétalos y confeti.
- Botón "Confirmar mi asistencia".
- Formulario con nombre completo, número de personas y mensaje opcional.
- Cuenta regresiva al 31 de octubre de 2026.
- Mapa visible dentro de la invitación.
- Botón a la ubicación exacta de Google Maps:
  https://maps.app.goo.gl/XvXKvJ6q5sDy312R8
- Código listo para conectar las confirmaciones con Google Sheets.

## Probar ahora

Abre `index.html` en Chrome, Edge o Safari.

El formulario funciona en "modo prueba" mientras no se haya configurado Google Sheets.
Esto evita mostrar una confirmación falsa de que los datos ya se guardaron en línea.

## Conectar Google Sheets

1. Crea una hoja nueva en Google Sheets.
2. Abre `Extensiones > Apps Script`.
3. Copia todo el contenido de `google-apps-script.gs`.
4. Guarda el proyecto.
5. Ve a `Implementar > Nueva implementación`.
6. Selecciona `Aplicación web`.
7. En "Ejecutar como", selecciona tu cuenta.
8. En "Quién tiene acceso", selecciona `Cualquier persona`.
9. Implementa y copia la URL que termina en `/exec`.
10. Abre `script.js`.
11. Busca:

   const GOOGLE_SCRIPT_URL = "";

12. Pega tu URL entre las comillas:

   const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/...../exec";

13. Guarda y vuelve a publicar el sitio.

A partir de ese momento, cada confirmación se añadirá como una fila nueva en tu Google Sheet.

## Publicarlo

Puedes subir esta carpeta tal cual a Hostinger, GitHub Pages, Netlify o cualquier hosting estático.

Para Hostinger:
- Sube `index.html`, `styles.css`, `script.js` y la carpeta `assets`
  dentro de la carpeta pública del dominio/subdominio.
- Mantén la misma estructura de archivos.

## Cambiar la hora más adelante

En `index.html`, busca:

  <strong>Por confirmar</strong>

y cámbialo por la hora final, por ejemplo:

  <strong>5:00 PM</strong>

La cuenta regresiva actualmente cuenta días hasta el 31 de octubre y no depende de la hora.
