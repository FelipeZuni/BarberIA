'use client'

import { useState } from 'react'
import Image from 'next/image'

const fotos = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600',
    alt: 'Fade clásico',
    categoria: 'fade',
    barbero: 'Carlos M.',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600',
    alt: 'Corte texturizado',
    categoria: 'texturizado',
    barbero: 'Diego R.',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600',
    alt: 'Undercut moderno',
    categoria: 'undercut',
    barbero: 'Carlos M.',
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=600',
    alt: 'Skin fade con barba',
    categoria: 'fade',
    barbero: 'Martín P.',
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?w=600',
    alt: 'Corte clásico caballero',
    categoria: 'clásico',
    barbero: 'Diego R.',
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1512864084360-7c0c4d0a0f8c?w=600',
    alt: 'Degradado moderno',
    categoria: 'fade',
    barbero: 'Martín P.',
  },
  {
    id: 7,
    url: 'https://images.unsplash.com/photo-1534297635766-a262cdcb8ee4?w=600',
    alt: 'Quiff con fade',
    categoria: 'texturizado',
    barbero: 'Carlos M.',
  },
  {
    id: 8,
    url: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600',
    alt: 'Afeitado tradicional',
    categoria: 'clásico',
    barbero: 'Diego R.',
  },
  {
    id: 9,
    url: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=600',
    alt: 'Crop texturizado',
    categoria: 'texturizado',
    barbero: 'Martín P.',
  },
  {
    id: 10,
    url: 'https://images.unsplash.com/photo-1581182800629-7d90925ad072?w=600',
    alt: 'Undercut largo',
    categoria: 'undercut',
    barbero: 'Carlos M.',
  },
  {
    id: 11,
    url: 'https://images.unsplash.com/photo-1541533848490-bc8115cd6522?w=600',
    alt: 'Fade bajo con barba',
    categoria: 'fade',
    barbero: 'Diego R.',
  },
  {
    id: 12,
    url: 'https://images.unsplash.com/photo-1592647420148-bfcc177e2117?w=600',
    alt: 'Estilo natural',
    categoria: 'clásico',
    barbero: 'Martín P.',
  },
]

const categorias = ['todos', 'fade', 'texturizado', 'undercut', 'clásico']

export default function Galeria() {
  const [filtro, setFiltro] = useState('todos')
  const [fotoAbierta, setFotoAbierta] = useState(null)

  const fotosFiltradas = filtro === 'todos'
    ? fotos
    : fotos.filter(f => f.categoria === filtro)

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/10 backdrop-blur-md bg-black/60 px-8 py-4 flex items-center justify-between">
        <a href="/" className="text-lg font-bold tracking-[0.2em] uppercase">✦ BarberIA</a>
        <div className="hidden md:flex gap-8 text-xs tracking-[0.15em] uppercase text-zinc-400">
          <a href="/" className="hover:text-white transition-colors">Inicio</a>
          <a href="/catalogo" className="hover:text-white transition-colors">Catálogo</a>
          <a href="/galeria" className="text-white">Galería</a>
          <a href="/visagismo" className="hover:text-white transition-colors">Visagismo IA</a>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 pt-32 pb-20">

        {/* Header */}
        <div className="mb-12 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-zinc-500 mb-3">Nuestro trabajo</p>
          <h1 className="text-4xl font-bold mb-4">Galería</h1>
          <p className="text-zinc-400 max-w-md mx-auto">
            Cada corte es una historia. Mirá el trabajo de nuestros barberos.
          </p>
        </div>

        {/* Filtros */}
        <div className="flex gap-3 justify-center flex-wrap mb-12">
          {categorias.map(cat => (
            <button
              key={cat}
              onClick={() => setFiltro(cat)}
              className={`px-5 py-2 text-xs tracking-[0.15em] uppercase transition-colors border ${
                filtro === cat
                  ? 'bg-white text-black border-white'
                  : 'border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid masonry con CSS columns */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {fotosFiltradas.map(foto => (
            <div
              key={foto.id}
              className="break-inside-avoid group relative overflow-hidden cursor-pointer"
              onClick={() => setFotoAbierta(foto)}
            >
              <img
                src={foto.url}
                alt={foto.alt}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay al hover */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <p className="text-white font-semibold text-sm">{foto.alt}</p>
                <p className="text-zinc-400 text-xs mt-1">por {foto.barbero}</p>
                <span className="text-xs tracking-widest uppercase text-zinc-500 mt-2 border border-zinc-600 px-2 py-0.5 inline-block w-fit">
                  {foto.categoria}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox — foto ampliada al hacer clic */}
      {fotoAbierta && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6"
          onClick={() => setFotoAbierta(null)}
        >
          <div
            className="relative max-w-2xl w-full"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setFotoAbierta(null)}
              className="absolute -top-10 right-0 text-zinc-400 hover:text-white text-sm tracking-widest uppercase"
            >
              Cerrar ✕
            </button>
            <img
              src={fotoAbierta.url}
              alt={fotoAbierta.alt}
              className="w-full object-cover"
            />
            <div className="bg-zinc-900 border border-zinc-800 px-6 py-4 flex justify-between items-center">
              <div>
                <p className="font-semibold">{fotoAbierta.alt}</p>
                <p className="text-zinc-400 text-sm mt-0.5">por {fotoAbierta.barbero}</p>
              </div>
              <span className="text-xs tracking-widest uppercase text-zinc-500 border border-zinc-700 px-3 py-1">
                {fotoAbierta.categoria}
              </span>
            </div>
          </div>
        </div>
      )}

    </main>
  )
}