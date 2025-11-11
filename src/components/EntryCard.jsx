import Type from "./Type";
const EntryCard =({name='Missing',entryNum=-1,types=["unknown","unknown"],sprite="src/assets/MissingNo.png"}) =>{
    return (
        <div className="flex flex-col sm:flex-row h-fit w-fit p-2 m-2 
      rounded-2xl shadow-xl bg-white dark:bg-gray-800 
      dark:shadow-gray-900 border border-gray-200 dark:border-gray-700
      transition-all duration-300 hover:scale-[1.02]">
            <div className="h-32 w-32 sm:h-40 sm:w-40 m-2 rounded-2xl 
        flex justify-center items-center 
        bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
                <img src={sprite} alt="Who's that pokemon?" className="h-full w-full object-contain drop-shadow-md dark:drop-shadow-none" />
            </div>
            <div className="flex flex-col justify-center 
        p-2 m-1 rounded-xl border border-gray-200 dark:border-gray-700 
        text-gray-800 dark:text-gray-200 transition-all duration-300">
                <h1 className="ml-3 text-xl sm:text-2xl font-semibold">{name}</h1>
                <h3 className="ml-3 text-lg sm:text-xl text-gray-600 dark:text-gray-400">No. {entryNum}</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                    {types.map(type => <Type type={`${type}`}></Type>)}
                </div>
            </div>
        </div>
    );
}
//"normal".charAt(0).toUpperCase()+"normal".slice(1)
export default EntryCard;