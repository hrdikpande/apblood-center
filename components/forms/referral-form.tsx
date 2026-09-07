"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Send } from "lucide-react";
import { referralSchema, type ReferralInput } from "@/lib/validation";
import { submitReferral } from "@/lib/actions";
import { FormField } from "@/components/forms/form-field";
import { SubmissionSuccess } from "@/components/forms/submission-success";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function ReferralForm() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [renderedAt] = useState(() => Date.now());

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ReferralInput>({
    resolver: zodResolver(referralSchema),
    defaultValues: {
      referringDoctorName: "",
      clinicHospital: "",
      referringDoctorPhone: "",
      patientSummary: "",
      honeypot: "",
      formRenderedAt: renderedAt,
    },
  });

  async function onSubmit(data: ReferralInput) {
    setServerError(null);
    const result = await submitReferral({ ...data, formRenderedAt: renderedAt });
    if (result.success) {
      setSubmitted(true);
    } else {
      setServerError(result.error);
    }
  }

  if (submitted) {
    return (
      <SubmissionSuccess
        heading="Thank you — the referral has been received"
        body="Our team will reach out to coordinate the transfer of care directly with you."
        whatsappMessage="Hello, I just submitted a physician referral on the website and would like to coordinate patient transfer."
      />
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="ref-company">Leave this field empty</label>
        <input id="ref-company" type="text" tabIndex={-1} autoComplete="off" {...register("honeypot")} />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <FormField id="ref-name" label="Your name" error={errors.referringDoctorName?.message}>
          <Input id="ref-name" autoComplete="name" placeholder="Dr. Full Name" {...register("referringDoctorName")} aria-invalid={!!errors.referringDoctorName} />
        </FormField>
        <FormField id="ref-clinic" label="Clinic / Hospital" error={errors.clinicHospital?.message}>
          <Input id="ref-clinic" placeholder="Your practice or hospital name" {...register("clinicHospital")} aria-invalid={!!errors.clinicHospital} />
        </FormField>
      </div>

      <FormField id="ref-phone" label="Your mobile number" error={errors.referringDoctorPhone?.message}>
        <Input id="ref-phone" type="tel" inputMode="numeric" autoComplete="tel" placeholder="10-digit mobile number" {...register("referringDoctorPhone")} aria-invalid={!!errors.referringDoctorPhone} />
      </FormField>

      <FormField id="ref-summary" label="Patient clinical summary" error={errors.patientSummary?.message}>
        <Textarea
          id="ref-summary"
          rows={4}
          placeholder="Brief clinical summary and reason for referral (avoid including identifying patient details in this form)"
          {...register("patientSummary")}
          aria-invalid={!!errors.patientSummary}
        />
      </FormField>

      {serverError && (
        <p role="alert" className="text-sm font-medium text-destructive">
          {serverError}
        </p>
      )}

      <Button type="submit" disabled={isSubmitting} className="h-12 w-full gap-2 rounded-full text-base">
        {isSubmitting ? <Loader2 className="size-4 animate-spin" aria-hidden="true" /> : <Send className="size-4" aria-hidden="true" />}
        {isSubmitting ? "Sending..." : "Send Referral"}
      </Button>
    </form>
  );
}
