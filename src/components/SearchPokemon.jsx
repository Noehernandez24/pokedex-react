import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const SearchPokemon = () => {
    const [inputSearch, setInputSearch] = useState("")
    const [pokemon, setPokemon] = useState({})
    const navigate = useNavigate()

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

  
    return (
        <>
            <div className="input-container-s">
                <input value={inputSearch} onChange={e => setInputSearch(e.target.value)} className='input-search' type="text" placeholder='Busca un pokemón' />
                <button onClick={searchPokemon} className='btn-search'>Buscar</button>
            </div>

          
        </>
    );
};

export default SearchPokemon;