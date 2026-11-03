export type QuoteLanguage = "English" | "Tamil";

export interface Quote {
  // Optional heading shown above the quote.
  title?: string;
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
  {
    text: "இரவென்றால் நிலவு வரும் என்பார்கள், எனக்கு மட்டும் ஏனோ உன் நினைவுகள்!!?",
    language: "Tamil",
    href: miraquillProfile,
  },
  {
    title: "மௌனம்",
    text: "மாலையில் மௌனங்கள் என்னோடு பேசிடும்போது, உன் பெயரைத் தவிர பேச வார்த்தைகள் இல்லையடி எனக்கு...",
    language: "Tamil",
    href: miraquillProfile,
  },
  {
    text: "அரிதாரம் பூசாமலே அழகாய் மிளிரும் உனக்கு - ஒப்பனை ஏனோ!! - முழு(மதி) அழகை மறைத்திடவா!!?",
    language: "Tamil",
    href: miraquillProfile,
  },
];
