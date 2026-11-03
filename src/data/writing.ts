export type WritingCategory = "Interviews & Career" | "Life Abroad" | "Growth & Habits";

export type WritingPlatform = "Medium";

export interface WritingSeries {
  // Same name on every chapter of the series.
  name: string;
  chapter: number;
}

export interface WritingEntry {
  title: string;
  // ISO date the piece was first published, e.g. "2024-05-18".
  date: string;
  // One or two sentences shown under the title.
  excerpt: string;
  category: WritingCategory;
  platform: WritingPlatform;
  // Link to the original post on the platform.
  href: string;
  // Set on posts that belong to a multi-chapter series.
  series?: WritingSeries;
}

// Add one object per published piece. Order doesn't matter.
// The Writing page picks what to feature automatically: chapter 1 of the newest series,
// then the newest standalone posts, up to six in total.
export const writing: WritingEntry[] = [
  {
    title: "My Interview Experience — (Senior) Front-end Developer",
    date: "2025-10-16",
    excerpt: "A practical account of a Senior Frontend Developer interview, covering real-world questions on React, JavaScript fundamentals, HTML semantics, accessibility, and problem-solving. Includes code examples, alternative approaches, and lessons learned from the experience.",
    category: "Interviews & Career",
    platform: "Medium",
    href: "https://medium.com/@shanmugaperumal96/my-interview-experience-senior-front-end-developer-5c75c3f1a40d",
  },
  {
    title: "From Chaos to Clarity: How I Used AI to Structure My Interview Prep",
    date: "2025-10-22",
    excerpt: "Explores how I used ChatGPT as an AI study partner to restructure my CV, organise interview preparation, practise technical and behavioural questions, and identify knowledge gaps. A personal account of using AI to build consistency, improve communication, and regain confidence.",
    category: "Interviews & Career",
    platform: "Medium",
    href: "https://medium.com/@shanmugaperumal96/from-chaos-to-clarity-how-i-used-ai-to-structure-my-interview-prep-1eb92eb961e9",
  },
  {
    title: "The Interview That Left Me Speechless: When Ethics Met Expectations",
    date: "2025-10-28",
    excerpt: "A reflection on an unexpected interview experience that challenged the balance between demonstrating technical expertise and protecting professional confidentiality. Explores engineering integrity, intellectual property, communication, and why doing the right thing matters even when the outcome is disappointing.",
    category: "Interviews & Career",
    platform: "Medium",
    href: "https://medium.com/@shanmugaperumal96/the-interview-that-left-me-speechless-when-ethics-met-expectations-3d544a588f7e",
  },
  {
    title: "My First System Design Interview Experience — Senior Frontend Software Engineer",
    date: "2025-11-05",
    excerpt: "Documents my first system design interview, from breaking down an automated web-content extraction problem to exploring architecture, message queues, worker orchestration, and storage. Includes a retrospective on design trade-offs, scalability considerations, and how to communicate architectural decisions more effectively.",
    category: "Interviews & Career",
    platform: "Medium",
    href: "https://medium.com/@shanmugaperumal96/my-system-design-interview-experience-70cf3548507c",
  },
  {
    title: "No Apps. No Hacks. Just One Habit That Brought Me Calm",
    date: "2026-02-07",
    excerpt: "Shares how adopting a consistent wake-up time transformed my daily routine, reduced the feeling of constantly rushing, and created space for exercise, reading, and personal interests. A reminder that meaningful productivity improvements can come from simple, sustainable habits rather than complicated tools or routines.",
    category: "Growth & Habits",
    platform: "Medium",
    href: "https://medium.com/@shanmugaperumal96/no-apps-no-hacks-just-one-habit-that-brought-me-calm-67161daa10d4",
  },
  {
    title: "Chapter 1 — The Day My Salary Stopped Coming",
    date: "2026-07-16",
    excerpt: "Months after my wedding, and soon after my wife joined me in the Netherlands, I learned my contract would not be renewed. The first chapter of a memoir series about losing a job abroad: the news, the termination agreement, and the conversation I didn't know how to start.",
    category: "Life Abroad",
    platform: "Medium",
    href: "https://medium.com/@shanmugaperumal96/the-day-my-salary-stopped-coming-3d572040f12e",
    series: { name: "When My Salary Stopped", chapter: 1 },
  },
  {
    title: "Chapter 2 — When We Started Counting Cents Instead of Euros",
    date: "2026-07-26",
    excerpt: "How losing an income changed the way we shopped: comparing supermarket prices, planning around discounts, buying in bulk, and tracking every expense in a spreadsheet until our grocery bill dropped by around €200 a month.",
    category: "Life Abroad",
    platform: "Medium",
    href: "https://medium.com/@shanmugaperumal96/chapter-2-when-we-started-counting-cents-instead-of-euros-9b5d6c08f68c",
    series: { name: "When My Salary Stopped", chapter: 2 },
  },
  {
    title: "Chapter 3 — When Every Decision Needed a Reason",
    date: "2026-08-05",
    excerpt: "Cost-consciousness spread beyond groceries to travel, cooking, electricity, and laundry. A reflection on how uncertainty turned everyday habits into deliberate decisions.",
    category: "Life Abroad",
    platform: "Medium",
    href: "https://medium.com/@shanmugaperumal96/chapter-3-when-every-decision-needed-a-reason-26683d1cda4f",
    series: { name: "When My Salary Stopped", chapter: 3 },
  },
  {
    title: "Chapter 4 — The Job Search Nobody Sees",
    date: "2026-08-21",
    excerpt: "The long, mostly invisible side of a job search: interviews, rejections, weeks of silence, a rejection that arrived during a trip to Paris, and the support that kept me going through it all.",
    category: "Life Abroad",
    platform: "Medium",
    href: "https://medium.com/@shanmugaperumal96/chapter-4-the-job-search-nobody-sees-8b554d82d1ba",
    series: { name: "When My Salary Stopped", chapter: 4 },
  },
];
