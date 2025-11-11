import { Link } from "react-router-dom";
const SlotCard = ({
  sprite = "src/assets/MissingNo.png",
  name = "pikachu",
}) => {
  return (
    <Link to={`/pokemon/${name}`}>
      <div
        className="flex h-fit w-fit p-1 m-1 shadow-xl rounded-2xl 
    bg-white dark:bg-gray-800 dark:shadow-gray-900 transition-all duration-300"
      >
        <div
          className="border border-gray-200 dark:border-gray-700 
      h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 lg:h-28 lg:w-28 
      rounded-2xl flex justify-center items-center 
      bg-gray-50 dark:bg-gray-900"
        >
          <img
            src={sprite}
            alt="Who's that Pokémon?"
            className="h-full w-full object-contain drop-shadow-md dark:drop-shadow-none"
          />
        </div>
      </div>
    </Link>
  );
};

export default SlotCard;
