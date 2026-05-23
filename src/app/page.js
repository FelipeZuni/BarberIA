export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white font-sans">

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/10 backdrop-blur-md bg-black/60 px-8 py-4 flex items-center justify-between">
        <span className="text-lg font-bold tracking-[0.2em] uppercase">✦ BarberIA</span>
        <div className="hidden md:flex gap-8 text-xs tracking-[0.15em] uppercase text-zinc-400">
          <a href="/" className="hover:text-white transition-colors">Inicio</a>
          <a href="/catalogo" className="hover:text-white transition-colors">Catálogo</a>
          <a href="/visagismo" className="hover:text-white transition-colors">Visagismo IA</a>
          <a href="/precios" className="hover:text-white transition-colors">Precios</a>
        </div>
        
        <a href="/visagismo" className="text-xs tracking-[0.15em] uppercase bg-white text-black px-5 py-2 hover:bg-zinc-200 transition-colors">Probar IA</a>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#0a0a0a] z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1600')" }}
        />
        <div className="relative z-20 max-w-3xl">
          <p className="text-xs tracking-[0.4em] uppercase text-zinc-400 mb-6">
            Inteligencia artificial · Barberías · Estilo
          </p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 tracking-tight">
            Donde el estilo<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-500">
              encuentra su forma.
            </span>
          </h1>
          <p className="text-zinc-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Descubre el corte perfecto para tu rostro con inteligencia artificial. 
            Sube una foto y visualiza tu transformación antes de sentarte en la silla.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            
          <a href="/visagismo" className="bg-white text-black px-8 py-4 text-sm tracking-[0.1em] uppercase font-semibold hover:bg-zinc-200 transition-colors">Analizar mi rostro</a>
            
          <a href="/catalogo" className="border border-zinc-700 px-8 py-4 text-sm tracking-[0.1em] uppercase text-zinc-300 hover:border-zinc-400 hover:text-white transition-colors">Ver catálogo</a>
          </div>
        </div>
        <div className="absolute bottom-10 z-20 flex flex-col items-center gap-2 text-zinc-600 text-xs tracking-widest uppercase">
          <span>Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-zinc-600 to-transparent" />
        </div>
      </section>

      {/* Bienvenida */}
      <section className="max-w-4xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-xs tracking-[0.3em] uppercase text-zinc-500 mb-4">Bienvenido</p>
          <h2 className="text-4xl font-bold mb-6 leading-tight">
            Una experiencia de barbería elevada.
          </h2>
          <p className="text-zinc-400 leading-relaxed mb-6">
            BarberIA combina el arte clásico de la barbería con tecnología de visión artificial. 
            Analizamos tu estructura facial, tipo de cabello y estilo de vida para recomendarte 
            los cortes que mejor van contigo.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            Explora nuestro catálogo, filtra por tipo de rostro y visualiza el resultado 
            con IA generativa antes de tomar la decisión.
          </p>
        </div>
        <div className="bg-zinc-900 border border-zinc-800 p-8">
          <div className="text-4xl mb-4">✦</div>
          <blockquote className="text-xl font-light italic text-zinc-300 leading-relaxed">
            "La gente te mirará.<br />Haz que valga la pena."
          </blockquote>
          <p className="text-zinc-600 text-sm mt-4">— Harry Winston</p>
        </div>
      </section>

      {/* Servicios */}
      <section className="border-t border-zinc-900 px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-zinc-500 mb-3 text-center">Lo que hacemos</p>
          <h2 className="text-3xl font-bold text-center mb-16">Servicios</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-zinc-800">
            {[
              { icon: '✂️', nombre: 'Corte', desc: 'Clásico, fade, texturizado — el que mejor va contigo.' },
              { icon: '🪒', nombre: 'Barba', desc: 'Diseño, perfilado y afeitado tradicional con navaja.' },
              { icon: '🤖', nombre: 'Visagismo IA', desc: 'Análisis facial con inteligencia artificial.' },
              { icon: '💆', nombre: 'Masaje', desc: 'Relajate con un masaje capilar o de cuello.' },
              { icon: '🧴', nombre: 'Tratamientos', desc: 'Máscaras, keratina y cuidado del cuero cabelludo.' },
              { icon: '📦', nombre: 'Paquetes', desc: 'Combina servicios y obtén el mejor precio.' },
            ].map((s) => (
              <div key={s.nombre} className="bg-[#0a0a0a] p-8 hover:bg-zinc-900 transition-colors group">
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="font-semibold tracking-wide mb-2">{s.nombre}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA central */}
      <section className="relative py-32 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 opacity-60" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <p className="text-xs tracking-[0.4em] uppercase text-zinc-400 mb-4">Tecnología + Estilo</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Tu próximo corte,<br />diseñado por IA.
          </h2>
          <p className="text-zinc-400 mb-10">
            Sube una foto, analizamos tu rostro y te mostramos cómo quedarías 
            con cada corte antes de tomar la decisión.
          </p>
          
          <a href="/visagismo" className="inline-block bg-white text-black px-10 py-4 text-sm tracking-[0.15em] uppercase font-semibold hover:bg-zinc-200 transition-colors">Probar visagismo IA →</a>
        </div>
      </section>

      {/* Precios resumidos */}
      <section className="border-t border-zinc-900 px-6 py-24">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-zinc-500 mb-3 text-center">Transparencia</p>
          <h2 className="text-3xl font-bold text-center mb-16">Precios</h2>
          <div className="space-y-px">
            {[
              { servicio: 'Corte clásico', precio: '$15.000' },
              { servicio: 'Skin fade', precio: '$18.000' },
              { servicio: 'Corte + barba', precio: '$22.000' },
              { servicio: 'Diseño de barba', precio: '$10.000' },
              { servicio: 'Afeitado tradicional', precio: '$12.000' },
              { servicio: 'Visagismo IA + corte', precio: '$25.000' },
            ].map((p) => (
              <div key={p.servicio} className="flex justify-between items-center py-4 border-b border-zinc-900 group hover:border-zinc-700 transition-colors">
                <span className="text-zinc-300 text-sm tracking-wide group-hover:text-white transition-colors">{p.servicio}</span>
                <span className="text-zinc-400 text-sm font-mono">{p.precio}</span>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a href="/precios" className="text-xs tracking-[0.2em] uppercase text-zinc-500 hover:text-white transition-colors border-b border-zinc-700 pb-1">
              Ver lista completa →
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-900 px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-600 text-xs tracking-widest uppercase">
        <span>✦ BarberIA</span>
        <span>© 2025 — Todos los derechos reservados</span>
        <div className="flex gap-6">
          <a href="/catalogo" className="hover:text-white transition-colors">Catálogo</a>
          <a href="/visagismo" className="hover:text-white transition-colors">Visagismo IA</a>
        </div>
      </footer>

    </main>
  )
}