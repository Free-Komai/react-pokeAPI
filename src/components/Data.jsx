export default function Data({ pokeData }) {
  return (
    <div>
      <img src={pokeData.image} alt="image" />
      <p>名前：{pokeData.species.name}</p>
      <p>{pokeData.species.genus}</p>
    </div>
  );
}
