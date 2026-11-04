export interface CareerHighlight
{
  period: string;
  role: string;
  company: string;
  location: string;
  summary: string;
}

// Newest first.
export const careerHighlights: CareerHighlight[] = [
  {
    period: "2025 – Present",
    role: "Senior Full Stack Developer",
    company: "Telepresenz",
    location: "South Holland, the Netherlands",
    summary:
      "Proposed and led the move from a monolith to microservices, since scaled to about 28 services, and rebuilt authentication around JWT with token rotation and MFA.",
  },
  {
    period: "2024 – 2025",
    role: "Full Stack Developer",
    company: "Ease2pay",
    location: "Rotterdam, the Netherlands",
    summary:
      "Revamped a parking reservation platform to meet WCAG 2.1, improving its accessibility score by over 35%, and worked on the pricing and availability logic behind it.",
  },
  {
    period: "2022 – 2024",
    role: "Lead Full Stack Developer",
    company: "Business Core Solutions",
    location: "The Netherlands",
    summary:
      "Moved to the Netherlands with the company. Designed and built a SAP license management module that lets global clients track and optimize their license usage.",
  },
  {
    period: "2022 – 2023",
    role: "Full Stack Developer, on placement from Business Core Solutions",
    company: "Booking.com",
    location: "Amsterdam, the Netherlands",
    summary:
      "Worked on the Content Guidelines and Reporting section of the main website, supporting compliance with the EU Digital Services Act.",
  },
  {
    period: "2018 – 2022",
    role: "Full Stack Engineer",
    company: "Business Core Solutions",
    location: "Chennai, India",
    summary:
      "Started in software straight after my electrical engineering degree. Wrote 25+ solution designs and cut onboarding time by 40% with a shared knowledge base. Named Consistent Contributor of the Year in 2020.",
  },
];
