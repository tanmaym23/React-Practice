import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Github() {
  const [results, setresults] = useState([]);
  const [isDialogActive, setDialogActive] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [blur, setBlur] = useState(false);

  const fetchdata = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
    const jsondata = await response.json();

    function fetchPokemonDetails(x) {
      x.forEach(async (item) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${item.name}/`
        );
        const jsondata = await res.json();
        setresults((prev) => [...prev, jsondata]);
      });
    }
    fetchPokemonDetails(jsondata.results);
  };

  useEffect(() => {
    fetchdata();
  }, []);
  console.log(results);

  const handleKnowMore = (pokemon) => {
    setSelectedPokemon(pokemon);
    setDialogActive(true);
    setBlur(true);
  };
  const handleClose = () => {
    setSelectedPokemon(null);
    setDialogActive(false);
    setBlur(false);
  };

  return (
    <div className="main">
      <h1>POKECHU</h1>
      <div className="main-container" id={blur ? "is-blur" : "not-blur"}>
        {results.map((item) => (
          <div className="container" key={item.name}>
            <h1>{item.name}</h1>
            {/* <p>{item.height}</p>
            <p>{item.weight}</p> */}
            <img
              src={item.sprites.other.dream_world.front_default}
              alt={item.name}
            />
            <button onClick={() => handleKnowMore(item)}>Know More</button>
          </div>
        ))}
      </div>
      <dialog className={isDialogActive ? "active" : "not-active"}>
        {selectedPokemon && (
          <div className="d-container">
            <img
              src={selectedPokemon.sprites.other.dream_world.front_default}
              alt={selectedPokemon.name}
            />
            <h2>{selectedPokemon.name}</h2>
            <p>Height: {selectedPokemon.height}</p>
            <p>Weight: {selectedPokemon.weight}</p>
            <button className="d-button" onClick={handleClose}>
              Close
            </button>
          </div>
        )}
      </dialog>
    </div>
  );
}

export default Github;
