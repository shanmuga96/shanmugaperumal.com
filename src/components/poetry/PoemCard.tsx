import { Poem } from "@/data/poems";
import { notoSansTamil } from "@/lib/fonts";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-900";

const dateFormatter = new Intl.DateTimeFormat( "en-GB", {
  day: "numeric",
  month: "short",
  year: "numeric",
  timeZone: "UTC",
} );

interface PoemCardProps
{
  poem: Poem;
}

export default function PoemCard ( { poem }: PoemCardProps )
{
  const isTamil = poem.language === "Tamil";

  return (
    <article className="grid gap-4 py-10 sm:py-12 lg:grid-cols-[12rem_1fr] lg:gap-12">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 lg:flex-col lg:items-start">
        <time
          dateTime={ poem.date }
          className="text-sm text-neutral-500"
        >
          { dateFormatter.format( new Date( poem.date ) ) }
        </time>
        <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700">
          { poem.theme }
        </span>
      </div>

      <div className="max-w-3xl">
        <div lang={ isTamil ? "ta" : "en" } className={ isTamil ? notoSansTamil.className : "" }>
          <h3 className="text-xl font-semibold leading-snug text-neutral-900 sm:text-2xl">
            <a
              href={ poem.href }
              target="_blank"
              rel="noopener noreferrer"
              className={ `rounded-sm underline-offset-4 transition-colors hover:text-neutral-600 hover:underline ${ focusRing }` }
            >
              { poem.title }
            </a>
          </h3>

          <p className="mt-4 text-base leading-8 text-neutral-700">
            { poem.lines.map( ( line, index ) => (
              <span key={ index } className="block">{ line }</span>
            ) ) }
          </p>
        </div>

        { poem.summary && (
          <p className="mt-4 text-sm italic leading-6 text-neutral-500">
            { poem.summary }
          </p>
        ) }

        <a
          href={ poem.href }
          target="_blank"
          rel="noopener noreferrer"
          aria-label={ `Read "${ poem.title }" on ${ poem.platform } (opens in a new tab)` }
          className={ `mt-6 inline-flex items-center gap-1 rounded-sm text-sm font-medium text-neutral-900 underline-offset-4 transition-colors hover:underline ${ focusRing }` }
        >
          Read on { poem.platform }
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  );
}
