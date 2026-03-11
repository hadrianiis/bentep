// Google Apps Script kód pre Google Sheets integráciu
// Tento kód musíte skopírovať do Google Apps Script editora

function doPost(e) {
  try {
    // Získanie dát z POST požiadavky
    const data = JSON.parse(e.postData.contents);
    
    // ID vášho Google Sheets dokumentu (nahraďte vlastným)
    const SHEET_ID = 'YOUR_GOOGLE_SHEET_ID_HERE';
    
    // Otvorenie Google Sheets
    const sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();
    
    // Kontrola, či existujú hlavičky
    if (sheet.getLastRow() === 0) {
      // Pridanie hlavičiek ak je tabuľka prázdna
      sheet.getRange(1, 1, 1, 4).setValues([
        ['Meno', 'Email', 'Telefón', 'Dátum a čas']
      ]);
      
      // Formátovanie hlavičiek
      const headerRange = sheet.getRange(1, 1, 1, 4);
      headerRange.setFontWeight('bold');
      headerRange.setBackground('#4285f4');
      headerRange.setFontColor('white');
    }
    
    // Pridanie nového riadku s dátami
    const newRow = [
      data.name,
      data.email,
      data.phone,
      new Date(data.timestamp).toLocaleString('sk-SK')
    ];
    
    sheet.appendRow(newRow);
    
    // Automatické prispôsobenie šírky stĺpcov
    sheet.autoResizeColumns(1, 4);
    
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('Error:', error);
    return ContentService
      .createTextOutput(JSON.stringify({ error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Test funkcia
function testFunction() {
  const testData = {
    name: 'Test User',
    email: 'test@example.com',
    phone: '+421123456789',
    timestamp: new Date().toISOString()
  };
  
  const result = doPost({
    postData: {
      contents: JSON.stringify(testData)
    }
  });
  
  console.log('Test result:', result.getContent());
}
