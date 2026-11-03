export type QuoteLanguage = "English" | "Tamil";

export interface Quote {
  text: string;
  language: QuoteLanguage;
  // Link to the quote on Miraquill, or the profile when there's no direct link.
  href: string;
}

const miraquillProfile = "https://www.miraquill.com/user.html?username=shanmugaperumal";

// English quotes appear on the Writing page; Tamil quotes and verses belong on the Poetry page.
export const quotes: Quote[] = [
  {
    text: "I chose to become a writer not to impress your heart, but to express mine.",
    language: "English",
    href: miraquillProfile,
  },
  {
    text: "I poured all my pain to fill the pen, and the words started flowing as fast as the blood from my heart.",
    language: "English",
    href: miraquillProfile,
  },
  {
    text: "Teach people how it hurts you. They will never dare to hurt you again.",
    language: "English",
    href: miraquillProfile,
  },
  {
    text: "Looks define who you are. So better design your looks.",
    language: "English",
    href: miraquillProfile,
  },
];
