import { useEffect, useState } from "react";
import { getPokeData, getPokeName } from "../libs/Pokeapi";
import Button from "./Button";
import Ball from "./Ball";
import Data from "./Data";
import Stock from "./Stock";

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
    <div className="container">
      <div>
        <Button className="" fetchData={fetchData} />
      </div>
      <div className="flex justify-center items-start">
        {num !== null && <Ball num={num} size="big" />}
        {pokeData.species.name !== null && (
          <div>
            <Data pokeData={pokeData} />
          </div>
        )}
      </div>
      <div>
        <Stock stockNum={stockNum} />
      </div>
    </div>
  );
}
