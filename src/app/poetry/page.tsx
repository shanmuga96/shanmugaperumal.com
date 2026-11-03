import type { Metadata } from "next";
import { ReactNode } from "react";
import PoemCard from "@/components/poetry/PoemCard";
import QuoteList from "@/components/writing/QuoteList";
import { Poem, poems } from "@/data/poems";
import { quotes } from "@/data/quotes";
import { socialLinks } from "@/data/socialLinks";
import { notoSansTamil } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Poetry | Shanmugaperumal Seenivasan",
  description:
    "Tamil poems and short verses by Shanmugaperumal Seenivasan, originally published on Blogger and Miraquill.",
};

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-900";

const newestFirst = [ ...poems ].sort( ( a, b ) => b.date.localeCompare( a.date ) );
const tamilPoems = newestFirst.filter( ( poem ) => poem.language === "Tamil" );
const englishPoems = newestFirst.filter( ( poem ) => poem.language === "English" );
const tamilQuotes = quotes.filter( ( quote ) => quote.language === "Tamil" );

const bloggerHref = socialLinks.find( ( link ) => link.icon === "blogger" )?.href;
const miraquillHref = socialLinks.find( ( link ) => link.icon === "miraquill" )?.href;

interface PoemSectionProps
{
  id: string;
  heading: ReactNode;
  poems: Poem[];
  className?: string;
}

function PoemSection ( { id, heading, poems, className = "" }: PoemSectionProps )
{
  if ( poems.length === 0 )
  {
    return null;
  }

  return (
    <section aria-labelledby={ id } className={ className }>
      <h2
        id={ id }
        className="text-sm font-medium uppercase tracking-[0.28em] text-neutral-500"
      >
        { heading }
      </h2>
      <ul className="mt-6 divide-y divide-neutral-200 border-t border-neutral-200">
        { poems.map( ( poem ) => (
          <li key={ `${ poem.date }-${ poem.title }` }>
            <PoemCard poem={ poem } />
          </li>
        ) ) }
      </ul>
    </section>
  );
}

export default function PoetryPage ()
{
  return (
    <section aria-labelledby="poetry-heading" className="py-16">
      <p className="text-sm font-medium uppercase tracking-[0.28em] text-neutral-500">
        Poetry
      </p>
      <h1
        id="poetry-heading"
        className="mt-4 text-4xl font-semibold tracking-tight text-neutral-900"
      >
        Poems in Tamil and English.
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-neutral-600">
        A collection of my Tamil poems and English verses, gathered from across the places I shared them first.
      </p>

      <PoemSection
        id="tamil-poems"
        heading={ <><span lang="ta" className={ notoSansTamil.className }>தமிழ்</span> · Tamil</> }
        poems={ tamilPoems }
        className="mt-12 sm:mt-16"
      />

      { bloggerHref && (
        <div className="mt-4 border-t border-neutral-200 pt-12">
          <a
            href={ bloggerHref }
            target="_blank"
            rel="noopener noreferrer"
            className={ `inline-block rounded-full bg-neutral-900 px-5 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-neutral-700 ${ focusRing }` }
          >
            Read all my poems on Blogger <span aria-hidden="true">↗</span>
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      ) }

      <PoemSection
        id="english-poems"
        heading="English"
        poems={ englishPoems }
        className="mt-24"
      />

      <QuoteList
        quotes={ tamilQuotes }
        intro="Short Tamil verses I've written over the years, first shared on Miraquill."
        moreHref={ miraquillHref }
      />
    </section>
  );
}
