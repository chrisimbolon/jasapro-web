import { Link, useLocation } from "react-router-dom"

export default function Navbar() {
  const location = useLocation()

  const navItems = [
    { name: "Capabilities", path: "/capabilities" },
    { name: "Work", path: "/work" },
    { name: "Company", path: "/company" },
  ]

  return (
    <header className="border-b border-navy/10">
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
              className={`transition ${
                location.pathname === item.path
                  ? "text-clay"
                  : "hover:text-clay"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link
          to="/contact"
          className="bg-clay text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-clayDark transition"
        >
          Start a Project
        </Link>
      </div>
    </header>
  )
}