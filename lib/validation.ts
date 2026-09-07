import { z } from "zod";

const namePattern = /^[a-zA-Z\s.'-]{2,80}$/;
const indianMobilePattern = /^[6-9]\d{9}$/;

/** Honeypot + timing fields shared by every form for lightweight spam protection. */
const antiSpamFields = {
  honeypot: z.string().max(0, "Spam detected"),
  formRenderedAt: z.number(),
};

export const appointmentSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your full name")
    .max(80)
    .regex(namePattern, "Please enter a valid name"),
  phone: z
    .string()
    .trim()
    .regex(indianMobilePattern, "Please enter a valid 10-digit mobile number"),
  preferredDate: z.string().min(1, "Please select a preferred date"),
  reason: z
    .string()
    .trim()
    .min(5, "Please briefly describe the reason for your visit")
    .max(500, "Please keep this under 500 characters"),
  ...antiSpamFields,
});
export type AppointmentInput = z.infer<typeof appointmentSchema>;

export const secondOpinionSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your full name")
    .max(80)
    .regex(namePattern, "Please enter a valid name"),
  phone: z
    .string()
    .trim()
    .regex(indianMobilePattern, "Please enter a valid 10-digit mobile number"),
  city: z.string().trim().min(2, "Please enter your city").max(80),
  preferredDate: z.string().min(1, "Please select a preferred date"),
  reason: z
    .string()
    .trim()
    .min(5, "Please briefly describe your case")
    .max(500, "Please keep this under 500 characters"),
  reportsAvailable: z.enum(["yes", "no"]),
  ...antiSpamFields,
});
export type SecondOpinionInput = z.infer<typeof secondOpinionSchema>;

export const referralSchema = z.object({
  referringDoctorName: z.string().trim().min(2, "Please enter your name").max(80),
  clinicHospital: z.string().trim().min(2, "Please enter your clinic/hospital name").max(120),
  referringDoctorPhone: z
    .string()
    .trim()
    .regex(indianMobilePattern, "Please enter a valid 10-digit mobile number"),
  patientSummary: z
    .string()
    .trim()
    .min(5, "Please add a brief clinical summary")
    .max(500, "Please keep this under 500 characters"),
  ...antiSpamFields,
});
export type ReferralInput = z.infer<typeof referralSchema>;

export const MIN_SUBMIT_MS = 2000;
