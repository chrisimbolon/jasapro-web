export default function Work() {
  return (
    <main className="py-32">
      <div className="container">

        {/* Page Header */}
        <div className="max-w-3xl mb-28">
          <p className="text-xs tracking-[0.18em] uppercase text-neutral-400 mb-6">
            Work
          </p>

          <h1 className="text-4xl md:text-5xl font-display leading-tight tracking-tight mb-6">
            Selected digital systems
            <br />
            built with precision.
          </h1>

          <p className="text-lg text-neutral-600 leading-relaxed">
            A selection of structured digital platforms engineered for long-term
            scalability and operational clarity.
          </p>
        </div>

        {/* Project 01 */}
        <section className="grid md:grid-cols-2 gap-16 py-20 border-t border-neutral-200/60">
          <div>
            <p className="text-xs tracking-[0.15em] uppercase text-neutral-400 mb-6">
              2025 — SaaS Platform
            </p>

            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">
              Enterprise Operations Dashboard
            </h2>

            <p className="text-neutral-600 leading-relaxed max-w-md">
              A structured analytics and workflow system designed to centralize
              operational intelligence across departments.
            </p>
          </div>

          <div className="text-sm text-neutral-500 space-y-3 border-l border-neutral-200 pl-8">
            <p>React / TypeScript</p>
            <p>Django / PostgreSQL</p>
            <p>Containerized deployment</p>
          </div>
        </section>

        {/* Project 02 */}
        <section className="grid md:grid-cols-2 gap-16 py-20 border-t border-neutral-200/60">
          <div>
            <p className="text-xs tracking-[0.15em] uppercase text-neutral-400 mb-6">
              2024 — Internal Platform
            </p>

            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">
              Workflow Automation System
            </h2>

            <p className="text-neutral-600 leading-relaxed max-w-md">
              A modular internal system that reduced manual operational workload
              through structured automation and API integration.
            </p>
          </div>

          <div className="text-sm text-neutral-500 space-y-3 border-l border-neutral-200 pl-8">
            <p>System Architecture</p>
            <p>API Integration</p>
            <p>Performance Optimization</p>
          </div>
        </section>

      </div>
    </main>
  )
}