export default function Data({ pokeData }) {
  return (
    <div className="m-auto">
      <div className="p-1">
        <p>◆{pokeData.species.name}</p>
      </div>
      <div className="flex justify-end w-[50vw] max-w-50">
        <img src={pokeData.image} alt="image" />
      </div>
    </div>
  );
}
