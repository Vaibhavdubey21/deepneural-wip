import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, message } = body;

    // Validate form data
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Decide on transporter based on env configuration
    const requiredEnv = ['EMAIL_FROM'];
    const smtpEnv = ['EMAIL_HOST', 'EMAIL_PORT', 'EMAIL_USER', 'EMAIL_PASSWORD'];
    const missingRequired = requiredEnv.filter((k) => !process.env[k as keyof NodeJS.ProcessEnv]);
    const hasSmtpConfig = smtpEnv.every((k) => !!process.env[k as keyof NodeJS.ProcessEnv]);

    let transporter: nodemailer.Transporter;

    if (hasSmtpConfig) {
      transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: Number(process.env.EMAIL_PORT),
        secure: process.env.EMAIL_SECURE === 'true',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD,
        },
      });
    } else if (process.env.NODE_ENV !== 'production') {
      // Dev fallback: don’t send real email, output as JSON (see server logs)
      transporter = nodemailer.createTransport({ jsonTransport: true });
      if (smtpEnv.some((k) => !process.env[k as keyof NodeJS.ProcessEnv])) {
        console.warn(
          'Email SMTP environment variables are not fully configured. Using jsonTransport for development.'
        );
      }
    } else {
      return NextResponse.json(
        { error: 'Email service is not configured. Set EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASSWORD, EMAIL_FROM.' },
        { status: 500 }
      );
    }

    if (missingRequired.length > 0) {
      return NextResponse.json(
        { error: `Missing environment variable(s): ${missingRequired.join(', ')}` },
        { status: 500 }
      );
    }

    // Prepare email content
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_RECIPIENT || 'Contact@deepneuraltechnologies.com',
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
          <h1 style="color: #3b82f6; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">New Contact Form Submission</h1>
          
          <div style="margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p style="margin: 10px 0;"><strong>Company:</strong> ${company || 'Not provided'}</p>
            
            <div style="margin-top: 20px;">
              <strong>Message:</strong>
              <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 5px;">
                ${String(message).replace(/\n/g, '<br>')}
              </div>
            </div>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0; font-size: 12px; color: #666;">
            <p>This email was sent from the DeepNeural contact form.</p>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Company: ${company || 'Not provided'}

Message:
${message}

---
This email was sent from the DeepNeural contact form.
      `,
    };

    // Send email (or log in dev jsonTransport)
    const info = await transporter.sendMail(mailOptions);

    // If using jsonTransport, log for developer visibility
    if ('message' in info) {
      console.log('Email (dev jsonTransport):', info.message?.toString?.() || info);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}