import React, { useEffect, useState } from "react";
import PokemonCards from "./PokemonCards";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  //   const API = "https://pokeapi.co/api/v2/pokemon";
  const API = "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=1302";
  const fetchPokemon = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      console.log(data);

      const detailedPokemonData = data.results.map(async (curPokemon) => {
        const res = await fetch(curPokemon.url);
        const data = await res.json();
        return data;
      });

      const detailedResponse = await Promise.all(detailedPokemonData);

      setPokemon(detailedResponse);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  const searchPokemon = pokemon.filter((curPokemon) =>
    curPokemon.name.toLowerCase().includes(search.toLowerCase())
  );
  if (loading)
    return (
      <div className="grid place-items-center h-screen bg-green-300 text-3xl">
        <h1>Loading....</h1>
      </div>
    );
  if (error)
    return (
      <div className="grid place-items-center h-screen bg-green-300 text-3xl">
        <h1>Error:{error.message}</h1>
      </div>
    );
  return (
    <>
      <section className="bg-sky-50 h-full">
        <header className="text-center">
          <h1 className="text-4xl font-extrabold mt-2">Let's Catch Pokemon</h1>
        </header>
        <div className="text-center mt-5">
          <input
            className="border-b-2 border-green-300 h-10 w-full sm:w-72 md:w-80 lg:w-96 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300 transition-all duration-300 bg-white text-sm"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Pokemon"
          />
        </div>
        <div className="  m-5   ">
          <ul className="flex flex-wrap gap-10 justify-center">
            {searchPokemon.map((curPokemon) => {
              return (
                <PokemonCards key={curPokemon.id} pokemonData={curPokemon} />
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Pokemon;
