export default function Footer() {
  return (
    <footer className="border-t border-navy/10 py-16 mt-32">
      <div className="container text-sm text-stone flex flex-col md:flex-row justify-between gap-6">
        <div>
          <p className="font-medium text-navy mb-2">
            PT. JASAPRO INDONESIA
          </p>
          <p>
            Engineering digital products with structure and precision.
          </p>
        </div>

        <div>
          <p>© {new Date().getFullYear()} Jasapro Indonesia</p>
        </div>
      </div>
    </footer>
  )
}