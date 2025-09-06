import { useEffect, useState } from "react";
import { getPokeData, getPokeName } from "../libs/Pokeapi";
import Button from "./Button";

export default function Main() {
  const [pokeData, setPokeData] = useState({
    species: {
      url: null,
      name: null,
      genus: null,
      number: null,
    },
    image: null,
  });
  const [err, setErr] = useState(null);
  const [num, setNum] = useState(null);
  const [bingoNum, setBingoNum] = useState([]);
  const [stockNum, setStockNum] = useState([]);

  useEffect(() => {
    const arr = Array.from({ length: 75 }, (_, i) => i + 1);
    setBingoNum(arr);
  }, []);

  const fetchData = async () => {
    const bingoLen = bingoNum.length;
    if (bingoLen === 0) return;
    const randomNum = Math.floor(Math.random() * bingoLen);
    const getNum = bingoNum[randomNum];
    setNum(getNum);
    setStockNum([...stockNum, getNum].sort((a, b) => a - b));
    try {
      const data = await getPokeData(getNum);
      const pokeName = await getPokeName(data.species.url);
      setPokeData({
        ...pokeData,
        species: {
          name: pokeName.names[0].name,
          genus: pokeName.genera[0].genus,
          number: pokeName.pokedex_numbers[0].entry_number,
        },
        image: data.sprites.other["official-artwork"].front_default,
      });
      const newArr = bingoNum.filter((item) => item !== Number(getNum));
      setBingoNum(newArr);
    } catch (err) {
      setErr(err.message);
    }
  };

  if (err) return <p>Error:{err}</p>;

  return (
    <div>
      <Button onClick={() => fetchData()} />
      {num !== null && <p>図鑑番号：{num}</p>}
      {pokeData.species.name !== null && (
        <div>
          <img src={pokeData.image} alt="image" />
          <p>名前：{pokeData.species.name}</p>
          <p>{pokeData.species.genus}</p>
          <div className="flex gap-5 flex-wrap m-auto p-3">
            {stockNum.map((data, num) => (
              <p
                key={num}
                className=" items-center p-3 text-white font-bold bg-red-600 border-4 border-black text-2xl w-15 text-center rounded-full"
              >
                {data}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
