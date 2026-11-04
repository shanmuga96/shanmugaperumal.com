import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import profilePhoto from "@/assets/images/profile.webp";
import SocialIcon from "@/components/ui/SocialIcons";
import { careerHighlights } from "@/data/career";
import { socialLinks } from "@/data/socialLinks";
import { notoSansTamil } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "About | Shanmugaperumal Seenivasan",
  description:
    "Shanmugaperumal Seenivasan is a senior full stack developer in Rijswijk, the Netherlands, who also writes essays in English and poems in Tamil.",
};

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-900";

const mediumHref = socialLinks.find( ( link ) => link.icon === "medium" )?.href;
const bloggerHref = socialLinks.find( ( link ) => link.icon === "blogger" )?.href;
const linkedinHref = socialLinks.find( ( link ) => link.icon === "linkedin" )?.href;

interface TextLinkProps
{
  href?: string;
  children: ReactNode;
}

function TextLink ( { href, children }: TextLinkProps )
{
  return (
    <a
      href={ href }
      target="_blank"
      rel="noopener noreferrer"
      className={ `rounded-sm text-neutral-900 underline underline-offset-4 transition-colors hover:text-neutral-600 ${ focusRing }` }
    >
      { children }
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

export default function AboutPage ()
{
  return (
    <section aria-labelledby="about-heading" className="py-16">
      <div className="grid gap-10 lg:grid-cols-[1fr_20rem] lg:gap-16">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-neutral-500">
            About
          </p>
          <h1
            id="about-heading"
            className="mt-4 text-4xl font-semibold tracking-tight text-neutral-900"
          >
            I learned to build by building.
          </h1>

          <div className="mt-6 max-w-2xl space-y-5 text-lg leading-8 text-neutral-600">
            <p>
              I&apos;m Shanmugaperumal, a senior full stack developer based in Rijswijk, the Netherlands.
              For more than eight years I&apos;ve worked mostly in the JavaScript ecosystem, with React,
              TypeScript, Node.js and AWS at the core.
            </p>
            <p>
              I trained as an electrical engineer, not a computer scientist, so I learned software by
              building it, and I&apos;ve come to enjoy working that way. I like taking initiative,
              simplifying processes for the wider team, and helping juniors find their footing.
              Explaining something is still the best way I know to understand it.
            </p>
            <p>
              Outside of code, I write. On <TextLink href={ mediumHref }>Medium</TextLink> I share honest
              essays about life abroad and technical interviews, including the rejections, because the
              lessons are in the parts most people leave out. In Tamil, I write poems about people,
              memories and small moments, collected on{ " " }
              <TextLink href={ bloggerHref }>
                <span lang="ta" className={ notoSansTamil.className }>அனுபவ வரிகள்</span>
              </TextLink>
              . I also keep a few short English quotes of my own.
            </p>
            <p>
              Engineering and writing feel like the same habit to me: pay attention, break something down,
              and say it clearly. This site brings it all together in one place that I own.
            </p>
          </div>

          <ul aria-label="Social profiles" className="-mx-2.5 mt-8 flex flex-wrap items-center gap-1">
            { socialLinks.map( ( link ) => (
              <li key={ link.name }>
                <a
                  href={ link.href }
                  target="_blank"
                  rel={ link.isProfile ? "me noopener noreferrer" : "noopener noreferrer" }
                  aria-label={ link.name }
                  title={ link.name }
                  className="flex h-10 w-10 items-center justify-center rounded-sm text-neutral-500 transition-colors hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                >
                  <SocialIcon name={ link.icon } className="h-5 w-5" />
                </a>
              </li>
            ) ) }
          </ul>
        </div>

        <Image
          src={ profilePhoto }
          alt="Shanmugaperumal smiling, wearing glasses, a dark suit and a white shirt, with soft blurred lights behind."
          unoptimized
          preload
          className="order-first h-auto w-full max-w-xs rounded-2xl lg:order-last lg:mt-10"
        />
      </div>

      <section aria-labelledby="leadership-heading" className="mt-24">
        <h2
          id="leadership-heading"
          className="text-sm font-medium uppercase tracking-[0.28em] text-neutral-500"
        >
          Leading people
        </h2>

        <div className="mt-6 max-w-2xl space-y-5 text-lg leading-8 text-neutral-600">
          <p>
            At Business Core Solutions, the development team grew from me and my lead to almost 60 people
            by the time I left. I managed that team, splitting it into five mentor-led groups, overseeing
            development across them, and leading their training plans. I also worked directly with the
            newest juniors, to align with them and build a rapport.
          </p>
          <p>
            Separately, I led a 10-member team of developers and DevOps engineers for a major US pharmaceutical
            client, running sprint planning, demos and client communication. My leadership earned
            accolades from both my teammates and that client.
          </p>
        </div>
      </section>

      <section aria-labelledby="career-heading" className="mt-24">
        <h2
          id="career-heading"
          className="text-sm font-medium uppercase tracking-[0.28em] text-neutral-500"
        >
          Career highlights
        </h2>

        <ol className="mt-8 divide-y divide-neutral-200 border-t border-neutral-200">
          { careerHighlights.map( ( highlight ) => (
            <li
              key={ `${ highlight.company }-${ highlight.period }` }
              className="grid gap-2 py-8 lg:grid-cols-[12rem_1fr] lg:gap-12"
            >
              <p className="text-sm text-neutral-500">{ highlight.period }</p>
              <div className="max-w-3xl">
                <h3 className="text-xl font-semibold leading-snug text-neutral-900">
                  { highlight.company }
                </h3>
                <p className="mt-1 text-sm text-neutral-500">
                  { highlight.role } · { highlight.location }
                </p>
                <p className="mt-3 text-base leading-7 text-neutral-700">
                  { highlight.summary }
                </p>
              </div>
            </li>
          ) ) }
        </ol>

        { linkedinHref && (
          <div className="border-t border-neutral-200 pt-12">
            <a
              href={ linkedinHref }
              target="_blank"
              rel="me noopener noreferrer"
              className={ `inline-block rounded-full bg-neutral-900 px-5 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-neutral-700 ${ focusRing }` }
            >
              See my full history on LinkedIn <span aria-hidden="true">↗</span>
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        ) }
      </section>
    </section>
  );
}
