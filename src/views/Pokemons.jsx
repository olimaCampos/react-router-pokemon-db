import { useContext, useState } from "react"
import { PokeContext } from "../context/PokeContext"
import { useNavigate } from "react-router-dom"
import { Button } from "react-bootstrap"

const Pokemons = () => {
  const {pokes} = useContext(PokeContext)
  const [selectedPoke, setSelectedPoke] = useState('')
  const navigate = useNavigate()

  const handleChange = e => {
    const {value} = e.target
    setSelectedPoke(value)
  }

  const handleClick = () => {
    if(selectedPoke){
      navigate(`/pokemons/${selectedPoke}`)
    }
  }

  const formatName = nombre => {
    return nombre[0].toUpperCase() + nombre.slice(1)
  }

  return (
    <div className="d-flex flex-column align-items-center mt-5 gap-3">
      <h1>Selecciona un Pokemon</h1>
      <select onChange={handleChange} defaultValue="">
        <option value="" disabled>Pokemons</option>
        {pokes ?
        pokes.map((poke) => {
          const {name} = poke
          return (
            <option
              key={name}
              value={name}
            >
              {formatName(name)}
            </option>
          )
        } ) : (
          <option disabled>Cargando...</option>
        )}
      </select>
      <Button variant="dark" onClick={handleClick}>Ver detalles</Button>
    </div>
  )
}

export default Pokemons