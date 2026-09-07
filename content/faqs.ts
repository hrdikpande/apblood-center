import type { BilingualFaqItem, FaqItem } from "./types";

/**
 * Home page FAQ set. Framed as informational questions (including the
 * "how do I choose a hematologist" pattern) rather than self-declared
 * superlative claims, per the NMC/YMYL guardrail.
 */
export const homeFaqs: FaqItem[] = [
  {
    question: "How do I choose a hematologist in Vijayawada?",
    answer:
      "Look for a specialist with formal training in clinical haematology (an MD followed by a DNB or DM in Clinical Haematology), hands-on experience with the specific condition you're facing — such as bone marrow transplant, leukemia or lymphoma — and a practice that focuses on blood disorders rather than general medicine. It also helps to check whether the centre offers on-site diagnostics like bone marrow biopsy and flow cytometry, so your diagnosis and treatment can be coordinated in one place.",
  },
  {
    question: "What conditions does a clinical haematologist treat?",
    answer:
      "A clinical haematologist manages blood cancers such as leukemia, lymphoma and multiple myeloma, along with non-cancerous blood disorders including anemia, thalassemia, hemophilia, platelet disorders, sickle cell disease and bone marrow failure syndromes. Some haematologists, including those trained in haemato-oncology, also manage bone marrow transplant care.",
  },
  {
    question: "Do I need a referral to consult a haematologist?",
    answer:
      "No referral is required. You can book a consultation directly, though bringing any existing blood test reports, scans or prior treatment summaries helps make the first visit more productive.",
  },
  {
    question: "What should I bring to my first appointment?",
    answer:
      "Bring a valid ID, any recent blood test reports or imaging, a list of current medications, and a brief history of your symptoms including when they started. If you're consulting about a family member, having their reports on hand speeds up the initial assessment.",
  },
  {
    question: "Is bone marrow transplant available in Vijayawada?",
    answer:
      "AP Blood & Blood Cancer Centre's clinical team has experience managing bone marrow transplant patients as part of specialist transplant teams. Whether BMT is appropriate for a specific diagnosis depends on individual clinical factors — book a consultation to discuss whether it's a relevant option for your case.",
  },
  {
    question: "Can outstation patients consult the centre remotely?",
    answer:
      "Yes. Patients from Guntur, Tenali, Machilipatnam, Eluru, Rajahmundry, Ongole, Khammam and other parts of Andhra Pradesh and Telangana can request an online second opinion by sharing their reports in advance of a video or phone consultation.",
  },
  {
    question: "Does the centre accept Aarogyasri or other insurance?",
    answer:
      "Insurance and government scheme empanelment varies and is confirmed directly with the centre. Visit the Insurance & Aarogyasri page or contact the centre to check current empanelment status before your visit.",
  },
];

/** Additional practical FAQs shown on the dedicated /faqs page. */
export const moreFaqs: FaqItem[] = [
  {
    question: "How do I book an appointment?",
    answer:
      "You can book online through the Book an Appointment page, call the centre directly, or message us on WhatsApp. Our team will confirm your preferred date and time.",
  },
  {
    question: "Are walk-in consultations available?",
    answer:
      "We recommend booking in advance so the team can allocate adequate consultation time, especially for new patients with reports to review. Call ahead if you need to be seen urgently.",
  },
  {
    question: "How long does a first consultation take?",
    answer:
      "A first consultation typically takes longer than a follow-up visit, since it includes a detailed history review and physical examination. Exact timing depends on the complexity of your case.",
  },
  {
    question: "Can I get a teleconsultation instead of an in-person visit?",
    answer:
      "Outstation patients can request an online second opinion consultation by video or phone. In-person visits are recommended once a treatment plan requires procedures such as bone marrow biopsy or infusion-based therapy.",
  },
  {
    question: "How soon will I get my diagnostic test results?",
    answer:
      "Turnaround time varies by test — routine blood counts are typically available the same day, while specialized tests such as bone marrow biopsy or cytogenetics can take longer. Your care team will let you know what to expect for your specific tests.",
  },
];

/** A short Telugu-language FAQ pair, per the brief's local SEO/Telugu layer. */
export const teluguFaqs: BilingualFaqItem[] = [
  {
    question: "How do I find a blood cancer doctor near Vijayawada?",
    questionTelugu: "విజయవాడ దగ్గర బ్లడ్ క్యాన్సర్ డాక్టర్‌ను ఎలా కనుగొనాలి?",
    answer:
      "Search for a clinical haematologist or haemato-oncologist — a doctor specifically trained in blood cancers, not a general physician or oncologist without hematology training. AP Blood & Blood Cancer Centre on Prakasam Road, Suryaraopeta, Vijayawada is led by a DNB-qualified clinical haematologist focused exclusively on blood disorders and blood cancer.",
    answerTelugu:
      "క్లినికల్ హెమటాలజిస్ట్ లేదా హీమాటో-ఆంకాలజిస్ట్‌ను వెతకండి — వీరు ప్రత్యేకంగా బ్లడ్ క్యాన్సర్లలో శిక్షణ పొందిన వైద్యులు. విజయవాడ, సూర్యారావుపేట, ప్రకాశం రోడ్‌లో ఉన్న AP బ్లడ్ & బ్లడ్ క్యాన్సర్ సెంటర్‌ను DNB అర్హత కలిగిన క్లినికల్ హెమటాలజిస్ట్ నడిపిస్తున్నారు.",
  },
  {
    question: "What are the early symptoms of blood cancer?",
    questionTelugu: "బ్లడ్ క్యాన్సర్ యొక్క ప్రారంభ లక్షణాలు ఏమిటి?",
    answer:
      "Common early signs include persistent fatigue, unexplained weight loss, frequent infections, easy bruising or bleeding, night sweats and swollen lymph nodes. These symptoms can also result from non-cancerous conditions, so a blood test and clinical evaluation are needed for an accurate diagnosis.",
    answerTelugu:
      "నిరంతర అలసట, వివరించలేని బరువు తగ్గడం, తరచుగా ఇన్ఫెక్షన్లు, సులభంగా గాయాలు లేదా రక్తస్రావం, రాత్రిపూట చెమటలు మరియు వాపు లింఫ్ నోడ్స్ సాధారణ ప్రారంభ లక్షణాలు. ఇవి ఇతర పరిస్థితుల వల్ల కూడా రావచ్చు కాబట్టి, ఖచ్చితమైన నిర్ధారణకు రక్త పరీక్ష మరియు వైద్య పరీక్ష అవసరం.",
  },
];
