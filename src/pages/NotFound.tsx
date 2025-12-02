import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center bg-slate-950">
      <div className="mx-auto max-w-xl px-4 text-center">
        <p className="text-sm font-semibold text-primary">404</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-100">
          Página no encontrada
        </h1>
        <p className="mt-3 text-sm text-slate-400">
          Puede que el enlace esté roto o que la página haya sido movida.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Link
            to="/"
            className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-slate-900 hover:bg-sky-400"
          >
            Volver al inicio
          </Link>
          <Link
            to="/contact"
            className="rounded-full border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 hover:border-primary hover:text-primary"
          >
            Contactar
          </Link>
        </div>
      </div>
    </section>
  )
}

export default NotFound