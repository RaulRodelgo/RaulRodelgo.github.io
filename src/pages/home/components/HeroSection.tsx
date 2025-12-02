import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import fotoperfil from '@/assets/fotoperfil.png'
import { ShieldCheck, Terminal, ArrowRight, Download } from 'lucide-react'

function HeroSection() {
  const { t } = useTranslation()

  return (
    <section className="border-b border-slate-800 bg-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 py-16 md:flex-row md:py-20">
        {/* Texto */}
        <div className="flex-1 space-y-6">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            SOC Analyst · Blue Team
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-100 md:text-5xl">
            {t('hero.greeting')}{' '}
            <span className="text-gradient">Raúl Rodelgo</span>
          </h1>
          <p className="text-lg font-medium text-slate-200">
            {t('hero.role')}
          </p>
          <p className="text-sm text-slate-400">
            Experiencia práctica en Wazuh, Splunk, Wireshark, Autopsy y
            entornos de pentesting junior. Busco incorporarme a un SOC como
            Analista Junior para seguir creciendo hacia Threat Hunting y roles
            avanzados de Blue Team.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-lg shadow-sky-500/30 hover:bg-sky-400"
            >
              {t('hero.cta')}
              <ArrowRight size={18} />
            </Link>

            <a
              href="/cv-raul-rodelgo.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-100 hover:border-primary hover:text-primary"
            >
              <Download size={18} />
              {t('hero.downloadCV')}
            </a>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-100 hover:border-primary hover:text-primary"
            >
              {t('cta.button')}
            </Link>
          </div>

          <div className="mt-4 grid gap-3 text-xs text-slate-300 sm:grid-cols-3">
            <div className="flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/60 px-3 py-2">
              <ShieldCheck size={18} className="text-primary" />
              <div>
                <p className="font-semibold">Blue Team & SOC</p>
                <p className="text-[11px] text-slate-400">
                  Wazuh, Splunk, análisis de logs
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/60 px-3 py-2">
              <Terminal size={18} className="text-accent" />
              <div>
                <p className="font-semibold">eJPTv2</p>
                <p className="text-[11px] text-slate-400">
                  Bases sólidas de redes y pentesting
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/60 px-3 py-2">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
              <div>
                <p className="font-semibold">Disponible</p>
                <p className="text-[11px] text-slate-400">
                Madrid · Presencial / Remoto / Híbrido
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Foto */}
        <div className="flex-1">
          <div className="relative mx-auto h-64 w-64 overflow-hidden rounded-3xl bg-slate-900/80 shadow-2xl shadow-sky-500/25 md:h-80 md:w-80">
            <img
              src={fotoperfil}
              alt="Raúl Rodelgo"
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection