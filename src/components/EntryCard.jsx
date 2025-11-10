import Type from "./Type";
const EntryCard =({name='Missing',entryNum=-1,types=["unknown","unknown"],sprite="src/assets/MissingNo.png"}) =>{
    return (
        <div className=" flex h-auto w-auto p-1 m-1 shadow-2xl rounded-2xl  bg-white">
            <div className="border h-40 w-40 m-1 rounded-2xl">
                <img src={sprite} alt="Who's that pokemon?" className="h-full w-full object-contain" />
            </div>
            <div className=" border h-auto w-auto center rounded-xl p-2 m-1">
                <h1 className="text-2xl">{name}</h1>
                <h3 className="text-xl">No. {entryNum}</h3>
                <div className="m-2 flex gap-1 ">
                    {types.map(type => <Type type={`${type}`}></Type>)}
                </div>
            </div>
        </div>
    );
}
//"normal".charAt(0).toUpperCase()+"normal".slice(1)
export default EntryCard;