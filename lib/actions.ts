"use server";

import {
  appointmentSchema,
  secondOpinionSchema,
  referralSchema,
  MIN_SUBMIT_MS,
  type AppointmentInput,
  type SecondOpinionInput,
  type ReferralInput,
} from "./validation";
import { sendEnquiryEmail, escapeHtml } from "./email";

export type ActionResult = { success: true } | { success: false; error: string };

/**
 * No PHI is ever persisted — these actions only relay a plain-text email and
 * return a success/failure flag. Nothing is written to a database.
 */
function isLikelySpam(honeypot: string, formRenderedAt: number) {
  if (honeypot.length > 0) return true;
  if (Date.now() - formRenderedAt < MIN_SUBMIT_MS) return true;
  return false;
}

const GENERIC_ERROR = "Please check the form and try again.";

export async function submitAppointment(input: AppointmentInput): Promise<ActionResult> {
  const parsed = appointmentSchema.safeParse(input);
  if (!parsed.success) return { success: false, error: GENERIC_ERROR };

  const { name, phone, preferredDate, reason, honeypot, formRenderedAt } = parsed.data;
  if (isLikelySpam(honeypot, formRenderedAt)) return { success: true };

  await sendEnquiryEmail({
    subject: `New Appointment Request — ${name}`,
    html: `
      <h2>New Appointment Request</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
      <p><strong>Preferred date:</strong> ${escapeHtml(preferredDate)}</p>
      <p><strong>Reason for visit:</strong> ${escapeHtml(reason)}</p>
    `,
  });

  return { success: true };
}

export async function submitSecondOpinion(input: SecondOpinionInput): Promise<ActionResult> {
  const parsed = secondOpinionSchema.safeParse(input);
  if (!parsed.success) return { success: false, error: GENERIC_ERROR };

  const { name, phone, city, preferredDate, reason, reportsAvailable, honeypot, formRenderedAt } =
    parsed.data;
  if (isLikelySpam(honeypot, formRenderedAt)) return { success: true };

  await sendEnquiryEmail({
    subject: `New Second Opinion Request — ${name} (${city})`,
    html: `
      <h2>New Online Second Opinion Request</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
      <p><strong>City:</strong> ${escapeHtml(city)}</p>
      <p><strong>Preferred date:</strong> ${escapeHtml(preferredDate)}</p>
      <p><strong>Reports available:</strong> ${escapeHtml(reportsAvailable)}</p>
      <p><strong>Case summary:</strong> ${escapeHtml(reason)}</p>
    `,
  });

  return { success: true };
}

export async function submitReferral(input: ReferralInput): Promise<ActionResult> {
  const parsed = referralSchema.safeParse(input);
  if (!parsed.success) return { success: false, error: GENERIC_ERROR };

  const { referringDoctorName, clinicHospital, referringDoctorPhone, patientSummary, honeypot, formRenderedAt } =
    parsed.data;
  if (isLikelySpam(honeypot, formRenderedAt)) return { success: true };

  await sendEnquiryEmail({
    subject: `New Physician Referral — ${referringDoctorName} (${clinicHospital})`,
    html: `
      <h2>New Physician Referral</h2>
      <p><strong>Referring doctor:</strong> ${escapeHtml(referringDoctorName)}</p>
      <p><strong>Clinic/Hospital:</strong> ${escapeHtml(clinicHospital)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(referringDoctorPhone)}</p>
      <p><strong>Patient summary:</strong> ${escapeHtml(patientSummary)}</p>
    `,
  });

  return { success: true };
}
