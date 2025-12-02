import { useTranslation } from 'react-i18next'

const experiences = [
  {
    company: 'Mtech Group',
    role: 'Técnico de sistemas',
    period: 'Oct. 2025 - Actualidad',
    bullets: [
      'Soporte a usuarios en entorno corporativo y gestión de incidencias mediante herramientas de ticketing.',
      'Administración de cuentas de usuario, instalación y configuración de sistemas y equipos.',
      'Elaboración de informes sobre la seguridad de dispositivos y auditoría básica de seguridad de usuarios y servidores.',
      'Operativa similar a un SOC de nivel 1 en la gestión de incidencias y monitorización básica.',
    ],
  },
  {
    company: 'Onets',
    role: 'Desarrollador de software',
    period: 'Abr. 2024 – Jun. 2024',
    bullets: [
      'Desarrollo de una aplicación médica utilizando Django (Python).',
      'Uso de Git/GitHub y buenas prácticas de programación, útil para scripting y automatización en ciberseguridad.',
    ],
  },
  {
    company: '3GH',
    role: 'Técnico',
    period: 'Abr. 2022 – Jul. 2022',
    bullets: [
      'Reparación, configuración e instalación de software en portátiles y tablets.',
      'Puesta a punto de dispositivos para su despliegue en entornos corporativos.',
    ],
  },
]

function ExperienceSection() {
  const { t } = useTranslation()

  return (
    <section
      id="experience"
      className="border-b border-slate-800 bg-gradient-to-b from-slate-950 to-slate-900"
    >
      <div className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
          {t('experience.title')}
        </h2>

        <div className="mt-6 space-y-5">
          {experiences.map((exp) => (
            <article
              key={exp.company}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4"
            >
              <header className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h3 className="text-sm font-semibold text-slate-100">
                    {exp.role}
                  </h3>
                  <p className="text-xs text-slate-400">{exp.company}</p>
                </div>
                <span className="rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-300">
                  {exp.period}
                </span>
              </header>
              <ul className="mt-3 space-y-1 text-xs text-slate-300">
                {exp.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-[6px] h-[3px] w-[3px] rounded-full bg-primary" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection