import type { Metadata } from "next";
import QuoteList from "@/components/writing/QuoteList";
import WritingCard from "@/components/writing/WritingCard";
import { quotes } from "@/data/quotes";
import { socialLinks } from "@/data/socialLinks";
import { writing, WritingEntry } from "@/data/writing";

export const metadata: Metadata = {
  title: "Writing | Shanmugaperumal Seenivasan",
  description:
    "Selected interview experiences, memoir, and short quotes by Shanmugaperumal Seenivasan, originally published on Medium and Miraquill.",
};

const MAX_FEATURED = 6;

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-900";

const newestFirst = ( a: WritingEntry, b: WritingEntry ) => b.date.localeCompare( a.date );

// Chapter 1 of the most recently updated series leads, followed by the newest standalone posts.
function getFeatured (): WritingEntry[]
{
  const latestSeriesName = writing.filter( ( entry ) => entry.series ).sort( newestFirst )[ 0 ]?.series?.name;
  const seriesOpener = writing.find(
    ( entry ) => entry.series?.name === latestSeriesName && entry.series?.chapter === 1,
  );
  const standalone = writing.filter( ( entry ) => !entry.series ).sort( newestFirst );

  return [ ...( seriesOpener ? [ seriesOpener ] : [] ), ...standalone ].slice( 0, MAX_FEATURED );
}

function getChapterCount ( seriesName: string ): number
{
  return writing.filter( ( entry ) => entry.series?.name === seriesName ).length;
}

const entries = getFeatured();
const englishQuotes = quotes.filter( ( quote ) => quote.language === "English" );

const mediumHref = socialLinks.find( ( link ) => link.icon === "medium" )?.href;
const miraquillHref = socialLinks.find( ( link ) => link.icon === "miraquill" )?.href;

export default function WritingPage ()
{
  return (
    <section aria-labelledby="writing-heading" className="py-16">
      <p className="text-sm font-medium uppercase tracking-[0.28em] text-neutral-500">
        Writing
      </p>
      <h1
        id="writing-heading"
        className="mt-4 text-4xl font-semibold tracking-tight text-neutral-900"
      >
        Notes, stories, and reflections.
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-neutral-600">
        This space brings together interview experiences, personal storytelling, motivational memoir-style
        writing, and more. Here are a few favourites.
      </p>

      { entries.length > 0 ? (
        <ul className="mt-12 divide-y divide-neutral-200 border-t border-neutral-200 sm:mt-16">
          { entries.map( ( entry ) => (
            <li key={ entry.href }>
              <WritingCard
                entry={ entry }
                chapterCount={ entry.series ? getChapterCount( entry.series.name ) : undefined }
              />
            </li>
          ) ) }
        </ul>
      ) : (
        <p className="mt-12 text-base text-neutral-500">New writing is on its way.</p>
      ) }

      { mediumHref && (
        <div className="mt-4 border-t border-neutral-200 pt-12">
          <a
            href={ mediumHref }
            target="_blank"
            rel="noopener noreferrer"
            className={ `inline-block rounded-full bg-neutral-900 px-5 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-neutral-700 ${ focusRing }` }
          >
            Read all my writing on Medium <span aria-hidden="true">↗</span>
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      ) }

      <QuoteList
        quotes={ englishQuotes }
        intro="Original lines I've written over the years, first shared on Miraquill."
        moreHref={ miraquillHref }
      />
    </section>
  );
}
