/**
 * Google Apps Script para la invitación de Aby
 * ------------------------------------------------------------
 * 1) Crea un Google Sheet.
 * 2) Ponle, por ejemplo, el nombre: "Confirmaciones fiesta Aby".
 * 3) En ese Sheet abre: Extensiones > Apps Script.
 * 4) Borra el contenido inicial y pega este archivo completo.
 * 5) Guarda.
 * 6) Implementar > Nueva implementación > Aplicación web.
 * 7) Ejecutar como: Yo.
 * 8) Quién tiene acceso: Cualquier persona.
 * 9) Implementar y copiar la URL que termina en /exec.
 * 10) Pega esa URL en GOOGLE_SCRIPT_URL dentro de script.js.
 */

function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      "Fecha y hora",
      "Nombre completo",
      "Número de personas",
      "Mensaje",
      "Evento"
    ]);
    sheet.getRange(1, 1, 1, 5).setFontWeight("bold");
    sheet.setFrozenRows(1);
  }

  const p = e.parameter || {};

  sheet.appendRow([
    new Date(),
    p.nombre || "",
    p.personas || "1",
    p.mensaje || "",
    p.evento || "Fiesta sorpresa de Aby - 31/10/2026"
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet() {
  return ContentService
    .createTextOutput("Invitación de Aby: conexión activa.")
    .setMimeType(ContentService.MimeType.TEXT);
}
