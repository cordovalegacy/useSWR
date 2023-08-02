
// !Get One
export const getOnePokemon = async(name: string) => {

    const delay = Math.random() * 2000
    await new Promise(res => setTimeout(res, delay))
    
    const query = `https://pokeapi.co/api/v2/pokemon/${name}`
    const results = await fetch(query)

    if(!results.ok) throw new Error("Something went wrong fetching one Pokemon")

    const data = await results.json()
    console.log("One Pokemon Data", data)
    return data as Pokemon
}

// !Get All (w/ pagination)
export const getAllPokemon = async(page: number) => {

    const delay = Math.random() * 2000
    await new Promise(res => setTimeout(res, delay))

    const pageSize = 12
    const query = `https://pokeapi.co/api/v2/pokemon/?limit=${pageSize}&offset=${pageSize * (page - 1)}`
    const results = await fetch(query)

    if(!results.ok) throw new Error("Something went wrong fetching all Pokemon")

    const data = await results.json()
    console.log("All Poke Data", data)
    return data as PokePage
}
