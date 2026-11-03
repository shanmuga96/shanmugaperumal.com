import { WritingEntry } from "@/data/writing";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-900";

const dateFormatter = new Intl.DateTimeFormat( "en-GB", {
  day: "numeric",
  month: "short",
  year: "numeric",
  timeZone: "UTC",
} );

interface WritingCardProps
{
  entry: WritingEntry;
  // Total chapters in the entry's series, shown as "Chapter 1 of N".
  chapterCount?: number;
}

export default function WritingCard ( { entry, chapterCount }: WritingCardProps )
{
  return (
    <article className="grid gap-4 py-10 sm:py-12 lg:grid-cols-[12rem_1fr] lg:gap-12">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 lg:flex-col lg:items-start">
        <time
          dateTime={ entry.date }
          className="text-sm text-neutral-500"
        >
          { dateFormatter.format( new Date( entry.date ) ) }
        </time>
        <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700">
          { entry.category }
        </span>
      </div>

      <div className="max-w-3xl">
        { entry.series && (
          <p className="mb-2 text-sm font-medium text-neutral-500">
            Series: { entry.series.name }
            { chapterCount && chapterCount > 1 ? ` · Chapter ${ entry.series.chapter } of ${ chapterCount }` : "" }
          </p>
        ) }
        <h2 className="text-xl font-semibold leading-snug tracking-tight text-neutral-900 sm:text-2xl">
          <a
            href={ entry.href }
            target="_blank"
            rel="noopener noreferrer"
            className={ `rounded-sm underline-offset-4 transition-colors hover:text-neutral-600 hover:underline ${ focusRing }` }
          >
            { entry.title }
          </a>
        </h2>

        <p className="mt-4 text-base leading-7 text-neutral-600">
          { entry.excerpt }
        </p>

        <a
          href={ entry.href }
          target="_blank"
          rel="noopener noreferrer"
          aria-label={ `Read "${ entry.title }" on ${ entry.platform } (opens in a new tab)` }
          className={ `mt-6 inline-flex items-center gap-1 rounded-sm text-sm font-medium text-neutral-900 underline-offset-4 transition-colors hover:underline ${ focusRing }` }
        >
          Read on { entry.platform }
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  );
}
