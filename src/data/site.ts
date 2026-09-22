export const site = {
  name: "Villiers High School",
  shortName: "Villiers",
  tagline: "A world-class inclusive school at the beating heart of its community.",
  address: {
    line1: "Boyd Avenue",
    line2: "Southall",
    county: "Middlesex",
    postcode: "UB1 3BT",
  },
  phone: "020 8813 8001",
  attendancePhone: "020 8867 9077",
  email: "info@villiers.ealing.sch.uk",
  admissionsEmail: "Admissions@villiers.ealing.sch.uk",
  // Reproduced verbatim from the live site, including its existing "ealng" typo in the domain.
  sixthFormEmail: "6thformadmissions@villiers.ealng.sch.uk",
  dpoEmail: "dpo@villiers.ealing.sch.uk",
  social: {
    facebook: "https://www.facebook.com/VHSEaling",
    instagram: "https://www.instagram.com/villiershighschoollondon",
    tiktok: "https://www.tiktok.com/@villiers_official_tiktok",
    x: "https://x.com/VHSchool",
  },
  values: [
    { label: "Honesty" },
    { label: "Equity" },
    { label: "Aspiration" },
    { label: "Respect" },
    { label: "Tenacity" },
  ],
} as const;
