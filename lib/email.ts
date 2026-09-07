import { Resend } from "resend";
import { NAP } from "@/content/site";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function sendEnquiryEmail({
  subject,
  html,
  replyTo,
}: {
  subject: string;
  html: string;
  replyTo?: string;
}): Promise<{ sent: boolean }> {
  if (!resend) {
    console.warn(
      "[email] RESEND_API_KEY is not configured — enquiry was not emailed. Set it in .env before launch."
    );
    return { sent: false };
  }

  await resend.emails.send({
    from: "AP Blood & Blood Cancer Centre <enquiries@apbloodcentre.com>",
    to: [NAP.email],
    subject,
    html,
    ...(replyTo ? { replyTo } : {}),
  });

  return { sent: true };
}

/*
 * --- Nodemailer SMTP fallback ---
 * Uncomment this block (and comment out the Resend implementation above) if
 * the client prefers relaying through an existing SMTP mailbox instead of
 * Resend. Requires SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS in .env.
 *
 * import nodemailer from "nodemailer";
 *
 * const transporter = nodemailer.createTransport({
 *   host: process.env.SMTP_HOST,
 *   port: Number(process.env.SMTP_PORT ?? 587),
 *   secure: false,
 *   auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
 * });
 *
 * export async function sendEnquiryEmail({ subject, html, replyTo }: { subject: string; html: string; replyTo?: string }) {
 *   await transporter.sendMail({
 *     from: `"AP Blood & Blood Cancer Centre" <${process.env.SMTP_USER}>`,
 *     to: NAP.email,
 *     subject,
 *     html,
 *     ...(replyTo ? { replyTo } : {}),
 *   });
 *   return { sent: true };
 * }
 */
