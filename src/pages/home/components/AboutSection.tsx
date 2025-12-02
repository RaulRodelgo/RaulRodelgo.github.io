import { useTranslation } from 'react-i18next'

function AboutSection() {
  const { t } = useTranslation()

  return (
    <section id="about" className="border-b border-slate-800 bg-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-14 md:flex-row">
        <div className="md:w-1/3">
          <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            {t('about.title')}
          </h2>
        </div>
        <div className="space-y-4 text-sm text-slate-300 md:w-2/3">
          <p>{t('about.description')}</p>
          <p>{t('about.goal')}</p>
          <p>
            Certificado en <strong>eJPTv2</strong>, con buena base en redes,
            explotación de vulnerabilidades y visión ofensiva, que aplico para
            reforzar mis capacidades defensivas en Blue Team.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutSection