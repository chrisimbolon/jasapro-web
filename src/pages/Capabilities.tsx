export default function Capabilities() {
  return (
    <main className="py-32">
      <div className="container">
        {/* Page Header */}
        <div className="max-w-3xl mb-20">
          <p className="text-sm font-medium text-clay mb-4">
            Kapabilitas
          </p>

          <h1 className="text-4xl md:text-5xl font-display leading-tight mb-6">
            Rekayasa Perangkat Lunak
            <br />
            dengan Presisi dan Struktur.
          </h1>

          <p className="text-lg text-stone">
            Kami merancang, membangun, dan mengembangkan sistem digital
            yang terstruktur untuk mendukung pertumbuhan bisnis modern.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          <div className="border border-navy/10 rounded-lg p-10">
            <h3 className="text-xl font-semibold mb-4">
              Custom Software Development
            </h3>
            <p className="text-stone">
              Pengembangan aplikasi kustom berbasis kebutuhan bisnis,
              dengan arsitektur yang scalable dan teruji.
            </p>
          </div>

          <div className="border border-navy/10 rounded-lg p-10">
            <h3 className="text-xl font-semibold mb-4">
              Web & Platform Engineering
            </h3>
            <p className="text-stone">
              Pembangunan platform web modern dengan performa tinggi
              dan struktur kode yang maintainable.
            </p>
          </div>

          <div className="border border-navy/10 rounded-lg p-10">
            <h3 className="text-xl font-semibold mb-4">
              System Integration
            </h3>
            <p className="text-stone">
              Integrasi sistem dan API untuk memastikan interoperabilitas
              yang stabil dan efisien.
            </p>
          </div>

          <div className="border border-navy/10 rounded-lg p-10">
            <h3 className="text-xl font-semibold mb-4">
              Product Strategy & Architecture
            </h3>
            <p className="text-stone">
              Perencanaan arsitektur produk digital dengan pendekatan
              teknis dan bisnis yang seimbang.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}