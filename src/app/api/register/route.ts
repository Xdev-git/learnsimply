import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    
    const name = formData.get('name')?.toString().trim();
    const email = formData.get('email')?.toString().trim();
    const phone = formData.get('phone')?.toString().trim();
    const screenshot = formData.get('screenshot') as File | null;
    const honeypot = formData.get('confirm_email') as string; // Honeypot field

    // 1. Honeypot check (security)
    if (honeypot) {
      return NextResponse.json({ success: true }, { status: 200 }); // Silently ignore bots
    }

    if (!name || !email || !phone || !screenshot) {
      return NextResponse.json(
        { error: 'Missing required fields or screenshot' },
        { status: 400 }
      );
    }

    // 2. File size check (security: prevent large uploads)
    if (screenshot.size > 1024 * 1024) {
       return NextResponse.json({ error: 'File size too large (Max 1MB)' }, { status: 400 });
    }

    // 3. File type check (security: prevent malicious files)
    const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf', 'image/webp', 'image/gif'];
    if (!allowedTypes.includes(screenshot.type)) {
       return NextResponse.json({ error: 'Invalid file type' }, { status: 400 });
    }

    // Convert the File object to a Buffer
    const arrayBuffer = await screenshot.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Provide your actual SMTP logic via environment variables (.env.local)
    // For example:
    // SMTP_HOST="smtp.gmail.com"
    // SMTP_PORT="465"
    // SMTP_USER="your-email@gmail.com"
    // SMTP_PASS="your-app-password"
    
    // We safely fallback for compilation, but in real use, ENV variables must exist
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT || 465),
      secure: true, 
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // The email you want to receive these registrations:
    const adminEmail = process.env.ADMIN_EMAIL || process.env.SMTP_USER || 'learnsimplyacademy@gmail.com';

    // Set up the email data, attaching the screenshot buffer
    const mailOptions = {
      from: `"Learn Simply Academy" <${process.env.SMTP_USER}>`,
      to: adminEmail,
      subject: `New Course Registration: ${name}`,
      text: `
      You have a new Vaginal Surgeries Online Course registration!

      Details:
      - Full Name: ${name}
      - Email: ${email}
      - WhatsApp Number: ${phone}

      Please find the payment screenshot attached. Note: Once verified, please send them their login credentials.
      `,
      attachments: [
        {
          filename: screenshot.name,
          content: buffer,
          contentType: screenshot.type,
        },
      ],
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Registration/Email Error: ', error);
    return NextResponse.json(
      { error: 'Internal Server Error. Please try again later.' },
      { status: 500 }
    );
  }
}
