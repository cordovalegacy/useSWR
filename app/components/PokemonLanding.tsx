"use client"

// !Packages
import Link from "next/link"
import { useSearchParams, useRouter } from 'next/navigation'
import useSWR from 'swr'
import { getAllPokemon } from "@/lib/pokeApi"

const PokemonLanding = ({ name }: { name: string }) => {

    const router = useRouter()
    const searchParams = useSearchParams()
    const page = parseInt(searchParams.get('page')?.toString() || "1")
    const { data, isLoading } = useSWR(["getAllPokemon", page], () => getAllPokemon(page))

    
    if(isLoading) return <p className="m-auto text-center text-4xl">...Loading</p>

    return (
        <div className='w-full mx-auto flex flex-wrap items-start min-h-screen p-16 bg-gradient-to-r from-blue-400 to-cyan-500 relative'>
            {
                data?.results.map((poke: any) => (
                    <div className='border-2 border-blue-800 shadow-lg shadow-black bg-amber-500 p-2 flex flex-col items-center justify-center'>
                        {isLoading && <p className="text-center text-white z-50">...Loading</p>}
                        <Link href={`/${poke.name}`}  key={poke.url}>
                            <p>{poke.name}</p>
                        </Link>
                    </div>
                ))
            }
            {data?.next &&
                <button onClick={() => router.push(`/?page=${page + 1}`)} className="fixed z-50 bottom-2 right-2 border-4 border-red-600 px-4 py-2 bg-amber-500 font-semibold text-gray-800">Next</button>
            }

            {data?.previous === null
                ? null
                : <button onClick={() => router.push(`/?page=${page - 1}`)} className="fixed z-50 bottom-2 left-2 border-4 border-red-600 px-4 py-2 bg-amber-500 font-semibold text-gray-800">Prev</button>}
        </div>
    )
}

export default PokemonLanding
