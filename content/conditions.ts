import type { ConditionEntry } from "./types";

export const conditions: ConditionEntry[] = [
  {
    slug: "leukemia",
    name: "Leukemia",
    shortLabel: "Leukemia",
    metaTitle: "Leukemia Treatment in Vijayawada | AP Blood Centre",
    metaDescription:
      "Evaluation, diagnosis, and personalized treatment planning for leukemia by a clinical haematologist in Vijayawada, Andhra Pradesh.",
    directAnswer:
      "Leukemia is a cancer of the blood-forming tissue, primarily the bone marrow, in which abnormal white blood cells multiply uncontrollably and crowd out healthy blood cells. It is broadly classified as acute (rapidly progressing) or chronic (slower-developing), and further divided into myeloid or lymphoid types based on the blood cell line involved. Diagnosis and precise subtyping guide whether chemotherapy, targeted therapy, or bone marrow transplant is recommended.",
    understanding: [
      "Bone marrow is the soft tissue inside bones where all blood cells are produced, including red cells that carry oxygen, white cells that fight infection, and platelets that help blood clot. In leukemia, a genetic change in an early blood-forming cell causes it to divide uncontrollably, flooding the marrow and bloodstream with immature or abnormal white cells. Because these abnormal cells crowd out normal blood cell production, patients often develop anemia, a higher risk of infection, and easy bleeding or bruising, even before any single symptom is recognized as leukemia.",
      "Leukemia is grouped along two axes: how quickly it develops (acute versus chronic) and which cell line is affected (myeloid versus lymphoid). This gives four broad categories: acute lymphoblastic leukemia (ALL), which is more common in children; acute myeloid leukemia (AML), seen more often in adults; chronic lymphocytic leukemia (CLL), typically diagnosed in older adults, sometimes incidentally; and chronic myeloid leukemia (CML), which is strongly linked to a specific genetic change called the Philadelphia chromosome. Each subtype behaves differently and responds to different treatment strategies.",
      "Because outcomes and treatment choice depend heavily on the exact subtype, modern leukemia care relies on more than a blood count. Bone marrow examination, immunophenotyping, and genetic or molecular testing (for example, checking for the Philadelphia chromosome in CML or FLT3 and NPM1 mutations in AML) help classify the disease precisely and identify risk category, which in turn shapes whether standard chemotherapy, a targeted oral therapy, or transplant is the appropriate next step.",
    ],
    symptoms: [
      "Persistent fatigue and weakness that does not improve with rest",
      "Frequent or recurrent infections",
      "Easy bruising or unexplained bleeding from the gums or nose",
      "Tiny red or purple spots on the skin (petechiae)",
      "Unexplained fever or drenching night sweats",
      "Bone or joint pain",
      "Swollen, usually painless, lymph nodes",
      "Unintentional weight loss",
      "Pale skin (pallor)",
    ],
    whenToSeeDoctor: [
      "Persistent fever without an obvious source, or fatigue that does not improve with rest, should be evaluated with a complete blood count rather than assumed to be routine tiredness.",
      "Unusual bruising or bleeding that goes beyond minor cuts and scrapes warrants prompt blood testing.",
      "When fatigue, recurrent infections, and pallor occur together in a child or adult, a referral to a clinical haematologist is appropriate.",
      "An abnormal complete blood count found during a routine health check should be reviewed by a haematologist rather than repeated indefinitely without explanation.",
    ],
    diagnosis: [
      {
        title: "Complete Blood Count and Peripheral Smear",
        description:
          "An initial blood test that measures red cell, white cell, and platelet counts, followed by microscopic examination of the blood film to identify abnormal or immature cells suggestive of leukemia.",
      },
      {
        title: "Bone Marrow Aspiration and Biopsy",
        description:
          "A sample of marrow is taken, usually from the hip bone, to confirm the diagnosis, estimate the proportion of abnormal cells, and provide material for further specialised testing.",
      },
      {
        title: "Flow Cytometry (Immunophenotyping)",
        description:
          "A laboratory technique that identifies specific marker proteins on the surface of leukemia cells, helping distinguish myeloid from lymphoid leukemia and refine the exact subtype.",
      },
      {
        title: "Cytogenetics and Molecular Testing",
        description:
          "Analysis of chromosomes and specific gene mutations (such as BCR-ABL1, FLT3, or NPM1) that identifies disease subtype, risk category, and eligibility for targeted therapies.",
      },
    ],
    treatmentOptions: [
      {
        title: "Chemotherapy Protocols",
        description:
          "Combination chemotherapy regimens, selected according to leukemia subtype and internationally aligned protocols, aim to eliminate abnormal cells and restore normal blood cell production.",
      },
      {
        title: "Targeted Therapy",
        description:
          "Oral targeted agents, such as tyrosine kinase inhibitors used in CML, are directed at the specific molecular change driving the leukemia, often with a different side-effect profile than conventional chemotherapy.",
      },
      {
        title: "Immunotherapy",
        description:
          "Treatments that help the immune system recognise and act against leukemia cells, used in select subtypes and treatment stages as part of a personalized treatment plan.",
      },
      {
        title: "Bone Marrow / Stem Cell Transplant",
        description:
          "For eligible patients, a transplant replaces diseased marrow with healthy stem cells from a matched donor, considered when chemotherapy alone is unlikely to achieve durable disease control.",
      },
      {
        title: "Supportive Care",
        description:
          "Blood and platelet transfusions, infection prevention, and management of treatment side effects are integrated throughout therapy to support overall health and treatment tolerance.",
      },
    ],
    whyHere: [
      "AP Blood & Blood Cancer Centre is a single-specialty haematology practice, so leukemia is evaluated and managed in a focused clinical environment rather than as one of many unrelated conditions handled in a general medicine or oncology setting. This focus supports timely access to the specific tests, such as bone marrow examination, flow cytometry, and cytogenetics, that are needed to classify leukemia accurately before a treatment plan is finalized.",
      "Care is led by Dr. Amarnadh Polisetty, MBBS, MD (General Medicine), DNB (Clinical Haematology), who has more than 7 years of experience in clinical haematology and has been part of specialist transplant teams that have managed over 500 bone marrow transplant patients, along with an ASH (American Society of Hematology) Abstract Award. Treatment planning for leukemia is personalized to the confirmed subtype and risk category and follows internationally aligned protocols, with the transplant pathway available for patients who need it.",
    ],
    faqs: [
      {
        question: "What are the early signs of leukemia?",
        answer:
          "Early signs are often nonspecific and include persistent fatigue, recurrent infections, easy bruising or bleeding, unexplained fever, and pale skin. Because these overlap with many other conditions, a complete blood count is usually the first step in evaluating them.",
      },
      {
        question: "Is leukemia curable?",
        answer:
          "It depends on the subtype. Some forms, such as childhood acute lymphoblastic leukemia and chronic myeloid leukemia managed with targeted therapy, often have favourable long-term outcomes, while others require ongoing or more intensive management. Your haematologist can explain the realistic goals of therapy based on your specific diagnosis and risk category.",
      },
      {
        question: "Is leukemia hereditary?",
        answer:
          "Most cases of leukemia are not directly inherited from a parent, though certain genetic syndromes and family history can raise risk in a small proportion of cases. Leukemia usually arises from mutations acquired during a person's lifetime rather than being passed down.",
      },
      {
        question: "What is the difference between acute and chronic leukemia?",
        answer:
          "Acute leukemia develops rapidly, with immature cells accumulating quickly and typically requiring urgent treatment. Chronic leukemia progresses more slowly, sometimes over years, and may initially be monitored before treatment is started.",
      },
      {
        question: "How is leukemia diagnosed?",
        answer:
          "Diagnosis typically starts with a complete blood count and peripheral smear, followed by a bone marrow aspiration and biopsy, flow cytometry, and cytogenetic or molecular testing to confirm the subtype and guide treatment choice.",
      },
      {
        question: "Does leukemia always need a bone marrow transplant?",
        answer:
          "No. Many patients are treated effectively with chemotherapy or targeted therapy alone. Transplant is generally considered for specific subtypes, higher-risk disease, or when other treatments have not achieved the desired response.",
      },
    ],
    ctaHeading: "Concerned about these symptoms?",
    ctaBody:
      "If you or a family member are experiencing persistent fatigue, unusual bruising, or recurrent infections, consult a clinical haematologist for a thorough evaluation.",
    reviewDate: "2026-07-01",
  },
  {
    slug: "lymphoma",
    name: "Lymphoma",
    shortLabel: "Lymphoma",
    metaTitle: "Lymphoma Treatment in Vijayawada | AP Blood Centre",
    metaDescription:
      "Diagnosis, staging, and personalized treatment planning for Hodgkin and non-Hodgkin lymphoma by a clinical haematologist in Vijayawada.",
    directAnswer:
      "Lymphoma is a cancer that begins in the lymphatic system, the network of lymph nodes, spleen, and related tissue that helps the body fight infection. It develops when lymphocytes, a type of white blood cell, grow and divide abnormally, and is broadly divided into Hodgkin lymphoma and non-Hodgkin lymphoma based on specific cell characteristics seen under the microscope. The exact subtype and stage at diagnosis determine the recommended treatment approach.",
    understanding: [
      "The lymphatic system is a network of vessels and nodes that carries lymph fluid and immune cells throughout the body, helping defend against infection. Lymphocytes, a type of white blood cell that travels through this system, are of two main types: B cells and T cells. Lymphoma occurs when a lymphocyte undergoes a genetic change that causes it to multiply abnormally, forming collections of malignant cells in lymph nodes, the spleen, bone marrow, or occasionally other organs.",
      "Lymphomas are broadly split into Hodgkin lymphoma, identified by the presence of a distinctive abnormal cell called a Reed-Sternberg cell, and non-Hodgkin lymphoma, which covers a much larger and more varied group of subtypes. Non-Hodgkin lymphomas range from indolent (slow-growing) forms that may be observed for a period before treatment, to aggressive forms that require prompt therapy. Lymphoma can occur at any age, though different subtypes tend to cluster in different age groups.",
      "Once lymphoma is confirmed on biopsy, staging determines how far the disease has spread, using imaging such as PET-CT alongside clinical assessment. Staging, together with the specific subtype identified on biopsy, is what actually determines the treatment plan, which is why an accurate, tissue-based diagnosis is the essential first step before any treatment decision is made.",
    ],
    symptoms: [
      "Painless swelling of lymph nodes in the neck, armpit, or groin",
      "Persistent, unexplained fatigue",
      "Unexplained fever",
      "Drenching night sweats",
      "Unintentional weight loss",
      "Persistent itching of the skin without a rash",
      "Chest discomfort, cough, or breathlessness when nodes in the chest are involved",
      "Reduced appetite",
      "Abdominal fullness or discomfort from an enlarged spleen or liver",
    ],
    whenToSeeDoctor: [
      "A lymph node swelling that persists beyond two to three weeks, especially if it is painless and firm, should be evaluated rather than observed indefinitely.",
      "The combination of fever, drenching night sweats, and unexplained weight loss, sometimes referred to as B symptoms, warrants prompt haematology assessment.",
      "Lymph node swelling that continues to enlarge, or new swellings appearing in other areas, should be assessed for a possible biopsy.",
    ],
    diagnosis: [
      {
        title: "Excisional Lymph Node Biopsy",
        description:
          "Removal of an affected lymph node, or a substantial portion of it, provides the tissue needed for accurate lymphoma diagnosis and subtyping, which a needle sample alone often cannot achieve.",
      },
      {
        title: "Immunohistochemistry and Flow Cytometry",
        description:
          "Specialised laboratory testing on the biopsy sample identifies the specific proteins expressed by the abnormal cells, distinguishing Hodgkin from non-Hodgkin lymphoma and identifying the exact subtype.",
      },
      {
        title: "PET-CT and CT Imaging",
        description:
          "Imaging is used to determine the stage of lymphoma, mapping which lymph node regions or organs are involved and establishing a baseline to assess response to treatment.",
      },
      {
        title: "Bone Marrow Biopsy",
        description:
          "A marrow sample may be examined to check whether lymphoma has spread to the bone marrow, which affects staging and treatment planning.",
      },
    ],
    treatmentOptions: [
      {
        title: "Combination Chemotherapy",
        description:
          "Regimens such as ABVD for Hodgkin lymphoma or R-CHOP for certain non-Hodgkin lymphomas are selected according to subtype and stage, following internationally aligned protocols.",
      },
      {
        title: "Targeted Therapy and Monoclonal Antibodies",
        description:
          "Agents such as rituximab target specific markers on lymphoma cells and are combined with chemotherapy in many B-cell lymphoma subtypes as part of a personalized regimen.",
      },
      {
        title: "Radiation Therapy",
        description:
          "Localised radiation may be used for limited-stage disease or specific involved sites, often in combination with chemotherapy.",
      },
      {
        title: "Immunotherapy",
        description:
          "Newer immune-based approaches are considered for select relapsed or refractory cases as part of advanced treatment planning.",
      },
      {
        title: "Stem Cell Transplant",
        description:
          "For relapsed or refractory lymphoma, autologous or allogeneic stem cell transplant may be considered to intensify treatment for eligible patients.",
      },
    ],
    whyHere: [
      "As a single-specialty haematology centre, lymphoma care here is built around accurate subtyping and staging before treatment begins, using excisional biopsy, immunohistochemistry, and PET-CT imaging rather than a one-size-fits-all approach. This focus matters because Hodgkin lymphoma, indolent non-Hodgkin lymphoma, and aggressive non-Hodgkin lymphoma are managed very differently.",
      "Dr. Amarnadh Polisetty, MBBS, MD (General Medicine), DNB (Clinical Haematology), brings over 7 years of clinical haematology experience and has been part of specialist transplant teams managing more than 500 bone marrow transplant patients, along with recognition through an ASH Abstract Award. Treatment plans for lymphoma are personalized to the confirmed subtype and stage, with transplant available as part of the pathway for relapsed or refractory disease when appropriate.",
    ],
    faqs: [
      {
        question: "What is the difference between Hodgkin and non-Hodgkin lymphoma?",
        answer:
          "Hodgkin lymphoma is identified by a specific abnormal cell called a Reed-Sternberg cell and tends to spread in a predictable pattern between adjacent lymph node groups. Non-Hodgkin lymphoma covers a much larger group of subtypes with varied behaviour, ranging from slow-growing to aggressive.",
      },
      {
        question: "Are swollen lymph nodes always a sign of lymphoma?",
        answer:
          "No. Swollen lymph nodes are most often caused by infection and resolve on their own. Evaluation is recommended when swelling is painless, persistent beyond two to three weeks, firm, or accompanied by fever, night sweats, or weight loss.",
      },
      {
        question: "Is lymphoma curable?",
        answer:
          "Many lymphoma subtypes, particularly certain Hodgkin lymphomas and some non-Hodgkin lymphomas, have favourable long-term treatment outcomes, while others follow a more chronic course requiring ongoing management. Outcomes depend on subtype and stage, which your haematologist can explain for your specific case.",
      },
      {
        question: "How is lymphoma staged?",
        answer:
          "Staging typically uses the Ann Arbor system, based on how many lymph node regions are involved and whether the disease is on one or both sides of the diaphragm or has spread to organs, determined through PET-CT imaging and clinical assessment.",
      },
      {
        question: "What determines the outlook for lymphoma?",
        answer:
          "Outlook depends primarily on the specific subtype, the stage at diagnosis, and how the individual responds to initial treatment. Because these factors vary widely between patients, general statistics are less useful than a discussion with your haematologist about your specific diagnosis.",
      },
      {
        question: "Can lymphoma come back after treatment?",
        answer:
          "Relapse is possible with some lymphoma subtypes, which is why structured follow-up and monitoring continue after treatment ends. If relapse occurs, further treatment options, including different drug combinations or stem cell transplant, may be considered.",
      },
    ],
    ctaHeading: "Noticed persistent lymph node swelling?",
    ctaBody:
      "Persistent or unexplained lymph node swelling should be evaluated by a clinical haematologist to determine whether further testing is needed.",
    reviewDate: "2026-07-01",
  },
  {
    slug: "multiple-myeloma",
    name: "Multiple Myeloma",
    shortLabel: "Multiple Myeloma",
    metaTitle: "Multiple Myeloma Treatment in Vijayawada | AP Blood",
    metaDescription:
      "Diagnosis and personalized treatment planning for multiple myeloma, including stem cell transplant evaluation, in Vijayawada, Andhra Pradesh.",
    directAnswer:
      "Multiple myeloma is a cancer of plasma cells, the antibody-producing cells normally found in bone marrow. Abnormal plasma cells multiply and crowd the marrow, produce an abnormal protein, and can weaken bones, impair kidney function, and lower normal blood cell counts. It typically affects older adults and is diagnosed through blood, urine, and bone marrow testing.",
    understanding: [
      "Plasma cells are white blood cells that normally produce antibodies to help fight infection. In multiple myeloma, a single abnormal plasma cell multiplies uncontrollably within the bone marrow, and these cells produce large amounts of a single, non-functional antibody protein known as monoclonal protein, or M-protein. As abnormal plasma cells accumulate, they crowd out normal marrow function, weaken bone, and can affect kidney function through the abnormal protein circulating in the blood.",
      "Diagnosis and disease activity are often described using the CRAB criteria, an acronym for the key effects of myeloma: elevated Calcium, Renal (kidney) impairment, Anemia, and Bone lesions. Multiple myeloma often develops from earlier, symptom-free states called MGUS (monoclonal gammopathy of undetermined significance) and smoldering myeloma, which are monitored over time because only some cases progress to active disease requiring treatment.",
      "Multiple myeloma typically follows a relapsing-remitting course, meaning that periods of disease control after treatment can be followed by relapse requiring further therapy. Because of this pattern, care usually includes maintenance therapy after initial treatment and long-term monitoring, with treatment choices adjusted based on how the disease responds and its underlying genetic risk features.",
    ],
    symptoms: [
      "Persistent bone pain, especially in the back or ribs",
      "Fractures occurring with little or no trauma",
      "Fatigue and weakness from anemia",
      "Frequent infections",
      "Increased thirst and urination, related to elevated blood calcium",
      "Nausea, confusion, or constipation, also related to elevated calcium",
      "Reduced urine output or leg swelling from kidney involvement",
      "Unintentional weight loss",
    ],
    whenToSeeDoctor: [
      "Persistent, unexplained bone pain in an older adult, particularly back pain that does not improve with rest, should be investigated rather than attributed to age alone.",
      "Fatigue combined with abnormal kidney function or elevated calcium on blood tests warrants haematology referral for further evaluation.",
      "A fracture occurring after minor trauma should prompt evaluation for an underlying bone-weakening condition.",
    ],
    diagnosis: [
      {
        title: "Serum Protein Electrophoresis and Immunofixation",
        description:
          "Blood tests that detect and characterise the abnormal monoclonal protein produced by myeloma cells, a key step in diagnosis and disease monitoring.",
      },
      {
        title: "Serum Free Light Chain Assay",
        description:
          "Measures light chain proteins in the blood, useful for diagnosis, risk assessment, and tracking response in patients whose myeloma does not produce a typical monoclonal protein.",
      },
      {
        title: "Bone Marrow Aspiration and Biopsy",
        description:
          "Confirms the proportion of abnormal plasma cells in the marrow and provides tissue for cytogenetic testing used in risk stratification.",
      },
      {
        title: "Whole-Body Imaging",
        description:
          "Skeletal survey, MRI, or PET-CT is used to detect bone lesions caused by myeloma, guiding both diagnosis and bone-protective treatment decisions.",
      },
      {
        title: "Cytogenetic and FISH Testing",
        description:
          "Identifies specific chromosomal changes within myeloma cells that help classify disease risk and inform treatment intensity.",
      },
    ],
    treatmentOptions: [
      {
        title: "Induction Therapy",
        description:
          "Combination regimens using proteasome inhibitors, immunomodulatory drugs, and steroids aim to reduce the burden of abnormal plasma cells before further treatment, following current protocols.",
      },
      {
        title: "Autologous Stem Cell Transplant",
        description:
          "For eligible patients, high-dose therapy followed by reinfusion of the patient's own previously collected stem cells is used to deepen and extend disease control.",
      },
      {
        title: "Maintenance Therapy",
        description:
          "Lower-intensity treatment continued after induction or transplant aims to prolong disease control and delay relapse.",
      },
      {
        title: "Bone-Protective Treatment",
        description:
          "Bisphosphonates or related agents help reduce the risk of fractures and manage bone involvement associated with myeloma.",
      },
      {
        title: "Supportive Care",
        description:
          "Management of anemia, infection risk, and kidney protection is integrated throughout treatment to support overall health during therapy.",
      },
    ],
    whyHere: [
      "Multiple myeloma requires coordinated interpretation of blood protein studies, bone marrow findings, imaging, and cytogenetics before a treatment plan can be finalized. As a single-specialty haematology centre, this diagnostic pathway is managed in one focused setting rather than across multiple unconnected departments.",
      "Dr. Amarnadh Polisetty, MBBS, MD (General Medicine), DNB (Clinical Haematology), has over 7 years of experience in clinical haematology and has been part of specialist transplant teams that have managed more than 500 bone marrow transplant patients, including autologous transplants relevant to myeloma care, along with an ASH Abstract Award. Treatment planning is personalized to disease risk category and follows internationally aligned protocols.",
    ],
    faqs: [
      {
        question: "What causes multiple myeloma?",
        answer:
          "The exact cause is not fully understood. It arises from genetic changes in a plasma cell that occur over a person's lifetime; age, and sometimes a preceding condition called MGUS, are recognised risk factors, though most cases occur without a clearly identifiable cause.",
      },
      {
        question: "Is multiple myeloma the same as leukemia?",
        answer:
          "No. Multiple myeloma affects plasma cells, whereas leukemia affects other types of blood cells, typically white blood cell precursors in the marrow. Both are blood cancers but involve different cell types, diagnostic tests, and treatment approaches.",
      },
      {
        question: "Can multiple myeloma be cured?",
        answer:
          "Multiple myeloma is generally treated as a manageable, often relapsing condition rather than one with a guaranteed cure, though treatment can achieve long periods of disease control for many patients. Your haematologist can discuss realistic goals of therapy for your specific risk category.",
      },
      {
        question: "What is a stem cell transplant for myeloma?",
        answer:
          "It involves collecting a patient's own stem cells, giving high-dose chemotherapy to reduce the myeloma burden, and then reinfusing the stem cells to help the bone marrow recover. It is considered for eligible patients as part of the treatment pathway.",
      },
      {
        question: "What is MGUS and does it always progress to myeloma?",
        answer:
          "MGUS (monoclonal gammopathy of undetermined significance) is an early, symptom-free state where an abnormal protein is detected in the blood without meeting criteria for active myeloma. Only a minority of MGUS cases progress to myeloma, which is why regular monitoring is recommended rather than immediate treatment.",
      },
      {
        question: "How long can someone live with multiple myeloma?",
        answer:
          "Outlook varies considerably based on disease stage, genetic risk features, and response to treatment, and has improved with modern therapies. Rather than a general statistic, your haematologist can discuss what to expect based on your individual diagnosis and risk profile.",
      },
    ],
    ctaHeading: "Experiencing unexplained bone pain or fatigue?",
    ctaBody:
      "Persistent bone pain, fatigue, or abnormal blood and kidney test results deserve evaluation by a clinical haematologist.",
    reviewDate: "2026-07-01",
  },
  {
    slug: "thalassemia",
    name: "Thalassemia",
    shortLabel: "Thalassemia",
    metaTitle: "Thalassemia Care in Vijayawada | AP Blood Centre",
    metaDescription:
      "Diagnosis, transfusion care, and genetic counselling for thalassemia trait and thalassemia major in Vijayawada, Andhra Pradesh.",
    directAnswer:
      "Thalassemia is an inherited blood disorder in which the body produces less haemoglobin than normal, or an abnormal form of it, reducing oxygen-carrying capacity and shortening red blood cell survival. It ranges from a symptom-free carrier state, known as thalassemia trait or minor, to a severe, transfusion-dependent form called thalassemia major, depending on how many globin genes are affected. It is diagnosed through blood counts, haemoglobin electrophoresis, and, where relevant, genetic testing.",
    understanding: [
      "Haemoglobin, the oxygen-carrying protein inside red blood cells, is built from protein chains called alpha and beta globin. Thalassemia results from inherited mutations that reduce or stop production of one of these chains, leading to red blood cells that are smaller, more fragile, and broken down faster than normal. This combination of reduced production and increased destruction results in chronic anemia, the hallmark of the condition.",
      "Thalassemia is classified by which globin chain is affected (alpha or beta) and by severity. Thalassemia trait, or minor, means a person carries one affected gene and is usually symptom-free, sometimes discovered only through a routine blood test. Thalassemia intermedia causes moderate anemia with variable transfusion needs, while thalassemia major, caused by mutations in both copies of the relevant gene, causes severe anemia from infancy and requires regular blood transfusions. Because carrier rates are relatively high in parts of India, carrier screening before marriage or early in pregnancy is recommended when there is a family history or regional prevalence.",
      "For thalassemia major, lifelong coordinated care is required: regular transfusions to maintain haemoglobin levels, iron chelation therapy to manage the iron overload that transfusions cause over time, and growth and organ monitoring. In eligible children with a matched donor, bone marrow transplant is considered as it can offer a potentially curative option, and is generally most effective when performed early, before iron overload and organ damage accumulate.",
    ],
    symptoms: [
      "Pale skin and persistent fatigue from chronic anemia",
      "Poor growth or delayed puberty in children",
      "Yellowing of the skin or eyes (jaundice)",
      "Enlarged spleen or abdominal swelling",
      "Dark-coloured urine",
      "Bone changes, particularly of the face and skull, in undertreated thalassemia major",
      "Recurring need for blood transfusions",
      "Shortness of breath on exertion",
    ],
    whenToSeeDoctor: [
      "Infants or young children with persistent pallor, poor feeding, or failure to grow as expected should be evaluated for thalassemia.",
      "Couples with a known family history of thalassemia, or from a background with higher carrier prevalence, should consider carrier screening before or early in pregnancy.",
      "A known thalassemia trait carrier planning a family should seek genetic counselling together with their partner to understand the chances of having an affected child.",
    ],
    diagnosis: [
      {
        title: "Complete Blood Count with Red Cell Indices",
        description:
          "Identifies characteristic changes in red cell size and haemoglobin content that raise suspicion for thalassemia and distinguish it from iron deficiency anemia.",
      },
      {
        title: "Haemoglobin Electrophoresis / HPLC",
        description:
          "Separates and measures different types of haemoglobin in the blood, confirming the type and severity of thalassemia.",
      },
      {
        title: "Genetic (Molecular) Testing",
        description:
          "Identifies the specific globin gene mutations involved, useful for confirming diagnosis, carrier screening, and family and prenatal counselling.",
      },
      {
        title: "Serum Ferritin and Iron Studies",
        description:
          "Used in transfusion-dependent patients to monitor iron overload from repeated transfusions and guide iron chelation therapy.",
      },
    ],
    treatmentOptions: [
      {
        title: "Regular Blood Transfusion Program",
        description:
          "Scheduled transfusions maintain haemoglobin at a level that supports normal growth and activity in transfusion-dependent thalassemia.",
      },
      {
        title: "Iron Chelation Therapy",
        description:
          "Medication that helps remove excess iron accumulated from repeated transfusions, reducing the risk of iron-related organ damage over time.",
      },
      {
        title: "Folic Acid Supplementation",
        description:
          "Supports ongoing red blood cell production, which is increased in thalassemia due to more rapid cell turnover.",
      },
      {
        title: "Bone Marrow / Stem Cell Transplant",
        description:
          "A potentially curative option for eligible patients, particularly children, who have a matched donor; timing and eligibility are assessed individually.",
      },
      {
        title: "Genetic Counselling",
        description:
          "Helps carriers and families understand inheritance risk and options for family planning and prenatal testing.",
      },
    ],
    whyHere: [
      "Thalassemia management involves more than transfusions; it requires ongoing monitoring of iron levels, growth, and organ function, and, for some families, guidance on genetic risk. As a single-specialty haematology centre, this ongoing care is coordinated in one place rather than fragmented across departments.",
      "Dr. Amarnadh Polisetty, MBBS, MD (General Medicine), DNB (Clinical Haematology), brings over 7 years of clinical haematology experience and has been part of specialist transplant teams managing more than 500 bone marrow transplant patients, relevant experience for families considering transplant evaluation for thalassemia major. Care plans are personalized to disease severity, with transfusion and chelation protocols and genetic counselling built into ongoing follow-up.",
    ],
    faqs: [
      {
        question: "What is the difference between thalassemia minor and major?",
        answer:
          "Thalassemia minor (trait) means a person carries one affected gene and is usually healthy and symptom-free. Thalassemia major means both copies of the relevant gene are affected, causing severe anemia from infancy that requires regular blood transfusions.",
      },
      {
        question: "Is thalassemia curable?",
        answer:
          "Thalassemia trait requires no treatment. Thalassemia major is managed long-term with transfusions and iron chelation; bone marrow transplant is a potentially curative option for eligible patients with a suitable matched donor, and your haematologist can discuss whether this applies to your situation.",
      },
      {
        question: "Can two thalassemia carriers have a healthy child?",
        answer:
          "When both partners carry the thalassemia trait, each pregnancy carries a chance of the child inheriting thalassemia major, thalassemia trait, or being unaffected. Genetic counselling and, where appropriate, prenatal testing can help couples understand and plan around this risk.",
      },
      {
        question: "Why do thalassemia major patients need regular transfusions?",
        answer:
          "Because the body cannot produce enough functional haemoglobin on its own, regular transfusions are needed to maintain haemoglobin at a level that supports normal energy, growth, and organ function.",
      },
      {
        question: "What is iron chelation therapy and why is it needed?",
        answer:
          "Repeated blood transfusions gradually build up excess iron in the body, which can damage the heart, liver, and endocrine glands if untreated. Iron chelation medication helps remove this excess iron and reduce the risk of organ damage.",
      },
      {
        question: "Is thalassemia common in Andhra Pradesh?",
        answer:
          "Thalassemia and other inherited haemoglobin disorders occur across many parts of India, and carrier screening is generally recommended for couples with a family history or where regional prevalence is a known consideration. A haematologist can advise on screening based on individual and family history.",
      },
    ],
    ctaHeading: "Planning a family or noticing anemia symptoms?",
    ctaBody:
      "Whether you need carrier screening, a diagnosis, or ongoing transfusion care, consult a clinical haematologist for personalized guidance.",
    reviewDate: "2026-07-01",
  },
  {
    slug: "hemophilia",
    name: "Hemophilia",
    shortLabel: "Hemophilia",
    metaTitle: "Hemophilia Treatment in Vijayawada | AP Blood Centre",
    metaDescription:
      "Factor replacement therapy, bleed management, and genetic counselling for hemophilia A and B in Vijayawada, Andhra Pradesh.",
    directAnswer:
      "Hemophilia is an inherited bleeding disorder caused by a deficiency of a specific blood clotting factor, most commonly Factor VIII (hemophilia A) or Factor IX (hemophilia B). This deficiency causes prolonged or spontaneous bleeding, particularly into joints and muscles. It is diagnosed through clotting factor assays and managed with factor replacement therapy and bleed-prevention strategies.",
    understanding: [
      "Normal blood clotting depends on a cascade of proteins called clotting factors working together to form a stable clot. Hemophilia occurs when one of these factors, usually Factor VIII or Factor IX, is missing or present at very low levels, so clots form slowly or incompletely. It is an X-linked inherited condition, meaning it mostly affects males, while females are typically carriers, though some carriers can also experience mild bleeding symptoms.",
      "Hemophilia is classified as mild, moderate, or severe based on the percentage of normal clotting factor activity in the blood. Severe hemophilia is associated with spontaneous bleeding, particularly into joints such as the knees, elbows, and ankles, a problem called hemarthrosis. Repeated joint bleeds, if not adequately prevented or treated, can cause long-term joint damage, which is why early and consistent management matters.",
      "Modern hemophilia care centres on regular clotting factor replacement, given either on-demand when a bleed occurs or prophylactically on a set schedule to prevent bleeds before they happen. Coordinated care that combines factor replacement, joint monitoring, and physiotherapy helps reduce the long-term impact of the condition on mobility and quality of life.",
    ],
    symptoms: [
      "Excessive bleeding after cuts, dental work, or surgery",
      "Unexplained or excessive bruising",
      "Spontaneous bleeding into joints, causing pain, swelling, and stiffness",
      "Blood in the urine or stool",
      "Prolonged nosebleeds",
      "Tight, warm, swollen joints or muscles from internal bleeding",
      "Excessive bleeding after vaccination or minor injury in infants",
    ],
    whenToSeeDoctor: [
      "A family history of hemophilia combined with unusual bruising or bleeding after routine injections in an infant should prompt clotting factor testing.",
      "Joint swelling, pain, or warmth without clear trauma in someone with known or suspected hemophilia needs urgent evaluation.",
      "Any head injury in a person with hemophilia should be treated as a medical emergency because of the risk of internal bleeding.",
      "Heavy or prolonged bleeding after dental procedures or minor surgery, especially with a family history of bleeding problems, warrants specialist assessment.",
    ],
    diagnosis: [
      {
        title: "Clotting Factor Assays",
        description:
          "Measures Factor VIII or Factor IX activity levels in the blood, confirming the diagnosis and classifying severity as mild, moderate, or severe.",
      },
      {
        title: "Coagulation Screen (aPTT and related tests)",
        description:
          "Initial blood tests that assess how well the blood clots, helping identify a clotting factor deficiency before more specific factor testing.",
      },
      {
        title: "Inhibitor Testing (Bethesda Assay)",
        description:
          "Checks for antibodies (inhibitors) that can develop against replacement clotting factor, which is important for guiding treatment in patients already on factor therapy.",
      },
      {
        title: "Genetic Testing and Carrier Screening",
        description:
          "Identifies the specific gene mutation involved and helps determine carrier status in at-risk female family members, supporting family planning decisions.",
      },
    ],
    treatmentOptions: [
      {
        title: "Factor Replacement Therapy",
        description:
          "Clotting factor concentrate is given either on-demand to treat a bleed or on a regular prophylactic schedule to prevent bleeding episodes, tailored to severity.",
      },
      {
        title: "Desmopressin (DDAVP)",
        description:
          "A medication that can temporarily raise Factor VIII levels, used for select patients with mild hemophilia A, particularly around minor procedures.",
      },
      {
        title: "Bleed and Joint Management",
        description:
          "Physiotherapy and joint protection strategies help preserve joint function and reduce the impact of repeated bleeds over time.",
      },
      {
        title: "Inhibitor Management",
        description:
          "When inhibitors to replacement factor develop, alternative treatment strategies are used to control and prevent bleeding.",
      },
      {
        title: "Genetic Counselling",
        description:
          "Supports families in understanding inheritance patterns and planning for future pregnancies with informed risk awareness.",
      },
    ],
    whyHere: [
      "Hemophilia requires consistent, structured long-term care rather than one-off treatment, including factor level monitoring, bleed management planning, and joint health follow-up. As a single-specialty haematology centre, this ongoing management is delivered within one focused clinical relationship.",
      "Dr. Amarnadh Polisetty, MBBS, MD (General Medicine), DNB (Clinical Haematology), has over 7 years of experience in clinical haematology, with a background that includes management of complex bleeding and clotting disorders as part of broader haematology practice. Treatment plans for hemophilia are personalized to severity and bleeding pattern, with attention to joint protection and family counselling alongside factor replacement.",
    ],
    faqs: [
      {
        question: "What causes hemophilia?",
        answer:
          "Hemophilia is caused by a mutation in the gene responsible for producing Factor VIII or Factor IX, clotting proteins needed for normal blood clot formation. It is inherited in an X-linked pattern, though a proportion of cases arise from a new mutation with no prior family history.",
      },
      {
        question: "Is hemophilia only in males?",
        answer:
          "Hemophilia is much more common in males because of its X-linked inheritance pattern. Females can be carriers and, in some cases, experience mild bleeding symptoms themselves, so carrier testing and monitoring are still relevant for female family members.",
      },
      {
        question: "Can hemophilia be cured?",
        answer:
          "Hemophilia is currently managed as a lifelong condition through factor replacement therapy rather than cured, though modern treatment allows most patients to lead active lives with appropriate bleed prevention. Your haematologist can discuss the treatment approach best suited to your severity and lifestyle.",
      },
      {
        question: "What should be done if a joint bleed occurs?",
        answer:
          "A joint bleed should be treated promptly with the prescribed factor replacement and rest, ice, compression, and elevation as advised, followed by evaluation to assess joint recovery. Delaying treatment increases the risk of lasting joint damage.",
      },
      {
        question: "Is hemophilia the same as being a general \"bleeder\"?",
        answer:
          "No. Hemophilia is a specific clotting factor deficiency confirmed by blood testing. Other conditions, such as platelet disorders or von Willebrand disease, also cause bleeding tendencies but involve different mechanisms and require different tests and treatments.",
      },
      {
        question: "Can women be carriers or have hemophilia symptoms?",
        answer:
          "Yes. Women who carry one affected gene are usually asymptomatic but can, in some cases, have lower clotting factor levels and experience bleeding symptoms such as heavy menstrual bleeding. Carrier testing can clarify factor levels and guide precautions around surgery or childbirth.",
      },
    ],
    ctaHeading: "Concerned about bleeding or joint symptoms?",
    ctaBody:
      "Unexplained bleeding, bruising, or joint swelling should be evaluated by a clinical haematologist to determine whether a clotting factor deficiency is involved.",
    reviewDate: "2026-07-01",
  },
  {
    slug: "anemia",
    name: "Anemia",
    shortLabel: "Anemia",
    metaTitle: "Anemia Evaluation & Treatment | AP Blood Centre",
    metaDescription:
      "Specialist evaluation of persistent or unexplained anemia to identify the underlying cause and guide treatment in Vijayawada, Andhra Pradesh.",
    directAnswer:
      "Anemia is a condition in which the blood has a lower-than-normal number of healthy red blood cells or haemoglobin, reducing the blood's capacity to carry oxygen to body tissues. It can result from reduced red cell production, such as iron, vitamin B12, or folate deficiency or a marrow disorder, from increased destruction of red cells (haemolysis), or from blood loss. Diagnosis relies on a complete blood count and further testing to identify the underlying cause.",
    understanding: [
      "Red blood cells contain haemoglobin, the protein that binds and carries oxygen from the lungs to the rest of the body. Anemia occurs when there are too few healthy red blood cells or too little haemoglobin to meet the body's oxygen needs, leading to symptoms such as fatigue and breathlessness. Anemia is not a single disease but a finding with many possible causes, broadly grouped into problems with red cell production, increased red cell destruction, or ongoing blood loss.",
      "In practice, some of the most common causes seen include iron deficiency, often related to diet or chronic blood loss such as heavy menstrual bleeding, and deficiencies of vitamin B12 or folate, which are needed for normal red cell formation. Anemia can also result from chronic disease, hemolytic conditions where red cells break down prematurely, or underlying bone marrow disorders. Because the underlying cause determines the correct treatment, identifying it is more useful than treating the low haemoglobin number alone.",
      "Anemia that persists despite standard supplementation, or that occurs alongside other abnormal findings such as low white cell or platelet counts, unexplained bleeding, or bone pain, may point to a more significant underlying condition. In these situations, a structured haematology work-up, sometimes including a bone marrow examination, helps distinguish straightforward nutritional anemia from anemia caused by a marrow or blood disorder that needs specific treatment.",
    ],
    symptoms: [
      "Persistent fatigue and weakness",
      "Pale skin, lips, or nail beds",
      "Shortness of breath, especially with exertion",
      "Rapid or irregular heartbeat",
      "Dizziness or light-headedness",
      "Headaches",
      "Cold hands and feet",
      "Brittle nails or hair thinning",
      "Difficulty concentrating",
    ],
    whenToSeeDoctor: [
      "Anemia that does not improve after an appropriate course of iron, B12, or folate supplementation should be reassessed rather than repeated indefinitely without a clear reason.",
      "Anemia accompanied by unexplained weight loss, bleeding, bruising, or bone pain needs prompt haematology evaluation.",
      "Anemia in a child, pregnant woman, or older adult that is affecting daily activity or energy levels should be evaluated to identify and treat the underlying cause.",
    ],
    diagnosis: [
      {
        title: "Complete Blood Count and Peripheral Smear",
        description:
          "Measures haemoglobin and red cell indices and allows microscopic review of red cell shape and size, providing clues to the likely cause of anemia.",
      },
      {
        title: "Iron Studies, Vitamin B12, and Folate Levels",
        description:
          "Blood tests that identify common nutritional causes of anemia and distinguish them from other underlying conditions.",
      },
      {
        title: "Reticulocyte Count",
        description:
          "Measures how actively the bone marrow is producing new red cells, helping distinguish anemia caused by reduced production from anemia caused by increased red cell loss or destruction.",
      },
      {
        title: "Bone Marrow Examination",
        description:
          "Considered when anemia remains unexplained after initial testing, or when findings suggest a marrow disorder, to directly assess blood cell production in the marrow.",
      },
    ],
    treatmentOptions: [
      {
        title: "Correction of Nutritional Deficiencies",
        description:
          "Iron, vitamin B12, or folate replacement is used when a deficiency is identified as the underlying cause, with the route and duration tailored to severity.",
      },
      {
        title: "Treatment of the Underlying Cause",
        description:
          "Addressing the source of the anemia directly, such as a bleeding source, chronic illness, or haemolytic process, is central to effective long-term management.",
      },
      {
        title: "Blood Transfusion Support",
        description:
          "Used for severe or symptomatic anemia to rapidly restore haemoglobin levels while the underlying cause is investigated and treated.",
      },
      {
        title: "Erythropoiesis-Stimulating Agents",
        description:
          "Medications that stimulate red cell production may be considered in select cases, such as anemia related to chronic kidney disease.",
      },
      {
        title: "Further Haematology Work-Up",
        description:
          "When anemia suggests a marrow or hemolytic disorder rather than a simple nutritional cause, specialist evaluation guides a more targeted treatment plan.",
      },
    ],
    whyHere: [
      "Many cases of anemia are managed successfully with simple supplementation, but persistent or unexplained anemia benefits from a structured haematology evaluation to rule out marrow, hemolytic, or malignant causes before assuming a nutritional origin. As a single-specialty haematology centre, this evaluation is available in one focused setting.",
      "Dr. Amarnadh Polisetty, MBBS, MD (General Medicine), DNB (Clinical Haematology), brings over 7 years of clinical haematology experience to the evaluation of anemia that does not respond as expected to standard treatment. Assessment and treatment planning are personalized to the identified cause rather than following a generic approach.",
    ],
    faqs: [
      {
        question: "What are the most common causes of anemia?",
        answer:
          "The most common causes include iron deficiency, often related to diet or blood loss, and deficiencies of vitamin B12 or folate. Other causes include chronic disease, hemolytic conditions, and bone marrow disorders.",
      },
      {
        question: "When is anemia serious enough to see a haematologist?",
        answer:
          "If anemia does not improve with appropriate supplementation, recurs after treatment, or is accompanied by other abnormal blood counts, bleeding, bruising, or bone pain, evaluation by a haematologist is recommended.",
      },
      {
        question: "Can anemia be a sign of blood cancer?",
        answer:
          "Anemia is a common finding in some blood cancers and marrow disorders, but it is far more often caused by nutritional deficiency or chronic disease. Unexplained or persistent anemia, especially with other abnormal findings, should be evaluated to rule out these less common but more serious causes.",
      },
      {
        question: "How is the cause of anemia identified?",
        answer:
          "Evaluation typically starts with a complete blood count and peripheral smear, followed by iron, B12, and folate testing, and a reticulocyte count. If these do not explain the anemia, further testing, including a bone marrow examination, may be needed.",
      },
      {
        question: "Does anemia always need a blood transfusion?",
        answer:
          "No. Most anemia is managed with correction of the underlying cause, such as supplementation. Transfusion is generally reserved for severe or symptomatic anemia that needs rapid correction.",
      },
      {
        question: "Why does anemia sometimes not improve with iron tablets?",
        answer:
          "This can happen if the anemia is not actually caused by iron deficiency, if there is ongoing blood loss outpacing supplementation, if absorption of iron is impaired, or if another underlying condition is contributing. Reassessment helps identify the correct cause.",
      },
    ],
    ctaHeading: "Anemia not improving with supplements?",
    ctaBody:
      "Persistent or unexplained anemia deserves a structured evaluation by a clinical haematologist to identify the underlying cause.",
    reviewDate: "2026-07-01",
  },
  {
    slug: "platelet-disorders",
    name: "Platelet Disorders",
    shortLabel: "Platelet Disorders",
    metaTitle: "Platelet Disorder Treatment | AP Blood Centre",
    metaDescription:
      "Evaluation of low or high platelet counts and platelet function disorders by a clinical haematologist in Vijayawada, Andhra Pradesh.",
    directAnswer:
      "Platelet disorders are conditions in which the number or function of platelets, the blood cells responsible for clotting, is abnormal, leading to easy bruising, bleeding, or, less commonly, abnormal clot formation. They include low platelet counts (thrombocytopenia), high platelet counts (thrombocytosis), and disorders where platelet numbers are normal but their function is impaired. Diagnosis involves blood counts, blood film review, and, when needed, bone marrow or platelet function testing.",
    understanding: [
      "Platelets are small blood cells that gather at sites of injury and help form a clot to stop bleeding. A platelet disorder can involve too few platelets (thrombocytopenia), which raises bleeding risk, too many platelets (thrombocytosis), which can occasionally raise clotting risk, or platelets present in normal numbers but not functioning correctly, which also causes a bleeding tendency.",
      "Thrombocytopenia has many possible causes, including immune thrombocytopenia (ITP), where the immune system mistakenly destroys platelets; viral infections; certain medications; bone marrow disorders; and an enlarged spleen trapping platelets. Thrombocytosis can be reactive, occurring temporarily due to infection, inflammation, or iron deficiency, or it can be driven by the bone marrow itself, as in essential thrombocythemia, which needs different management. Inherited or acquired platelet function disorders, where counts are normal but clotting still does not work properly, are a separate category requiring specific functional testing.",
      "Many platelet abnormalities are first noticed incidentally on a routine complete blood count rather than because of symptoms. Because the underlying causes range from temporary and benign to conditions needing ongoing management, specialist interpretation helps determine which category applies and whether further testing or treatment is needed.",
    ],
    symptoms: [
      "Easy or excessive bruising",
      "Small red or purple spots on the skin (petechiae)",
      "Prolonged bleeding from small cuts",
      "Frequent nosebleeds or bleeding gums",
      "Heavy or prolonged menstrual bleeding",
      "Blood in the urine or stool",
      "Fatigue, when associated with anemia or an underlying condition",
      "Headache or visual changes, uncommon, seen with very high platelet counts",
    ],
    whenToSeeDoctor: [
      "An incidental finding of a low or high platelet count on a routine blood test should be reviewed by a haematologist rather than repeated without explanation.",
      "Unusual bruising, petechiae, or bleeding that seems out of proportion to a minor injury warrants evaluation.",
      "Heavy menstrual bleeding or recurrent nosebleeds that are affecting daily life should be assessed for an underlying platelet disorder.",
    ],
    diagnosis: [
      {
        title: "Complete Blood Count and Peripheral Smear",
        description:
          "Establishes the platelet count and allows visual assessment of platelet size and clumping, along with review of red and white blood cells for related abnormalities.",
      },
      {
        title: "Platelet Function Testing",
        description:
          "Assesses how well platelets are working when the count is normal but bleeding symptoms are present, helping identify a functional platelet disorder.",
      },
      {
        title: "Bone Marrow Examination",
        description:
          "Used for unexplained thrombocytopenia or thrombocytosis to assess whether the marrow is producing platelets normally or whether a marrow disorder is responsible.",
      },
      {
        title: "Immunological and Autoantibody Testing",
        description:
          "Helps identify immune causes of low platelet count, such as immune thrombocytopenia (ITP).",
      },
    ],
    treatmentOptions: [
      {
        title: "Observation and Monitoring",
        description:
          "For mild, stable platelet abnormalities without significant bleeding risk, regular monitoring may be recommended instead of immediate treatment.",
      },
      {
        title: "Corticosteroids or Immune-Modulating Therapy",
        description:
          "First-line treatment for immune thrombocytopenia, aimed at reducing immune-mediated platelet destruction.",
      },
      {
        title: "Platelet Transfusion Support",
        description:
          "Used when platelet counts are low enough to pose a significant bleeding risk, particularly before procedures or during active bleeding.",
      },
      {
        title: "Cytoreductive Therapy",
        description:
          "Medication used to lower platelet counts in marrow-driven thrombocytosis, such as essential thrombocythemia, to reduce associated risks.",
      },
      {
        title: "Treatment of the Underlying Cause",
        description:
          "Addressing an underlying infection, medication effect, iron deficiency, or other contributing condition is often central to resolving reactive platelet abnormalities.",
      },
    ],
    whyHere: [
      "Distinguishing between the many causes of an abnormal platelet count, from benign and reactive to conditions needing active management, requires structured haematology assessment rather than a repeat blood test alone. As a single-specialty centre, platelet disorders are evaluated with a consistent, focused diagnostic approach.",
      "Dr. Amarnadh Polisetty, MBBS, MD (General Medicine), DNB (Clinical Haematology), has over 7 years of clinical haematology experience assessing abnormal blood counts, including platelet disorders, and developing individualised monitoring or treatment plans based on the underlying cause identified.",
    ],
    faqs: [
      {
        question: "What is a normal platelet count?",
        answer:
          "A normal platelet count generally falls within a standard laboratory reference range, commonly around 150,000 to 450,000 platelets per microlitre of blood, though exact reference ranges can vary slightly between laboratories.",
      },
      {
        question: "What causes low platelet count (thrombocytopenia)?",
        answer:
          "Causes include immune thrombocytopenia, viral infections, certain medications, bone marrow disorders, and conditions causing an enlarged spleen. Identifying the specific cause guides the appropriate treatment.",
      },
      {
        question: "Is a high platelet count dangerous?",
        answer:
          "It depends on the cause. Reactive thrombocytosis, related to infection or inflammation, usually resolves on its own once the trigger is treated. Marrow-driven thrombocytosis, such as essential thrombocythemia, needs specialist evaluation and, in some cases, ongoing treatment.",
      },
      {
        question: "Can platelet disorders be inherited?",
        answer:
          "Some platelet function disorders are inherited and present from childhood, while most thrombocytopenia and thrombocytosis cases in adults are acquired rather than inherited. Testing can help clarify which applies to an individual case.",
      },
      {
        question: "How is immune thrombocytopenia (ITP) treated?",
        answer:
          "Treatment depends on platelet count and bleeding risk, and may include observation for mild cases, or corticosteroids and other immune-modulating therapies when the count is low enough to pose a bleeding risk.",
      },
      {
        question: "Do all low platelet counts need treatment?",
        answer:
          "No. Mildly low platelet counts without bleeding symptoms are often monitored rather than treated immediately. Treatment is generally considered when the count is significantly low or when there is active or high-risk bleeding.",
      },
    ],
    ctaHeading: "Found an abnormal platelet count?",
    ctaBody:
      "An unexplained low or high platelet count should be reviewed by a clinical haematologist to determine the underlying cause.",
    reviewDate: "2026-07-01",
  },
  {
    slug: "sickle-cell-disease",
    name: "Sickle Cell Disease",
    shortLabel: "Sickle Cell Disease",
    metaTitle: "Sickle Cell Disease Care in Vijayawada | AP Blood",
    metaDescription:
      "Diagnosis, pain crisis management, and long-term care planning for sickle cell disease in Vijayawada, Andhra Pradesh.",
    directAnswer:
      "Sickle cell disease is an inherited disorder in which red blood cells contain an abnormal form of haemoglobin that causes them to become rigid and crescent- or sickle-shaped under certain conditions. These misshapen cells can block small blood vessels, causing pain episodes and organ damage, and break down prematurely, causing chronic anemia. It is diagnosed through haemoglobin electrophoresis or genetic testing, often as part of newborn or carrier screening.",
    understanding: [
      "Sickle cell disease is caused by a mutation in the gene for haemoglobin, the oxygen-carrying protein in red blood cells, resulting in an abnormal form called haemoglobin S. Under conditions such as low oxygen, dehydration, or infection, red cells containing haemoglobin S can distort into a rigid, crescent (sickle) shape. These sickled cells do not flow smoothly through small blood vessels and can block circulation, and they also break down more quickly than normal red cells, causing chronic anemia.",
      "Sickle cell disease is inherited in an autosomal recessive pattern, meaning a child needs to inherit the abnormal gene from both parents to have the disease. A person who inherits the gene from only one parent has sickle cell trait, which is usually asymptomatic but can still be passed on to children. Because of this, couples with a family history of sickle cell trait or disease are encouraged to consider genetic counselling before or during pregnancy.",
      "Sickle cell disease is a lifelong condition with recurring complications, including painful vaso-occlusive crises, increased susceptibility to infection due to reduced spleen function, and potential effects on the lungs, kidneys, and other organs over time. Because of this broad and evolving impact, coordinated, ongoing haematology care is central to managing the condition and reducing complications.",
    ],
    symptoms: [
      "Episodes of severe pain (pain crises), often in the bones, chest, or abdomen",
      "Chronic fatigue related to anemia",
      "Pale skin or yellowing of the eyes (jaundice)",
      "Frequent infections",
      "Swelling of the hands and feet in infants and young children",
      "Delayed growth in children",
      "Shortness of breath or chest pain, which can indicate a serious complication needing urgent care",
      "Vision changes related to blood vessel involvement in the eyes",
    ],
    whenToSeeDoctor: [
      "A sudden, severe pain crisis, chest pain, or difficulty breathing in a known sickle cell patient is a medical emergency and needs immediate attention.",
      "Fever in a person with sickle cell disease should be treated urgently given the increased risk of serious infection.",
      "Couples with a family history of sickle cell disease or trait should seek genetic counselling before or during pregnancy to understand the risk to their children.",
    ],
    diagnosis: [
      {
        title: "Haemoglobin Electrophoresis / HPLC",
        description:
          "Identifies and measures haemoglobin S and other haemoglobin variants, confirming the diagnosis of sickle cell disease or trait.",
      },
      {
        title: "Complete Blood Count and Peripheral Smear",
        description:
          "Shows characteristic sickle-shaped red cells and a reticulocyte count, providing supporting evidence and helping monitor disease activity.",
      },
      {
        title: "Genetic (Molecular) Testing",
        description:
          "Confirms the specific haemoglobin gene mutation, useful for diagnosis confirmation, carrier testing, and family counselling.",
      },
      {
        title: "Newborn and Carrier Screening",
        description:
          "Identifies sickle cell disease or trait early, allowing preventive care and family counselling to begin before complications arise.",
      },
    ],
    treatmentOptions: [
      {
        title: "Pain Management Protocols",
        description:
          "Structured approaches to managing acute pain crises aim to control pain effectively and identify and treat any triggering factor.",
      },
      {
        title: "Hydroxyurea Therapy",
        description:
          "A medication that can reduce the frequency and severity of pain crises in eligible patients by increasing a protective form of haemoglobin.",
      },
      {
        title: "Blood Transfusion Support",
        description:
          "Used for severe anemia or specific complications, and in some cases as a preventive strategy for patients at higher risk of certain complications.",
      },
      {
        title: "Infection Prevention",
        description:
          "Vaccination and, in children, prophylactic antibiotics help reduce the risk of serious infection related to reduced spleen function.",
      },
      {
        title: "Bone Marrow / Stem Cell Transplant",
        description:
          "A potentially curative option for select eligible patients with a matched donor, considered on an individual basis.",
      },
    ],
    whyHere: [
      "Sickle cell disease requires both emergency readiness for pain crises and structured long-term care to prevent complications, which benefits from a haematology-focused, single-specialty environment rather than fragmented general care.",
      "Dr. Amarnadh Polisetty, MBBS, MD (General Medicine), DNB (Clinical Haematology), has over 7 years of experience in clinical haematology and has been part of specialist transplant teams managing more than 500 bone marrow transplant patients, relevant to evaluating transplant eligibility in appropriate sickle cell disease cases. Care plans are personalized, combining crisis management, hydroxyurea therapy where appropriate, and preventive strategies.",
    ],
    faqs: [
      {
        question: "What is the difference between sickle cell trait and sickle cell disease?",
        answer:
          "Sickle cell trait means a person carries one copy of the abnormal gene and is usually asymptomatic. Sickle cell disease means a person has inherited the abnormal gene from both parents and experiences the symptoms and complications of the condition.",
      },
      {
        question: "What triggers a sickle cell pain crisis?",
        answer:
          "Common triggers include dehydration, low oxygen levels, infection, extreme temperatures, and physical stress, all of which can promote red cells sickling and blocking small blood vessels.",
      },
      {
        question: "Is sickle cell disease curable?",
        answer:
          "Bone marrow transplant is a potentially curative option for select eligible patients with a matched donor, though it is not appropriate or available for everyone. For most patients, sickle cell disease is managed long-term with therapies that reduce complications and improve quality of life; your haematologist can discuss options relevant to your situation.",
      },
      {
        question: "Can sickle cell disease be detected before birth or at birth?",
        answer:
          "Yes. Prenatal testing and newborn screening can identify sickle cell disease or trait, allowing families to plan and begin preventive care early when the diagnosis is confirmed.",
      },
      {
        question: "How is a sickle cell pain crisis managed?",
        answer:
          "Management focuses on pain control, hydration, treating any underlying trigger such as infection, and monitoring for complications, following a structured protocol appropriate to severity.",
      },
      {
        question: "Is sickle cell disease common in India?",
        answer:
          "Sickle cell disease occurs in various populations across India, with regional variation in prevalence. Genetic counselling and screening are recommended for individuals or couples with a known family history.",
      },
    ],
    ctaHeading: "Living with sickle cell disease or trait?",
    ctaBody:
      "For pain crisis management, ongoing care, or genetic counselling, consult a clinical haematologist for a personalized care plan.",
    reviewDate: "2026-07-01",
  },
  {
    slug: "bone-marrow-disorders",
    name: "Bone Marrow Disorders",
    shortLabel: "Marrow Disorders",
    metaTitle: "Bone Marrow Disorders | AP Blood Centre",
    metaDescription:
      "Diagnosis and management of aplastic anemia, myelodysplastic syndromes, and other bone marrow failure disorders in Vijayawada.",
    directAnswer:
      "Bone marrow disorders are a group of conditions in which the marrow, the tissue inside bones that produces blood cells, fails to make enough healthy red cells, white cells, or platelets, or produces them abnormally. They include aplastic anemia, a form of marrow failure, myelodysplastic syndromes (MDS), where blood cells form and mature abnormally, and other related marrow failure syndromes. Diagnosis requires bone marrow aspiration and biopsy alongside blood testing.",
    understanding: [
      "Bone marrow is the body's blood cell factory, continuously producing red cells, white cells, and platelets. A bone marrow disorder occurs when this production process fails, either because the marrow becomes underactive and produces too few cells of one or more types, as in aplastic anemia, or because it produces cells that are structurally or functionally abnormal, as in myelodysplastic syndromes. Both patterns result in low blood counts, called cytopenias, affecting one or more cell lines.",
      "Causes of marrow disorders vary and include autoimmune processes that attack marrow cells, exposure to certain toxins, drugs, or radiation, viral infections, and inherited marrow failure syndromes; in many cases, no clear cause is identified. Myelodysplastic syndromes are of particular clinical interest because, in a proportion of cases, they can progress to acute myeloid leukemia over time, which is why ongoing monitoring and risk classification are an important part of management.",
      "Because marrow disorders often present with vague symptoms like fatigue or are picked up through an abnormal routine blood count, an accurate diagnosis requires more than repeat blood tests. Bone marrow aspiration and biopsy, combined with cytogenetic and molecular testing, are needed to distinguish between the different marrow disorders and to determine risk category, which directly shapes the treatment approach.",
    ],
    symptoms: [
      "Persistent fatigue and weakness from low red blood cell counts",
      "Frequent or severe infections from low white blood cell counts",
      "Easy bruising or bleeding from low platelet counts",
      "Pale skin",
      "Shortness of breath on exertion",
      "Unexplained fever",
      "Small skin bleeds or petechiae",
    ],
    whenToSeeDoctor: [
      "Abnormal blood counts affecting more than one cell line together, such as red cells, white cells, and platelets all being low, should be evaluated by a haematologist.",
      "Fatigue combined with recurrent infections and unusual bruising occurring together needs prompt specialist assessment.",
      "A complete blood count that remains abnormal despite treating common causes, such as iron deficiency, warrants further bone marrow evaluation.",
    ],
    diagnosis: [
      {
        title: "Complete Blood Count and Peripheral Smear",
        description:
          "Identifies which blood cell lines are affected and reveals characteristic cell changes that can point toward a specific marrow disorder.",
      },
      {
        title: "Bone Marrow Aspiration and Biopsy",
        description:
          "The essential test for diagnosing marrow disorders, directly assessing how the marrow is producing (or failing to produce) blood cells.",
      },
      {
        title: "Cytogenetic and Molecular Testing",
        description:
          "Identifies chromosomal and genetic changes within marrow cells, particularly important for risk stratification in myelodysplastic syndromes.",
      },
      {
        title: "Flow Cytometry",
        description:
          "Characterises abnormal cell populations within the marrow sample, supporting accurate classification of the disorder.",
      },
    ],
    treatmentOptions: [
      {
        title: "Supportive Care",
        description:
          "Blood and platelet transfusions, growth factors, and infection prevention measures help manage symptoms and reduce risk while further treatment is planned.",
      },
      {
        title: "Immunosuppressive Therapy",
        description:
          "Used for immune-mediated marrow failure, such as certain cases of aplastic anemia, to reduce the immune attack on marrow cells and allow blood counts to recover.",
      },
      {
        title: "Disease-Modifying Therapy for MDS",
        description:
          "Treatment intensity is guided by the risk category of myelodysplastic syndrome, ranging from supportive monitoring to more active therapy.",
      },
      {
        title: "Bone Marrow / Stem Cell Transplant",
        description:
          "Considered for eligible patients, particularly those with higher-risk disease or severe marrow failure, as it offers the potential for durable disease control.",
      },
      {
        title: "Regular Monitoring and Risk Reassessment",
        description:
          "Ongoing blood counts and periodic marrow reassessment help track disease course and adjust treatment as needed over time.",
      },
    ],
    whyHere: [
      "Accurately distinguishing between aplastic anemia, myelodysplastic syndromes, and other marrow disorders requires careful bone marrow evaluation and cytogenetic interpretation, which benefits from a single-specialty haematology setting focused specifically on this kind of diagnostic work.",
      "Dr. Amarnadh Polisetty, MBBS, MD (General Medicine), DNB (Clinical Haematology), has over 7 years of clinical haematology experience and has been part of specialist transplant teams managing more than 500 bone marrow transplant patients, directly relevant to evaluating transplant candidacy for eligible patients with marrow failure. Management plans are personalized to the specific disorder and risk category identified.",
    ],
    faqs: [
      {
        question: "What is the difference between aplastic anemia and MDS?",
        answer:
          "Aplastic anemia is a condition where the bone marrow becomes underactive and produces too few blood cells overall. Myelodysplastic syndrome (MDS) is a condition where the marrow produces blood cells, but they are structurally or functionally abnormal and often insufficient in number. Both cause low blood counts but arise from different underlying processes.",
      },
      {
        question: "Can bone marrow disorders turn into leukemia?",
        answer:
          "Some myelodysplastic syndromes carry a risk of progressing to acute myeloid leukemia over time, particularly higher-risk subtypes. This is one reason why ongoing monitoring and risk classification are an important part of managing MDS.",
      },
      {
        question: "How is a bone marrow disorder diagnosed?",
        answer:
          "Diagnosis relies on a complete blood count and peripheral smear, followed by bone marrow aspiration and biopsy, along with cytogenetic and molecular testing to classify the specific disorder.",
      },
      {
        question: "Is a bone marrow biopsy painful?",
        answer:
          "The procedure involves local anaesthesia at the biopsy site and is generally well tolerated, though some discomfort or pressure is common. Your care team can discuss what to expect and any measures used to improve comfort during the procedure.",
      },
      {
        question: "Can bone marrow disorders be treated without a transplant?",
        answer:
          "Yes, many patients are managed with supportive care, immunosuppressive therapy, or disease-modifying treatment without needing a transplant. Transplant is generally considered for higher-risk disease or when other treatments are not sufficient.",
      },
      {
        question: "What causes bone marrow failure?",
        answer:
          "Causes include autoimmune processes, exposure to certain toxins, drugs, or radiation, viral infections, and inherited marrow failure syndromes, though in many cases no specific cause is identified.",
      },
    ],
    ctaHeading: "Unexplained low blood counts?",
    ctaBody:
      "Persistently abnormal blood counts affecting more than one cell type should be evaluated by a clinical haematologist for a possible marrow disorder.",
    reviewDate: "2026-07-01",
  },
  {
    slug: "blood-cancer",
    name: "Blood Cancer",
    shortLabel: "Blood Cancer",
    metaTitle: "Blood Cancer Treatment in Vijayawada | AP Blood",
    metaDescription:
      "An overview of leukemia, lymphoma, and multiple myeloma, with specialist diagnosis and treatment planning in Vijayawada, Andhra Pradesh.",
    directAnswer:
      "Blood cancer is an umbrella term for cancers that begin in blood-forming tissue, including the bone marrow and lymphatic system, and affect how blood cells are made and function. The three main types are leukemia, a cancer of white blood cells; lymphoma, a cancer of the lymphatic system; and multiple myeloma, a cancer of plasma cells. Each type has distinct subtypes, diagnostic pathways, and treatment approaches determined by a clinical haematologist.",
    understanding: [
      "Unlike cancers that form a solid tumour in a single organ, blood cancers generally originate in the bone marrow, where blood cells are produced, or in the lymphatic system, the network of nodes and vessels involved in immune defence. This origin affects how these cancers behave, spread, and are treated, and is why they are managed by clinical haematologists rather than general oncology alone.",
      "The three main categories of blood cancer are leukemia, lymphoma, and multiple myeloma. Leukemia arises in the bone marrow and blood, involving overproduction of abnormal white blood cells. Lymphoma originates in the lymphatic system, most often presenting as swollen lymph nodes, and is divided into Hodgkin and non-Hodgkin types. Multiple myeloma arises from plasma cells within the bone marrow and often presents with bone pain, anemia, or kidney problems. Each of these is covered in more detail on its own dedicated page; this overview serves as a starting point for understanding how they relate to one another.",
      "Across all blood cancers, an accurate diagnosis depends on more than an initial blood test. Bone marrow examination, imaging, flow cytometry, and genetic or molecular testing are typically needed to confirm the specific subtype and stage before a treatment plan, whether chemotherapy, targeted therapy, radiation, or bone marrow transplant, can be finalised.",
    ],
    symptoms: [
      "Persistent, unexplained fatigue",
      "Frequent or recurrent infections",
      "Easy bruising or unusual bleeding",
      "Unexplained fever or night sweats",
      "Unintentional weight loss",
      "Swollen lymph nodes",
      "Bone or joint pain",
      "Pale skin (pallor)",
    ],
    whenToSeeDoctor: [
      "When unexplained fatigue, fever, night sweats, and weight loss occur together, prompt blood testing and haematology referral are recommended.",
      "Persistent swelling of lymph nodes, unusual bruising, or unexplained bone pain without a clear cause warrants specialist evaluation.",
      "An abnormal complete blood count found on a routine check should be reviewed by a clinical haematologist for further work-up rather than repeated without explanation.",
    ],
    diagnosis: [
      {
        title: "Complete Blood Count and Peripheral Smear",
        description:
          "The starting point for evaluating suspected blood cancer, identifying abnormal cell counts or cell appearances that prompt further testing.",
      },
      {
        title: "Bone Marrow Aspiration and Biopsy",
        description:
          "Provides direct assessment of the marrow, essential for diagnosing leukemia, myeloma, and cases of lymphoma involving the marrow.",
      },
      {
        title: "Flow Cytometry / Immunophenotyping",
        description:
          "Identifies specific marker proteins on abnormal cells, helping classify the exact type and subtype of blood cancer.",
      },
      {
        title: "Cytogenetic and Molecular Testing",
        description:
          "Detects genetic and chromosomal changes that refine diagnosis, risk category, and treatment selection across blood cancer types.",
      },
      {
        title: "Imaging (CT, PET-CT, or MRI)",
        description:
          "Used, particularly in lymphoma and myeloma, to determine the extent of disease and stage it accurately before treatment planning.",
      },
    ],
    treatmentOptions: [
      {
        title: "Chemotherapy",
        description:
          "Remains a core treatment for many blood cancers, with specific regimens selected according to the confirmed diagnosis and internationally aligned protocols.",
      },
      {
        title: "Targeted Therapy and Immunotherapy",
        description:
          "Newer treatments directed at specific molecular or immune targets are used in appropriate subtypes, often alongside or in place of conventional chemotherapy.",
      },
      {
        title: "Radiation Therapy",
        description:
          "Used for select lymphomas and specific disease sites as part of a combined treatment approach.",
      },
      {
        title: "Bone Marrow / Stem Cell Transplant",
        description:
          "Considered for eligible patients across leukemia, lymphoma, and myeloma when intensified treatment is appropriate for their specific disease and risk profile.",
      },
      {
        title: "Supportive and Palliative Care Integration",
        description:
          "Symptom management, transfusion support, and infection prevention are integrated throughout treatment to support overall wellbeing at every stage.",
      },
    ],
    whyHere: [
      "Because leukemia, lymphoma, and multiple myeloma each require different diagnostic pathways and treatment protocols, accurate classification is the essential first step in blood cancer care. As a single-specialty haematology centre, this classification and subsequent treatment planning are handled within one focused clinical practice rather than a general oncology setting covering many unrelated cancers.",
      "Dr. Amarnadh Polisetty, MBBS, MD (General Medicine), DNB (Clinical Haematology), has over 7 years of experience in clinical haematology and has been part of specialist transplant teams that have managed more than 500 bone marrow transplant patients across blood cancer and blood disorder cases, along with an ASH (American Society of Hematology) Abstract Award. Treatment plans are personalized to the confirmed diagnosis, subtype, and stage, following internationally aligned protocols.",
    ],
    faqs: [
      {
        question: "What are the main types of blood cancer?",
        answer:
          "The three main types are leukemia, which affects white blood cells in the bone marrow and blood; lymphoma, which affects the lymphatic system; and multiple myeloma, which affects plasma cells. Each has several distinct subtypes with different behaviours and treatments.",
      },
      {
        question: "What are the early warning signs of blood cancer?",
        answer:
          "Common early signs include persistent fatigue, frequent infections, easy bruising or bleeding, unexplained fever or night sweats, unintentional weight loss, and swollen lymph nodes. These symptoms overlap with many less serious conditions, so evaluation with a blood test is the appropriate first step.",
      },
      {
        question: "How is blood cancer diagnosed?",
        answer:
          "Diagnosis usually begins with a complete blood count, followed by more specific tests such as bone marrow biopsy, flow cytometry, cytogenetic testing, and imaging, depending on which type of blood cancer is suspected.",
      },
      {
        question: "Is blood cancer hereditary?",
        answer:
          "Most blood cancers are not directly inherited from a parent. They generally result from genetic changes acquired during a person's lifetime, although certain inherited conditions and family history can modestly raise risk in some cases.",
      },
      {
        question: "Are all blood cancers treated the same way?",
        answer:
          "No. Treatment differs significantly based on the type and subtype of blood cancer, its stage, and individual patient factors. Leukemia, lymphoma, and myeloma each have distinct treatment pathways, which is why accurate diagnosis is essential before treatment begins.",
      },
      {
        question: "Is blood cancer curable?",
        answer:
          "Outcomes vary widely by type, subtype, and stage. Some blood cancers, particularly certain leukemias and lymphomas, can have favourable long-term outcomes with treatment, while others are managed as chronic, ongoing conditions. Your haematologist can discuss realistic goals of therapy based on your specific diagnosis.",
      },
    ],
    ctaHeading: "Concerned about possible blood cancer symptoms?",
    ctaBody:
      "Persistent fatigue, unexplained fever, swollen lymph nodes, or abnormal blood counts should be evaluated promptly by a clinical haematologist.",
    reviewDate: "2026-07-01",
  },
];

export function getCondition(slug: string): ConditionEntry | undefined {
  return conditions.find((c) => c.slug === slug);
}

export const conditionSlugs = conditions.map((c) => c.slug);
