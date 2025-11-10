import { useEffect, useState } from 'react'
import './App.css'
import EntryCard from './components/EntryCard'
import SlotCard from './components/SlotCard';
import Search from './components/Search';
function App() {
  const API_BASE = 'https://pokeapi.co/api/v2/';
  const limit = 151;
  const [data,setData] = useState([]);
  const loadData = async () =>{
    const res = await fetch(`${API_BASE}pokemon/?offset=0&limit=${limit}`);
    const json = await res.json();
    console.log("Fetched Data:");
    console.log(json.results);
    const pokeUrls =json.results;
    const pokeData = await Promise.all(
      pokeUrls.map( async (poke) =>{
          const response =await fetch(poke.url);
          const pokeJson = await response.json();
          return pokeJson;
        }
      )
    )
    console.log("Fetched Detailed Data:");
    console.log(pokeData);
    setData(pokeData);
  }
  useEffect(
    ()=>{loadData()},[]
  );
  return (
      
      <div className='overflow-x-hidden '>
        
        <div className='w-full h-100  flex flex-col justify-center items-center p-10 '>
          <div className='w-90 h-auto p-0'>
          <img src="src/assets/poke-logo.png" alt=""  className='w-full h-full'/>
        </div>
          <Search></Search>
        </div>
        <div className="grid 
  grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 
  justify-items-center mx-auto
  gap-x-4 gap-y-2 sm:gap-x-5 sm:gap-y-3 md:gap-x-6 md:gap-y-4 lg:gap-x-4 lg:gap-y-3
  p-2 sm:p-4 md:p-6 
  bg-transparent w-fit">
          {data.map(pokemon =>{
            return (<SlotCard sprite={pokemon.sprites.front_default}></SlotCard>)
          })}
          
          
        </div>
      </div>
  )
}

export default App
