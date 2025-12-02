//import { Link } from 'react-router-dom'
import { ExternalLink, Shield, Code2 } from 'lucide-react'

const projects = [
  {
    title: 'Laboratorios de SOC con Wazuh y Splunk',
    type: 'Blue Team / SOC',
    description:
      'Configuración de escenarios de monitorización con Wazuh y Splunk, análisis de logs, detección básica de incidentes y elaboración de informes.',
    tech: ['Wazuh', 'Splunk', 'Linux', 'Análisis de logs'],
  },
  {
    title: 'Prácticas de Pentesting en entornos simulados',
    type: 'Pentesting Junior',
    description:
      'Ejercicios de reconocimiento, explotación de vulnerabilidades y post-explotación inicial utilizando herramientas como Nmap, Hydra, Gobuster y sqlmap.',
    tech: ['Nmap', 'Hydra', 'Gobuster', 'sqlmap', 'Kali Linux'],
  },
  {
    title: 'Aplicación médica con Django',
    type: 'Desarrollo de software',
    description:
      'Aplicación web médica desarrollada con Django, aplicando buenas prácticas de programación, control de versiones con Git/GitHub y enfoque en seguridad básica.',
    tech: ['Django', 'Python', 'Git', 'GitHub'],
  },
]

function ProjectsPage() {
  return (
    <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <header className="mb-8 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            Proyectos
          </p>
          <h1 className="mt-2 text-3xl font-bold text-slate-100">
            Proyectos y laboratorios de ciberseguridad
          </h1>
          <p className="mt-3 text-sm text-slate-300">
            Una combinación de laboratorios de Blue Team, ejercicios de
            pentesting junior y desarrollo de software que refuerzan mi perfil
            como Analista SOC Junior con visión ofensiva y defensiva.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/70 p-4"
            >
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-primary">
                  {project.type}
                </p>
                <h2 className="mt-1 text-lg font-semibold text-slate-100">
                  {project.title}
                </h2>
                <p className="mt-2 text-sm text-slate-300">
                  {project.description}
                </p>
                <ul className="mt-3 flex flex-wrap gap-2 text-xs text-slate-300">
                  {project.tech.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-slate-700 bg-slate-900 px-2.5 py-1"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}

          {/* Tarjeta hacia tu portfolio anterior en GitHub Pages */}
          <article className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-primary">
                Portfolio
              </p>
              <h2 className="mt-1 text-lg font-semibold text-slate-100">
                Portfolio anterior en GitHub Pages
              </h2>
              <p className="mt-2 text-sm text-slate-300">
                Primera versión de mi portfolio, donde muestro otros ejercicios
                y proyectos personales relacionados con desarrollo y
                ciberseguridad.
              </p>
            </div>
            <div className="mt-4">
              <a
                href="https://raulrodelgo.github.io"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-4 py-2 text-xs font-semibold text-slate-100 hover:border-primary hover:text-primary"
              >
                Ver portfolio en GitHub Pages
                <ExternalLink size={16} />
              </a>
            </div>
          </article>
        </div>

        <div className="mt-10 grid gap-4 text-xs text-slate-300 md:grid-cols-2">
          <div className="flex items-start gap-3">
            <Shield className="mt-[2px] text-primary" size={18} />
            <p>
              Mi enfoque principal es el <strong>Blue Team</strong> y la
              monitorización de seguridad, apoyado en una base técnica sólida de
              pentesting junior gracias a la certificación <strong>eJPTv2</strong>.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <Code2 className="mt-[2px] text-accent" size={18} />
            <p>
              El desarrollo de software con <strong>Python/Django</strong> y el
              uso de <strong>Git/GitHub</strong> me permiten automatizar tareas
              y colaborar eficazmente en equipos técnicos.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectsPage