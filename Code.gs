const SHEET_NAME = "PSF27 Confirmations";

function setupSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }

  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      "Timestamp",
      "Full Name",
      "Organisation / Venture / Fund",
      "Contact Number",
      "Preferred Attendance Day",
      "Confirmed",
      "Queries",
      "Source"
    ]);
    sheet.setFrozenRows(1);
  }
}

function doGet() {
  setupSheet();
  return ContentService
    .createTextOutput(JSON.stringify({
      status: "ok",
      service: "PSF27 Investor Confirmation Portal"
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  setupSheet();

  try {
    const data = JSON.parse(e.postData.contents || "{}");

    if (
      !data.fullName ||
      !data.organisation ||
      !data.contact ||
      !data.attendanceDay ||
      data.confirmation !== "on"
    ) {
      return output({
        status: "error",
        message: "Missing required fields."
      });
    }

    const sheet =
      SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);

    sheet.appendRow([
      new Date(),
      clean(data.fullName),
      clean(data.organisation),
      clean(data.contact),
      clean(data.attendanceDay),
      "CONFIRMED",
      clean(data.queries || ""),
      clean(data.source || "PSF27 Investor Relations Website")
    ]);

    return output({
      status: "success",
      message: "Investor confirmation recorded."
    });

  } catch (error) {
    return output({
      status: "error",
      message: String(error)
    });
  }
}

function clean(value) {
  return String(value ?? "").trim().slice(0, 2000);
}

function output(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
