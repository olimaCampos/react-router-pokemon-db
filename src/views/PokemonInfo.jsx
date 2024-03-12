import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import PokeCard from "../components/PokeCard"
import { Button } from "react-bootstrap"


const PokemonInfo = () => {
  const [pokeInfo, setPokeInfo] = useState({})
  const [isReady, setIsReady] = useState(false)
  const navigate = useNavigate()
  const { name } = useParams()

  const handleClick = () => {
    navigate('/pokemons')
  }

  const getPokeInfo = async () => {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`
    try {
      const response = await fetch(url)
      const data = await response.json()
      setPokeInfo(data)
      setIsReady(true)
    } catch(error) {
      console.log('Error al consultar la API', error);
    }
  }

  useEffect(() => {
    getPokeInfo()
  }, [])

  return (
    <div className="d-flex flex-column align-items-center mt-5 gap-3">
      {isReady ? (
        <>
          <PokeCard pokemon={pokeInfo}/>
          <Button variant="dark" onClick={handleClick}>Volver</Button>
        </>
      ) : (
      <h3>Cargando...</h3>
      )}
    </div>
  )
  
}

export default PokemonInfo