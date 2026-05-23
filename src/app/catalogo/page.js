'use client'

import { useState } from 'react'

const cortes = [
  {
    id: 1,
    nombre: 'Fade Clásico',
    rostro: ['oval', 'cuadrado'],
    estilo: 'clásico',
    largo: 'corto',
    descripcion: 'Degradado limpio desde los lados hacia arriba. Versátil y atemporal.',
    emoji: '💈'
  },
  {
    id: 2,
    nombre: 'Undercut Texturizado',
    rostro: ['oval', 'rectangular'],
    estilo: 'moderno',
    largo: 'medio',
    descripcion: 'Lados rapados con volumen y textura arriba. Ideal para cabello grueso.',
    emoji: '⚡'
  },
  {
    id: 3,
    nombre: 'Crop Francés',
    rostro: ['redondo', 'cuadrado'],
    estilo: 'moderno',
    largo: 'corto',
    descripcion: 'Flequillo recto y lados cortos. Estilo europeo muy popular.',
    emoji: '✂️'
  },
  {
    id: 4,
    nombre: 'Pompadour Moderno',
    rostro: ['oval', 'redondo'],
    estilo: 'clásico',
    largo: 'medio',
    descripcion: 'Volumen hacia atrás con fade en los lados. Elegante y masculino.',
    emoji: '👑'
  },
  {
    id: 5,
    nombre: 'Buzz Cut',
    rostro: ['oval', 'cuadrado', 'rectangular'],
    estilo: 'minimalista',
    largo: 'corto',
    descripcion: 'Corte al ras uniforme. Simple, fresco y sin mantenimiento.',
    emoji: '🔱'
  },
  {
    id: 6,
    nombre: 'Texturizado Largo',
    rostro: ['cuadrado', 'rectangular'],
    estilo: 'moderno',
    largo: 'largo',
    descripcion: 'Capas con textura para cabello largo. Estilo relajado y natural.',
    emoji: '🌊'
  },
  {
    id: 7,
    nombre: 'Caesar Cut',
    rostro: ['redondo', 'oval'],
    estilo: 'clásico',
    largo: 'corto',
    descripcion: 'Flequillo hacia adelante con largo uniforme. Corte romano clásico.',
    emoji: '⚔️'
  },
  {
    id: 8,
    nombre: 'Quiff Moderno',
    rostro: ['oval', 'rectangular'],
    estilo: 'moderno',
    largo: 'medio',
    descripcion: 'Volumen al frente con lados fade. Dinámico y juvenil.',
    emoji: '🎯'
  },
]

const rostros = ['todos', 'oval', 'redondo', 'cuadrado', 'rectangular']
const estilos = ['todos', 'clásico', 'moderno', 'minimalista']
const largos = ['todos', 'corto', 'medio', 'largo']

export default function Catalogo() {
  const [filtroRostro, setFiltroRostro] = useState('todos')
  const [filtroEstilo, setFiltroEstilo] = useState('todos')
  const [filtroLargo, setFiltroLargo] = useState('todos')

  const cortesFiltrados = cortes.filter(c => {
    const matchRostro = filtroRostro === 'todos' || c.rostro.includes(filtroRostro)
    const matchEstilo = filtroEstilo === 'todos' || c.estilo === filtroEstilo
    const matchLargo = filtroLargo === 'todos' || c.largo === filtroLargo
    return matchRostro && matchEstilo && matchLargo
  })

  return (
    <main className="min-h-screen bg-zinc-950 text-white">

      {/* Navbar */}
      <nav className="border-b border-zinc-800 px-6 py-4 flex items-center justify-between">
        <a href="/" className="text-xl font-bold tracking-tight">✂️ BarberIA</a>
        <div className="flex gap-6 text-sm text-zinc-400">
          <a href="/" className="hover:text-white transition-colors">Inicio</a>
          <a href="/catalogo" className="text-white">Catálogo</a>
          <a href="/visagismo" className="hover:text-white transition-colors">Visagismo IA</a>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-6 py-12">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold mb-2">Catálogo de cortes</h1>
          <p className="text-zinc-400">Filtra por tu tipo de rostro, estilo y largo preferido.</p>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap gap-6 mb-10">

          <div>
            <p className="text-xs text-zinc-500 uppercase tracking-widest mb-2">Tipo de rostro</p>
            <div className="flex gap-2 flex-wrap">
              {rostros.map(r => (
                <button
                  key={r}
                  onClick={() => setFiltroRostro(r)}
                  className={`px-4 py-1.5 rounded-full text-sm border transition-colors capitalize ${
                    filtroRostro === r
                      ? 'bg-white text-black border-white'
                      : 'border-zinc-700 text-zinc-400 hover:border-zinc-500'
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs text-zinc-500 uppercase tracking-widest mb-2">Estilo</p>
            <div className="flex gap-2 flex-wrap">
              {estilos.map(e => (
                <button
                  key={e}
                  onClick={() => setFiltroEstilo(e)}
                  className={`px-4 py-1.5 rounded-full text-sm border transition-colors capitalize ${
                    filtroEstilo === e
                      ? 'bg-white text-black border-white'
                      : 'border-zinc-700 text-zinc-400 hover:border-zinc-500'
                  }`}
                >
                  {e}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs text-zinc-500 uppercase tracking-widest mb-2">Largo</p>
            <div className="flex gap-2 flex-wrap">
              {largos.map(l => (
                <button
                  key={l}
                  onClick={() => setFiltroLargo(l)}
                  className={`px-4 py-1.5 rounded-full text-sm border transition-colors capitalize ${
                    filtroLargo === l
                      ? 'bg-white text-black border-white'
                      : 'border-zinc-700 text-zinc-400 hover:border-zinc-500'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Contador */}
        <p className="text-zinc-500 text-sm mb-6">
          {cortesFiltrados.length} corte{cortesFiltrados.length !== 1 ? 's' : ''} encontrado{cortesFiltrados.length !== 1 ? 's' : ''}
        </p>

        {/* Grid de cortes */}
        {cortesFiltrados.length === 0 ? (
          <div className="text-center py-24 text-zinc-600">
            <p className="text-4xl mb-4">✂️</p>
            <p>No hay cortes con esos filtros.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {cortesFiltrados.map(corte => (
              <div
                key={corte.id}
                className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 hover:border-zinc-600 transition-colors"
              >
                <div className="text-4xl mb-4">{corte.emoji}</div>
                <h3 className="font-semibold mb-1">{corte.nombre}</h3>
                <p className="text-zinc-400 text-sm mb-4">{corte.descripcion}</p>
                <div className="flex flex-wrap gap-1">
                  <span className="text-xs bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded-full capitalize">
                    {corte.largo}
                  </span>
                  <span className="text-xs bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded-full capitalize">
                    {corte.estilo}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </main>
  )
}