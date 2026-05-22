export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      
      {/* Navbar */}
      <nav className="border-b border-zinc-800 px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold tracking-tight">✂️ BarberIA</h1>
        <div className="flex gap-6 text-sm text-zinc-400">
          <a href="/" className="hover:text-white transition-colors">Inicio</a>
          <a href="/catalogo" className="hover:text-white transition-colors">Catálogo</a>
          <a href="/visagismo" className="hover:text-white transition-colors">Visagismo IA</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="px-6 py-24 text-center max-w-3xl mx-auto">
        <span className="text-xs font-semibold tracking-widest text-zinc-500 uppercase">
          Inteligencia artificial para barberías
        </span>
        <h2 className="mt-4 text-5xl font-bold leading-tight">
          Descubre el corte<br />perfecto para ti
        </h2>
        <p className="mt-6 text-zinc-400 text-lg">
          Sube una foto, analizamos tu forma facial y te mostramos 
          cómo quedarías con distintos cortes usando IA generativa.
        </p>
        <div className="mt-10 flex gap-4 justify-center">
          <a href="/visagismo" className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-zinc-200 transition-colors">
            Probar ahora
          </a>
          <a href="/catalogo" className="border border-zinc-700 px-6 py-3 rounded-lg font-semibold hover:border-zinc-500 transition-colors">
            Ver catálogo
          </a>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-16 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800">
          <div className="text-3xl mb-4">📸</div>
          <h3 className="font-semibold mb-2">Análisis facial</h3>
          <p className="text-zinc-400 text-sm">Detectamos tu forma de rostro y tipo de cabello automáticamente.</p>
        </div>
        <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800">
          <div className="text-3xl mb-4">🤖</div>
          <h3 className="font-semibold mb-2">IA generativa</h3>
          <p className="text-zinc-400 text-sm">Visualiza cómo te verías con cada corte antes de hacértelo.</p>
        </div>
        <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800">
          <div className="text-3xl mb-4">✂️</div>
          <h3 className="font-semibold mb-2">Catálogo de cortes</h3>
          <p className="text-zinc-400 text-sm">Explora cortes por tipo de rostro, largo y estilo.</p>
        </div>
      </section>

    </main>
  )
}