import { FormEvent, useState } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'

function ContactPage() {
  const [sending, setSending] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSending(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('message')

    const subject = encodeURIComponent(`Contacto portfolio - ${name}`)
    const body = encodeURIComponent(
      `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`,
    )

    window.location.href = `mailto:raul.rodelgo@gmail.com?subject=${subject}&body=${body}`
    setTimeout(() => setSending(false), 1000)
  }

  return (
    <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <header className="mb-8 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            Contacto
          </p>
          <h1 className="mt-2 text-3xl font-bold text-slate-100">
            Hablemos sobre ciberseguridad
          </h1>
          <p className="mt-3 text-sm text-slate-300">
            Estoy abierto a oportunidades como Analista SOC Junior, roles de
            Blue Team o posiciones donde pueda seguir creciendo en
            ciberseguridad y aportar valor al equipo.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-[2fr,1.2fr]">
          {/* Formulario */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-medium text-slate-300"
                >
                  Nombre
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 outline-none focus:border-primary"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-medium text-slate-300"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 outline-none focus:border-primary"
                  placeholder="tuemail@ejemplo.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-medium text-slate-300"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 outline-none focus:border-primary"
                  placeholder="Cuéntame brevemente qué necesitas o en qué podría ayudarte."
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-slate-900 shadow-lg shadow-sky-500/30 hover:bg-sky-400 disabled:opacity-60"
              >
                <Mail size={18} />
                {sending ? 'Abriendo tu cliente de correo…' : 'Enviar mensaje'}
              </button>
            </form>
          </div>

          {/* Info de contacto */}
          <aside className="space-y-4 text-sm text-slate-300">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
              <h2 className="text-sm font-semibold text-slate-100">
                Información de contacto
              </h2>
              <div className="mt-3 space-y-2 text-xs">
                <p className="flex items-center gap-2">
                  <Mail size={16} className="text-primary" />
                  <a
                    href="mailto:raul.rodelgo@gmail.com"
                    className="hover:text-primary"
                  >
                    raul.rodelgo@gmail.com
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Phone size={16} className="text-primary" />
                  <span>+34 722 430 737</span>
                </p>
                <p className="flex items-center gap-2">
                  <MapPin size={16} className="text-primary" />
                  <span>Madrid, España</span>
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-xs text-slate-300">
              <p className="font-semibold text-slate-100">Disponibilidad</p>
              <p className="mt-1">
                Incorporación a corto plazo en posiciones de ciberseguridad
                junior (SOC / Blue Team), formato presencial, híbrido o remoto.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default ContactPage