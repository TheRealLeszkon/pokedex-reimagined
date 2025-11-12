import { useEffect, useState } from "react";
import EntryCard from "../components/EntryCard";
import SlotCard from "../components/SlotCard";
import Search from "../components/Search";
import Switch from "../components/Switch";
import Toast from "../components/Toast";
import pokeBanner from "../assets/poke-logo.png";
function App() {
  const API_BASE = "https://pokeapi.co/api/v2/";
  const limit = 1025;
  const [data, setData] = useState([]);
  const [shinyFilter, setShinyFilter] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const loadData = async () => {
    const res = await fetch(`${API_BASE}pokemon/?offset=0&limit=${limit}`);
    const json = await res.json();
    console.log("Fetched Data:");
    console.log(json.results);
    const pokeUrls = json.results;
    const pokeData = await Promise.all(
      pokeUrls.map(async (poke) => {
        const response = await fetch(poke.url);
        const pokeJson = await response.json();
        return pokeJson;
      })
    );
    console.log("Fetched Detailed Data:");
    console.log(pokeData);
    setData(pokeData);
  };
  useEffect(() => {
    loadData();
  }, [shinyFilter]);
  // setData(data.filter(poke => poke.types.))
  return (
    <div className="overflow-x-hidden ">
      <Switch
        shinyFilter={shinyFilter}
        setShinyFilter={setShinyFilter}
      ></Switch>
      <Toast shinyFilter={shinyFilter} text={"Enabled Shiny Mode!"}></Toast>
      <div className="w-full h-100  flex flex-col justify-center items-center p-10 ">
        <div className="w-90 h-auto p-0">
          <img src={pokeBanner} alt="" className="w-full h-full" />
        </div>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}></Search>
      </div>
      <div
        className="grid 
  grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 
  justify-items-center mx-auto
  gap-x-4 gap-y-2 sm:gap-x-5 sm:gap-y-3 md:gap-x-6 md:gap-y-4 lg:gap-x-4 lg:gap-y-3
  p-2 sm:p-4 md:p-6 
  bg-transparent w-fit"
      >
        {data.map((pokemon) => {
          return (
            <SlotCard
              key={pokemon.id}
              sprite={
                shinyFilter
                  ? pokemon.sprites.front_shiny
                  : pokemon.sprites.front_default
              }
              name={pokemon.name}
            ></SlotCard>
          );
        })}
      </div>
    </div>
  );
}

export default App;
