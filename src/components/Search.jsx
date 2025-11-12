import searchIcon from "../assets/search-interface-symbol.png";
import { Link, useNavigate } from "react-router-dom";

function Search({ searchTerm = "Empty Search Box", setSearchTerm }) {
  const navigate = useNavigate();
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && searchTerm.trim() !== "") {
      e.preventDefault();
      navigate(`/pokemon/${searchTerm}`);
    }
  };
  return (
    <div className="relative w-full max-w-md mx-auto mt-6">
      <div
        className="flex items-center gap-3 
      bg-white/90 dark:bg-gray-800/90 backdrop-blur-md
      border border-gray-200 dark:border-gray-700 
      shadow-[0_0_20px_rgba(255,215,0,0.15)] dark:shadow-[0_0_20px_rgba(255,255,255,0.05)]
      rounded-2xl px-5 py-3 
      transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,215,0,0.25)] dark:hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] hover:scale-[1.02]"
      >
        <input
          type="text"
          placeholder="Search Pokémon..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 text-lg text-gray-700 dark:text-gray-200 
          bg-transparent outline-none placeholder-gray-400 dark:placeholder-gray-500 "
        />
        <Link
          to={
            searchTerm == ""
              ? "/pokemon/Empty Search Box"
              : `/pokemon/${searchTerm}`
          }
        >
          <img
            src={searchIcon}
            alt="Search"
            className="w-6 h-6 opacity-70 hover:opacity-100 transition-opacity duration-200 cursor-pointer dark:invert brightness-0"
          />
        </Link>
      </div>
    </div>
  );
}

export default Search;
