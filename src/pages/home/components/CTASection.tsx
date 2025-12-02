import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

function CTASection() {
  const { t } = useTranslation()

  return (
    <section className="border-b border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="rounded-3xl border border-slate-800 bg-gradient-to-r from-primary/10 via-slate-900 to-accent/10 px-6 py-8 text-center md:px-10 md:py-10">
          <h2 className="text-2xl font-semibold text-slate-100">
            {t('cta.title')}
          </h2>
          <p className="mt-2 text-sm text-slate-300">{t('cta.subtitle')}</p>
          <div className="mt-5 flex justify-center">
            <Link
              to="/contact"
              className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-slate-900 shadow-lg shadow-sky-500/30 hover:bg-sky-400"
            >
              {t('cta.button')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection