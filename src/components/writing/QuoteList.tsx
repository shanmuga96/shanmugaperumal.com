import { Quote } from "@/data/quotes";
import { notoSansTamil } from "@/lib/fonts";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-900";

interface QuoteListProps
{
  quotes: Quote[];
  intro: string;
  // Link to the full collection, e.g. the Miraquill profile.
  moreHref?: string;
}

export default function QuoteList ( { quotes, intro, moreHref }: QuoteListProps )
{
  if ( quotes.length === 0 )
  {
    return null;
  }

  return (
    <section aria-labelledby="quotes-heading" className="mt-24">
      <h2
        id="quotes-heading"
        className="text-sm font-medium uppercase tracking-[0.28em] text-neutral-500"
      >
        Short lines
      </h2>
      <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-600">
        { intro }
      </p>

      <ul className="mt-8 grid gap-6 sm:grid-cols-2">
        { quotes.map( ( quote ) =>
        {
          const isTamil = quote.language === "Tamil";

          return (
            <li key={ quote.text }>
              <figure
                lang={ isTamil ? "ta" : "en" }
                className={ `h-full rounded-2xl bg-neutral-50 p-6 sm:p-8 ${ isTamil ? notoSansTamil.className : "" }` }
              >
                { quote.title && (
                  <figcaption className="mb-3 text-sm font-semibold text-neutral-900">
                    { quote.title }
                  </figcaption>
                ) }
                <blockquote className="text-lg font-medium leading-8 text-neutral-800">
                  <p>&ldquo;{ quote.text }&rdquo;</p>
                </blockquote>
              </figure>
            </li>
          );
        } ) }
      </ul>

      { moreHref && (
        <a
          href={ moreHref }
          target="_blank"
          rel="noopener noreferrer"
          className={ `mt-8 inline-flex items-center gap-1 rounded-sm text-sm font-medium text-neutral-900 underline-offset-4 transition-colors hover:underline ${ focusRing }` }
        >
          More on Miraquill <span aria-hidden="true">↗</span>
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      ) }
    </section>
  );
}
