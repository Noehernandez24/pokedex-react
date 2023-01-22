import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import InputName from './components/InputName'
import Pokemons from './components/Pokemons'
import PokemonDetail from './components/PokemonDetail'
import ProtectedRoutes from './components/ProtectedRoutes'
import Config from './components/Config'

function App() {
  const [count, setCount] = useState(0)

  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<InputName/>}/>
        

        <Route element={<ProtectedRoutes/>}>
          <Route path='/pokemons' element={<Pokemons/>}/>
          <Route path='/pokemons/:id' element={<PokemonDetail/>}/>
          <Route path='/config' element={<Config/>}/>
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
