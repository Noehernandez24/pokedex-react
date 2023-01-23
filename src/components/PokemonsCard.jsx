import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PokemonsCard = ({url, isDarkMode}) => {
    const [pokemon, setPokemon] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(url)
        .then(res => setPokemon(res.data))
    }, [])


    // Set background color card by its type

    const setBgColorNormal = () =>{
        let type = pokemon.types?.[0].type.name
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

    //set bg color gradient
    
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


    // return pokemon type

    const getPokemonType = () =>{
        if (pokemon.types?.[0] && pokemon.types?.[1]) {
            return (
                <>
                  <p className='card-type'>{pokemon.types?.[0].type.name} /</p>
                  <p className='card-type'>{pokemon.types?.[1].type.name}</p>
                </>
            )
        } else if (pokemon.types?.[0]) {
            return (
                <p className='card-type'>{pokemon.types?.[0].type.name}</p>
            )
        }
    }


    return (
        <div className='card' style={{background: setBgColorNormal()}} onClick={() => navigate(`/pokemons/${pokemon.id}`)}>
            <div className="card-info">
                {/* SECTION IMAGE CARD */}
                <article style={{background: setBgColorGradient()}} className="card-image">
                  <img className='card-img' src={pokemon.sprites?.other.dream_world.front_default} alt={pokemon.name} />
                </article>

                {/* INFORMATION */}
                <article style={isDarkMode ? {backgroundColor: "#151A1E"} : {backgroundColor: "#fff"}} className="card-texts">
                  <h2 style={{color: setBgColorNormal()}} className='card-title'>{pokemon.name}</h2>

                  <div className="card-types">
                    {getPokemonType()}
                  </div>

                  <p className='card-subtitle'>Tipo</p>
                  <hr className='card-line' />

                  <div className="card-stats">

                    <div className="card-statistic">
                        <span className='card-subtitle'>HP</span>
                        <span>{pokemon.stats?.[0].base_stat}</span>
                    </div>

                    <div className="card-statistic">
                        <span className='card-subtitle'>ATAQUE</span>
                        <span>{pokemon.stats?.[1].base_stat}</span>
                    </div>

                    <div className="card-statistic">
                        <span className='card-subtitle'>DEFENSA</span>
                        <span>{pokemon.stats?.[2].base_stat}</span>
                    </div>

                    <div className="card-statistic">
                        <span className='card-subtitle'>VELOCIDAD</span>
                        <span>{pokemon.stats?.[5].base_stat}</span>
                    </div>
                  </div>
                </article>
                
              

            </div>
        </div>
    );
};

export default PokemonsCard;