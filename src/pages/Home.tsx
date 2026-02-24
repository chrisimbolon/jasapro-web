export default function Home() {
  return (
    <section className="relative py-40">
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="max-w-3xl">

          <p className="text-xs tracking-[0.3em] uppercase text-neutral-400">
            PT. JASAPRO INDONESIA
          </p>

          <h1 className="mt-8 font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-neutral-900">
            Engineering clarity
            <br />
            <span className="text-neutral-400">
              into digital systems.
            </span>
          </h1>

          <p className="mt-10 text-lg md:text-xl text-neutral-600 leading-relaxed max-w-xl">
            We design and build structured digital systems for organizations
            that demand precision, performance, and long-term scalability.
          </p>

          <div className="mt-12 flex gap-6">
            <a
              href="/contact"
              className="text-sm font-medium text-neutral-900 border-b border-neutral-900 pb-1 hover:opacity-70 transition"
            >
              Start a Project
            </a>

            <a
              href="/capabilities"
              className="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition"
            >
              View Capabilities
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}