import i18n from "@/lib/i18n"
import { useTranslation } from "react-i18next"
import { Link, useLocation } from "react-router-dom"

export default function Navbar() {
  const location = useLocation()
  const { t, i18n: i18next } = useTranslation()

  const currentLang = i18next.language

  const changeLanguage = (lang: "id" | "en") => {
    i18n.changeLanguage(lang)
    localStorage.setItem("lang", lang)
  }

  const navItems = [
    { name: t("nav.capabilities"), path: "/capabilities" },
    { name: t("nav.work"), path: "/work" },
    { name: t("nav.company"), path: "/company" },
  ]

  return (
    <header className="border-b border-neutral-200 bg-white/80 backdrop-blur-sm">
      <div className="container flex items-center justify-between h-20">

        {/* Logo */}
        <Link to="/" className="font-display text-xl tracking-tight">
          JASAPRO
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`transition-colors duration-200 ${
                location.pathname === item.path
                  ? "text-neutral-900"
                  : "text-neutral-500 hover:text-neutral-900"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right Side Controls */}
        <div className="flex items-center gap-6">

          {/* Language Toggle */}
          <div className="relative flex w-20 bg-neutral-200 rounded-full p-1 text-xs font-medium">
            <div
              className={`absolute top-1 bottom-1 w-8 rounded-full bg-white shadow-sm transition-all duration-300 ${
                currentLang === "id" ? "left-1" : "left-9"
              }`}
            />

            <button
              onClick={() => changeLanguage("id")}
              className="relative z-10 w-1/2 text-center"
            >
              ID
            </button>

            <button
              onClick={() => changeLanguage("en")}
              className="relative z-10 w-1/2 text-center"
            >
              EN
            </button>
          </div>

          {/* CTA */}
          <Link
            to="/contact"
            className="hidden md:inline-block border border-neutral-900 px-6 py-2 text-sm font-medium hover:bg-neutral-900 hover:text-white transition"
          >
            {t("nav.cta")}
          </Link>

        </div>
      </div>
    </header>
  )
}