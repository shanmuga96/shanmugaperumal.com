export default function Home() {
  return (
    <section className="flex min-h-[70vh] flex-col justify-center py-16">
      <p className="text-sm font-medium uppercase tracking-[0.28em] text-neutral-500">
        Personal website · portfolio
      </p>

      <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-neutral-900 sm:text-5xl">
        Writing across interviews, stories, poems, and quiet reflections.
      </h1>

      <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-600">
        This is a single place to gather the work that matters most to me — technical writing,
        interview experiences, personal memoir-style stories, Tamil poems, and a few English quotes.
        Everything is organized so the journey feels connected, not scattered.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="/writing"
          className="rounded-full bg-neutral-900 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-700"
        >
          Explore Writing
        </a>
        <a
          href="/projects"
          className="rounded-full border border-neutral-300 px-5 py-3 text-sm font-medium text-neutral-800 transition-colors hover:border-neutral-900 hover:text-neutral-950"
        >
          View Projects
        </a>
      </div>
    </section>
  );
}
