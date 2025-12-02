import { useTranslation } from 'react-i18next'

const certifications = [
  {
    name: 'eJPTv2 - INE Security',
    year: '2025',
    highlight:
      'Refuerza la base técnica en redes, pentesting y visión ofensiva.',
  },
  {
    name: 'Penetration Testing, Threat Hunting, and Cryptography – IBM',
    year: '2025',
    highlight: 'Fundamentos de pentesting, threat hunting y criptografía.',
  },
  {
    name: 'Introducción al SOC – Udemy',
    year: '2025',
    highlight: 'Conceptos clave del funcionamiento de un SOC.',
  },
  {
    name: 'Introduction to Cybersecurity – Cisco',
    year: '2025',
    highlight: 'Bases generales de ciberseguridad y buenas prácticas.',
  },
  {
    name: 'Introducción a la Seguridad de la Información – Telefónica',
    year: '2024',
    highlight: 'Seguridad de la información y enfoque corporativo.',
  },
]

function CertificationsSection() {
  const { t } = useTranslation()

  return (
    <section
      id="certifications"
      className="border-b border-slate-800 bg-slate-950"
    >
      <div className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
          {t('certifications.title')}
        </h2>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {certifications.map((cert) => (
            <article
              key={cert.name}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4"
            >
              <header className="flex items-center justify-between gap-3">
                <h3 className="text-sm font-semibold text-slate-100">
                  {cert.name}
                </h3>
                <span className="rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-300">
                  {cert.year}
                </span>
              </header>
              <p className="mt-2 text-xs text-slate-400">{cert.highlight}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CertificationsSection