export default function Capabilities() {
  return (
    <main className="py-32">
      <div className="container">

        {/* Header */}
        <div className="max-w-3xl mb-28">
          <p className="text-xs tracking-[0.2em] uppercase text-neutral-400 mb-6">
            Capabilities
          </p>

          <h1 className="text-4xl md:text-5xl font-display leading-tight mb-8">
            Engineering structured digital systems
            <br />
            with clarity and discipline.
          </h1>

          <p className="text-lg text-neutral-600">
            We design and build digital infrastructures that are precise,
            scalable, and intentionally architected for long-term growth.
          </p>
        </div>

        {/* Capabilities List */}
        <div className="space-y-24">

          {/* Item 1 */}
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-medium mb-6">
                Custom Software Engineering
              </h2>
            </div>

            <div className="text-neutral-600 space-y-4">
              <p>
                Tailored systems built around your operational model —
                not forced into generic frameworks.
              </p>

              <ul className="space-y-2 text-sm">
                <li>Domain-driven architecture</li>
                <li>Scalable backend systems</li>
                <li>Long-term maintainability</li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-neutral-200" />

          {/* Item 2 */}
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-medium mb-6">
                Web & Platform Engineering
              </h2>
            </div>

            <div className="text-neutral-600 space-y-4">
              <p>
                High-performance web platforms designed with clarity,
                structure, and measurable technical discipline.
              </p>

              <ul className="space-y-2 text-sm">
                <li>Modern frontend architecture</li>
                <li>API-first system design</li>
                <li>Performance optimization</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-neutral-200" />

          {/* Item 3 */}
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-medium mb-6">
                System Integration
              </h2>
            </div>

            <div className="text-neutral-600 space-y-4">
              <p>
                Connecting digital ecosystems with precision and stability.
              </p>

              <ul className="space-y-2 text-sm">
                <li>API orchestration</li>
                <li>Legacy system bridging</li>
                <li>Data synchronization strategies</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-neutral-200" />

          {/* Item 4 */}
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-medium mb-6">
                Product Strategy & Architecture
              </h2>
            </div>

            <div className="text-neutral-600 space-y-4">
              <p>
                Technical decision-making grounded in both business logic
                and engineering integrity.
              </p>

              <ul className="space-y-2 text-sm">
                <li>Scalable product planning</li>
                <li>Technical feasibility validation</li>
                <li>Architecture blueprinting</li>
              </ul>
            </div>
          </div>

        </div>

        {/* Closing Statement */}
        <div className="mt-32 max-w-2xl">
          <p className="text-xl leading-relaxed text-neutral-700">
            We don’t ship features.
            <br />
            We design systems that evolve.
          </p>
        </div>

      </div>
    </main>
  );
}