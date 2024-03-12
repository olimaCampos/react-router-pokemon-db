import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './views/Home'
import Pokemons from './views/Pokemons'
import NotFound from './views/NotFound'
import PokeProvider from './context/PokeContext'
import PokemonInfo from './views/PokemonInfo'



function App() {

  return (
    <PokeProvider>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/pokemons"
          element={<Pokemons />}
        />
        <Route
          path="/pokemons/:name"
          element={<PokemonInfo />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </PokeProvider>
  )
}

export default App
