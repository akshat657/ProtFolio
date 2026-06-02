interface NavLink {
  label: string
  active?: boolean
}

const navLinks: NavLink[] = [
  { label: 'Home', active: true },
  { label: 'Studio' },
  { label: 'About' },
  { label: 'Journal' },
  { label: 'Reach Us' },
]

export default function Navbar() {
  return (
    <nav className="relative z-10">
      <div className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">

        {/* Logo */}
        <span
          className="text-3xl tracking-tight text-foreground"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Velorah<sup className="text-xs">®</sup>
        </span>

        {/* Nav links — hidden on mobile, visible md and up */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href="#"
                className={`text-sm transition-colors ${
                  link.active
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA button */}
        <button className="liquid-glass rounded-full px-6 py-2.5 text-sm text-foreground hover:scale-[1.03] transition-transform cursor-pointer">
          Begin Journey
        </button>

      </div>
    </nav>
  )
}
