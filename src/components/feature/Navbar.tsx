import { Link, NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import fotoperfil from '@/assets/fotoperfil.png'

const navLinkClass =
  'px-3 py-2 text-sm font-medium transition-colors hover:text-primary'

function Navbar() {
  const { t, i18n } = useTranslation()
  const [open, setOpen] = useState(false)

  const changeLang = (lng: 'es' | 'en') => {
    i18n.changeLanguage(lng)
  }

  return (
    <header className="sticky top-0 z-30 border-b border-slate-800 bg-slate-900/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <img
            src={fotoperfil}
            alt="Raúl Rodelgo"
            className="h-8 w-8 rounded-full object-cover"
          />
          <div className="leading-tight">
            <p className="text-sm font-semibold text-slate-100">Raúl Rodelgo</p>
            <p className="text-xs text-slate-400">Cybersecurity Specialist</p>
          </div>
        </Link>

        {/* Desktop menu */}
        <div className="hidden items-center gap-6 md:flex">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${navLinkClass} ${isActive ? 'text-primary' : 'text-slate-300'}`
            }
          >
            {t('nav.home')}
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `${navLinkClass} ${isActive ? 'text-primary' : 'text-slate-300'}`
            }
          >
            {t('nav.projects')}
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${navLinkClass} ${isActive ? 'text-primary' : 'text-slate-300'}`
            }
          >
            {t('nav.contact')}
          </NavLink>

          <div className="flex items-center gap-1 rounded-full bg-slate-800 p-1 text-xs">
            <button
              onClick={() => changeLang('es')}
              className={`rounded-full px-2 py-1 ${
                i18n.language === 'es'
                  ? 'bg-primary text-slate-900'
                  : 'text-slate-300'
              }`}
            >
              ES
            </button>
            <button
              onClick={() => changeLang('en')}
              className={`rounded-full px-2 py-1 ${
                i18n.language === 'en'
                  ? 'bg-primary text-slate-900'
                  : 'text-slate-300'
              }`}
            >
              EN
            </button>
          </div>
        </div>

        {/* Mobile */}
        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-slate-200 md:hidden"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="border-t border-slate-800 bg-slate-900 px-4 pb-4 md:hidden">
          <div className="flex flex-col gap-2 py-2">
            <NavLink
              to="/"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `${navLinkClass} ${
                  isActive ? 'text-primary' : 'text-slate-300'
                }`
              }
            >
              {t('nav.home')}
            </NavLink>
            <NavLink
              to="/projects"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `${navLinkClass} ${
                  isActive ? 'text-primary' : 'text-slate-300'
                }`
              }
            >
              {t('nav.projects')}
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `${navLinkClass} ${
                  isActive ? 'text-primary' : 'text-slate-300'
                }`
              }
            >
              {t('nav.contact')}
            </NavLink>
          </div>

          <div className="mt-2 flex gap-2">
            <button
              onClick={() => changeLang('es')}
              className={`flex-1 rounded-md border px-2 py-1 text-sm ${
                i18n.language === 'es'
                  ? 'border-primary bg-primary text-slate-900'
                  : 'border-slate-700 text-slate-200'
              }`}
            >
              Español
            </button>
            <button
              onClick={() => changeLang('en')}
              className={`flex-1 rounded-md border px-2 py-1 text-sm ${
                i18n.language === 'en'
                  ? 'border-primary bg-primary text-slate-900'
                  : 'border-slate-700 text-slate-200'
              }`}
            >
              English
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar