import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    
    const name = formData.get('name')?.toString().trim();
    const email = formData.get('email')?.toString().trim();
    const phone = formData.get('phone')?.toString().trim();
    const honeypot = formData.get('confirm_email') as string; // Honeypot field

    // 1. Honeypot check (security)
    if (honeypot) {
      return NextResponse.json({ success: true }, { status: 200 }); // Silently ignore bots
    }

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Provide your actual SMTP logic via environment variables (.env.local)
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

    // Set up the email data
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

      Note: Payment screenshot should have been received via WhatsApp. Once verified, please send them their login credentials.
      `,
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
