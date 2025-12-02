import { useTranslation } from 'react-i18next'
import { Github, Linkedin } from 'lucide-react'

function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="border-t border-slate-800 bg-slate-900">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 md:flex-row md:items-center md:justify-between">
        <div className="text-sm text-slate-400">
          <p>
            © {new Date().getFullYear()} Raúl Rodelgo. {t('footer.rights')}.
          </p>
          <p className="mt-1 text-xs">
            {t('footer.madeWith')}{' '}
            <span className="text-primary">React · Vite · Tailwind CSS</span>
          </p>
        </div>

        <div className="flex items-center gap-4">
          
          <a
            href="https://github.com/raulrodelgo"
            target="_blank"
            rel="noreferrer"
            className="text-slate-300 hover:text-primary"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/raulrodelgo"
            target="_blank"
            rel="noreferrer"
            className="text-slate-300 hover:text-primary"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer