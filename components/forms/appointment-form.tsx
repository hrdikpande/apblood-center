"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Send } from "lucide-react";
import { appointmentSchema, type AppointmentInput } from "@/lib/validation";
import { submitAppointment } from "@/lib/actions";
import { FormField } from "@/components/forms/form-field";
import { SubmissionSuccess } from "@/components/forms/submission-success";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function AppointmentForm() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [renderedAt] = useState(() => Date.now());
  const [lastValues, setLastValues] = useState<AppointmentInput | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AppointmentInput>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: { name: "", phone: "", preferredDate: "", reason: "", honeypot: "", formRenderedAt: renderedAt },
  });

  async function onSubmit(data: AppointmentInput) {
    setServerError(null);
    const result = await submitAppointment({ ...data, formRenderedAt: renderedAt });
    if (result.success) {
      setLastValues(data);
      setSubmitted(true);
    } else {
      setServerError(result.error);
    }
  }

  if (submitted && lastValues) {
    return (
      <SubmissionSuccess
        whatsappMessage={`Hello, I just requested an appointment on the website.\nName: ${lastValues.name}\nPreferred date: ${lastValues.preferredDate}\nReason: ${lastValues.reason}`}
      />
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="appt-company">Leave this field empty</label>
        <input id="appt-company" type="text" tabIndex={-1} autoComplete="off" {...register("honeypot")} />
      </div>

      <FormField id="appt-name" label="Full name" error={errors.name?.message}>
        <Input id="appt-name" autoComplete="name" placeholder="Your full name" {...register("name")} aria-invalid={!!errors.name} />
      </FormField>

      <FormField id="appt-phone" label="Mobile number" error={errors.phone?.message}>
        <Input id="appt-phone" type="tel" inputMode="numeric" autoComplete="tel" placeholder="10-digit mobile number" {...register("phone")} aria-invalid={!!errors.phone} />
      </FormField>

      <FormField id="appt-date" label="Preferred date" error={errors.preferredDate?.message}>
        <Input id="appt-date" type="date" min={new Date().toISOString().slice(0, 10)} {...register("preferredDate")} aria-invalid={!!errors.preferredDate} />
      </FormField>

      <FormField id="appt-reason" label="Reason for visit" error={errors.reason?.message}>
        <Textarea
          id="appt-reason"
          rows={4}
          placeholder="Briefly describe your symptoms or reason for consultation"
          {...register("reason")}
          aria-invalid={!!errors.reason}
        />
      </FormField>

      {serverError && (
        <p role="alert" className="text-sm font-medium text-destructive">
          {serverError}
        </p>
      )}

      <Button type="submit" disabled={isSubmitting} className="h-12 w-full gap-2 rounded-full text-base">
        {isSubmitting ? <Loader2 className="size-4 animate-spin" aria-hidden="true" /> : <Send className="size-4" aria-hidden="true" />}
        {isSubmitting ? "Sending..." : "Request Appointment"}
      </Button>

      <p className="text-xs text-text-light">
        We collect only the details above to schedule your visit. No medical records are stored on our servers.
      </p>
    </form>
  );
}
