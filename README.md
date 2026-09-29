# Invitación interactiva — Fiesta sorpresa de Aby (v2)

Esta versión incluye los cambios solicitados al formulario y ya está preparada
para guardar las confirmaciones en el Google Sheet creado para la fiesta.

## Cambios realizados

- Se eliminó por completo la opción "Número de personas".
- La invitación queda pensada para confirmación individual.
- El campo de mensaje ahora dice:
  **Un mensajito para Aby 💖**
- Placeholder:
  **Déjale aquí unas palabras bonitas a Aby 💖**
- Se creó y preparó el Google Sheet:
  **Confirmaciones - Fiesta Sorpresa Aby**
- Hoja destino:
  **Confirmaciones**
- Columnas:
  1. Fecha y hora
  2. Nombre completo
  3. Un mensajito para Aby 💖
  4. Confirmación

Google Sheet:
https://docs.google.com/spreadsheets/d/1E_qFTm46HDUrAiQ2DXsO6n03AzPgpT6H7bk5n6Iv8eU/edit

## Falta un único paso de Google para activar el envío en vivo

Por seguridad, Google no permite que un sitio web escriba directamente en una
hoja privada únicamente con el enlace del Sheet. Se necesita publicar el
archivo `google-apps-script.gs` como una **Aplicación web**.

### Cómo activarlo

1. Abre el Google Sheet del enlace anterior.
2. Ve a **Extensiones > Apps Script**.
3. Borra el código que aparezca.
4. Copia y pega TODO el contenido de `google-apps-script.gs`.
5. Guarda.
6. Pulsa **Implementar > Nueva implementación**.
7. Tipo: **Aplicación web**.
8. Ejecutar como: **Yo**.
9. Quién tiene acceso: **Cualquier persona**.
10. Pulsa **Implementar** y autoriza si Google lo solicita.
11. Copia la URL final que termina en `/exec`.
12. Abre `script.js` y cambia:

    const GOOGLE_SCRIPT_URL = "";

    por:

    const GOOGLE_SCRIPT_URL = "TU_URL_QUE_TERMINA_EN_EXEC";

13. Guarda `script.js`.

A partir de ahí, cada invitado que confirme desde la invitación aparecerá
automáticamente como una nueva fila del Sheet.

## Probar la invitación

Abre `index.html`.

Mientras `GOOGLE_SCRIPT_URL` esté vacío, el formulario seguirá funcionando en
modo demostración y avisará que falta conectar Google Sheets; no fingirá que la
información se guardó.

## Ubicación

Se mantiene el enlace exacto de Google Maps:
https://maps.app.goo.gl/XvXKvJ6q5sDy312R8


## Estado de conexión

La invitación ya tiene configurada la URL publicada de Google Apps Script:

https://script.google.com/macros/s/AKfycbwsAWTgpJQeGu94ZMgcy-PaAzAWJsBgJ_e7ZbcdObtpm2H54SX-gUurQE5EuZKLn65m/exec

El formulario ya intentará guardar cada confirmación directamente en el
Google Sheet **Confirmaciones - Fiesta Sorpresa Aby**, hoja **Confirmaciones**.

Campos enviados:
- Nombre completo
- Un mensajito para Aby 💖
- Fecha y hora de registro
- Estado: Confirmada



## Cambios finales de ubicación

- El lugar ahora aparece como **📍 SALÓN LUZ DE LUNA**.
- La dirección **De Capulín 235** aparece debajo del nombre del salón.
- Se añadieron dos fotografías de referencia para que los invitados identifiquen
  fácilmente la fachada y la esquina al llegar.
