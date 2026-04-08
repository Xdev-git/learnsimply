import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import nodemailer from 'nodemailer';
import path from 'path';

export async function POST(request: Request) {
  try {
    const cookieStore = await cookies();
    const isAuth = cookieStore.get('admin_auth')?.value === 'true';

    if (!isAuth) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { email, name, row, course, reference } = await request.json();

    if (!email || !row) {
      return NextResponse.json({ error: 'Missing required data' }, { status: 400 });
    }

    // 1. Calculate Period
    const now = new Date();
    const startDate = now.toLocaleDateString('en-GB'); // DD/MM/YYYY
    
    const expDate = new Date();
    expDate.setFullYear(now.getFullYear() + 1);
    expDate.setDate(now.getDate() + 30);
    const expirationDate = expDate.toLocaleDateString('en-GB');

    // 2. Update Google Sheets Status & Dates
    if (process.env.GOOGLE_SHEETS_URL) {
      try {
        const updateParams = new URLSearchParams();
        updateParams.append('action', 'updateStatus');
        updateParams.append('row', row.toString());
        // Send multiple fields as a JSON string
        updateParams.append('data', JSON.stringify({
            'Status': 'Confirmed',
            'Start Date': startDate,
            'Expiration Date': expirationDate,
            'Receipt Status': 'Sent',
            'Payment Reference': reference || 'N/A'
        }));

        await fetch(process.env.GOOGLE_SHEETS_URL, {
          method: 'POST',
          body: updateParams,
        });
      } catch (sheetError) {
        console.error('Sheet update failed but proceeding with email:', sheetError);
      }
    }

    // 3. Send Confirmation Email to Student
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT || 465),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
        from: `"Learn Simply Academy" <${process.env.SMTP_USER}>`,
        to: email,
        subject: `Payment Confirmed: ${course || 'Vaginal Surgeries'} Course`,
        attachments: [{
            filename: 'logo.jpeg',
            path: path.join(process.cwd(), 'public', 'learnsimply_logo.jpeg'),
            cid: 'logo'
        }],
        text: `
        Hello ${name},

        We have successfully received your payment for the ${course || 'Vaginal Surgeries'} Online Course.

        Course Period:
        - Start Date: ${startDate}
        - Expiration Date: ${expirationDate}

        Payment Details:
        - Reference ID: ${reference || 'N/A'}

        Your registration is now confirmed! A video link for the course will be sent to your registered email ID. For any queries, feel free to message us on WhatsApp at +91 98260 55666.

        We are excited to have you on board!

        Best regards,
        Learn Simply Academy Team
        `,
        html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333; max-width: 600px; margin: auto; border: 1px solid #e2e8f0; border-radius: 12px;">
            <div style="text-align: center; margin-bottom: 20px;">
                <img src="cid:logo" alt="Learn Simply Logo" style="max-width: 150px; height: auto;">
            </div>
            <h2 style="color: #2563eb; margin-top: 0;">Payment Confirmed!</h2>
            <p>Hello <strong>${name}</strong>,</p>
            <p>We have successfully received your payment for the <strong>${course || 'Vaginal Surgeries'}</strong> Online Course.</p>
            
            <div style="background: #f8fafc; padding: 20px; border-radius: 12px; margin: 25px 0; border: 1px solid #f1f5f9;">
                <p style="margin: 0 0 15px 0; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b; font-weight: bold;">Course Validity Period</p>
                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                    <tr>
                        <td width="50%" valign="top">
                            <p style="margin: 0; font-size: 11px; color: #94a3b8; font-weight: bold; text-transform: uppercase;">Start Date</p>
                            <p style="margin: 2px 0 0 0; font-size: 16px; font-weight: bold; color: #0f172a;">${startDate}</p>
                        </td>
                        <td width="50%" valign="top">
                            <p style="margin: 0; font-size: 11px; color: #94a3b8; font-weight: bold; text-transform: uppercase;">Expiration Date</p>
                            <p style="margin: 2px 0 0 0; font-size: 16px; font-weight: bold; color: #0f172a;">${expirationDate}</p>
                        </td>
                    </tr>
                </table>
                <p style="margin: 15px 0 0 0; font-size: 12px; color: #64748b;">Includes 1-year access + 30 days grace period.</p>
            </div>
 
            <div style="margin: 20px 0; border: 1px solid #e2e8f0; border-radius: 8px; padding: 15px;">
                <p style="margin: 0; font-size: 12px; color: #64748b; text-transform: uppercase; font-weight: bold;">Payment Reference</p>
                <p style="margin: 5px 0 0 0; font-size: 14px; font-family: monospace; color: #0f172a; font-weight: bold;">${reference || 'N/A'}</p>
            </div>

            <p>Your registration is now confirmed! A video link for the course will be sent to your registered email ID.</p>
            
            <div style="background: #eff6ff; padding: 15px; border-radius: 8px; margin: 20px 0; border: 1px dashed #bfdbfe;">
                <p style="margin: 0; font-size: 14px; color: #1e40af;"><strong>What happens next?</strong></p>
                <p style="margin: 5px 0 0; font-size: 14px; color: #1e40af;">You will receive the video access link via email within the next 24 hours.</p>
            </div>

            <p style="font-size: 14px;">If you have any questions, feel free to reply to this email or <a href="https://wa.me/919826055666" style="color: #2563eb; text-decoration: none; font-weight: bold;">message us on WhatsApp at +91 98260 55666</a>.</p>
            <br>
            <p style="margin-bottom: 0;">Welcome to the Academy,</p>
            <p style="margin-top: 5px;"><strong>Learn Simply Academy Team</strong></p>
        </div>
        `
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Confirmation error detail:', error);
    
    // Check for common SMTP errors
    if (error.code === 'EAUTH' || !process.env.SMTP_USER) {
        return NextResponse.json({ 
            error: 'Authentication failed. Please check your SMTP_USER and SMTP_PASS in .env.local.' 
        }, { status: 500 });
    }

    return NextResponse.json({ 
        error: `Failed to process confirmation: ${error.message || 'Unknown error'}` 
    }, { status: 500 });
  }
}
