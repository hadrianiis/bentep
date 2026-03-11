# Nastavenie kontaktného formulára

## 1. Gmail nastavenia

### Vytvorenie App Password pre Gmail:
1. Choďte na [Google Account Security](https://myaccount.google.com/security)
2. Zapnite 2-Factor Authentication ak nie je zapnuté
3. Choďte na "App passwords"
4. Vyberte "Mail" a "Other (Custom name)"
5. Zadajte názov napr. "Bentep Contact Form"
6. Skopírujte vygenerované heslo

### Nastavenie environment variables:
1. Skopírujte `env.example` do `.env.local`
2. Vyplňte vaše údaje:
```env
GMAIL_USER=vas-email@gmail.com
GMAIL_APP_PASSWORD=vasa-app-password-z-kroku-vyssie
ADMIN_EMAIL=admin@bentep.sk
GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

## 2. Google Sheets integrácia

### Vytvorenie Google Sheets:
1. Choďte na [Google Sheets](https://sheets.google.com)
2. Vytvorte nový spreadsheet
3. Pomenujte ho napr. "Bentep Kontakty"
4. Skopírujte ID z URL (medzi /d/ a /edit)

### Nastavenie Google Apps Script:
1. Choďte na [Google Apps Script](https://script.google.com)
2. Vytvorte nový projekt
3. Skopírujte kód z `google-apps-script.js`
4. Nahraďte `YOUR_GOOGLE_SHEET_ID_HERE` s ID vášho spreadsheetu
5. Uložte projekt
6. Choďte na "Deploy" > "New deployment"
7. Vyberte "Web app" ako typ
8. Nastavte:
   - Execute as: Me
   - Who has access: Anyone
9. Kliknite "Deploy"
10. Skopírujte Web App URL do `.env.local`

## 3. Testovanie

### Test Google Apps Script:
1. V Google Apps Script editori spustite `testFunction()`
2. Skontrolujte, či sa v Google Sheets pridali testovacie dáta

### Test kontaktného formulára:
1. Spustite aplikáciu: `npm run dev`
2. Choďte na `/kontakt`
3. Vyplňte formulár a odošlite
4. Skontrolujte:
   - Email v Gmail inboxe
   - Dáta v Google Sheets

## 4. Funkcie

### Čo sa deje po odoslaní formulára:
1. **Email s prílohami** - príde na váš Gmail s všetkými prílohami
2. **Automatická odpoveď** - zákazníkovi príde potvrdzovací email
3. **Google Sheets** - dáta sa uložia do tabuľky s dátumom a časom
4. **Validácia** - všetky povinné polia musia byť vyplnené

### Podporované formáty súborov:
- PDF, DOC, DOCX, JPG, JPEG, PNG, GIF
- Maximálna veľkosť: 10MB na súbor

## 5. Riešenie problémov

### Email sa neodosiela:
- Skontrolujte Gmail App Password
- Skontrolujte, či je 2FA zapnuté
- Skontrolujte environment variables

### Google Sheets sa neaktualizuje:
- Skontrolujte Google Apps Script URL
- Skontrolujte, či je Web App nasadený správne
- Skontrolujte oprávnenia v Google Sheets

### Súbory sa neodosielajú:
- Skontrolujte veľkosť súborov (max 10MB)
- Skontrolujte formát súborov
