import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import path from 'path';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    
    const name = formData.get('name')?.toString().trim();
    const email = formData.get('email')?.toString().trim();
    const phone = formData.get('phone')?.toString().trim();
    const course = formData.get('course')?.toString().trim() || "Vaginal Surgeries";
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

    // --- Store in Google Sheets ---
    if (process.env.GOOGLE_SHEETS_URL) {
      try {
        const sheetParams = new URLSearchParams();
        sheetParams.append('name', name);
        sheetParams.append('email', email);
        sheetParams.append('phone', phone);
        sheetParams.append('course', course);

        await fetch(process.env.GOOGLE_SHEETS_URL, {
          method: 'POST',
          body: sheetParams,
        });
      } catch (sheetError) {
        console.error('Google Sheets Error: ', sheetError);
        // Continue to ensure email is still sent
      }
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

    // The email where you want to receive these registration alerts
    const adminEmail = process.env.ADMIN_EMAIL || process.env.SMTP_USER;

    // Set up the email data
    const mailOptions = {
      from: `"Learn Simply Academy" <${process.env.SMTP_USER}>`,
      to: adminEmail,
      subject: `New Registration Alert: ${name}`,
      attachments: [{
          filename: 'logo.jpeg',
          path: path.join(process.cwd(), 'public', 'learnsimply_logo.jpeg'),
          cid: 'logo'
      }],
      text: `
      You have a new course registration!
      
      Details:
      - Full Name: ${name}
      - Email: ${email}
      - WhatsApp: ${phone}
      - Course: ${course}
      
      Please verify the payment via WhatsApp and confirm in the admin dashboard.
      `,
      html: `
        <div style="font-family: sans-serif; background: #f1f5f9; padding: 40px 20px;">
            <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05); border: 1px solid #e2e8f0;">
                <div style="background: #0f172a; padding: 30px; text-align: center;">
                    <img src="cid:logo" alt="Learn Simply Logo" style="max-width: 140px; height: auto;">
                </div>
                <div style="padding: 30px;">
                    <div style="display: inline-block; padding: 6px 12px; background: #eff6ff; color: #2563eb; border-radius: 20px; font-size: 12px; font-weight: bold; text-transform: uppercase; margin-bottom: 20px;">New Student Alert</div>
                    <h2 style="margin: 0 0 20px 0; color: #0f172a; font-size: 24px; font-weight: bold;">New Registration Received</h2>
                    <p style="color: #64748b; font-size: 16px; margin-bottom: 30px;">A new user has just registered for the masterclass. Here are the details:</p>
                    
                    <div style="background: #f8fafc; border: 1px solid #f1f5f9; border-radius: 8px; padding: 20px; margin-bottom: 30px;">
                        <table width="100%" cellpadding="0" cellspacing="0" border="0">
                            <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #edf2f7;">
                                    <span style="font-size: 11px; color: #94a3b8; font-weight: bold; text-transform: uppercase; display: block; margin-bottom: 4px;">Full Name</span>
                                    <span style="font-size: 16px; color: #0f172a; font-weight: bold;">${name}</span>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #edf2f7;">
                                    <span style="font-size: 11px; color: #94a3b8; font-weight: bold; text-transform: uppercase; display: block; margin-bottom: 4px;">Email Address</span>
                                    <span style="font-size: 16px; color: #0f172a; font-weight: bold;">${email}</span>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #edf2f7;">
                                    <span style="font-size: 11px; color: #94a3b8; font-weight: bold; text-transform: uppercase; display: block; margin-bottom: 4px;">WhatsApp Number</span>
                                    <span style="font-size: 16px; color: #0f172a; font-weight: bold;">${phone}</span>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 12px 0;">
                                    <span style="font-size: 11px; color: #94a3b8; font-weight: bold; text-transform: uppercase; display: block; margin-bottom: 4px;">Course</span>
                                    <span style="font-size: 16px; color: #2563eb; font-weight: bold;">${course}</span>
                                </td>
                            </tr>
                        </table>
                    </div>

                    <div style="background: #fffbeb; border: 1px solid #fef3c7; border-radius: 8px; padding: 15px; margin-bottom: 30px; border-left: 4px solid #f59e0b;">
                        <p style="margin: 0; font-size: 14px; color: #92400e; line-height: 1.5;"><strong>Next Step:</strong> Please verify the payment screenshot on WhatsApp. Once confirmed, log in to the admin dashboard to send the official receipt.</p>
                    </div>

                    <a href="https://learnsimplyacademy.com/admin" style="display: block; width: 100%; padding: 16px; background: #0f172a; color: #ffffff; text-align: center; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 14px; box-sizing: border-box;">Open Admin Dashboard</a>
                </div>
                <div style="background: #f8fafc; padding: 20px; text-align: center; border-top: 1px solid #f1f5f9;">
                    <p style="margin: 0; font-size: 12px; color: #94a3b8;">Learn Simply Academy Admin Bot &bull; Automation Suite</p>
                </div>
            </div>
        </div>
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
