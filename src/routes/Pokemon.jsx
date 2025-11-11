import { useParams, Link } from "react-router-dom";
import Profile from "../components/Profile";
import { useEffect, useState } from "react";

function Pokemon() {
  const { name } = useParams();
  const [pokeInfo, setpokeInfo] = useState({});
  const [desc, setDesc] = useState("No Description");

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
      let desc = await descRes.json();
      console.log(desc.flavor_text_entries[0].flavor_text);
      desc = desc.flavor_text_entries[0].flavor_text;
      setDesc(desc);
      setpokeInfo(json);
    } catch (error) {
      console.error("Error fetching Pokemon data:", error);
    }
  };

  useEffect(() => {
    load();
  }, [name]);

  if (!pokeInfo.id) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center  items-center flex-col-reverse min-h-screen">
      <Link to={"/"} className="text-amber-50 bg-gray-800 p-3 rounded-2xl">
        back
      </Link>

      <Profile
        name={pokeInfo.name}
        number={pokeInfo.id}
        img={pokeInfo.sprites.front_default}
        types={pokeInfo.types.map((type) => type.type.name)}
        abilities={pokeInfo.abilities.map((ability) => ability.ability.name)}
        weight={pokeInfo.weight}
        height={pokeInfo.height}
        desc={desc}
      ></Profile>
    </div>
  );
}

export default Pokemon;
