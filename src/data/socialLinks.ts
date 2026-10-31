export type SocialIconName = "linkedin" | "github" | "medium" | "blogger" | "miraquill";

export interface SocialLink
{
  name: string;
  href: string;
  icon: SocialIconName;
  // Marks profiles that verify ownership of this site via rel="me".
  isProfile: boolean;
}

export const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/shanmugaperumal-seenivasan-b38493147",
    icon: "linkedin",
    isProfile: true,
  },
  {
    name: "GitHub",
    href: "https://github.com/shanmuga96",
    icon: "github",
    isProfile: true,
  },
  {
    name: "Medium",
    href: "https://medium.com/@shanmugaperumal96",
    icon: "medium",
    isProfile: true,
  },
  {
    name: "Blogger",
    href: "https://anubava-varigal.blogspot.com/",
    icon: "blogger",
    isProfile: false,
  },
  {
    name: "Miraquill",
    href: "https://www.miraquill.com/user.html?username=shanmugaperumal",
    icon: "miraquill",
    isProfile: false,
  },
];
