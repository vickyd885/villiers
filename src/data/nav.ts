// Single source of truth for the site's navigation tree.
//
// `inScope: true` marks pages that have been fully rebuilt with real content
// in this first pass. Everything else renders through the shared placeholder
// route (src/pages/[...slug].astro) so there are no dead links, and can be
// promoted to a real page later by adding a content file and flipping this
// flag — see docs/content-recipe.md.
//
// Paths intentionally match the live site's existing URLs (even where they're
// inconsistent, e.g. `/our-sixth-form-1`) to avoid link rot if this ever
// takes over the live domain.

export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
  inScope?: boolean;
  children?: NavItem[];
};

export const nav: NavItem[] = [
  { label: "Home", href: "/", inScope: true },
  {
    label: "Key Parental Information",
    href: "/key-information",
    inScope: true,
    children: [
      {
        label: "Term Dates",
        href: "/key-information/term-dates/202627-term-dates",
        inScope: true,
      },
      {
        label: "2027/28 Term Dates",
        href: "/key-information/term-dates/202728-term-dates",
      },
      { label: "Times of the Day", href: "/key-information/times-of-the-day", inScope: true },
      { label: "Who is my child's HoY?", href: "/key-information/hoys" },
      { label: "Notice Boards", href: "/key-information/year-group-notice-boards" },
      {
        label: "My child is going to be absent/late",
        href: "/key-information/my-child-is-going-to-be-absentlate",
        inScope: true,
      },
      { label: "Admissions", href: "/our-school/our-admissions", inScope: true },
      { label: "Parents' evenings & reporting", href: "/key-information/parents-evenings-reporting" },
      { label: "Uniform", href: "/key-information/uniform", inScope: true },
      { label: "Extra curricular activities", href: "/key-information/our-enrichment-and-extra-curricular" },
      {
        label: "GCSE Transition",
        href: "https://docs.google.com/presentation/d/14xRCK5u6ZqEFJSkjVyXEgFLsdvxMIqREVpJdK0nr-m0/edit?usp=sharing",
        external: true,
      },
      { label: "GCSE Options", href: "/key-information/gcse-options" },
      {
        label: "Parent Info Booklets",
        href: "/key-information/parent-info-booklets",
        children: [
          { label: "Year 10 Parent Info Booklet", href: "https://www.villiers.ealing.sch.uk/asset/19840562", external: true },
          { label: "Year 11 Parent Info Booklet", href: "https://www.villiers.ealing.sch.uk/asset/19852133", external: true },
          { label: "Year 13 Parent Info Booklet", href: "https://www.villiers.ealing.sch.uk/asset/19840559", external: true },
        ],
      },
      { label: "Family and Community Support", href: "/key-information/family-and-community-support" },
      { label: "Primary Transitions Year 6 into 7", href: "/key-information/primary-transitions-year-6-into-7" },
    ],
  },
  {
    label: "Statutory Information",
    href: "/statutory-information",
    children: [
      {
        label: "About Us",
        href: "/statutory-information/about-us",
        children: [
          { label: "Admission arrangements", href: "/our-school/our-admissions", inScope: true },
          { label: "Exam results", href: "/our-school/our-results" },
          { label: "Values and ethos", href: "/our-school/our-vision-values", inScope: true },
        ],
      },
      {
        label: "Contact us",
        href: "/statutory-information/contact-us",
        children: [
          { label: "Contact details", href: "/contact", inScope: true },
          { label: "Complaints guide", href: "/statutory-information/contact-us/complaints-guide" },
          { label: "Complaints procedure", href: "/statutory-information/contact-us/complaints-procedure" },
        ],
      },
      {
        label: "Child Protection & Safeguarding Appendices",
        href: "https://www.villiers.ealing.sch.uk/asset/21303632",
        external: true,
      },
      {
        label: "Governance, Leadership & Financial",
        href: "/statutory-information/leadership-and-financial",
        children: [
          { label: "Leadership and Governance", href: "/statutory-information/leadership-and-financial/slt" },
          {
            label: "Financial Information",
            href: "/statutory-information/leadership-and-financial/financial-information",
          },
          { label: "Pupil Premium Policy", href: "/statutory-information/leadership-and-financial/pupil-premium-policy" },
          { label: "Pupil Premium Strategy", href: "/statutory-information/leadership-and-financial/pupil-premium-strategy" },
          { label: "Public sector equality duty", href: "/statutory-information/leadership-and-financial/equality-duty" },
        ],
      },
      { label: "Remote education", href: "/statutory-information/remote-education" },
      {
        label: "Reports and Plans",
        href: "/statutory-information/reports-and-plans",
        children: [
          { label: "Music Development Plan", href: "/statutory-information/reports-and-plans/music-development-plan" },
          { label: "Ofsted Reports", href: "/statutory-information/reports-and-plans/ofsted-reports" },
          { label: "Challenge Partners report", href: "/statutory-information/reports-and-plans/challenge-partners-report" },
        ],
      },
      {
        label: "Requests for paper copies",
        href: "/statutory-information/requests-for-paper-copies/requests-for-paper-copies-1",
      },
      { label: "Opening hours", href: "/key-information/times-of-the-day", inScope: true },
      { label: "Uniform", href: "/key-information/uniform", inScope: true },
      { label: "SEND Information", href: "/statutory-information/send-information" },
      {
        label: "Statutory Policies",
        href: "/statutory-information/statutory-policies",
        children: [
          { label: "Behaviour policy", href: "/statutory-information/statutory-policies/behaviour-policy" },
          { label: "Careers Policy", href: "/statutory-information/statutory-policies/careers-policy" },
          {
            label: "Child Protection & Safeguarding Policy",
            href: "https://www.villiers.ealing.sch.uk/asset/21303631",
            external: true,
          },
        ],
      },
    ],
  },
  { label: "Sixth Form", href: "/our-sixth-form-1", inScope: true },
  {
    label: "Our School",
    href: "/our-school",
    inScope: true,
    children: [
      { label: "Sustainability", href: "/our-school/sustainability" },
      {
        label: "Active Travel at Villiers High School",
        href: "/our-school/sustainability/active-travel-at-villiers-high-school",
      },
      {
        label: "Curriculum",
        href: "/our-school/curriculum-1",
        children: [
          { label: "Assessment", href: "/our-school/curriculum-1/assessment-1" },
          { label: "PSHE & RSE Policies", href: "/our-school/curriculum-1/pshe-rse-policies" },
          { label: "Curriculum Subjects Outline", href: "/our-school/curriculum-1/spring-curriculum-outline" },
        ],
      },
      { label: "Vision & Values", href: "/our-school/our-vision-values", inScope: true },
      { label: "Results", href: "/our-school/our-results" },
      {
        label: "Inclusion",
        href: "/our-school/inclusion",
        children: [
          {
            label: "English as an Additional Language (EAL)",
            href: "/our-school/inclusion/our-english-as-an-additional-language-eal",
          },
          { label: "SEND", href: "/our-school/inclusion/our-send" },
          { label: "Phonics Reading Scheme", href: "/our-school/inclusion/phonics-reading-scheme" },
          { label: "Stretch-and-Challenge", href: "/our-school/inclusion/stretch-and-challenge" },
        ],
      },
      { label: "Gallery", href: "/our-school/gallery", inScope: true },
      { label: "History of Villiers", href: "/our-school/history-of-villiers", inScope: true },
      { label: "Library", href: "/our-school/our-library" },
      { label: "Catering", href: "/our-school/catering" },
      { label: "Global Citizens", href: "/our-school/global-citizens-1" },
      { label: "Alumni", href: "/our-school/alumini" },
    ],
  },
  {
    label: "Our Students",
    href: "/our-students",
    children: [
      { label: "Examinations and Result Days", href: "/our-students/our-examinations-and-result-day" },
      { label: "Careers Advice & Guidance", href: "/our-students/our-careers-advice-guidance" },
      { label: "Safeguarding", href: "/our-students/our-safeguarding-1" },
      { label: "Counselling Service", href: "/our-students/counselling-service-2" },
      { label: "Student Leadership", href: "/our-students/student-leadership" },
    ],
  },
  {
    label: "Our Staff",
    href: "/our-staff",
    children: [
      { label: "Life at Villiers", href: "/our-staff/our-staff-1" },
      { label: "Perks at Villiers", href: "/our-staff/perks-at-villiers" },
      { label: "Vacancies", href: "/our-staff/our-vacancies" },
      { label: "Useful Links", href: "/our-staff/useful-links" },
    ],
  },
  { label: "Lettings", href: "https://villiers.schoolhire.co.uk/", external: true },
  { label: "Villiers Aspire", href: "/villiers-aspire" },
  { label: "News & events", href: "/news-and-events", inScope: true },
];

/** Flattened list of every item (any depth) with its full ancestry, for the placeholder route and sitemaps. */
export type FlatNavItem = { item: NavItem; parents: NavItem[] };

export function flattenNav(items: NavItem[] = nav, parents: NavItem[] = []): FlatNavItem[] {
  return items.flatMap((item) => {
    const entry: FlatNavItem = { item, parents };
    const children = item.children ? flattenNav(item.children, [...parents, item]) : [];
    return [entry, ...children];
  });
}
