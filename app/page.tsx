import Image from 'next/image'
import PokemonLanding from './components/PokemonLanding'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start justify-between p-6 bg-gradient-to-r from-blue-400 to-cyan-500">
      <h1 className='text-5xl italic w-full mx-auto text-center underline underline-offset-4 decoration-amber-400'>Gotta cache {"'"}em all</h1>
      <PokemonLanding name='charizard'/>
    </main>
  )
}
