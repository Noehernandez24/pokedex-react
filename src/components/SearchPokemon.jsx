import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const SearchPokemon = () => {
    const [pokemons, setPokemons] = useState([])
    const [inputSearch, setInputSearch] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1279")
        .then(res => setPokemons(res.data.results))
    }, [])


    const alertError = () =>{
        Swal.fire("Pokemon no encontrado",`Verifica que el nombre este escrito correctamente`,"error")
    }

    const searchPokemon = () =>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${inputSearch.toLowerCase()}/`)
        .then(() => {
            navigate(`/pokemons/${inputSearch.toLowerCase()}`)
        })
        .catch(() => alertError())
    }

    const pokemonFilter = pokemons.filter(pokemon => pokemon.name?.startsWith(inputSearch.toLowerCase()))

    return (
        <>
            <div className="input-container-s">
                <input value={inputSearch} onChange={e => setInputSearch(e.target.value)} className='input-search' type="text" placeholder='Busca un pokemón' />
                <button onClick={searchPokemon} className='btn-search'>Buscar</button>
            </div>

            {
                inputSearch !== "" &&
                <div className="drop-down">
                {
                    pokemonFilter.map(pokemon => (
                        <p key={pokemon.url} onClick={() => navigate(`/pokemons/${pokemon.name}`)} className='pokemon-result'>{pokemon.name}</p>
                    ))
                }
                </div>
            }
           
          
        </>
    );
};

export default SearchPokemon;