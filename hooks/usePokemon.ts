"use client"

import useSWR from 'swr'
import { getOnePokemon } from '@/lib/pokeApi'

// ! This hook is used to cache data among pages, 
// ! eliminates duplicate api calls, also an error handler
export default function usePokemon(name: string) {

    const { data, isLoading } = useSWR(name, async(name) => {
        
        try {
            return await getOnePokemon(name)
        }
        catch (err: any) {
            console.log(err)
            if (err) return null
            else throw err
        }
    })

    return {
        pokemon: data,
        pokemonLoading: isLoading
    }

}
