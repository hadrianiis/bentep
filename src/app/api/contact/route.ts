import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const files = formData.getAll('files') as File[];

    // Validácia povinných polí
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Všetky povinné polia musia byť vyplnené' },
        { status: 400 }
      );
    }

    // Nastavenie email transportu
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Príprava príloh
    const attachments = [];
    for (const file of files) {
      if (file && file.size > 0) {
        const buffer = Buffer.from(await file.arrayBuffer());
        attachments.push({
          filename: file.name,
          content: buffer,
          contentType: file.type,
        });
      }
    }

    // Email pre vás
    const adminEmailHtml = `
      <h2>Nová správa z kontaktného formulára</h2>
      <p><strong>Meno:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Telefón:</strong> ${phone}</p>
      <p><strong>Dátum:</strong> ${new Date().toLocaleString('sk-SK')}</p>
      ${attachments.length > 0 ? `<p><strong>Prílohy:</strong> ${attachments.length} súborov</p>` : ''}
    `;

    // Odoslanie emailu s prílohami
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.ADMIN_EMAIL || process.env.GMAIL_USER,
      subject: `Nová správa od ${name} - Bentep`,
      html: adminEmailHtml,
      attachments: attachments,
    });

    // Automatická odpoveď pre zákazníka
    const customerEmailHtml = `
      <h2>Ďakujeme za vašu správu!</h2>
      <p>Vážený/á ${name},</p>
      <p>Ďakujeme za váš záujem o naše služby. Vaša správa bola úspešne prijatá a čoskoro vás budeme kontaktovať.</p>
      <p>S pozdravom,<br>Tím Bentep</p>
    `;

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: email,
      subject: 'Potvrdenie prijatia správy - Bentep',
      html: customerEmailHtml,
    });

    // Odoslanie dát do Google Sheets
    await sendToGoogleSheets({
      name,
      email,
      phone,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Nastala chyba pri odosielaní správy' },
      { status: 500 }
    );
  }
}

async function sendToGoogleSheets(data: {
  name: string;
  email: string;
  phone: string;
  timestamp: string;
}) {
  try {
    const response = await fetch(process.env.GOOGLE_APPS_SCRIPT_URL!, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        phone: data.phone,
        timestamp: data.timestamp,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to send data to Google Sheets');
    }
  } catch (error) {
    console.error('Error sending to Google Sheets:', error);
    // Nechceme prerušiť celý proces kvôli chybe v Google Sheets
  }
}
