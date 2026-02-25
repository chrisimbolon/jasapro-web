export default function Company() {
  return (
    <main className="py-32">
      <div className="container">

        {/* Header */}
        <div className="max-w-3xl mb-28">
          <p className="text-xs tracking-[0.18em] uppercase text-neutral-400 mb-6">
            Company
          </p>

          <h1 className="text-4xl md:text-5xl font-display leading-tight tracking-tight mb-6">
            Engineering digital systems
            <br />
            with clarity and discipline.
          </h1>

          <p className="text-lg text-neutral-600 leading-relaxed">
            Jasapro is an independent digital engineering studio focused on
            building structured, scalable, and long-term software systems.
            We believe technology should be intentional — not improvised.
          </p>
        </div>

        {/* Philosophy Section */}
        <section className="grid md:grid-cols-2 gap-20 py-20 border-t border-neutral-200/60">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight mb-6">
              Our Philosophy
            </h2>

            <p className="text-neutral-600 leading-relaxed max-w-md">
              We approach digital systems as engineered infrastructure —
              not disposable products. Architecture, clarity, and long-term
              maintainability are foundational to everything we build.
            </p>
          </div>

          <div className="text-neutral-600 leading-relaxed space-y-6">
            <p>
              Every system begins with structure. We define boundaries,
              responsibilities, and technical principles before writing code.
            </p>
            <p>
              Our work balances technical discipline with business intent —
              ensuring systems are not only scalable, but operationally aligned.
            </p>
          </div>
        </section>

        {/* Approach Section */}
        <section className="grid md:grid-cols-2 gap-20 py-20 border-t border-neutral-200/60">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight mb-6">
              How We Work
            </h2>

            <p className="text-neutral-600 leading-relaxed max-w-md">
              Structured collaboration. Clear documentation.
              Measurable technical decisions.
            </p>
          </div>

          <div className="text-neutral-500 text-sm space-y-4 border-l border-neutral-200 pl-8">
            <p>System-first architecture design</p>
            <p>Domain-driven modeling</p>
            <p>Scalable backend foundations</p>
            <p>Measured frontend performance</p>
            <p>Containerized & production-ready delivery</p>
          </div>
        </section>

        {/* Principles Section */}
        <section className="py-20 border-t border-neutral-200/60">
          <h2 className="text-2xl font-semibold tracking-tight mb-12">
            Core Principles
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="font-medium mb-4">Clarity</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Systems should be understandable. Complexity must be intentional,
                never accidental.
              </p>
            </div>

            <div>
              <h3 className="font-medium mb-4">Structure</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Architecture precedes implementation. Strong foundations enable
                long-term scalability.
              </p>
            </div>

            <div>
              <h3 className="font-medium mb-4">Longevity</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                We build for durability — not short-term releases.
                Maintainability is a core metric.
              </p>
            </div>
          </div>
        </section>

      </div>
    </main>
  )
}