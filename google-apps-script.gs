/**
 * Fiesta sorpresa de Aby — receptor de confirmaciones
 *
 * Google Sheet enlazado:
 * https://docs.google.com/spreadsheets/d/1E_qFTm46HDUrAiQ2DXsO6n03AzPgpT6H7bk5n6Iv8eU/edit
 *
 * Hoja destino: Confirmaciones
 *
 * IMPORTANTE:
 * Google exige desplegar este código como "Aplicación web" para obtener
 * una URL /exec. Después pega esa URL en GOOGLE_SCRIPT_URL de script.js.
 */

const SPREADSHEET_ID = "1E_qFTm46HDUrAiQ2DXsO6n03AzPgpT6H7bk5n6Iv8eU";
const SHEET_NAME = "Confirmaciones";

function doPost(e) {
  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = spreadsheet.getSheetByName(SHEET_NAME);

  if (!sheet) {
    throw new Error('No se encontró la hoja "' + SHEET_NAME + '".');
  }

  const p = (e && e.parameter) ? e.parameter : {};
  const nombre = String(p.nombre || "").trim();
  const mensaje = String(p.mensaje || "").trim();

  if (!nombre) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: "Falta el nombre." }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  sheet.appendRow([
    new Date(),
    nombre,
    mensaje,
    "Confirmada"
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
