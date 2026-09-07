// Single source of truth for centre/doctor identity, NAP, stats and navigation.
// Referenced by layout, schema, footer, hero and metadata so entity phrasing
// stays identical everywhere (required for local SEO + GEO/AI-citation consistency).

export const SITE = {
  name: "AP Blood & Blood Cancer Centre",
  shortName: "AP Blood & Blood Cancer Centre",
  legalName: "AP Blood & Blood Cancer Centre, Vijayawada",
  tagline: "Andhra Pradesh's dedicated centre for blood disorders, bone marrow disorders and blood cancer care",
  description:
    "AP Blood & Blood Cancer Centre in Vijayawada is a specialty hematology and blood cancer centre led by Dr. Amarnadh Polisetty, offering diagnosis and personalized treatment planning for blood disorders, bone marrow disorders and blood cancers.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.apbloodcentre.com",
} as const;

export const NAP = {
  streetAddress: "29-14-61/A, Prakasam Road, Suryaraopeta",
  addressLocality: "Vijayawada",
  addressRegion: "Andhra Pradesh",
  postalCode: "520002",
  addressCountry: "IN",
  fullAddress:
    "29-14-61/A, Prakasam Road, Suryaraopeta, Vijayawada, Andhra Pradesh 520002",
  phoneDisplay: "77995 09000",
  phoneTel: "+917799509000",
  phoneDigits: "7799509000",
  whatsappNumber: "917799509000",
  email: "care@apbloodcentre.com",
  mapsEmbedQuery: "AP+Blood+%26+Blood+Cancer+Centre+Prakasam+Road+Suryaraopeta+Vijayawada",
  mapsDirectionsUrl:
    "https://www.google.com/maps/search/?api=1&query=AP+Blood+%26+Blood+Cancer+Centre+Prakasam+Road+Suryaraopeta+Vijayawada",
  geo: {
    // CLIENT-VERIFIED DATA REQUIRED — approximate Vijayawada coordinates used as a
    // placeholder; replace with the centre's exact lat/long before launch.
    latitude: 16.5138,
    longitude: 80.6183,
  },
  openingHours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "09:00", closes: "18:00" },
  ],
} as const;

export function whatsappLink(message: string) {
  return `https://wa.me/${NAP.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function telLink() {
  return `tel:${NAP.phoneTel}`;
}

export const DOCTOR = {
  name: "Dr. Amarnadh Polisetty",
  slug: "dr-amarnadh-polisetty",
  credentials: "MBBS, MD (General Medicine), DNB (Clinical Haematology)",
  credentialsShort: "MD, DNB (Clinical Haematology)",
  title: "Clinical Haematologist & Haemato-Oncologist",
  specialization: "Clinical Haematology, Haemato-Oncology, Bone Marrow Transplant",
  experienceYears: 7,
  bio: [
    "Dr. Amarnadh Polisetty is a clinical haematologist and haemato-oncologist practicing in Vijayawada, Andhra Pradesh, with a focused practice limited entirely to blood disorders, bone marrow disorders and blood cancers.",
    "After completing his MBBS and MD in General Medicine, Dr. Polisetty pursued a DNB in Clinical Haematology, training in the diagnosis and management of leukemia, lymphoma, multiple myeloma, thalassemia, hemophilia, platelet disorders and bone marrow failure syndromes across both adult and pediatric patients.",
    "His clinical experience includes managing more than 500 bone marrow transplant patients as part of specialist transplant teams, alongside chemotherapy, immunotherapy and targeted therapy protocols for hematologic malignancies. He has presented research at national and international hematology forums and received the American Society of Hematology (ASH) Abstract Award for his academic contributions.",
    "At AP Blood & Blood Cancer Centre, Dr. Polisetty's practice is intentionally narrow: hematology and blood cancer care only, allowing for depth of expertise and continuity of care that a general multi-speciality setting cannot offer.",
  ],
  expertise: [
    "Adult Hematology",
    "Pediatric Hematology",
    "Blood Cancer",
    "Bone Marrow Disorders",
    "Leukemia",
    "Lymphoma",
    "Multiple Myeloma",
    "Thalassemia",
    "Hemophilia",
    "Platelet Disorders",
    "Bone Marrow Transplant",
    "Chemotherapy",
    "Immunotherapy",
    "Targeted Therapy",
    "Blood Disorders",
    "Coagulation Disorders",
    "Bone Marrow Biopsy",
    "Bone Marrow Aspiration",
    "Lumbar Puncture",
    "PICC Lines",
    "Central Line Placement",
    "Exchange Transfusion",
  ],
  achievements: [
    "Experience managing 500+ bone marrow transplant patients as part of specialist transplant teams",
    "American Society of Hematology (ASH) Abstract Award",
    // CLIENT-VERIFIED DATA REQUIRED — conference name to be confirmed by client.
    "Best Speaker Award at a national hematology conference",
    "National Cardiac Life Support (NCLS) Certified",
    "Multiple national and international research paper presentations in clinical haematology",
  ],
  education: [
    "MBBS",
    "MD — General Medicine",
    "DNB — Clinical Haematology",
  ],
} as const;

export const STATS = [
  { label: "Years of specialist experience", value: 7, suffix: "+" },
  { label: "Bone marrow transplant patients managed", value: 500, suffix: "+" },
  { label: "Blood conditions treated at the centre", value: 10, suffix: "" },
  { label: "Treatment modalities offered", value: 7, suffix: "" },
] as const;

export const CATCHMENT_CITIES = [
  "Vijayawada",
  "Guntur",
  "Tenali",
  "Machilipatnam",
  "Gudivada",
  "Nuzvid",
  "Eluru",
  "Rajahmundry",
  "Ongole",
  "Khammam",
] as const;

// CLIENT-VERIFIED DATA REQUIRED — only schemes explicitly confirmed by the client
// should ever appear here. Leave empty until confirmed; never invent empanelment.
export const INSURANCE_SCHEMES: { name: string; description: string }[] = [];

// CLIENT-VERIFIED DATA REQUIRED — Google Business Profile URL for sameAs schema.
export const SAME_AS: string[] = [];

export const NAV_LINKS = [
  { label: "About", href: "/about" },
  {
    label: "Conditions",
    href: "/conditions",
  },
  {
    label: "Treatments",
    href: "/treatments",
  },
  { label: "Doctor", href: "/dr-amarnadh-polisetty" },
  { label: "Second Opinion", href: "/second-opinion" },
  { label: "Insurance", href: "/insurance" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const FOOTER_LINKS = {
  centre: [
    { label: "About the Centre", href: "/about" },
    { label: "Meet Dr. Amarnadh Polisetty", href: "/dr-amarnadh-polisetty" },
    { label: "For Referring Physicians", href: "/for-doctors" },
    { label: "Patient Resources", href: "/patient-resources" },
    { label: "Gallery", href: "/gallery" },
    { label: "FAQs", href: "/faqs" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Blog", href: "/blog" },
  ],
  programs: [
    { label: "Bone Marrow Transplant", href: "/bone-marrow-transplant" },
    { label: "Pediatric Hematology", href: "/programs/pediatric-hematology" },
    { label: "Adult Hematology", href: "/programs/adult-hematology" },
    { label: "Second Opinion", href: "/second-opinion" },
    { label: "Insurance & Aarogyasri", href: "/insurance" },
  ],
} as const;

export const DISCLAIMER_TEXT =
  "The information on this website is provided for general educational purposes only and does not constitute medical advice. It is not a substitute for professional diagnosis, consultation or treatment by a qualified physician. Always seek the advice of Dr. Amarnadh Polisetty or another qualified healthcare provider with any questions you may have regarding a medical condition.";
