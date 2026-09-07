"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Send } from "lucide-react";
import { secondOpinionSchema, type SecondOpinionInput } from "@/lib/validation";
import { submitSecondOpinion } from "@/lib/actions";
import { FormField } from "@/components/forms/form-field";
import { SubmissionSuccess } from "@/components/forms/submission-success";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function SecondOpinionForm() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [renderedAt] = useState(() => Date.now());
  const [lastValues, setLastValues] = useState<SecondOpinionInput | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SecondOpinionInput>({
    resolver: zodResolver(secondOpinionSchema),
    defaultValues: {
      name: "",
      phone: "",
      city: "",
      preferredDate: "",
      reason: "",
      reportsAvailable: "no",
      honeypot: "",
      formRenderedAt: renderedAt,
    },
  });

  async function onSubmit(data: SecondOpinionInput) {
    setServerError(null);
    const result = await submitSecondOpinion({ ...data, formRenderedAt: renderedAt });
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
        heading="Thank you — your second opinion request has been received"
        body="A member of our team will reach out to guide you through sharing reports securely and scheduling a review."
        whatsappMessage={`Hello, I requested an online second opinion.\nName: ${lastValues.name}\nCity: ${lastValues.city}\nCase summary: ${lastValues.reason}`}
      />
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="so-company">Leave this field empty</label>
        <input id="so-company" type="text" tabIndex={-1} autoComplete="off" {...register("honeypot")} />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <FormField id="so-name" label="Full name" error={errors.name?.message}>
          <Input id="so-name" autoComplete="name" placeholder="Your full name" {...register("name")} aria-invalid={!!errors.name} />
        </FormField>
        <FormField id="so-phone" label="Mobile number" error={errors.phone?.message}>
          <Input id="so-phone" type="tel" inputMode="numeric" autoComplete="tel" placeholder="10-digit mobile number" {...register("phone")} aria-invalid={!!errors.phone} />
        </FormField>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <FormField id="so-city" label="City / Town" error={errors.city?.message}>
          <Input id="so-city" autoComplete="address-level2" placeholder="e.g. Guntur, Rajahmundry" {...register("city")} aria-invalid={!!errors.city} />
        </FormField>
        <FormField id="so-date" label="Preferred callback date" error={errors.preferredDate?.message}>
          <Input id="so-date" type="date" min={new Date().toISOString().slice(0, 10)} {...register("preferredDate")} aria-invalid={!!errors.preferredDate} />
        </FormField>
      </div>

      <FormField id="so-reason" label="Case summary" error={errors.reason?.message}>
        <Textarea
          id="so-reason"
          rows={4}
          placeholder="Briefly describe the diagnosis or concern you'd like a second opinion on"
          {...register("reason")}
          aria-invalid={!!errors.reason}
        />
      </FormField>

      <fieldset>
        <legend className="text-sm font-medium text-text-dark">Do you have existing reports/records?</legend>
        <div className="mt-2 flex gap-5">
          <label className="flex items-center gap-2 text-sm text-text-dark">
            <input type="radio" value="yes" {...register("reportsAvailable")} className="size-4 accent-brand" />
            Yes
          </label>
          <label className="flex items-center gap-2 text-sm text-text-dark">
            <input type="radio" value="no" {...register("reportsAvailable")} className="size-4 accent-brand" />
            Not yet
          </label>
        </div>
      </fieldset>

      {serverError && (
        <p role="alert" className="text-sm font-medium text-destructive">
          {serverError}
        </p>
      )}

      <Button type="submit" disabled={isSubmitting} className="h-12 w-full gap-2 rounded-full text-base">
        {isSubmitting ? <Loader2 className="size-4 animate-spin" aria-hidden="true" /> : <Send className="size-4" aria-hidden="true" />}
        {isSubmitting ? "Sending..." : "Request Second Opinion"}
      </Button>

      <p className="text-xs text-text-light">
        We collect only the details above to arrange your review. No medical records are stored on our servers.
      </p>
    </form>
  );
}
