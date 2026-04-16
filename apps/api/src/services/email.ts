import nodemailer from "nodemailer";

const transporter = process.env.SMTP_URL
  ? nodemailer.createTransport(process.env.SMTP_URL)
  : null;

export async function sendEmail(args: {
  to: string;
  subject: string;
  text: string;
  attachments?: Array<{ filename: string; content: Buffer; contentType: string }>;
}) {
  if (!transporter) {
    // eslint-disable-next-line no-console
    console.log(`[email:stub] to=${args.to} subject=${args.subject}`);
    return;
  }
  await transporter.sendMail({
    from: process.env.SMTP_FROM ?? "brain@pairai.com",
    to: args.to,
    subject: args.subject,
    text: args.text,
    attachments: args.attachments,
  });
}
