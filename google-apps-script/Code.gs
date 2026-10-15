/**
 * SocialBug creator list -> Google Sheet
 *
 * Paste this whole file in the Apps Script editor of your Google Sheet
 * (Extensions > Apps Script), set the SECRET script property, then deploy
 * as a Web App. Full steps: docs/CREATOR_SHEET_SETUP.md
 */

var SHEET_NAME = "Creators";

var HEADERS = [
  "Submitted At (IST)",
  "Name",
  "WhatsApp",
  "Email",
  "City",
  "Niche",
  "Designation",
  "Company",
  "Age",
  "LinkedIn URL",
  "LinkedIn Followers",
  "LinkedIn Rate / Post (INR)",
  "Twitter URL",
  "Twitter Followers",
  "Twitter Rate / Tweet (INR)",
  "Instagram URL",
  "Instagram Followers",
  "Instagram Rate / Reel (INR)"
];

var EMAIL_COL = 4; // "Email" is the 4th column, used to block duplicates

function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    lock.waitLock(15000);

    var data = JSON.parse(e.postData.contents);
    var secret = PropertiesService.getScriptProperties().getProperty("SECRET");
    if (!secret || data.secret !== secret) return respond({ ok: false, error: "unauthorized" });

    var sheet = getSheet();
    var email = String(data.email || "").toLowerCase();

    // Duplicate check on the Email column
    var last = sheet.getLastRow();
    if (last > 1) {
      var emails = sheet.getRange(2, EMAIL_COL, last - 1, 1).getValues();
      for (var i = 0; i < emails.length; i++) {
        if (String(emails[i][0]).toLowerCase() === email) {
          return respond({ ok: false, error: "duplicate" });
        }
      }
    }

    var row = [
      Utilities.formatDate(new Date(), "Asia/Kolkata", "dd MMM yyyy, hh:mm a"),
      safe(data.name),
      safe(data.whatsapp),
      safe(email),
      safe(data.city),
      safe(data.niche),
      safe(data.designation),
      safe(data.company),
      data.age,
      safe(data.linkedinUrl),
      data.linkedinFollowers,
      data.linkedinCost,
      safe(data.twitterUrl),
      data.twitterFollowers,
      data.twitterCost,
      safe(data.instagramUrl),
      data.instagramFollowers,
      data.instagramCost
    ];

    sheet.appendRow(row);
    return respond({ ok: true });
  } catch (err) {
    return respond({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

// Opening the Web App URL in a browser should not show data.
function doGet() {
  return respond({ ok: true, message: "SocialBug creator endpoint is live." });
}

function getSheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold").setBackground("#d9f24e");
    sheet.setFrozenRows(1);
    // Keep phone numbers as text so "+91..." is never read as a formula.
    sheet.getRange(2, 3, sheet.getMaxRows() - 1, 1).setNumberFormat("@");
  }
  return sheet;
}

// Stops spreadsheet formula injection (cells starting with = + - @).
function safe(value) {
  var s = value === null || value === undefined ? "" : String(value);
  return /^[=+\-@]/.test(s) && !/^\+\d/.test(s) ? "'" + s : s;
}

function respond(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}