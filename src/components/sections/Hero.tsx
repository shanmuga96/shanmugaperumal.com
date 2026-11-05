import Link from "next/link";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-900";

export default function Hero ()
{
  return (
    <section
      aria-labelledby="hero-heading"
      className="flex min-h-[60vh] flex-col justify-center py-12 sm:min-h-[70vh] sm:py-16 lg:py-24"
    >
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500 sm:text-sm sm:tracking-[0.28em]">
        Senior full stack developer · Rijswijk, the Netherlands
      </p>

      <h1
        id="hero-heading"
        className="mt-4 max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl"
      >
        Hi, I&apos;m Shanmugaperumal. I build for the web, and I write.
      </h1>

      <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
        Eight years in the JavaScript ecosystem, mostly React, TypeScript, Node.js and AWS.
        Outside of code, I write honest essays about life abroad and technical interviews,
        and Tamil poems about people, memories and small moments.
      </p>

      <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
        To me they&apos;re the same habit: pay attention, break it down, say it clearly.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
        <Link
          href="/writing"
          className={ `rounded-full bg-neutral-900 px-5 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-neutral-700 ${ focusRing }` }
        >
          Explore Writing
        </Link>
        <Link
          href="/about"
          className={ `rounded-sm px-1 py-3 text-center text-sm font-medium text-neutral-600 underline-offset-4 transition-colors hover:text-neutral-950 hover:underline sm:ml-2 ${ focusRing }` }
        >
          More about me →
        </Link>
      </div>
    </section>
  );
}
