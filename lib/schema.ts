import { SITE, NAP, DOCTOR, SAME_AS } from "@/content/site";
import type { ConditionEntry, TreatmentEntry, BlogPostEntry, FaqItem } from "@/content/types";

const CLINIC_ID = `${SITE.url}/#clinic`;
const PHYSICIAN_ID = `${SITE.url}/#dr-amarnadh-polisetty`;

export function medicalClinicSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["MedicalClinic", "MedicalOrganization"],
    "@id": CLINIC_ID,
    name: SITE.name,
    legalName: SITE.legalName,
    description: SITE.description,
    url: SITE.url,
    telephone: NAP.phoneTel,
    email: NAP.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: NAP.streetAddress,
      addressLocality: NAP.addressLocality,
      addressRegion: NAP.addressRegion,
      postalCode: NAP.postalCode,
      addressCountry: NAP.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: NAP.geo.latitude,
      longitude: NAP.geo.longitude,
    },
    openingHoursSpecification: NAP.openingHours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    medicalSpecialty: "Hematology",
    availableService: {
      "@type": "MedicalSpecialty",
      name: "Clinical Haematology and Haemato-Oncology",
    },
    physician: { "@id": PHYSICIAN_ID },
    ...(SAME_AS.length > 0 ? { sameAs: SAME_AS } : {}),
  };
}

export function physicianSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": PHYSICIAN_ID,
    name: DOCTOR.name,
    honorificSuffix: DOCTOR.credentialsShort,
    jobTitle: DOCTOR.title,
    description: DOCTOR.bio[0],
    medicalSpecialty: ["Hematology", "Oncology"],
    image: [`${SITE.url}${DOCTOR.photo.src}`, `${SITE.url}${DOCTOR.photoConsult.src}`],
    worksFor: { "@id": CLINIC_ID },
    hasCredential: DOCTOR.education.map((e) => ({
      "@type": "EducationalOccupationalCredential",
      credentialCategory: e,
    })),
    url: `${SITE.url}/dr-amarnadh-polisetty`,
  };
}

export function medicalConditionSchema(entry: ConditionEntry) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    name: entry.name,
    description: entry.directAnswer,
    signOrSymptom: entry.symptoms.map((s) => ({ "@type": "MedicalSignOrSymptom", name: s })),
    possibleTreatment: entry.treatmentOptions.map((t) => ({
      "@type": "MedicalTherapy",
      name: t.title,
      description: t.description,
    })),
    url: `${SITE.url}/conditions/${entry.slug}`,
  };
}

export function medicalProcedureSchema(entry: TreatmentEntry) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: entry.name,
    description: entry.directAnswer,
    howPerformed: entry.process.map((p) => p.title).join("; "),
    candidateDisease: undefined,
    url: `${SITE.url}/treatments/${entry.slug}`,
    performer: { "@id": PHYSICIAN_ID },
  };
}

export function faqPageSchema(faqs: FaqItem[]) {
  if (faqs.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

export function breadcrumbListSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE.url}${item.url}`,
    })),
  };
}

export function articleSchema(post: BlogPostEntry) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.publishDate,
    dateModified: post.reviewDate,
    author: { "@id": PHYSICIAN_ID, name: DOCTOR.name },
    publisher: { "@id": CLINIC_ID, name: SITE.name },
    mainEntityOfPage: `${SITE.url}/blog/${post.slug}`,
  };
}
