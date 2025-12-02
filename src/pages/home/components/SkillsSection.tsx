import { useTranslation } from 'react-i18next'

const skills = {
  blueTeam: [
    'Wazuh',
    'Splunk',
    'Análisis de logs',
    'Respuesta básica ante incidentes',
  ],
  pentesting: ['Nmap', 'Hydra', 'Gobuster', 'sqlmap / SQLi', 'Kali Linux'],
  forensics: ['Wireshark', 'Autopsy', 'TCP/IP', 'DNS', 'HTTP/HTTPS'],
  systems: ['Linux', 'Windows', 'Python', 'Bash', 'Django', 'Git / GitHub'],
}

function SkillsSection() {
  const { t } = useTranslation()

  return (
    <section
      id="skills"
      className="border-b border-slate-800 bg-gradient-to-b from-slate-950 to-slate-900"
    >
      <div className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
          {t('skills.title')}
        </h2>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
            <h3 className="text-sm font-semibold text-slate-100">
              {t('skills.blueTeam')}
            </h3>
            <ul className="mt-2 flex flex-wrap gap-2 text-xs text-slate-300">
              {skills.blueTeam.map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
            <h3 className="text-sm font-semibold text-slate-100">
              {t('skills.pentesting')}
            </h3>
            <ul className="mt-2 flex flex-wrap gap-2 text-xs text-slate-300">
              {skills.pentesting.map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
            <h3 className="text-sm font-semibold text-slate-100">
              {t('skills.forensics')}
            </h3>
            <ul className="mt-2 flex flex-wrap gap-2 text-xs text-slate-300">
              {skills.forensics.map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
            <h3 className="text-sm font-semibold text-slate-100">
              {t('skills.systems')}
            </h3>
            <ul className="mt-2 flex flex-wrap gap-2 text-xs text-slate-300">
              {skills.systems.map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection