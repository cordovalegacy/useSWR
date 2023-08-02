"use client"

import usePokemon from '@/hooks/usePokemon'
import { getOnePokemon } from '@/lib/pokeApi'
import Image from 'next/image'
import Link from 'next/link'
import useSWR from 'swr'

const PokemonPage = ({ params: { pokemonName } }: { params: { pokemonName: string } }) => {
    
    const { data: pokemon, isLoading: pokemonLoading } = useSWR(pokemonName, getOnePokemon)
    console.log(pokemon)
    
    // const {pokemon, pokemonLoading} = usePokemon(pokemonName)

    return (
        <main className='w-full mx-auto flex flex-col items-center pt-10 gap-5 min-h-screen p-6 bg-gradient-to-r from-blue-400 to-cyan-500'>
            <Link href={'/'} className='font-bold text-white text-3xl underline underline-offset-8 decoration-black'>⬅️ Pokedex</Link>
            <p className='text-4xl text-red-600'>{pokemonLoading && '...Loading'}</p>
            {pokemon
                &&
                <div className='border-2 border-blue-800 shadow-lg shadow-black bg-amber-500 p-2 flex flex-col items-center justify-center'>
                    <p className='font-bold underline'>{pokemon.name.toUpperCase()}</p>
                    <Image
                        src={pokemon.sprites.other['official-artwork'].front_default}
                        width={300}
                        height={300}
                        alt={pokemon.name}
                    />
                    <div>
                        <strong>{pokemon.types.map((type) => type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)).join(", ")}</strong>
                    </div>
                    <div className='flex items-center justify-between gap-5'>
                        <strong>Height: {pokemon.height * 10}cm</strong>
                        <strong>Weight: {pokemon.weight / 10}kg</strong>
                    </div>
                </div>
            }
        </main>
    )
}

export default PokemonPage


// !Notes:
// ?pokemonName is just being passed in as an argument to getAllPokemon
// ?looks like this under the hood useSWR((pokemonName) => getAllPokemon(pokemonName))