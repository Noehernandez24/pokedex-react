import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import profesorOak from '../assets/profesor-oak.png'
import { changePostPerPage } from '../store/slices/postPerPage.slice';

const Config = () => {
    const [rangeValue, setRangeValue] = useState(5)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const applyChanges = () =>{
        dispatch(changePostPerPage(rangeValue))
        navigate("/pokemons")

    }


    return (
        <main className='config-container'>
            <section className="config-main">
                <h2 className='config-title'>Bienvenido entrenador!</h2>
                <img className='config-img' src={profesorOak} alt="" />
            </section>
            
            <section className='config-description'>
                <p>Configura cuantos pokemones quieres mostrar por pagina!</p>
            </section>

            <section className='config-input-container'>
                <input value={rangeValue} onChange={e => setRangeValue(e.target.value)} id='range' className='input-range' min={5} max={25} step={5} type="range" />
                <label htmlFor="range">{rangeValue}</label>
            </section>

            <button onClick={applyChanges} className='config-btn'>Aplicar</button>
        </main>
    );
};

export default Config;