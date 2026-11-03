export type PoemTheme = "Love" | "Heartbreak" | "Family" | "Letting Go";

export type PoemLanguage = "Tamil" | "English";

export type PoemPlatform = "Blogger" | "Miraquill";

export interface Poem {
  // Title as published.
  title: string;
  // ISO date the poem was first published, e.g. "2024-05-18".
  date: string;
  language: PoemLanguage;
  // First few lines, or the whole poem if it's short. One string per line.
  lines: string[];
  // One-line English summary, for Tamil poems.
  summary?: string;
  theme: PoemTheme;
  platform: PoemPlatform;
  // Link to the original post, or the profile when there's no direct link.
  href: string;
}

const miraquillProfile = "https://www.miraquill.com/user.html?username=shanmugaperumal";

// Add one object per published poem. Order doesn't matter: the page sorts by date, newest first.
export const poems: Poem[] = [
  {
    title: "சருகுகள்",
    date: "2024-11-20",
    language: "Tamil",
    lines: [
      "சாலையோரம் உதிர்ந்து ஒதுங்கிய இலைச் சருகுகளாய்,",
      "வாழ்வில் சில நினைவுகளையும் உதிர்த்து விடுங்கள்.",
      "வரும் காலம், வசந்த காலமே...",
    ],
    summary: "Like dry leaves by the roadside, let some memories fall away, and spring will follow.",
    theme: "Letting Go",
    platform: "Blogger",
    href: "https://anubava-varigal.blogspot.com/2024/11/blog-post_20.html",
  },
  {
    title: "அவள் உலகம்",
    date: "2023-12-14",
    language: "Tamil",
    lines: [
      "அவளுக்கென்று ஓர் உலகம் -",
      "அதில் அவள் மட்டுமே நிறைந்திருந்தாள்...",
      "ஆம்பல் கொடியாய் அத்தனை குழப்பங்கள் அவளுள்...",
    ],
    summary: "Behind her calm smile is a world of quiet worries, and she comforts me even as I try to comfort her.",
    theme: "Love",
    platform: "Blogger",
    href: "https://anubava-varigal.blogspot.com/2023/12/blog-post.html",
  },
  {
    title: "அருவியில் அவள்",
    date: "2022-02-19",
    language: "Tamil",
    lines: [
      "தவறி விழும் ஆறுகள் - நீர்வீழ்ச்சி ஆவது போல்,",
      "உன்னில் விழுந்த நான் - என்னவாவேனோ!",
    ],
    summary: "Rivers that fall become waterfalls; having fallen for you, what will I become?",
    theme: "Love",
    platform: "Blogger",
    href: "https://anubava-varigal.blogspot.com/2022/02/blog-post.html",
  },
  {
    title: "ஆச்சி (அ) பாட்டி",
    date: "2022-01-15",
    language: "Tamil",
    lines: [
      "நெற்றியில் இட்ட குங்குமப் பொட்டு,",
      "நித்திரையிலும் நினைவு இருக்குதடி என் சிகப்பி...",
    ],
    summary: "Remembering my grandmother: the kumkum on her forehead, the sorrows she hid behind her smile.",
    theme: "Family",
    platform: "Blogger",
    href: "https://anubava-varigal.blogspot.com/2022/01/blog-post.html",
  },
  {
    title: "U",
    // Approximate: Miraquill only shows "435 weeks ago".
    date: "2018-07-03",
    language: "English",
    lines: [
      "You are the sweetest lie I've ever tasted...",
      "You were the treacherous rain that drenched my eyes...",
      "You are the most addictive book I've tried to read...",
      "You were the charismatic storm that blew me up...",
      "You are the mysterious path I've ever trespassed...",
    ],
    theme: "Love",
    platform: "Miraquill",
    href: miraquillProfile,
  },
  {
    title: "You",
    // Approximate: Miraquill only shows "450 weeks ago".
    date: "2018-03-20",
    language: "English",
    lines: [
      "You made me try, you make me cry...",
      "You made me weep, it hurts so deep...",
      "You are the pain, running like a train...",
      "Deep in my vein, I can't explain...",
      "Far in the cloud, I cry aloud...",
      "Under the moon, I stand alone...",
      "Trust my words, throw no swords...",
      "Rip my heart, and you grip my thoughts...",
    ],
    theme: "Heartbreak",
    platform: "Miraquill",
    href: miraquillProfile,
  },
  {
    title: "Love",
    // Approximate: Miraquill only shows "454 weeks ago".
    date: "2018-02-20",
    language: "English",
    lines: [
      "Falling in love was not my fault,",
      "but loved you with my whole heart...",
      "All you gave were untied knots,",
      "at the end I found only blood stained dots...",
    ],
    theme: "Heartbreak",
    platform: "Miraquill",
    href: miraquillProfile,
  },
];
