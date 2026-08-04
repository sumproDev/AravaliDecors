import nodemailer from "nodemailer";

export function getTransporter() {
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;

  if (!user || !pass || pass === "your-16-digit-app-password") {
    console.warn(
      "[Nodemailer] Warning: GMAIL_USER or GMAIL_APP_PASSWORD is not set or using placeholder values in .env"
    );
  }

  const host = process.env.SMTP_HOST || "smtp.gmail.com";
  const port = Number(process.env.SMTP_PORT) || 465;

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: {
      user: user,
      pass: pass,
    },
  });
}

export interface ContactEnquiryPayload {
  name: string;
  phone: string;
  email?: string;
  requirement: string;
  location?: string;
  message: string;
}

export async function sendContactEnquiryEmail(data: ContactEnquiryPayload) {
  const recipient =
    process.env.CONTACT_NOTIFICATION_EMAIL ||
    process.env.GMAIL_USER ||
    "aravalimarbles001@gmail.com";

  const sender = process.env.GMAIL_USER || "aravalimarbles001@gmail.com";

  const transporter = getTransporter();

  const formattedDate = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "full",
    timeStyle: "short",
  });

  const htmlContent = `
    <div style="font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 640px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden; background-color: #ffffff; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
      <!-- Header -->
      <div style="background-color: #991b1b; color: #ffffff; padding: 28px 24px; text-align: center;">
        <h1 style="margin: 0; font-size: 24px; font-weight: 700; letter-spacing: 0.5px; text-transform: uppercase;">Aravali Marbles</h1>
        <p style="margin: 6px 0 0 0; font-size: 14px; color: #fecaca; font-weight: 500;">New Customer Project Enquiry</p>
      </div>

      <!-- Content Body -->
      <div style="padding: 28px 24px;">
        <p style="font-size: 15px; color: #374151; margin-top: 0; line-height: 1.6;">
          You have received a new enquiry from the website contact form on <strong>${formattedDate}</strong>.
        </p>

        <table style="width: 100%; border-collapse: separate; border-spacing: 0; margin-top: 20px; font-size: 14px; border: 1px solid #f3f4f6; border-radius: 8px; overflow: hidden;">
          <tbody>
            <tr style="background-color: #fafafa;">
              <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6; font-weight: 600; color: #4b5563; width: 35%;">Full Name</td>
              <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6; color: #111827; font-weight: 600;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6; font-weight: 600; color: #4b5563;">Phone Number</td>
              <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6; color: #111827;">
                <a href="tel:+91${data.phone.replace(/\D/g, "")}" style="color: #b91c1c; text-decoration: none; font-weight: 600;">+91 ${data.phone}</a>
              </td>
            </tr>
            <tr style="background-color: #fafafa;">
              <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6; font-weight: 600; color: #4b5563;">Email Address</td>
              <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6; color: #111827;">
                ${
                  data.email
                    ? `<a href="mailto:${data.email}" style="color: #2563eb; text-decoration: none;">${data.email}</a>`
                    : '<span style="color: #9ca3af; italic;">Not provided</span>'
                }
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6; font-weight: 600; color: #4b5563;">Requirement / Service</td>
              <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6; color: #111827; font-weight: 600;">${data.requirement}</td>
            </tr>
            <tr style="background-color: #fafafa;">
              <td style="padding: 12px 16px; font-weight: 600; color: #4b5563;">Project Location</td>
              <td style="padding: 12px 16px; color: #111827;">${data.location || '<span style="color: #9ca3af;">Not provided</span>'}</td>
            </tr>
          </tbody>
        </table>

        <!-- Message Box -->
        <div style="margin-top: 24px; padding: 18px; background-color: #fef2f2; border-radius: 8px; border-left: 4px solid #b91c1c;">
          <p style="margin: 0 0 8px 0; font-weight: 700; color: #991b1b; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Message & Details</p>
          <p style="margin: 0; color: #1f2937; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${data.message || "No additional message details provided."}</p>
        </div>
      </div>

      <!-- Quick Actions -->
      <div style="padding: 0 24px 24px 24px; text-align: center;">
        <a href="https://wa.me/91${data.phone.replace(/\D/g, "")}" style="display: inline-block; background-color: #25d366; color: #ffffff; text-decoration: none; padding: 10px 20px; border-radius: 6px; font-weight: 600; font-size: 14px; margin-right: 8px;">Reply via WhatsApp</a>
        ${data.email ? `<a href="mailto:${data.email}" style="display: inline-block; background-color: #1f2937; color: #ffffff; text-decoration: none; padding: 10px 20px; border-radius: 6px; font-weight: 600; font-size: 14px;">Reply via Email</a>` : ""}
      </div>

      <!-- Footer -->
      <div style="background-color: #f9fafb; padding: 16px 24px; text-align: center; font-size: 12px; color: #6b7280; border-top: 1px solid #f3f4f6;">
        This automated notification was sent from the <strong>Aravali Marbles</strong> website contact form.
      </div>
    </div>
  `;

  const textContent = `New Aravali Marbles Contact Enquiry

Name: ${data.name}
Phone: ${data.phone}
Email: ${data.email || "Not provided"}
Requirement: ${data.requirement}
Location: ${data.location || "Not provided"}

Message:
${data.message}
`;

  const mailOptions = {
    from: `"Aravali Marbles Contact Form" <${sender}>`,
    to: recipient,
    replyTo: data.email || sender,
    subject: `[Aravali Enquiry] ${data.name} - ${data.requirement}`,
    text: textContent,
    html: htmlContent,
  };

  return await transporter.sendMail(mailOptions);
}
