import React from "react";
import { useState } from "react";
import { useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeUserName } from "../store/slices/userName.slice";
import profesorOak from "../assets/profesor-oak.webp"

const InputName = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const [showAdvice, setShowAdvice] = useState(false)



  const clickButton = () => {

    if (inputValue !== "") {
     dispatch(changeUserName(inputValue));
     navigate("/pokemons");
    } else{
      setShowAdvice(true)
    }
  };



  return (
    <main className="input-name">
      
      <div className="main">
        <h1>Hola entrenador!</h1>
        <img className="main-img" src={profesorOak} alt="" />
      </div>

      <div className="input-container">
        <label htmlFor="name">Ingresa tu nombre para comenzar!</label>

        <div className="input-send">
          <input
            className="input-value"
            placeholder="Escribe tu nombre!"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            type="text"
            id="name"
          />
          <span onClick={clickButton}>
            <i className="bx bxs-send"></i>
          </span>
        </div>

        <span className="advice">
          {showAdvice
            ? "Tienes que ingresar tu nombre para poder continuar"
            : ""}
        </span>
      </div>
    </main>
  );
};

export default InputName;
