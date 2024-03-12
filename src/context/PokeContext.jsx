import { createContext, useState, useEffect } from "react"

export const PokeContext = createContext()

const PokeProvider = ({children}) => {
  const [pokes, setPokes] = useState([])

  const getPokemon = () => {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=151'
    fetch(url)
    .then(response => response.json())
    .then(data => setPokes(data.results))
  }

  useEffect(() => {
    getPokemon()
  }, [])

  return (
    <PokeContext.Provider value={{pokes, setPokes}}>
      {children}
    </PokeContext.Provider>
  )
}

export default PokeProvider