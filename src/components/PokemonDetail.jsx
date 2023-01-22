import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import pokemonLogo from "../assets/pokemon-logo.png";

const PokemonDetail = () => {
  const [pokemon, setPokemon] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then((res) => setPokemon(res.data));
  }, [id]);

//   console.log(pokemon);

  const setBgColorNormal = (value) =>{
    
    let type = value;
    switch(type){
      case "grass":
        return "#ABDAC6"
      case "fire":
        return "#E35825"
      case "water":
        return "#1479FB"
      case "bug":
        return "#62DB60"
      case "normal":
        return "#735259"
      case "rock":
        return "#7E7E7E"
      case "fighting":
        return "#F1613C"
      case "electric":
        return "#0C1395"
      case "poison":
        return "#5B3184"
      case "ghost":
        return "#323569"
      case "dark":
        return "#030706"
      case "dragon":
        return "#478A93"
      case "ice":
        return"#6FBEDF"
      default:
        return "#478A93"
    }
}

const setBgColorGradient = () =>{
    let type = pokemon.types?.[0].type.name

    switch (type) {
      case "grass":
        return "linear-gradient(178.92deg, #7EC6C5 0.92%, #ABDAC6 47.96%, #CAE099 99.08%)"
      case "fire":
        return "linear-gradient(176.37deg, #F96D6F -32.26%, #E35825 22.55%, #E8AE1B 125.72%)"
      case "water":
        return "linear-gradient(179.57deg, #133258 -70.14%, #1479FB 56.16%, #82B2F1 214.85%)"
      case "bug":
        return "linear-gradient(177.56deg, #62DB60 -58.92%, #3BB039 16.57%, #AAFFA8 209.53%)"
      case "normal":
        return "linear-gradient(181.51deg, #735259 -6.44%, #BC6B7C 121.95%, #7C3F4C 186.11%)"
      case "rock":
        return "linear-gradient(177.03deg, #7E7E7E -11.97%, #8D8D94 57.49%, #D3D3D3 135.64%)"
      case "fighting":
        return "linear-gradient(176.83deg, #96402A -8.78%, #F1613C 169.09%, #CB735D 242.33%)"
      case "electric":
        return "linear-gradient(179.75deg, #0C1395 -19.96%, #2B319B 43.67%, #7075D9 138.4%)"
      case "poison":
        return "linear-gradient(177.03deg, #5B3184 -11.97%, #A564E3 71.28%, #CE9BFF 135.64%)"
      case "ghost":
        return "linear-gradient(177.03deg, #323569 -11.97%, #454AA8 57.49%, #787DDA 135.64%)"
      case "dark":
        return "linear-gradient(177.03deg, #030706 -11.97%, #0D1211 57.49%, #5A5E5D 135.64%)"
      case "dragon":
        return "linear-gradient(179.75deg, #478A93 -19.96%, #56A4AE 43.67%, #A2BEC1 138.4%)"
      case "ice":
        return "linear-gradient(177.03deg, #6FBEDF -11.97%, #64CBF5 47.77%, #BDEBFE 136.72%)"

      default:
        return "linear-gradient(179.75deg, #478A93 -19.96%, #56A4AE 43.67%, #A2BEC1 138.4%)"
    }
}



  return (
    <main className="pokemon-detail">
      <header className="hero">
        <Link to="/pokemons"><img src={pokemonLogo} alt="" className="pokemon-logo" /></Link>
      </header>

      <section className="card-detail-container">
        <div className="card-detail">
          <article style={{background: setBgColorGradient()}} className="card-detail-img-container">
            <img
              src={pokemon.sprites?.other.dream_world.front_default}
              className="card-detail-img"
            />
          </article>

          <div className="card-detail-texts">
            <span className="card-id">#{pokemon.id}</span>

            <div className="name-style">
              <span></span>
              <h2 className="card-name">{pokemon.name}</h2>
              <span></span>
            </div>

            <div className="card-adjectives">
              <div className="card-statistic">
                <span className="card-caracterist">Peso</span>
                <span className="card-caracterist">{pokemon.weight}</span>
              </div>

              <div className="card-statistic">
                <span className="card-caracterist">Altura</span>
                <span className="card-caracterist">{pokemon.height}</span>
              </div>
            </div>

            <div className="card-caracteristics">
              <div className="types">
                <h2 className="card-name">Tipo</h2>
                <article className="all-types">
                  {pokemon.types?.map((type) => (
                    <p style={{backgroundColor: setBgColorNormal(type.type.name)}} className="card-pop" key={type.type.url}>
                      {type.type.name}
                    </p>
                  ))}
                </article>
              </div>

              <div className="skills">
                <h2 className="card-name">Habilidades</h2>
                <article className="all-types">
                  {pokemon.abilities?.map((skill) => (
                    <p
                      className="card-pop card-pop--skills"
                      key={skill.ability.url}
                    >
                      {skill.ability.name}
                    </p>
                  ))}
                </article>
              </div>
            </div>

            <div className="card-detail-stats">
              <h2 className="card-name">Estadisticas</h2>

              <div className="card-percent">
                {pokemon.stats?.map((stat) => (
                  <section  key={stat.stat.url} >
                    <article className="card-percent-text">
                      <p className="card-percent-title">{stat.stat.name}</p>
                      <p>{stat.base_stat} / 150</p>
                    </article>

                    <div className="card-bar-container">
                      <div style={{ width: `${stat.base_stat}%` }} className="card-bar"></div>
                    </div>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="card-movements">
        <h2 className="card-name">Movimientos</h2>
        <div className="movements-container">
            {
                pokemon.moves?.map(move => (
                    <span key={move.move.url} className="move">{move.move.name}</span>
                ))
            }
        </div>
      </section>
    </main>
  );
};

export default PokemonDetail;
