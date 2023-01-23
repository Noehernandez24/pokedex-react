import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import pokedex from "../assets/pokedex.png";
import Pagination from "./Pagination";
import PokemonsCard from "./PokemonsCard";
import SearchPokemon from "./SearchPokemon";
import { useNavigate } from "react-router-dom";

const Pokemons = () => {
  const userName = useSelector((state) => state.userName);
  const [pokemons, setPokemons] = useState([]);
  const [types, setTypes] = useState([]);
  const navigate = useNavigate()
  // Pagination
  const postPerPage = useSelector(state => state.postPerPage);
  const [actualPage, setActualPage] = useState(1);
  const lastIndex = actualPage * postPerPage;
  const firtsIndex = lastIndex - postPerPage;
  const pagination = pokemons.slice(firtsIndex, lastIndex);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1279")
      .then((res) => {
        setPokemons(res.data.results)
      })

    axios.get("https://pokeapi.co/api/v2/type/")
      .then((res) => setTypes(res.data.results));
  }, []);

  const filterTypes = (e) => {
    setActualPage(1)
    axios.get(e.target.value)
    .then((res) => {
        if (e.target.value === "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1279") {
            setPokemons(res.data.results)
        } else{
            setPokemons(res.data.pokemon)

        }
    });
  };


//   console.log(pokemons);

  // console.log(types);

  return (
    <>
      <main className="pokemons">
        <header className="hero">
          <img className="pokedex-title" src={pokedex} alt="" />

          <div className="welcome-container">
          <h2 className="pokemons-welcome">
            <span>Bienvenido {userName}, </span> aqui podras encontrar tu
            pokemon favorito!
          </h2>

          <div className="hero-btns">
          <button onClick={() => navigate("/config")} className="config"><i className='bx bxs-cog bx-spin-hover'></i></button>
          </div>
          
          </div>

        </header>

        <div className="filter-and-input">
          <SearchPokemon />

          <select className="select" onChange={filterTypes}>
            <option className="option" value="https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1279">
              Todos los pokemones
            </option>
            {types.map((type) => (
              <option key={type.url} value={type.url}>
                {type.name}
              </option>
            ))}
          </select>
        </div>

        <section className="pokemons-card">
          {pagination?.map((pokemons) => (
            <PokemonsCard
              key={pokemons.url ? pokemons.url : pokemons.pokemon.url}
              url={pokemons.url ? pokemons.url : pokemons.pokemon.url}
            />
          ))}
        </section>
      </main>

      <footer>
        <Pagination postPerPage={postPerPage} totalPost={pokemons.length} setActualPage={setActualPage} actualPage={actualPage}/>
      </footer>
    </>
  );
};

export default Pokemons;
