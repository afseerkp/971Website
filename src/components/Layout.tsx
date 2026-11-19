import { useEffect, useId, useRef, useState } from "react"
import { NavLink, Outlet, useLocation } from "react-router-dom"
import { company, nav, studies } from "../data.ts"

export default function Layout() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const [solid, setSolid] = useState(pathname !== "/")
  const menuRef = useRef<HTMLDivElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const titleId = useId()
  const overlay = pathname === "/" && !solid && !open

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    const onScroll = () => setSolid(pathname !== "/" || window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [pathname])

  useEffect(() => {
    if (!open) return
    const root = menuRef.current
    if (!root) return
    const previouslyFocused = document.activeElement as HTMLElement | null
    const nodes = () =>
      [...root.querySelectorAll<HTMLElement>("a[href], button:not([disabled])")]
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault()
        setOpen(false)
        return
      }
      if (event.key !== "Tab") return
      const items = nodes()
      const first = items[0]
      const last = items[items.length - 1]
      if (!first || !last) return
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }
    document.addEventListener("keydown", onKey)
    document.documentElement.classList.add("menu-open")
    nodes()[0]?.focus()
    return () => {
      document.removeEventListener("keydown", onKey)
      document.documentElement.classList.remove("menu-open")
      previouslyFocused?.focus()
    }
  }, [open])

  return (
    <>
      <a className="skip" href="#content">
        Skip to content
      </a>
      <header className={overlay ? "header overlay" : "header solid"}>
        <NavLink to="/" className="logo" aria-label="+971 Architects, home" end>
          <span className="logo-mark">+971</span>
          <span className="logo-name">Architects</span>
        </NavLink>
        <nav className="desktop-nav" aria-label="Primary">
          {nav.map((item) => (
            <NavLink key={item.to} to={item.to}>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <button
          ref={menuButtonRef}
          className="menu-button"
          type="button"
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpen(true)}
        >
          Menu
        </button>
      </header>

      {open ? (
        <div
          ref={menuRef}
          id="site-menu"
          className="menu"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
        >
          <div className="menu-top">
            <p id={titleId} className="logo-mark">
              +971
            </p>
            <button type="button" className="menu-button on-dark" onClick={() => setOpen(false)}>
              Close
            </button>
          </div>
          <div className="menu-body">
            <nav aria-label="Menu">
              <ul>
                <li>
                  <NavLink to="/" end onClick={() => setOpen(false)}>
                    Home
                  </NavLink>
                </li>
                {nav.map((item) => (
                  <li key={item.to}>
                    <NavLink to={item.to} onClick={() => setOpen(false)}>
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="menu-contact">
              <p className="eyebrow on-dark">Studio</p>
              <address>
                {company.address.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </address>
              <p>
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </p>
              {company.phones.map((phone) => (
                <p key={phone.href}>
                  <a href={phone.href}>{phone.label}</a>
                </p>
              ))}
            </div>
          </div>
        </div>
      ) : null}

      <main id="content">
        <Outlet />
      </main>

      <footer className="footer">
        <div className="wrap footer-grid">
          <div>
            <p className="logo-mark">+971</p>
            <p className="footer-name">Architects</p>
            <p className="footer-note">Architectural and interior design consultancy. Dubai, since {company.founded}.</p>
          </div>
          <nav aria-label="Footer">
            {nav.map((item) => (
              <NavLink key={item.to} to={item.to}>
                {item.label}
              </NavLink>
            ))}
            <NavLink to="/privacy">Privacy</NavLink>
          </nav>
          <address>
            {company.address.map((line) => (
              <span key={line}>{line}</span>
            ))}
            <span>P.O. Box {company.poBox}</span>
            <a href={`mailto:${company.email}`}>{company.email}</a>
            {company.phones.map((phone) => (
              <a key={phone.href} href={phone.href}>
                {phone.label}
              </a>
            ))}
          </address>
        </div>
        <div className="wrap credits">
          <p>Photographs are studies and references, not pictures of the studio’s commissions.</p>
          <ul>
            {studies
              .filter((study) => study.href)
              .map((study) => (
                <li key={study.id}>
                  <a href={study.href} rel="noreferrer">
                    {study.credit}
                  </a>
                </li>
              ))}
            <li>Contemporary reference photographs are used under the Unsplash Licence. They are not commissions of the studio.</li>
          </ul>
          <p className="legal">
            © {new Date().getFullYear()} {company.name}. Dubai.
          </p>
        </div>
      </footer>
    </>
  )
}
