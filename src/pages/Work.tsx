export default function Work() {
  return (
    <main className="py-32">
      <div className="container">

        {/* Header */}
        <div className="max-w-3xl mb-28">
          <p className="text-xs tracking-[0.2em] uppercase text-neutral-400 mb-6">
            Work
          </p>

          <h1 className="text-4xl md:text-5xl font-display leading-tight mb-8">
            Selected digital systems
            <br />
            built with precision.
          </h1>

          <p className="text-lg text-neutral-600">
            A selection of structured digital platforms engineered
            for long-term scalability and operational clarity.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-32">

          {/* Project 1 */}
          <div className="grid md:grid-cols-2 gap-20 items-start">

            {/* Left */}
            <div>
              <p className="text-sm text-neutral-400 mb-4">
                2025 — SaaS Platform
              </p>

              <h2 className="text-2xl md:text-3xl font-medium mb-6">
                Enterprise Operations Dashboard
              </h2>

              <p className="text-neutral-600 leading-relaxed">
                A structured analytics and workflow system designed to
                centralize operational intelligence across departments.
              </p>
            </div>

            {/* Right */}
            <div className="text-sm text-neutral-600 space-y-3">
              <p>React / TypeScript</p>
              <p>Django / PostgreSQL</p>
              <p>Containerized deployment</p>
            </div>

          </div>

          <div className="border-t border-neutral-200" />

          {/* Project 2 */}
          <div className="grid md:grid-cols-2 gap-20 items-start">

            <div>
              <p className="text-sm text-neutral-400 mb-4">
                2024 — Internal Platform
              </p>

              <h2 className="text-2xl md:text-3xl font-medium mb-6">
                Workflow Automation System
              </h2>

              <p className="text-neutral-600 leading-relaxed">
                A modular internal system that reduced manual operational
                workload through structured automation and API integration.
              </p>
            </div>

            <div className="text-sm text-neutral-600 space-y-3">
              <p>System Architecture</p>
              <p>API Integration</p>
              <p>Performance Optimization</p>
            </div>

          </div>

          <div className="border-t border-neutral-200" />

          {/* Project 3 */}
          <div className="grid md:grid-cols-2 gap-20 items-start">

            <div>
              <p className="text-sm text-neutral-400 mb-4">
                2024 — Digital Platform
              </p>

              <h2 className="text-2xl md:text-3xl font-medium mb-6">
                Customer Engagement Web Platform
              </h2>

              <p className="text-neutral-600 leading-relaxed">
                A scalable web platform engineered with long-term
                maintainability and structured frontend architecture.
              </p>
            </div>

            <div className="text-sm text-neutral-600 space-y-3">
              <p>Frontend Architecture</p>
              <p>API-first backend</p>
              <p>CI/CD Infrastructure</p>
            </div>

          </div>

        </div>

        {/* Closing Statement */}
        <div className="mt-32 max-w-2xl">
          <p className="text-xl leading-relaxed text-neutral-700">
            Each system is engineered with structure,
            not just implemented for delivery.
          </p>
        </div>

      </div>
    </main>
  );
}