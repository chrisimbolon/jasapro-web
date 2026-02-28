import logo from "@/assets/logo.png"
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
    <header className="border-b border-neutral-300 bg-white/80 backdrop-blur-sm">
      <div className="container flex items-center justify-between h-24">

        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="PT. Jasa Pro Indonesia"
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-12 text-sm tracking-wide font-medium">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`transition-colors duration-200 ${
                  isActive
                    ? "text-neutral-900 font-semibold"
                    : "text-neutral-600 hover:text-neutral-900"
                }`}
              >
                {item.name}
              </Link>
            )
          })}
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-8">

          {/* Language Toggle */}
          <div className="relative flex w-20 bg-neutral-100 rounded-full p-1 text-xs font-medium">
            <div
              className={`absolute top-1 bottom-1 w-8 rounded-full bg-white shadow-sm transition-all duration-300 ${
                currentLang === "id" ? "left-1" : "left-9"
              }`}
            />

            <button
              onClick={() => changeLanguage("id")}
              className="relative z-10 w-1/2 text-center text-neutral-700"
            >
              ID
            </button>

            <button
              onClick={() => changeLanguage("en")}
              className="relative z-10 w-1/2 text-center text-neutral-700"
            >
              EN
            </button>
          </div>

        </div>
      </div>
    </header>
  )
}