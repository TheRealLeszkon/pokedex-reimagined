import { useParams, Link } from "react-router-dom";
import Profile from "../components/Profile";
import { useEffect, useState } from "react";
import { getWeaknesses, getDescription } from "../utility";
import Switch from "../components/Switch";
function Pokemon() {
  const { name } = useParams();
  const [pokeInfo, setpokeInfo] = useState({});
  const [desc, setDesc] = useState("No Description");
  const [weakness, setWeakness] = useState([]);
  const [error, setError] = useState(null);
  const [shinyFilter, setShinyFilter] = useState(false);
  const load = async () => {
    try {
      const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const descRes = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${name}`
      );

      if (!data.ok) {
        throw new Error("Network response was not ok");
      }
      const json = await data.json();
      let desc = await getDescription(json.name);

      setDesc(desc);
      setpokeInfo(json);
      const weakness = await getWeaknesses(json.name);
      setWeakness(weakness);
    } catch (error) {
      console.error("Error fetching Pokemon data:", error);
      setError(error);
    }
  };

  useEffect(() => {
    load();
  }, [name, shinyFilter]);

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen flex-col">
        <h1 className="text-amber-50 bg-gray-800 p-3 w-fit rounded-2xl border border-amber-50">
          No Pokemon "{name}" Exists!
        </h1>
        <Profile></Profile>
        <Link to={"/"} className="text-amber-50 bg-gray-800 p-3 rounded-2xl">
          Return To Pokedex
        </Link>
      </div>
    );
  }
  if (!pokeInfo.id) {
    return (
      <div className="flex justify-center items-center min-h-screen dark:bg-gray-800 dark:text-amber-50">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center  items-center flex-col-reverse min-h-screen">
      <div className="flex justify-around">
        <div className="bg-gray-800 flex justify-center items-center p-4 mx-auto rounded-2xl">
          <Switch
            shinyFilter={shinyFilter}
            setShinyFilter={setShinyFilter}
          ></Switch>
        </div>
        <Link to={"/"} className="text-amber-50 bg-gray-800 p-3 rounded-2xl">
          back
        </Link>
      </div>

      <Profile
        name={pokeInfo.name}
        number={pokeInfo.id}
        img={
          shinyFilter
            ? pokeInfo.sprites.front_shiny
            : pokeInfo.sprites.front_default
        }
        types={pokeInfo.types.map((type) => type.type.name)}
        abilities={pokeInfo.abilities.map((ability) => ability.ability.name)}
        weight={pokeInfo.weight}
        height={pokeInfo.height}
        desc={desc}
        weakness={weakness}
      ></Profile>
    </div>
  );
}

export default Pokemon;
