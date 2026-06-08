// ============================================================
// Portfolio Contact Form — Google Apps Script backend
// ============================================================
//
// SETUP INSTRUCTIONS:
//
// 1. Go to sheets.google.com and create a new spreadsheet.
//    Name it something like "Portfolio Contact Form".
//
// 2. Open Apps Script: Extensions → Apps Script.
//
// 3. Delete any existing code and paste everything below.
//
// 4. Click Deploy → New deployment.
//    - Type: Web app
//    - Execute as: Me
//    - Who has access: Anyone
//    Click Deploy and authorize when prompted.
//
// 5. Copy the Web app URL.
//
// 6. Open about.html and replace YOUR_APPS_SCRIPT_URL
//    with the URL you just copied.
//
// 7. If you update this code later, go to Deploy →
//    Manage deployments → edit → New version → Deploy.
// ============================================================

function doPost(e) {
  // Honeypot check — discard bot submissions silently
  if (e.parameter.b_trap) {
    return ContentService.createTextOutput('OK');
  }

  SpreadsheetApp.getActiveSpreadsheet()
    .getActiveSheet()
    .appendRow([
      new Date(),
      e.parameter.name,
      e.parameter.subject,
      e.parameter.message
    ]);

  MailApp.sendEmail({
    to: 'jay.papandreas@gmail.com',
    subject: 'Portfolio contact: ' + e.parameter.subject,
    body: 'From: ' + e.parameter.name + '\n\n' + e.parameter.message
  });

  return ContentService.createTextOutput('OK');
}
