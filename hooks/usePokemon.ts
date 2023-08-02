import useSWR from 'swr'
import { getOnePokemon } from '@/lib/pokeApi'

// ! This hook is used to cache data among pages, eliminates duplicate api calls (also an error handler)
export default function (name: string) {

    const { data, isLoading } = useSWR(name, async () => {
        
        try {
            return await getOnePokemon(name)
        }
        catch (err: any) {
            if (err.response?.status === 404) return null
            else throw err
        }
    })

    return {
        pokemon: data,
        pokemonLoading: isLoading
    }

}
