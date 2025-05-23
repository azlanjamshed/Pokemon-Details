import React from "react";

const PokemonCards = ({ pokemonData }) => {
  return (
    <>
      <li className="w-full sm:w-64 md:w-72 border-2 border-green-300 rounded-2xl p-4 text-center flex flex-col gap-4 hover:shadow-2xl shadow-green-200 transition-all duration-300 hover:scale-105 cursor-pointer">
        <span className="flex justify-center items-center bg-green-100 rounded-full p-4">
          <img
            className="h-20 sm:h-24"
            src={pokemonData.sprites.other.dream_world.front_default}
            alt={pokemonData.name}
          />
        </span>

        <p className="bg-green-200 rounded px-2 py-1 text-sm font-medium inline-block mx-auto">
          {pokemonData.types.map((curType) => curType.type.name).join(", ")}
        </p>

        <h1 className="text-lg font-bold capitalize">{pokemonData.name}</h1>

        <div className="flex flex-wrap gap-3 justify-center text-xs sm:text-sm">
          <span className="bg-green-50 px-3 py-1 rounded-full">
            Height: <span className="font-bold">{pokemonData.height}</span>
          </span>
          <span className="bg-green-50 px-3 py-1 rounded-full">
            Weight: <span className="font-bold">{pokemonData.weight}</span>
          </span>
          <span className="bg-green-50 px-3 py-1 rounded-full">
            Speed:
            <span className="font-bold">{pokemonData.stats[5].base_stat}</span>
          </span>
        </div>

        <div className="flex flex-wrap gap-3 justify-center text-xs sm:text-sm">
          <span className="bg-green-50 px-3 py-1 rounded-full">
            Experience:
            <span className="font-bold">{pokemonData.base_experience}</span>
          </span>
          <span className="bg-green-50 px-3 py-1 rounded-full">
            Atack:
            <span className="font-bold">{pokemonData.stats[1].base_stat}</span>
          </span>
          <span className="bg-green-50 px-3 py-1 rounded-full">
            Abilities:
            <span className="font-bold">
              {pokemonData.abilities
                .map((abilityInfo) => abilityInfo.ability.name)
                .slice(0, 10)
                .join(",")}
            </span>
          </span>
        </div>
      </li>
    </>
  );
};

export default PokemonCards;
